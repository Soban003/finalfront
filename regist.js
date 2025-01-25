const baseApi = "http://localhost:8080/reg";
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var cpassword = document.getElementById("cpassword");

function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="* Enter Username";
        return false;
    }
    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="* Username atleast six letter's";
        return false;
    }
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="* Enter your Email";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="* Enter your Password";
        return false;
    }
    else if(document.Formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="* Password must be 6-digit";
        return false;
    }
    else if(document.Formfill.CPassword.value==""){
        document.getElementById("result").innerHTML="* Enter Confirm Password";
        return false;
    }
    else if(document.Formfill.CPassword.value!==document.Formfill.Password.value){
        document.getElementById("result").innerHTML="* Password doesn't matched ";
        return false;
    }
    else if(document.Formfill.Password.value==document.Formfill.CPassword.value){
        popup.classList.add("open-slide");
        return false;
    }
}

var popup=document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove("open-slide");
}

function clearData(){
    username.value=""
    email.value=""
    password.value=""
    cpassword.value=""
}

function addData(){
   var datas = {
    username:username.value,
    email:email.value,
    password:password.value
   }

   fetch(baseApi,{
          method: "POST",
          headers: {"content-type" : "application/json"},
          body: JSON.stringify(datas)
      })
      .then((response) => response.json())
      .then((res) => {
          console.log(res)
     
          //Reset table and Clear Input Values
          clearData() 
    })
}

