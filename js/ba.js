console.log("This is ba.js");

let firstName = "Toni";
let lastName = "Vergara";
let Age = 20;
let fullName = firstName + " " + lastName;

let details = "Hi, my name is " + fullName + " " + "and I'm " + Age + " " + "years old and I'm learning javascript";
document.getElementById("student_message").innerHTML = details;

var phone1 = "9888995500"
var phone2 = "99087612366"
var phone3 = "876543123"
var pn1 = phone1.length

console.log(pn1 == 9 ? "perpek" : pn1 >= 9 ? "sigetalon" : "sige wag na");

function sumNumber(){
    let number1 = parseFloat(document.getElementById("num1").value);
    let number2 = parseFloat(document.getElementById("num2").value);
    let sum = number1 + number2;
    document.getElementById("result").textContent = "result: " + sum;
}

for(let i=0; i<=5;i++){
    console.log(i);
}

var count = 0;
while(count < 5){
    console.log(count);
    count++;
}

