function add(a,b,c,d){
    return a+b+c+d
}

var num = [1,2,3,4]

console.log(add(num))

num.map((data)=> {add(data)})

function add(a,b,c,d){
    return a+b+c+d
}
var num = [1,2,3,4]
add(...num)