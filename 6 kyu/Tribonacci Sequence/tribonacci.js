/*

you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

*/

function tribonacci(signature,n){
    
    if(n == 0){return signature = []}

    let newn;

    if(n >3)  {
        for(let i=0; i < n-3; i++) {
    
            newn = signature[0+i] + signature[1+i] + signature[2+i];
            signature.push(newn);
        }     
    } else if (n < 3) {
        let vet = [];
        for(let i = 0; i < n; i++) {
            vet.push(signature[0+i])
        }
        return vet;
    }

    return signature;
} 

console.log(tribonacci([1,1,1],10));
console.log(tribonacci([1,0,0],10));
console.log(tribonacci([1,1,1],1));