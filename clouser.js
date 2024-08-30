//local scope
//global scope

var a = 10
function add(){
    var b = 20
    return a+b
}
console.log("a>>>",a)
console.log("b>>>",b)
console.log(add())

// Variable that can be access outside the curely bracket and inside also that is in global
// Variable that can only be access inside curly bracket that is local