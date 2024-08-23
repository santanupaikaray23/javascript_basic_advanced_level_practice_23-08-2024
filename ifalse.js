if(condition){
    //do something
}else{
    //do something
}

//////////////

var a = 3455
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

var name = "Santanu"
if(name=="Priya"){
    console.log(`Hi ${name} you are admin`)
}else if(name=="Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}else{
    console.log(`Hi ${name} i don't know you`)
}

var role = "Admin"
var name = "John"
if(role == "Admin"){
    if(name =="Aakash"){
        console.log(`Hi ${name} you are ${role}`)
    }else{
        console.log(`hi ${name} you are unknown`)
    }

}else if(role=="User"){
    if(name=="Aakash"){
        console.log(`hi ${name} you are ${role}`)
    }else{
        console.log(`Hi ${name} you are unknown`)
    }
}

////////
//Any condition can match
var name  = "Santanu"
if(name == "Santanu" || name == "Paikaray"){
    console.log(`hi ${name} You are welcome`)
}

//both condition should match
var name = "Tina"
if(name=="Tina" && (role=="Admin" || role=="User")){
    console.log(`hi ${name} you are ${role}`)
}

var a = 1
if(a){
    console.log("hi")
}else{
    console.log("Bye")
}

var a = 34556
a%2==0

///
Ternary > Single Line if else
///
var a = 10
a>10?"Hi":"Bie"

var a = 23
a<34?a+1:a-1

var a = 10
a>10?"Hi":"Bie"
'Bie'
var a = 10
a>13?"Hi":"Bie"
'Bie'
var a = 11
a>10?"Hi":"Bie"
'Hi'
var a = 10
a==10?"Hi":"Bie"
'Hi'
var a = 10
undefined
a>10?a+1:a-1
9
a<10?a+1:a-1
9
var a = 23
a<34?a+1:a-1
24
var a = 23
a<22?a+1:a-1
22
var a = 23
a>34?a+1:a-1
22
var a = 23
a>22?a+1:a-1
24