console.log("Connected")
let out = document.getElementById("out")
let btn = document.getElementById("btn")
let date = document.getElementById("date")
function showFact() {
    function gettingNum() {
        let num = Math.floor(Math.random() * (2021 - 1900) + 1900)
        return num
    }
    let nummber = gettingNum()
        let url = "https://numbersapi.p.rapidapi.com/" + nummber + "/year?json=true&fragment=true"
    fetch(url, {
        headers: {
            'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
            'x-rapidapi-key': 'bc3b3e67b0mshfd91f8ebabb9a2bp156b2ajsn2862db98eb22'
        }
    })
    
    .then(res=>res.json())
    .then(data =>{
        out.innerHTML = data.text
        date.innerHTML = "Year: " + data.number
    }) 
       
    
}

btn.addEventListener("click", showFact)

let num = Math.floor(Math.random() * (2021 - 1900) + 1900)
//console.log(num)