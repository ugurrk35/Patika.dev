let fullName=prompt("lütfen adınızı giriniz")


let greeting =document.querySelector("#greeting")
greeting.innerHTML =`${greeting.innerHTML} <small>${fullName}</small>`