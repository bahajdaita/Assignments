let emailField=document.getElementById("email-field")
let emailLabel=document.getElementById("email-label")
let emailError=document.getElementById("email-error")
let nameField=document.getElementById("name-field")
let nameLabel=document.getElementById("name-label")
let nameError=document.getElementById("name-error")
let phoneField=document.getElementById("phone-field")
let phoneLabel=document.getElementById("phone-label")
let phoneError=document.getElementById("phone-error")
let selectList=document.getElementById("selection")
let forms=document.getElementById("gform")
let table=document.getElementById("table")
let reviewing=document.getElementById("reviewing")
let cardInfo=document.getElementById("rems")
let text=document.getElementById("exampleFormControlTextarea1")
let add=document.getElementById("adding")
let switchh=document.getElementById("switching")
let isValid;



switchh.onclick=function() {

forms.style.display="flex"
table.style.display="none"
document.getElementById("cards").style.display="none"
this.style.display="none"

}
let userInformation = [];
class Person {

constructor(email,name,phone, gender,address) {

this.email=email,
this.name=name,
this.phone=phone,
this.gender=gender
this.address=address
}
}


function validateEmail(e) {

emailLabel.style.bottom="45px"

if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/ ))  {


emailField.style.borderBottomColor="red"

emailError.innerHTML="invalid email"


e.target.preventDefault()


return  false


}


emailField.style.borderBottomColor="green"
emailError.innerHTML=""

return true
}


function validateDouble(e) {

if(selectList.value===""  || text.value===""  ) {

alert("error")

e.target.preventDefault()


return false


}


return true

}


function clearr() {

emailField.value=""
nameField.value=""
phoneField.value=""
emailField.value=""
selectList.value=""
text.value=""

}
function validateName(e) {

    nameLabel.style.bottom="45px"
    
    if(!nameField.value.match(/^[a-z ,.'-]+$/i)   ) {
    
    
    nameField.style.borderBottomColor="red"
    
    nameError.innerHTML="Name should contain only letters"
    
e.target.preventDefault()


return false
    
    
    }
    
    
    nameField.style.borderBottomColor="green"
    nameError.innerHTML=""
    
            return true
    
    }
function validateNumber(e) {


    phoneLabel.style.bottom="45px"
    
    if(!phoneField.value.match(/^\d{10}$/)) {
    
    
    phoneField.style.borderBottomColor="red"
    
    phoneError.innerHTML="Number should contain at least 10 number  "
    
e.target.preventDefault()

    return false
    
    
    }
    
    
    phoneField.style.borderBottomColor="green"
    phoneError.innerHTML=""
    
    
return true



}
 
class Ui {
 

  

addUser(p) {
const list=document.getElementById("info")
const row=document.createElement("tr")
row.innerHTML=`


<td>${p.name}</td>
<td>${p.email}</td>
<td>${p.phone}</td>
<td>${p.gender}</td>
<td>${p.address}</td>




`
list.appendChild(row)
}

addCard(p)  {


cardInfo.innerHTML += `
<div class='col-xl-3 col-md-4 col-xs-12 card m-2'>
<div >${p.name}</div>
<div >${p.email}</div>
<div>${p.phone}</div>
<div >${p.gender}</div>
<div >${p.address}</div>
</div>


`
clearr()


}

}

document.getElementById("adding").addEventListener("click",(e)=> {

const email=emailField.value
const name=nameField.value
const phone=phoneField.value
const gender=selectList.value
const address=text.value
const p=new Person(email,name,phone,gender,address)
const ui=new Ui 






validateEmail()
validateName()
validateDouble()
validateNumber()

document.getElementById("indicator").style.display="block"
document.getElementById("indicator").style.backgroundColor="green"
document.getElementById("indicator").style.color="white"
document.getElementById("indicator").style.width="fit-content"
 document.getElementById("indicator").style.textAlign="center"
 document.getElementById("indicator").style.borderRadius="50px"

  
ui.addUser(p)
ui.addCard(p)


e.target.preventDefault()


 })


 reviewing.onclick=function() {


    document.getElementById("gform").style.display="none"
    document.getElementById("table").style.display="block"
    document.getElementById("cards").style.display="block"
    document.getElementById("switching").style.display="block"
    document.getElementById("indicator").style.display="none"
    
    
    
    }
