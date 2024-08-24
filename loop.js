for
while
do while
for of
for in
map
filter

///////////
for> generate series  of value or help to iterate over Array

for(var i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4
let a = 10
for(var i=0;i<5;i++){
    console.log(a+i)
}

var city = ["London","Delhi","NewYoke","Paris"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}

for(var i=0;i<5;i++){
    console.log(i)
}
VM549:3 0
VM549:3 1
VM549:3 2
VM549:3 3
VM549:3 4
undefined
let a = 10
for(var i=0;i<5;i++){
    console.log(a+i)
}
VM553:1 Uncaught SyntaxError: Identifier 'a' has already been declaredUnderstand this error
let d = 10
for(var i=0;i<5;i++){
    console.log(d+i)
}
VM571:3 10
VM571:3 11
VM571:3 12
VM571:3 13
VM571:3 14
undefined
var a = 10
for(var i=0;i<5;i++){
    console.log(a+i)
}
VM581:3 10
VM581:3 11
VM581:3 12
VM581:3 13
VM581:3 14
undefined
var city = ["London","Delhi","NewYoke","Paris"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}
VM585:3 London
VM585:3 Delhi
VM585:3 NewYoke
VM585:3 Paris
undefined