// Mô hình 3 khối bài 1
// Khối 1 - đầu vào (lương 1 ngày, số ngày làm )
// khối 2 - xử lý (tính lương = lương 1 ngày * số ngày làm)
// khối 3 - kết quả (bao nhieu ngày làm sẽ được mức lương tương ứng)
// Giải bài tập
// Bài 1
// hàm tính
var salaryPerday = 100000; //đầu vào
var day = 40; //đầu vào
var salary = 0; //gán đầu ra
salary = day * salaryPerday; // xử lý
// kết quả
console.log("Tổng lương là: " + salary + "đ"); //in kết quả lên console inspect
// //////////////////
////////////////////
// /////////////////

// Mô hình 3 khối bài 2
// Khối 1 - đầu vào (nhập 5 số thực)
// khối 2 - xử lý (gttb = (a + b + c + d + e)/5)
// khối 3 - kết quả (xuất ra gia trị trung bình)
// hàm tính
var a = 2; //đầu vào
var b = 3; //đầu vào
var c = 4; //đầu vào
var d = 5; //đầu vào
var e = 6; //đầu vào
//xử lý
//chuyển giá trị nhập sang  số
// a = parseInt(a);
// b = parseInt(b);
// c = parseInt(c);
// d = parseInt(d);
// e = parseInt(e);
//   tính trung bình
var gt_tb = (a + b + c + d + e) / 5;
// kết quả
console.log("Giá trị trung bình là: " + gt_tb); //in kết quả lên console inspect

//////////////////////////
//////////////////////////
// ///////////////////////

// Mô hình 3 khối bài 3
// Khối 1 - đầu vào (nhập số tiền USD )
// khối 2 - xử lý (Quy đổi USD sang VND bằng cách lấy usd * 23500)
// khối 3 - kết quả (xuất ra VND)
// hàm tính
var vnd = 23500; //đầu vào
var usd = 100; //đầu vào
//xử lý
var quydoi = 0; // gán
quydoi = vnd * usd; //nhân lại để quy đổi
//   kết quả
console.log("Giá trị quy đổi là:" + quydoi + "đ"); //in kết quả lên console inspect

// Mô hình 3 khối bài 4
// Khối 1 - đầu vào (nhập chiều dài và chiều rộng)
// khối 2 - xử lý (tính diện tích(dài * rộng) và chu vi((dài+rộng)*2))
// khối 3 - kết quả (xuất ra diện tích và chu vi)
// hàm tính
var cd = 7; //đầu vào chiều dài
var cr = 5; //đầu vào chiều rộng
// cd = parseInt(cd); //chuyển sang số interger
// cr = parseInt(cr); //chuyển sang số interger
// xử lý diện tích
var _dt = 0;
_dt = cd * cr;
// xuất diện tích
console.log("Diện tích hình chữ nhật là: " + _dt + "cm2");
//
// ///////////////////////////////
var cd = 7; //đầu vào chiều dài
var cr = 5; //đầu vào chiều rộng
//   cd = parseInt(cd); //chuyển sang số interger
//   cr = parseInt(cr); //chuyển sang số interger
// xử lý chu vi
var _cv = 0;
_cv = (cd + cr) * 2;
//xuất chu vi
console.log("Chu vi hình chữ nhật là: " + _cv + "cm");

//////////////////
//////////////////////
// ////////////
// Mô hình 3 khối bài 5
// Khối 1 - đầu vào (nhập số 2 chữ số bất kỳ)
// khối 2 - xử lý (tính tổng 2 số vừa nhập )
//          tách hàng đơn vị và hàng chục của số
//          sau đó lấy 2 số tách được cộng lại
// khối 3 - kết quả (xuất kết quả ra màn hình)
// hàm tính

var n = 45 // đầu vào 2 chữ số
//   xử lý
// n = parseInt(n); //chuyển dữ liệu nhập sang số
var n_dv = n % 10; // lấy số nhập chia lấy dư
n_dv = parseInt(n_dv); //chuyển dư sang số
var n_hc = n / 10; //lấy số nhập chia lấy nguyên
n_hc = parseInt(n_hc); //chuyển nguyên sang số
var _tong = n_hc + n_dv; //cộng phần dư và phần nguyên lại với nhau
////xuất tổng 2 ký số
console.log("Tổng hai ký số là: " + _tong);
