import React from 'react';
import "../assets/css/LoginForm.css";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";

function SignIn() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="form bg-white">
        <h1 className="text-login">Đăng nhập tài khoản</h1>
        <div className="mt-4">
          <p className="mb-2">Email</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="input-field"
          />
        </div>
        <div className="mt-4">
          <p className="mb-2">Mật khẩu</p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Mật khẩu"
            className="input-field"
          />
        </div>
        <div className="note mt-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="check" className="form-checkbox" />
            <span>Lưu tài khoản</span>
          </div>
          <a href="#" className="text-teal-700 hover:underline">Quên mật khẩu?</a>
        </div>
        <button className="btn-signin mt-6">Đăng nhập</button>
        <p className="text-center mt-4">
          Bạn chưa có tài khoản?{" "}
          <a href="#" className="text-teal-700 hover:underline">Đăng ký</a>
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <FaFacebook className="social-icon text-blue-600" />
          <FaGoogle className="social-icon text-red-600" />
          <FaLinkedin className="social-icon text-blue-500" />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
