let mua = +prompt("Mời bạn nhập số tháng trong năm");
if ( mua <= 3) {
    alert("Mùa xuân");
} else if ( mua <= 6) {
    alert("Mùa hạ");
} else if ( mua <= 9) {
    alert("Mùa thu");
} else if ( mua <= 12) {
    alert("Mùa đông");
} else {
    alert("Tháng không hợp lệ");
}