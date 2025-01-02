let rn = Math.floor(Math.random() * 50) + 1;
let attempts = 0;
document.getElementById("submit").onclick = function(){
    let num = document.getElementById("num").value;
    if (num>=51)
    {
        alert(`Please Enter The number 1-50 only`)
    }
    else{
        if(num > rn){
            attempts++;
            document.getElementById("result").innerHTML = `<p style='padding: 20px;'> Too High, Attempts: ${attempts}</p>`
        }
        else if(num < rn){
            attempts++;
            document.getElementById("result").innerHTML = `<p style='padding: 20px; box-shadow: 1px 10px 10px 10px gray;'> Too Low, Attempts: ${attempts}</p>`
        }
        else{
            attempts++;
            submit.disabled = true;
            document.getElementById("result").innerHTML = `<p style='padding: 20px;'> Correct, Attempts: ${attempts} <br> Reload To Play Again!</p>`
             }
        }
    }


