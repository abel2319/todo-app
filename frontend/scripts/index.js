let signupBtn = document.getElementById('signupBtn');
let signinBtn = document.getElementById('signinBtn');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title');
let lostPass = document.getElementById('lostPass');
let nameI = document.getElementById('nameInput');
let email = document.getElementById('emailInput');
let password = document.getElementById('passwordInput');

async function signinBtnClick(){
    if(!signinBtn.classList.contains('disabled')){
        if(email.value === '' || password.value === '')
            alert('Please! Fill all fields');
        else{
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
            {
                //alert(`${email.value}, ${password.value}`);
                await fetch("http://localhost:5001/api/users/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "email": email.value,
                        "password": password.value
                    }),
                }).then((data)=> data.json()).then(async (data) => {
                    console.log(data);
                    if (data.success){
                        //user.innerHTML = data.user.name;
                        window.localStorage.setItem("name", data.user.name);
                        window.localStorage.setItem("token", "Bearer " + data.token);
                        
                        window.location.href = "./pages/todo.html";
                    }
                    else alert("Internal server error. Please try again");
                });
            }
            else
                alert("You have entered an invalid email address!")
        }
    } else {
        nameField.style.maxHeight = "0";
        title.innerHTML = "Sign In";
        lostPass.style.display = "block";
        signupBtn.classList.add("disabled");
        signinBtn.classList.remove("disabled");
    }
}

async function signupBtnClick (){
    if(!signupBtn.classList.contains('disabled')){
        if(nameI.value === '' || email.value === '' || password.value === '')
            alert('Please! Fill all fields');
        else{
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
            {
                //alert(`${nameI.value}, ${email.value}, ${password.value}`);
                window.localStorage.name = nameI.value;

                const response = await fetch("http://localhost:5001/api/users/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "name": nameI.value,
                        "email": email.value,
                        "password": password.value
                    }),
                }).then((data)=> data.json()).then(async (data) => {
                    console.log(data);
                    if (data.success){
                        await fetch("http://localhost:5001/api/users/login", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                "email": email.value,
                                "password": password.value
                            }),
                        }).then((data)=> data.json()).then(async (data) => {
                            console.log(data);
                            if (data.success){
                                //user.innerHTML = data.user.name;
                                window.localStorage.setItem("name", data.user.name);
                                window.localStorage.setItem("token", "Bearer " + data.token);
                                
                                window.location.href = "./pages/todo.html";
                            }
                            else alert("Internal server error. Please try again");
                        });
                    }
                    else alert("Internal server error.");
                });
            }
            else
                alert("You have entered an invalid email address!")
        }
    } else {
        nameField.style.maxHeight = "60px";
        lostPass.style.display = "none";
        title.innerHTML = "Sign Up";
        signupBtn.classList.remove("disabled");
        signinBtn.classList.add("disabled");
    }
}


signinBtn.addEventListener('click', signinBtnClick)
signupBtn.addEventListener('click', signupBtnClick)

module.exports = {
    signinBtnClick,
    signupBtnClick
}