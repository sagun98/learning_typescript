function myfunction(param1: number, param2: number): void {
    return param1+param2;
}

myfunction (123,123);

function myfunc(...args:any[]){
    for (let arg of args){
        console.log(typeof(arg));
    }
}

myfunc(1,2,3,'a','b','c',true);