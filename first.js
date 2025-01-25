const baseApi = "https://valiant-curiosity-production-b699.up.railway.app/reg";
const offcanvas_body = document.getElementById("offcanvas_body");


function getData(){
    fetch(baseApi)
.then((response) => response.json())
.then((res)=> {
    // console.log(res);
   var backendData = "";
   res.map((dt)=>{
      console.log(dt);
      backendData =
      `<img style="width: 100%;" src="./electro images/profile offcanva image.webp" alt="">
              <p style="text-align: center;margin-top: 20px;">Hello ${dt.username}...!</p>
              <p style="text-align: center;margin-top: 20px;">Your mail is ${dt.email}</p>
              <p style="text-align: center;margin-top: 20px;">password : * ${dt.password} *</p>
              <div class="canva-divide">
                <div>
                 
<div class="three-body">
  <div class="three-body__dot"></div>
  <div class="three-body__dot"></div>
  <div class="three-body__dot"></div>
  </div>
                </div>
                <div>
                  <!-- From Uiverse.io by vinodjangid07 --> 
<a href="http://127.0.0.1:5500/regist.html" target="_blank" style="text-decoration: none;">
  <button class="button">
    <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
   Register
  </button>
</a>

                </div>
                <div>
                  <div class="three-body">
                    <div class="three-body__dot"></div>
                    <div class="three-body__dot"></div>
                    <div class="three-body__dot"></div>
                    </div>
                </div>
              </div>
      `;
      offcanvas_body.innerHTML = backendData;
   })    
})
}

getData();

function SendMail(){
  var params = {
    from_name: document.getElementById("con_name").value,
    email: document.getElementById("con_email").value,
    message: document.getElementById("con_message").value
  }
  emailjs.send("service_vkoedv3","template_7yo99si",params).then(function(res){
    alert("Successfully Message Sended...! ");
    document.getElementById("con_name").value=""
    document.getElementById("con_email").value=""
    document.getElementById("con_message").value=""
  })
}

