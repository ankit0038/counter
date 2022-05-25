var ans = 1;
var addFlag = 0;
function processData(fn) {
    return function(b){
        if(fn instanceof Function && fn.name == "add")
        {
            addFlag = 1;
            ans = 0;
        }
        if(fn instanceof Function && fn.name == "mul"){
            addFlag = 0;
            ans = 1;
        }
        if(addFlag){
            for(let i = 0; i < arguments.length; i++){
                ans += arguments[i];
            }
        }
        else{
            for(let i = 0; i < arguments.length; i++){
                ans *= arguments[i];
            }
        }
        if(b) return processData(ans);
        return fn;
    }
}

function add(a,b,c){
    return a + b + c;
}
function mul(a,b,c,d,e){
    return a*b*c*d*e;
}
console.log(processData(add)(1,2,3)()); // 6
console.log(processData(add)(1)(2)(2)()); // 5
console.log(processData(add)(2)(4, 3)()); // 9

console.log(processData(mul)(1)(1)(1)(1)(1)(1)()) // 1
console.log(processData(mul)(1)(1)(1)(1)(2, 1)()) // 2
console.log(processData(mul)(1,1)(1)(1)(2, 1)()) // 2
console.log(processData(mul)(1,1, 10)(1)(2, 1)()) // 20
console.log(processData(mul)(1,1, 10, 0)(2, 1)()) // 0