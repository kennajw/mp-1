function add() {
    let first = document.getElementById("first-number").value;
    first = Number(first);

    let second = document.getElementById("second-number").value;
    second = Number(second);

    let result = first + second;

    if (result < 0) {
        document.getElementById("output").innerHTML = `<p>${result}</p>`;
        document.getElementById("output").style.visibility = "visible";
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").innerHTML = `<p>${result}</p>`;
        document.getElementById("output").style.visibility = "visible";
        document.getElementById("output").style.color = "black";
    }
}

function sub() {
    let first = document.getElementById("first-number").value;
    first = Number(first);

    let second = document.getElementById("second-number").value;
    second = Number(second);

    let result = first - second;

    if (result < 0) {
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML = `<p>${result}</p>`;
        document.getElementById("output").style.visibility = "visible";
    } else {
        document.getElementById("output").innerHTML = `<p>${result}</p>`;
        document.getElementById("output").style.visibility = "visible";
        document.getElementById("output").style.color = "black";
    }
}

function mult() {
    let first = document.getElementById("first-number").value;
    first = Number(first);

    let second = document.getElementById("second-number").value;
    second = Number(second);

    let result = first * second;

    if (result < 0) {
        document.getElementById("output").innerHTML = `<p>${result}</p>`;
        document.getElementById("output").style.visibility = "visible";
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").innerHTML = `<p>${result}</p>`;
        document.getElementById("output").style.visibility = "visible";
        document.getElementById("output").style.color = "black";
    }
}

function div() {
    let first = document.getElementById("first-number").value;
    first = Number(first);

    let second = document.getElementById("second-number").value;
    second = Number(second);

    let result = first / second;

    if (result < 0) {
        document.getElementById("output").innerHTML = `<p>${result}</p>`;
        document.getElementById("output").style.visibility = "visible";
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").innerHTML = `<p>${result}</p>`;
        document.getElementById("output").style.visibility = "visible";
        document.getElementById("output").style.color = "black";
    }
}

function pow() {
    let first = document.getElementById("first-number").value;
    first = Number(first);

    let second = document.getElementById("second-number").value;
    second = Number(second);

    let negative = false;
    let temp;

    if (second < 0) {
        negative = true;
        temp = second * -1;
    } else {
        temp = second;
    }

    let result = 1;

    for (let i = 0; i < temp; i++) {
        result = first * result;
    }

    if (negative) {
        result = 1 / result;
    }

    if (result < 0) {
        document.getElementById("output").innerHTML = `<p>${result}</p>`;
        document.getElementById("output").style.visibility = "visible";
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").innerHTML = `<p>${result}</p>`;
        document.getElementById("output").style.visibility = "visible";
        document.getElementById("output").style.color = "black";
    }
}

function c() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").style.visibility = "hidden";
}