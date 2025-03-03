let doitien = +prompt("1.VND-->USD\n2.USD-->VND");
if (doitien == 1) {
    let USD = Number(prompt("Mời bạn nhập số tiền USD là :"));
    let VND = USD * 23000;
    alert("Số tiền VNĐ tương ứng là : " + VND);
} else if (doitien == 2) {
    let VND = Number(prompt("Mời bạn nhập số tiền VNĐ là : "));
    let USD = VND / 23000;
    alert("Số tiền USD tương ứng là :" + USD.toFixed(2));
}