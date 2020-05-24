function add(x, y){
    return(x + y)
}
console.log(add(2,4))

function multipy(a, b){
    let j = 0
   for(let i = 0; i < a; i +=1){
        j = add(b , j)
   }
    return j
}
console.log(multipy(5,3))

function power(c, d){
 let b = c  
for(let i = 1; i < d; i +=1){
    b = multipy(b , c)
}
return b
}
console.log (power(4 , 7))


function factorial(x){
let y = x
for(let i = x - 1; i > 0; i -=1 ){
y = multipy(i , y)
}
return y
} 
console.log(factorial(6));

function fibonacci(w){
 if(w == 1){
    return 0
 }
if (w == 2){
    return 1
}
let oneValueago = 1
let twoValueago = 0
let currentValue = 0

for(let i = 3; i <= w; i +=1 ){
    currentValue = oneValueago + twoValueago
    twoValueago = oneValueago
    oneValueago = currentValue

}
return currentValue
}
console.log(fibonacci(7));


