const url="http://data.fixer.io/api/latest?access_key=10b816fb390183d161cc164e53490b9c";

function convert(){
    var out = document.getElementById('out').ariaValueMax;
    var amount = document.getElementById('amount').ariaValueMax;
    //call api
    fetch(url, {method:"GET"})
    //return promise
    .then((res)=>console.log(res.json))
}