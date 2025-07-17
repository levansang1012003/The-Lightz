const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',      // hoặc IP của MySQL server
  user: 'root',           // tài khoản MySQL của bạn
  password: 'TuMaiZTri@311Bbnsu3124Xs', // mật khẩu MySQL
  database: 'gtax', // tên database
  charset: 'utf8mb4'
});

connection.connect((err) => {
  if (err) {
    console.error('Kết nối database thất bại:', err);
    return;
  }
  console.log('Kết nối database thành công!');
});

module.exports = connection; 