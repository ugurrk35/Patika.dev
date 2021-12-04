let email="hakan@gmail.com"
let=firstName="hakan"
let lastName="yalcınkaya"
//string karakter sayısı
console.log(email.length)
//ilk karekteri bulmak
console.log(firstName[0])
console.log(firstName.charAt(0))
//büyük  har / küçük harf
firstName=firstName.toUpperCase()
console.log(firstName)

firstName=firstName.toLowerCase()
console.log(firstName)

// string içinde istediğimiz bilgiyi aramak yerini bulmak
console.log(email.search("@"))
console.log(email[5])

// belli bir yere kadar olanı alma

console.log(email.slice(3,12))

//domain bilgisi
let DOMAIN= email.slice(email.search("@")+1)
console.log(DOMAIN)

console.log(DOMAIN.slice(0,DOMAIN.indexOf('.')))//sadece gmail kısmını alamk

//istediğimiz kısım varmı

console.log(email.includes('@')) //@ işareti varsa true döner yoksa false


//ilk harfleri büyük yaomak
let fullName=`${firstName[0].toUpperCase}`