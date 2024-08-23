var > We are able to redeclare and reassign
var a = 10
undefined
> a
10
> var b = 23
undefined
> b
23
> var a = 34
undefined
> a
34
> var a > declare
var a > declare
Uncaught SyntaxError: Unexpected token '>'
> a = 10 > assignment

let > We can not redeclare but reassign
> let b = 20
Uncaught SyntaxError: Identifier 'b' has already been declared
> let c = 30
undefined
> let c = 35
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 45
45
> c = 50
50

const > We can not redeclare nor reassign
const c = 10
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 23
23
> const d = 40
undefined
> d = 50
Uncaught TypeError: Assignment to constant variable.
> const d = 45
Uncaught SyntaxError: Identifier 'd' has already been declared
> d = 60
Uncaught TypeError: Assignment to constant variable.
