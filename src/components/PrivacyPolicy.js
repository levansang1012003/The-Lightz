import React from 'react'
import './PrivacyPolicy.css'
import { useNavigate } from 'react-router-dom'

function PrivacyPolicy() {
  const navigate = useNavigate()
  return (
    <div className="privacy-policy-root">
      <div className="privacy-policy-card">
        <h1 className="privacy-title">Chính Sách Bảo Mật Thông Tin</h1>
        <div className="privacy-subtitle">Privacy Policy - THE LIGHTZ VN</div>
        <div className="privacy-version">
          Phiên bản: 1.0 - Cập nhật lần cuối: 26/06/2025
        </div>
        <p>
          Xin chào bạn! Chúng tôi – Đội ngũ phát triển <b>THE LIGHTZ VN</b>{' '}
          ("chúng tôi" hoặc "Nhà phát hành") – trân trọng cam kết bảo vệ dữ liệu
          cá nhân và tôn trọng quyền riêng tư của cộng đồng người chơi. Chính
          sách Bảo mật này giải thích cách chúng tôi thu thập, sử dụng, lưu trữ
          và chia sẻ thông tin khi bạn cài đặt, truy cập hoặc tương tác với trò
          chơi <b>THE LIGHTZ VN</b>, trang web, diễn đàn, kênh hỗ trợ và các
          dịch vụ liên quan (gọi chung là "Dịch vụ").
        </p>
        <p>
          Vui lòng đọc kỹ tài liệu này. Khi tiếp tục sử dụng Dịch vụ, bạn xác
          nhận rằng mình đã đọc, hiểu và đồng ý với các điều khoản dưới đây.
        </p>
        <h2>1. Mục đích &amp; Phạm vi thu thập</h2>
        <p>Chúng tôi thu thập thông tin nhằm:</p>
        <ul>
          <li>Cung cấp và duy trì hoạt động của trò chơi.</li>
          <li>Cải thiện chất lượng, hiệu suất và nội dung.</li>
          <li>
            Phát hiện, phòng chống gian lận, lỗi bảo mật hoặc vi phạm Điều khoản
            Sử dụng.
          </li>
          <li>Hỗ trợ khách hàng, xử lý yêu cầu, phản hồi thắc mắc.</li>
          <li>Gửi thông báo cập nhật, sự kiện, khuyến mãi (khi bạn đồng ý).</li>
          <li>
            Thực hiện nghĩa vụ pháp lý hoặc yêu cầu từ cơ quan có thẩm quyền.
          </li>
        </ul>
        <h2>2. Loại thông tin thu thập</h2>
        <table className="privacy-table">
          <thead>
            <tr>
              <th>Nhóm dữ liệu</th>
              <th>Bao gồm nhưng không giới hạn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Thông tin tài khoản</td>
              <td>
                Tên đăng nhập, địa chỉ email, mã định danh nội bộ, avatar, bạn
                bè giới thiệu
              </td>
            </tr>
            <tr>
              <td>Dữ liệu thiết bị &amp; kết nối</td>
              <td>
                Địa chỉ IP, loại thiết bị, hệ điều hành, cấu hình phần cứng, ID
                thiết bị, ngôn ngữ, múi giờ
              </td>
            </tr>
            <tr>
              <td>Thông tin thanh toán</td>
              <td>
                ID giao dịch, phương thức thanh toán, tổng giá trị (không lưu
                thông tin thẻ)
              </td>
            </tr>
            <tr>
              <td>Dữ liệu hoạt động trong game</td>
              <td>
                Nhân vật, cấp độ, vật phẩm, lịch sử trận đấu, nhật ký lỗi, hành
                vi vi phạm
              </td>
            </tr>
            <tr>
              <td>Trao đổi &amp; hỗ trợ</td>
              <td>Nội dung chat, email hỗ trợ, báo cáo sự cố</td>
            </tr>
            <tr>
              <td>Cookie &amp; công nghệ tương tự</td>
              <td>Mã cookie, pixel, beacon theo dõi hành vi duyệt web</td>
            </tr>
          </tbody>
        </table>
        <div className="privacy-warning">
          <span className="privacy-warning-icon">⚠️</span>{' '}
          <b>Trẻ em dưới 13 tuổi:</b> Chúng tôi không cố ý thu thập dữ liệu cá
          nhân của trẻ em. Nếu phát hiện dữ liệu của trẻ em chưa có sự đồng ý
          của phụ huynh/giám hộ, chúng tôi sẽ xóa ngay lập tức.
        </div>
        <h2>3. Phương thức thu thập</h2>
        <ul>
          <li>
            Bạn cung cấp trực tiếp khi đăng ký tài khoản, liên hệ hỗ trợ, tham
            gia sự kiện.
          </li>
          <li>
            Tự động qua client, server, SDK (ví dụ: crash report, anti‑cheat).
          </li>
          <li>
            Bên thứ ba (nhà cung cấp thanh toán, mạng xã hội) khi bạn liên kết
            tài khoản, mua vật phẩm.
          </li>
        </ul>
        <h2>4. Cách sử dụng thông tin</h2>
        <ul>
          <li>Kích hoạt &amp; xác thực tài khoản.</li>
          <li>Cập nhật tiến trình nhân vật, đồng bộ đa nền tảng.</li>
          <li>Phân tích thống kê, cân bằng gameplay.</li>
          <li>Cá nhân hóa trải nghiệm, đề xuất nội dung.</li>
          <li>
            Quảng bá sự kiện, ưu đãi – chỉ khi bạn đã bật tùy chọn nhận tin.
          </li>
          <li>
            Bảo vệ quyền lợi, tài sản, an toàn của người chơi và của chúng tôi.
          </li>
        </ul>
        <h2>5. Thời gian lưu trữ</h2>
        <p>Chúng tôi lưu trữ dữ liệu chỉ trong thời gian cần thiết:</p>
        <ul>
          <li>
            <b>Tài khoản:</b> cho đến khi bạn yêu cầu xoá và hết thời hạn lưu
            trữ bắt buộc (tối đa 30 ngày kể từ ngày yêu cầu).
          </li>
          <li>
            <b>Lịch sử giao dịch:</b> tối thiểu 10 năm theo Luật Kế toán Việt
            Nam.
          </li>
          <li>
            <b>Dữ liệu logs:</b> 90–180 ngày phục vụ điều tra lỗi &amp; bảo mật.
          </li>
        </ul>
        <h2>6. Chia sẻ thông tin với bên thứ ba</h2>
        <p>
          Chúng tôi <b style={{ color: '#ff4d4f' }}>không bán</b> dữ liệu cá
          nhân. Chỉ chia sẻ trong các trường hợp:
        </p>
        <ul>
          <li>
            Nhà thầu &amp; đối tác dịch vụ: máy chủ, thanh toán, email, phân
            tích.
          </li>
          <li>Cơ quan quản lý nhà nước: khi được yêu cầu hợp pháp.</li>
          <li>
            Sáp nhập, mua bán: chúng tôi sẽ thông báo trước và đảm bảo dữ liệu
            tiếp tục được bảo vệ.
          </li>
        </ul>
        <p>
          Tất cả bên nhận dữ liệu đều phải tuân thủ bảo mật và chỉ sử dụng cho
          mục đích được chỉ định.
        </p>
        <h2>7. Quyền của người chơi</h2>
        <p>
          Theo Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân và (nếu áp
          dụng) GDPR, bạn có quyền:
        </p>
        <ul>
          <li>
            <span className="privacy-blue">Truy cập</span> &amp; nhận bản sao dữ
            liệu.
          </li>
          <li>
            <span className="privacy-green">Chỉnh sửa</span> thông tin sai lệch.
          </li>
          <li>
            <span className="privacy-red">Xoá</span> hoặc yêu cầu hạn chế xử lý.
          </li>
          <li>
            <span className="privacy-orange">Phản đối</span> việc xử lý cho mục
            đích marketing.
          </li>
          <li>
            <span className="privacy-purple">Rút lại sự đồng ý</span> bất kỳ lúc
            nào (không ảnh hưởng tính hợp pháp trước đó).
          </li>
        </ul>
        <p>
          Bạn có thể gửi yêu cầu qua email hoặc trang hỗ trợ. Chúng tôi phản hồi
          trong tối đa 15 ngày làm việc.
        </p>
        <h2>8. Biện pháp bảo mật</h2>
        <ul>
          <li>Mã hoá dữ liệu truyền tải (TLS 1.3).</li>
          <li>Hash &amp; salting mật khẩu (bcrypt ≥12 rounds).</li>
          <li>Phân tách mạng, firewall, WAF, anti‑DDoS.</li>
          <li>Kiểm thử bảo mật định kỳ (pentest, bug‑bounty).</li>
          <li>Chính sách truy cập theo nguyên tắc tối thiểu (PoLP).</li>
        </ul>
        <h2>9. Cookie &amp; Công nghệ tương tự</h2>
        <p>
          Cookie giúp ghi nhớ tuỳ chọn, đo lường hiệu suất. Bạn có thể vô hiệu
          hoá cookie trong trình duyệt, song một số tính năng có thể không hoạt
          động đầy đủ.
        </p>
        <h2>10. Liên kết ngoài</h2>
        <p>
          Dịch vụ có thể chứa liên kết tới trang/ứng dụng của bên thứ ba. Chúng
          tôi không chịu trách nhiệm về nội dung hoặc chính sách bảo mật của họ.
          Hãy xem xét chính sách riêng trước khi cung cấp thông tin.
        </p>
        <h2>11. Thay đổi Chính sách</h2>
        <p>
          Chúng tôi có thể cập nhật Chính sách này định kỳ. Ngày hiệu lực mới sẽ
          được ghi rõ ở đầu tài liệu. Thay đổi quan trọng sẽ được thông báo qua
          email, thông báo trong game hoặc trên trang web chính thức.
        </p>
        <h2>12. Liên hệ</h2>
        <p>Mọi câu hỏi, yêu cầu về quyền riêng tư, vui lòng liên hệ:</p>
        <ul>
          <li>
            <b>Bộ phận Bảo mật Dữ liệu – THE LIGHTZ VN</b>
          </li>
          <li>
            <b>Email:</b> privacy@lz.m2gvn.com
          </li>
          <li>
            <b>Địa chỉ:</b> 9 Đ. số 9, Khu dân cư Kim Sơn, Quận 7, Hồ Chí Minh,
            Việt Nam
          </li>
          <li>
            <b>Hotline:</b> (+84) 828545322
          </li>
        </ul>
        <h3 style={{ marginTop: '2rem' }}>Lời cảm ơn</h3>
        <p>
          Cảm ơn bạn đã tin tưởng và đồng hành cùng <b>THE LIGHTZ VN!</b>
        </p>
        <button className="privacy-back-home-btn" onClick={() => navigate('/')}>
          Quay về trang chủ{' '}
        </button>
      </div>
    </div>
  )
}

export default PrivacyPolicy
