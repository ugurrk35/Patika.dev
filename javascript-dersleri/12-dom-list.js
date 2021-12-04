let item =document.querySelector("ul#list>li:last-child")


let firstChild=document.querySelector("ul#list>li:first-child")
firstChild.innerHTML="ilk öğe değişti"

let ulDOM=document.querySelector("ul#list")
let liDOM=document.createElement('li')

liDOM.innerHTML="kendi oluşturdugumuz öğe"
ulDOM.append(liDOM)

ulDOM.prepend(liDOM)
