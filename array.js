// Array is the collection of homogenious or hetrigenious data type

var a = [1,2,3,4,5](Array of Number)
var b = ['dfgg','fgtd','erty'](Array of String)
var c = [true,false,true,false](Array of Boolean)

var d = [3,4,'ertf',45,true,false,'ertf']

var city = ['London','Delhi','Paris','Newyork']

var city = ['London','Delhi','Paris','Newyork']
undefined
typeof(city)
'object'
city[0]
'London'
city[1]
'Delhi'
city.le
undefined
city.length
4
city.length-1
3
city.push('Amsterdam')
5
city
(5) ['London', 'Delhi', 'Paris', 'Newyork', 'Amsterdam']
city.pop()
'Amsterdam'
city.shift()
'London'
city()
VM411:1 Uncaught TypeError: city is not a function
    at <anonymous>:1:1
(anonymous) @ VM411:1Understand this error
city
(3) ['Delhi', 'Paris', 'Newyork']
city.unshift()
3
city.unshift('Paris')
4
city
(4) ['Paris', 'Delhi', 'Paris', 'Newyork']

push > Add in the end of the Array
unshift > Add in the begining of the Array
pop > Always remove the last value of the Array
shift > Always remove the first value of the Array

var city = ['London',2,45,'Delhi',false,'Paris',true,'Newyork']