//Multiple condition and multiple output(ifelse).
//One condition and one output(ternary)
//One Condition and Multiple output(Switch)

var name = "Sidhanta"

switch(name){
    case 'Sidhanta':
        console.log(`Hi ${name}`)
        break;
        case 'Sipun':
            console.log(`Hi ${name}`)
            break;
            default:
                console.log(`Hi default case`)
}

var input = 2

switch(input%2){
    case 0:
        console.log(`Number is Even`)
break;
case 1:
    console.log(`Number is Odd`)
    break;
    default:
        console.log(`Hi default case`)


}