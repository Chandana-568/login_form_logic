// let userName="chandana";
// let password=12345;

// let userName="chandana";
// let password="1234";
// if(userName==="" || password===""){
//     console.log("please enter the details")
// }
// else if(userName==="chandana" && password== 12345){
//     console.log("login successful")
// }
// else{
//     console.log("Invalid login- credentials")
// }

// function login(userInput, userPass) {
//     let correctUser = "chandana";
//     let correctPass = "12345";

//     if (!userInput || !userPass) {
//         return "Please fill-in the details ⚠️";
//     }

//     else if (userInput === correctUser && userPass === correctPass) {
//         return "Login Successful ✅";
//     }

//     else {
//         return "Invalid Credentials ❌";
//     }
// }

// console.log(login("chandana", "12345"));




let attempts = 3;

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let user = document.getElementById("userName").value;
  let pass = document.getElementById("userPassword").value;

  let message = login(user, pass);

  let msgEl = document.getElementById("message");
  msgEl.innerText = message;
  msgEl.style.color = message.includes("Successful") ? "green" : "red";
});

function login(user, pass) {
  let correctUser = "chandana";
  let correctPass = "12345";

  if (attempts <= 0) {
    return "ACCOUNT LOCKED 🔒";
  }

  if (!user || !pass) {
    return "Please enter details ⚠️";
  }

  if (user === correctUser && pass === correctPass) {
    return "Login Successful ✅";
  } else {
    attempts--;
    return `Wrong credentials ❌ | Attempts left: ${attempts}`;
  }
}