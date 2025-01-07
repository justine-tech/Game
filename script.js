function clickable(value){
    document.getElementById("result").value += value;
}

function clears(){
    document.getElementById("result").value = "";
}

function equals(){
    let total = eval(document.getElementById("result").value);
    document.getElementById("result").value = total;
}

let clicker = 0;

function powers(){
clicker ++;
if(clicker == 1){
    alert("OFF");
    document.getElementById("result").value = "OFF";
    num1.disabled = true;
    num2.disabled = true;
    num3.disabled = true;
    num4.disabled = true;
    num5.disabled = true;
    num6.disabled = true;
    num7.disabled = true;
    num8.disabled = true;
    num9.disabled = true;
    numdot.disabled = true;
    num0.disabled = true;
    numeq.disabled = true;
    numplu.disabled = true;
    numdiv.disabled = true;
    numtimes.disabled = true;
    numminus.disabled = true;
 }
 else{
    document.getElementById("result").value = "";
    clicker--;
    clicker--;
    alert("ON");
    num1.disabled = false;
    num2.disabled = false;
    num3.disabled = false;
    num4.disabled = false;
    num5.disabled = false;
    num6.disabled = false;
    num7.disabled = false;
    num8.disabled = false;
    num9.disabled = false;
    numdot.disabled = false;
    num0.disabled = false;
    numeq.disabled = false;
    numplu.disabled = false;
    numdiv.disabled = false;
    numtimes.disabled = false;
    numminus.disabled = false;
 }

 
}
