let price ="100"
let user="hakan"

console.log(price ==1)
console.log(price ==100)

//=== hem değeri hem türü eşitse

console.log("===: ",price === 1)
console.log("===: ",price === 100)


//eşit değilse  !=

console.log(user !="guest")


//< kğçğkse

console.log("price < 100", price < 100)

//<=Küçük veya eşitse
console.log("price <= 100", price <= 100)

// > Büyük
console.log("price > 200", price > 200)

// >= Büyük veya eşitse
console.log("price >= 100", price >= 100)


// && ve
price = 0
console.log( price > 0 && user != "guest" )

// || veya
console.log( price > 0 || user != "guest" )

// ! degil (tersi)
user = "guest"
price = 1
console.log( price > 0 && !user == "guest" )
