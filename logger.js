

function readLine() {
    return inputString[currentLine++];
}


function factorial(n){
	if(n>=1)
	   return n*factorial(n-1);
	else
	   return 1;
   
   } 
   function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}