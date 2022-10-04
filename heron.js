let a = 10
let b = 0
let i = 2
let j = (i + i / i) / 2

while (a > b) {
    j = (j + i / j) / 2
    console.log(j)
    b++
}

function doForm() {
    var data = new FormData();
    var input = document.getElementById("num");

    data.append("number", input.value);

    let num = data.get("number");
    if (!isNaN(num)) {
        var i = parseFloat(num);
        var j;

        for (j = (i + i / i) / 2; (j = j); ) {
            j = (j + i / j) / 2;
            console.log(j);
            wait(5000);
        }
        console.log(j);
    } else {
        return;
    }

    $("#calc")[0].reset();

    return false;
}