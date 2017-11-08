export class NguoiDung {
  ho_ten: string;
  ten_tai_khoan: string;
  mat_khau: any;
  re_mat_khau: any;
  ngay_sinh: number;
  noi_sinh: string;
  cmnd: string;
  email: string;
  so_dien_thoai: string;
  dia_chi: string;

  constructor(ho_ten, ten_tai_khoan, mat_khau, re_mat_khau, ngay_sinh, noi_sinh, cmnd, email, so_dien_thoai, dia_chi) {
    this.ho_ten = ho_ten;
    this.ten_tai_khoan = ten_tai_khoan;
    this.mat_khau = mat_khau;
    this.re_mat_khau = re_mat_khau;
    this.ngay_sinh = ngay_sinh;
    this.noi_sinh = noi_sinh;
    this.cmnd = cmnd;
    this.email = email;
    this.so_dien_thoai = so_dien_thoai;
    this.dia_chi = dia_chi;
  }
}
