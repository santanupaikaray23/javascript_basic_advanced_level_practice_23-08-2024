function sayHi(){
    console.log("Hi")
}
sayHi()

(function(){
    console.log("Hi")
}())

///////
Generator
/////////
function * loop(userInput){
    for(i=0;i<userInput;i++){
     yield i
    }
}
var data = loop(5)