let price=100
let tax=0.18
let priceTax= price*tax
let total=price+priceTax
console.log("Fiyat:",price,"KDV oranı",tax,"KDV Tutarı:",priceTax,"Fiyat:",total)

//arttırma ve azaltma işlemleri:
let counter=320
counter=counter +1 //uzun yontem
counter +=1;
counter ++;
console.log(counter) 
counter --;
console.log(counter)

counter *=10;
console.log(counter)

counter /=2;
console.log(counter)



console.log((2+3)*10) //işlem önceliği


//mod(kalan)
//sayı tekmi çiftmi

console.log(15%2)//kalan sıfır ise çift 1 ise tek


console.log(8%8) //koli örneği


//üst alma
console.log(2*2*2*2)

console.log(2**4)

//aşağıya yuvarlama
console.log(Math.floor(1.7))


//yukarı yuvarlama

console.log(Math.ceil(1.9))

//yakına yuvarlama
console.log(Math.round(1.4))


let stringNumber="11"
console.log(stringNumber)
let newNumber=Number(stringNumber)
console.log(newNumber)