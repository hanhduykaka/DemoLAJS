import { Component, OnInit } from "@angular/core";
import { Md5 } from "ts-md5/dist/md5";
import { NguoiDung } from "../../../models/nguoi_dung";

declare var $: any;

@Component({
  selector: "top_header",
  templateUrl: "./topheader.component.html"
})
export class TopHeaderComponent implements OnInit {
  ten_dang_nhap_hien_thi: string;
  isLogin: boolean;
  submited: boolean = false;
  nguoi_dung: NguoiDung = new NguoiDung("", "", "", "", "", "", "", "", "", "");
  nhap_lai_mat_khau: string = "";
  constructor() {
    this.ten_dang_nhap_hien_thi = localStorage.getItem("nguoi_dung_dang_nhap");
  }

  ngOnInit() {}

  gui_form(form_dang_ky: any) {
    if (form_dang_ky.form.valid) {
      this.submited = true;
      this.nguoi_dung.mat_khau = Md5.hashAsciiStr(this.nguoi_dung.mat_khau);
      this.nguoi_dung.re_mat_khau = Md5.hashAsciiStr(this.nguoi_dung.re_mat_khau);
      localStorage.setItem(
        "thong_tin_dang_ky",
        JSON.stringify(this.nguoi_dung)
      );
      //xu ly ajax lên server
    }
  }
  dang_nhap(ten_dang_nhap: any, mat_khau: any) {
    if (ten_dang_nhap.value == "hungnguyen" && mat_khau.value == "123456") {
      this.LoginSuccess(ten_dang_nhap.value);

      //localStorage.removeItem("abc")
    } else {
      let objthong_tin_dang_ky = localStorage.getItem("thong_tin_dang_ky");
      let thong_tin_dang_ky = JSON.parse(objthong_tin_dang_ky);

      if (
        thong_tin_dang_ky.ten_tai_khoan == ten_dang_nhap.value &&
        Md5.hashAsciiStr(mat_khau.value) == thong_tin_dang_ky.mat_khau
      ) {
        this.LoginSuccess(ten_dang_nhap.value);
      } else {
        alert("mật khẩu hoặc tài khoản không chính xác!");
      }
    }
  }
  fnLogOut() {
    this.LogOutSuccess();
  }
  LoginSuccess(ten_dang_nhap) {
    localStorage.setItem("nguoi_dung_dang_nhap", ten_dang_nhap);
    this.ten_dang_nhap_hien_thi = ten_dang_nhap;
    this.isLogin = true;
    $("#myModal .close").click();
  }
  LogOutSuccess() {
    localStorage.removeItem("nguoi_dung_dang_nhap");
    this.ten_dang_nhap_hien_thi = null;
  }
}
