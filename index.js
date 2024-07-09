const inputForm = document.querySelector(".inputForm");
const passwordListener = inputForm.querySelector("#password");
const confirmPasswordListener = inputForm.querySelector("#confirmPassword");
let btnClick = inputForm.querySelector(".btn");

let passwordValid = false;
let passwordLength = false;

let d = document, [inputs, btn] = [
    d.querySelectorAll('[type="text"], [type="email"], [type="password"]'),
    d.querySelector(".btn")]
    btn.disabled = false;

for (i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", () => {
        let values = []
        inputs.forEach( v => values.push(v.value))
        btn.disabled = values.includes("")
    })
};

passwordListener.addEventListener("input", (event) => {
    if(validatePassword(passwordListener.value)) {
        passwordLength = true;
        passwordListener.classList.add("password-green");
        passwordListener.classList.remove("password-red");
        if(!confirmPasswordListener.value === "")
            document.querySelector(".btn").disabled = false;
        else {
            document.querySelector(".btn").disabled = true;
        }
        confirmPasswordListener.disabled = false;
    }
    else {
        passwordLength = false;
        confirmPasswordListener.value = "";
        document.querySelector(".btn").disabled = true;
        confirmPasswordListener.disabled = true;
        passwordListener.classList.add("password-red");
        passwordListener.classList.remove("password-green")
        confirmPasswordListener.classList.remove("password-green");
    }   
});

confirmPasswordListener.addEventListener("input", (event) => {
    if(confirmPasswordListener.value === passwordListener.value) {
        passwordValid = true;
        document.querySelector(".btn").disabled = false;
        confirmPasswordListener.classList.add("password-green");
        confirmPasswordListener.classList.remove("password-red");
    }  
    else {
        passwordValid = false;
        document.querySelector(".btn").disabled = true;
        confirmPasswordListener.classList.add("password-red");
        confirmPasswordListener.classList.remove("password-green");
    }
});

btnClick.addEventListener("mouseover", (event) => {
    const name = inputForm.querySelector("#name");
    const userName = inputForm.querySelector("#username");
    const email = inputForm.querySelector("#email");

    if(name.value === "" || username.value === "" || email.value === "") {
        window.alert("Make sure you fill in all the fields");
    }
    else if(!passwordLength) {
        window.alert("Password length need to be 8 characters minimum!");
    }
    else if(confirmPasswordListener.value !== passwordListener.value) {
        window.alert("Password does not match");
    }
});

inputForm.addEventListener("submit", (event) => {event.preventDefault();

    const name = inputForm.querySelector("#name");
    const userName = inputForm.querySelector("#username");
    const email = inputForm.querySelector("#email");
    const password = inputForm.querySelector("#password");
    const confirmPassword = inputForm.querySelector("#confirmPassword");

    const nameValue = name.value;
    const userNameValue = userName.value;
    const emailValue = email.value;
    let passwordValue = "";
    if(passwordValid)
        passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    const user = {
        name: nameValue,
        username: userNameValue,
        email: emailValue,
        password: passwordValue
    }
    
    console.log(user);

    window.location.reload();
});

function validatePassword(password) {
    if(password.length > 8) {
        return true;
    }
    else
        return false;
};
