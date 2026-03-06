const password = document.getElementById("password");

password.addEventListener("keyup", checkPassword);

function checkPassword(){

let value = password.value;

let length = document.getElementById("length");
let upper = document.getElementById("upper");
let lower = document.getElementById("lower");
let number = document.getElementById("number");
let special = document.getElementById("special");

let strength = document.getElementById("strength");

let score = 0;

if(value.length >= 8){
length.classList.add("valid");
score++;
}else{
length.classList.remove("valid");
}

if(/[A-Z]/.test(value)){
upper.classList.add("valid");
score++;
}else{
upper.classList.remove("valid");
}

if(/[a-z]/.test(value)){
lower.classList.add("valid");
score++;
}else{
lower.classList.remove("valid");
}

if(/[0-9]/.test(value)){
number.classList.add("valid");
score++;
}else{
number.classList.remove("valid");
}

if(/[^A-Za-z0-9]/.test(value)){
special.classList.add("valid");
score++;
}else{
special.classList.remove("valid");
}

if(score <=2){
strength.textContent = "Weak Password";
strength.style.color = "red";
}
else if(score <=4){
strength.textContent = "Medium Password";
strength.style.color = "orange";
}
else{
strength.textContent = "Strong Password";
strength.style.color = "green";
}

}
