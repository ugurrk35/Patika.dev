let name =prompt("lütren adınızı giriniz?")
let myName =document.querySelector("#myName")
myName.innerHTML=`${myName.innerHTML} <h3 style="color:#f78501">${name}</h3>`