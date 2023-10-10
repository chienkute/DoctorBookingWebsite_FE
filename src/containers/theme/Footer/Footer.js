import { memo } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="footer__container">
        <footer class="text-center text-lg-start text-white footer">
          <div class="container p-4 pb-0">
            <section class="">
              <div class="d-flex">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">HIBACSI</h5>

                  <p>
                    HiBacsi mong muốn trở thành nền tảng thông tin y khoa hàng
                    đầu tại Việt Nam, giúp bạn đưa ra những quyết định đúng đắn
                    liên quan về chăm sóc sức khỏe và hỗ trợ bạn cải thiện chất
                    lượng cuộc sống
                  </p>
                </div>
                <div class="col-lg-2 col-md-6 mb-4 mb-md-0 ms-5">
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-white">
                        Chuyên đề sức khỏe
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                        Kiểm tra sức khỏe
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                        Tìm bệnh viện
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-2 col-md-6 mb-4 mb-md-0 ms-2">
                  <p className="footer_title">Thông tin</p>
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-white">
                        Điều khoản sử dụng
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                        Chính sách quyền riêng tư
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                        Chính sách quảng cáo và tài trợ
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                        Tiêu chuẩn cộng đồng
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-2 col-md-6 mb-4 mb-md-0 ms-3">
                  <p className="footer_title">Hi Health</p>
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-white">
                        Tự giới thiệu
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                        Ban điều hành
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                        Tuyển dụng
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                        Quảng cáo
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3">Đăng ký miễn phí</span>
                <button type="button" class="btn btn-outline-light btn-rounded">
                  <Link to={"/register"} className="text-white">
                    Đăng ký
                  </Link>
                </button>
              </p>
            </section>

            <hr class="mb-4" />

            <section class="mb-4 text-center">
              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i class="fab fa-facebook-f"></i>
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i class="fab fa-twitter"></i>
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i class="fab fa-google"></i>
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i class="fab fa-instagram"></i>
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i class="fab fa-github"></i>
              </a>
            </section>
          </div>
          <div class="text-center p-3">
            © 2023 Bản quyền các bài viết thuộc tập đoàn Hi Health Group.
          </div>
        </footer>
      </div>
    </div>
  );
};
export default memo(Footer);
