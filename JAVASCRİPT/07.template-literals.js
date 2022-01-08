let userName = "Hakan"
const DOMAIN= "KODLUYORUZ.ORG"
let email = userName +"@"+DOMAIN


let info=`Merhaba ${userName} sitemize hoşgeldin.Mail adresin ${email} mail adresinin uzunluğu: ${email.length}`

console.log(info)







const kitap = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610
  }
  const bookTable =
        `<table border><tbody><tr><td>Kitap</td><td>${kitap.ad}</td></tr><tr><td>Yazar</td><td>${kitap.yazar}</td></tr><tr><td>Tarih</td><td>${kitap.tarih}</td></tr> </tbody></table>`
  
        
  document.body.innerHTML = bookTable