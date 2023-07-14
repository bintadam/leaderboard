const arr =[
    {firstname:"Ahmed", lastname:"Abdi", country:"Germany", score: 90,},
    {firstname:"Jenifer", lastname:"Wambui", country:"kenya", score: 76,},
    {firstname:"Deema", lastname:"Mohamed", country:"Palestine", score: 85,},
    {firstname:"Mathew", lastname:"John", country:"France",score: 64,}
]

function updateLeaderboard(){
    const content = $('.content');

    for(let i =0 ; i<arr.length; i++){

        const html = `
        <div class="list">
            <ul class="lists">
                <li>${arr[i].firstname} ${arr[i].lastname}</li>
                <li>${arr[i].country}</li>
                <li>${arr[i].score}</li>
            </ul>
        </div>`

        $(content).append(html)
    }

}

$(document).ready(function(){

    const btn = $('.btn')
    btn.click(function(e){
        e.preventDefault()

        const main = $('.main')
        const firstname = $('#firstname').val()
        const lastname = $('#lastname').val()  
        const country= $('#country').val()
        const score = parseInt($('#number').val())

        const newObj = {
            firstname: firstname,
            lastname: lastname,
            country: country,
            score: score
        }

        arr.unshift(newObj)
        console.log(arr)

        $(main).empty()

  })      
})