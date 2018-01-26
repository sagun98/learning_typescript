// var let const 

function f(shouldInitialise: Boolean){
    let x: number;
    if(shouldInitialise){
         x= 10;
    }
    return x;
}

console.log(f(true));
console.log(f(false));




// LET 
let MYNAME:string = "Sagun";

const MYNAME_1:string = "Sagun";