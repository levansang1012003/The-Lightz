const express = require('express');
const connection = require('./db');
const cors = require('cors');
const app = express();
const { useState } = require('react');

app.use(cors()); // Cho phép frontend truy cập
app.use(express.json()); // Cho phép nhận dữ liệu JSON từ frontend

let registeredCount = 0;

async function getPlayerCount() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT COUNT(*) AS count FROM players', (err, results) => {
      if (err) reject(err);
      resolve(results[0].count);
    });
  });
}

async function initializePlayerCount() {
  try {
    const count = await getPlayerCount();
    registeredCount = count;

  } catch (err) {
    console.error('Lỗi khi lấy số lượng:', err);
  }
}

initializePlayerCount()

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Lỗi truy vấn database' });
    }
    res.json(results);
  });
});


app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Vui lòng nhập đầy đủ thông tin' });
  }

  // Hàm tạo chuỗi ngẫu nhiên
  function generateRandomId(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  // Kiểm tra email đã tồn tại chưa
  connection.query('SELECT * FROM players WHERE gmail = ?', [email], (err, results) => {
    if (err) return res.status(500).json({ error: 'Lỗi truy vấn database' });
    if (results.length > 0) {
      return res.status(400).json({ error: 'Email đã được sử dụng' });
    }

    // Hàm tạo citizenid và staticid không trùng lặp
    function createUniqueIds(callback) {
      const citizenid = generateRandomId(8);
      const staticid = Math.floor(10000 + Math.random() * 90000); // 5 số ngẫu nhiên
      connection.query('SELECT * FROM players WHERE citizenid = ? OR staticid = ?', [citizenid, staticid], (err, results) => {
        if (err) return callback(err);
        if (results.length > 0) {
          // Nếu trùng, thử lại
          return createUniqueIds(callback);
        }
        callback(null, { citizenid, staticid });
      });
    }

    createUniqueIds((err, ids) => {
      if (err) return res.status(500).json({ error: 'Lỗi tạo mã định danh' });
      const { citizenid, staticid } = ids;
      //data json
      const charinfo = {
        firstname: 'Vô',
        lastname: 'Kỵ',
        birthdate: '3123-12-31',
        gender: 1, // Chuyển đổi gender từ string sang số
        nationality: "VN",
        user: username,
        password: password,
        gmail: email,
        discord: '1391121821944290314'
      };
      const charinfoJSON = JSON.stringify(charinfo);
      // Thêm user mới
      connection.query(
        'INSERT INTO players (user, password, gmail, discord, citizenid, staticid, charinfo) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [username, password, email, '1391124271944290314', citizenid, staticid, charinfoJSON],
        (err, result) => {
          if (err) {
            console.error('Lỗi khi tạo tài khoản:', err); // Log chi tiết lỗi
            return res.status(500).json({ error: 'Lỗi khi tạo tài khoản', details: err.sqlMessage });
          }
          registeredCount++;
          res.json({ message: 'Đăng ký thành công', userId: result.insertId });
        }
      );
    });
  });
});

// API đăng nhập
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Vui lòng nhập email và mật khẩu' });
  }
  connection.query(
    'SELECT * FROM players WHERE user = ? AND password = ?',
    [email, password],
    (err, results) => {
      if (err) return res.status(500).json({ error: 'Lỗi truy vấn database' });
      if (results.length === 0) {
        return res.status(401).json({ error: 'Email hoặc mật khẩu không đúng' });
      }
      res.json({ message: 'Đăng nhập thành công', user: results[0] });
    }
  );
});

// API trả về số lượng người chơi đã đăng ký
app.get('/player/count', (req, res) => {
    res.json({ count: registeredCount });
});

app.listen(3001, () => {
  console.log('Server backend chạy ở cổng 3001');
}); 