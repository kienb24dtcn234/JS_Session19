let months = +prompt("Mời bạn nhập số tháng là :");
if (0 < months && months <= 13) {
    if (months == 5) {
        document.write("Tháng 5 có 31 ngày ");
    } else if (months == 2) {
        document.write("Tháng 2 có 28 hoặc 29 ngày năm nhuận");
        
    }else if (months == 13) {
        document.write("Tháng không hợp lệ");
        
    }else if (months == 9) {
        document.write("Tháng 9 có 30 ngày");
        
    }
}