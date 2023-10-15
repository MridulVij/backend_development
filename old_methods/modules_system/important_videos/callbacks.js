function sum(a,b){
    console.log("Sum func is worked");
    return a+b;
}

function diff(a,b){
    return a-b;
}

function calc(fx,a,b){
    console.log("Calc func is worked");
    return fx(a,b);
}

console.log(calc(sum,10,20));
console.log(calc(diff,20,10));