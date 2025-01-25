const baseApi = "https://valiant-curiosity-production-b699.up.railway.app/order";

var uname = document.getElementById("name");
var address = document.getElementById("address");
var mobile = document.getElementById("mobile");
var date = document.getElementById("date");
var city = document.getElementById("city");
var cflavour = document.getElementById("cflavour");
var cgram = document.getElementById("cgram");

function SendData(event){
   event.preventDefault();
   var data = {
       name : uname.value,
       address : address.value,
       mobile : mobile.value,
       date: date.value,
       city: city.value,
       cflavour: cflavour.value,
       cgram: cgram.value
   }

   fetch(baseApi,{
    method: "POST",
    headers: {"content-type" : "application/json"},
    body: JSON.stringify(data)
})
.then((response) => response.json())
.then((res) => {
    console.log(res)
    alert("Order Successfull !\n\nYour order will be delivered within 24 hours.");
    clrData() 
})
}


//Clear Data 
function clrData(){
    uname.value = ""
    address.value = ""
    mobile.value = ""
    date.value=""
    city.value = ""
    cflavour.value=""
    cgram.value=""
}

