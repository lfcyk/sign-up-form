
const password = document.getElementById("password");
let confirm_password = document.getElementById("confirm_password");

const div = document.createElement('div');


const container = document.querySelector("form");
password.addEventListener("keyup", () => {
    if(!(password.value == confirm_password.value)) {
        div.textContent = "*password do not match";
        container.appendChild(div);

        password.style.border = "3px solid red";
        confirm_password.style.border = "3px solid red";
    } else {
        div.textContent = "";
        container.appendChild(div);

        password.style.border = "3px solid green";
        confirm_password.style.border = "3px solid green";
    }
})

confirm_password.addEventListener("keyup", () => {
    console.log(confirm_password.value)
    if(!(password.value == confirm_password.value)) {
        div.textContent = "*password do not match";
        container.appendChild(div);

        password.style.border = "3px solid red";
        confirm_password.style.border = "3px solid red";
    } else {
        div.textContent = "";
        container.appendChild(div);
        
        password.style.border = "3px solid green";
        confirm_password.style.border = "3px solid green";
    }
})
