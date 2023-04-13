var number;
var result;

function ciclofor(){
    var numberElement = document.getElementById("n");
    number = numberElement.value;
    console.log(number);
    result = 1;
    for (var i=1; i<=number; i++){
        result *= i;
    }
    console.log(result);
    document.getElementById("for").innerHTML = result;
}

function ciclowhile(){
    var numberElement = document.getElementById("n");
    number = numberElement.value;
    console.log(number);
    result = 0;
    var i=1;
    while (i<=number){
        console.log(i);
        result +=i;
        i++;
    }
    console.log(result);
    document.getElementById("while").innerHTML = result;
}

function ciclodowhile(){
    var numberElement = document.getElementById("n");
    number = numberElement.value;
    console.log(number);
    result = 0;
    var i=1;
    var avg;
    do{
        console.log(i);
        result += i;
        i++;
    } while (i<=number);
    avg = result/number;
    console.log(result);
    document.getElementById("dowhile").innerHTML = avg;
}