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




obj.asyncMethod(param1, param2, function(err, result){
    //do other things
});


function abc(parm1) {
    return def;
}

(parm1)=> {return def;}
(parm1)=> def;
parm => def;
