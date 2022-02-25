let add= document.getElementById("add");
let subtract =document.getElementById("subtract");
let multi = document.getElementById("multi");
let division = document.getElementById("div");
let module = document.getElementById("modul");
let clear = document.getElementById("clear");

add.addEventListener("click", ()=>{
    let a = parseInt(document.getElementById("input-btn1").value);
    let b = parseInt(document.getElementById("input-btn2").value);
    let add = a+b;
    document.getElementById("result").value=`${a}+${b} = ${add}`;

});
subtract.addEventListener("click", ()=>{
    let a = parseInt(document.getElementById("input-btn1").value);
    let b = parseInt(document.getElementById("input-btn2").value);
    let subtraction = a-b;
    document.getElementById("result").value=`${a}-${b} = ${subtraction}`;

});
multi.addEventListener("click", ()=>{
    let a = parseInt(document.getElementById("input-btn1").value);
    let b = parseInt(document.getElementById("input-btn2").value);
    let multiplication = a*b;
    document.getElementById("result").value=`${a}*${b} = ${multiplication}`;

});
division.addEventListener("click", ()=>{
    let a = parseInt(document.getElementById("input-btn1").value);
    let b = parseInt(document.getElementById("input-btn2").value);
    let division = a/b;
    document.getElementById("result").value=`${a}/${b} = ${division}`;

});
module.addEventListener("click", ()=>{
    let a = parseInt(document.getElementById("input-btn1").value);
    let b = parseInt(document.getElementById("input-btn2").value);
    let modul = a%b;
    document.getElementById("result").value=`${a}%${b} = ${modul}`;

});
clear.addEventListener("click", ()=>{
    document.getElementById("input-btn1").value="";
    document.getElementById("input-btn2").value="";
    document.getElementById("result").value ="";
})