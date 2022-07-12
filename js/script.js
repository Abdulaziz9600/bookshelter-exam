let elFormLogin = $(".js-login-form");
let elLoginInput = $(".js-login-input");
let elPsswordInput = $(".js-password-input");

elFormLogin.addEventListener("submit",function (e) {
e.preventDefault();

let userLoginValue = elLoginInput.value.trim();
let userPasswordValue = elPsswordInput.value.trim()
 
fetch("https://reqres.in/api/login",{
  method:"POST",
  headers:{
    "Content-Type":"application/json",
  },
  body: JSON.stringify(
    {
      email: userLoginValue,
      password: userPasswordValue,
    }
  )
}).then((res) => res.json())
.then((data) => {
  if(data.token){
    window.localStorage.setItem("token",data.token);

    window.location.replace("home.html")
  }
})

})

