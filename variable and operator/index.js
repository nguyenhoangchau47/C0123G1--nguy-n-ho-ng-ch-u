function Addition() {
    let x = document.getElementById("number1").value; // lay du lieu input
    let y = document.getElementById("number2").value; // lay du lieu input

    let bienketqua;
    bienketqua = Number(x) + Number(y);
    document.getElementById("ketqua").innerHTML = bienketqua  // xuat output
}
function Subtraction() {
    let x = document.getElementById("number1").value; // lay du lieu input
    let y = document.getElementById("number2").value; // lay du lieu input
    let bienketqua;
    bienketqua = Number(x) - Number(y);
    document.getElementById("ketqua").innerHTML = bienketqua  // xuat output
}
function Multiplication() {
    let x = document.getElementById("number1").value; // lay du lieu input
    let y = document.getElementById("number2").value; // lay du lieu input
    let bienketqua;
    bienketqua = Number(x) * Number(y);
    document.getElementById("ketqua").innerHTML = bienketqua  // xuat output
}
function Divion() {
    let x = document.getElementById("number1").value; // lay du lieu input
    let y = document.getElementById("number2").value; // lay du lieu input
    let bienketqua;
    bienketqua = Number(x) / Number(y);
    document.getElementById("ketqua").innerHTML = bienketqua  // xuat output
}