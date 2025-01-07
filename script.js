function clickable(value) {
    document.getElementById("result").value += value;
}

function clears() {
    document.getElementById("result").value = "";
}

function equals() {
    try {
        let total = eval(document.getElementById("result").value);
        document.getElementById("result").value = total;
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}

let isOn = true; // tracks whether the calculator is on or off

function togglePower() {
    const resultElement = document.getElementById("result");
    const buttons = [
        'num1', 'num2', 'num3', 'num4', 'num5',
        'num6', 'num7', 'num8', 'num9', 'num0',
        'numdot', 'numeq', 'numplu', 'numdiv', 
        'numtimes', 'numminus'
    ];

    if (isOn) {
        alert("Turning OFF");
        resultElement.value = "OFF";
    } else {
        alert("Turning ON");
        resultElement.value = "";
    }

    // Toggle the button states
    isOn = !isOn;
    buttons.forEach(button => {
        document.getElementById(button).disabled = !isOn;
    });
}
