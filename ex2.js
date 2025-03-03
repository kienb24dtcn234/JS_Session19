let chucai = prompt("Mời bạn nhập để kiểm tra");
let number = chucai.indexOf("1")!==-1||chucai.indexOf("2")!==-1||chucai.indexOf("3")!==-1||chucai.indexOf("4")!==-1||chucai.indexOf("5")!==-1||chucai.indexOf("6")!==-1||chucai.indexOf("7")!==-1||chucai.indexOf("8")!==-1||chucai.indexOf("9")!==-1||chucai.indexOf("0")!==-1;
if (number == true) {
    alert("Không phải là chữ cái");
} else {
    alert("Kí tự "+chucai+" là chữ cái");
}