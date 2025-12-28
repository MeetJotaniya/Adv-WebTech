let num1 = prompt("Please Enter number 1 : ");

let num2 = prompt("Please Enter number 2 : ");
let isPrime = true;

for(i = num1; i < num2; i++){
    for(j = 2; j < Math.sqrt(i); j++){
        if(j % 2 == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(i);
        
    }
}

