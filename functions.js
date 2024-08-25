var a = 10
var b = 20
a+b
30
////////////////
function
method
arrow function
iffi
generator
////////////////////
//functions//
function add(a,b){
    return a+b
}
add(1,2)

function isEven(userInput){
    var out;
    if(userInput%2==0){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out
}
isEven(4)
'Number 4 is even'
isEven(5)
'Number 5 is odd'

function test(a,b){
    return a,b
}
test(1,2)
2
test("hi","Bye")
"Bye"
->One function can not return more than one value.

function test(a,b){
    var out = [a,b]
    return out
}

var city = ["London","Delhi","NewYork","Paris"]
var out=""
for(i=0;i<city.length;i++){
    out +=`${city[i]},`
}

var city = ["London","Delhi","NewYork","Paris"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}

function add(...args){
    console.log(args)
}

method > When function assign  to variable

///
function add(a,b){
    return a+b
}

var add = function(a,b){
    return a+b
}
add(1,2)

///arrow function///
let add = (a,b) => {return a+b}
add(1,3)
