$(document).ready(function(){
    const arr =[
        {firstname:"Ahmed", lastname:"Abdi", country:"Germany", score: 90,},
        {firstname:"Jenifer", lastname:"Wambui", country:"kenya", score: 76,},
        {firstname:"Deema", lastname:"Mohamed", country:"Palestine", score: 85,},
        {firstname:"Mathew", lastname:"John", country:"France",score: 64,}
    ]

    const btn = $('.btn')
    btn.click(function(e){
        e.preventDefault()

        const main = $('.main')
        const firstname = $('#firstname').val()
        const lastname = $('#lastname').val()  
        const country= $('#country').val()
        const score = parseInt($('#score').val())

        const newObj = {
            firstname: firstname,
            lastname: lastname,
            country: country,
            score: score
        }

        arr.push(newObj)
        console.log(arr)
    
        const html = `
            <div class="card">
                <p>${firstname} ${lastname}</p>
                <p>${country}</p>
                <p>${score}</p>
            </div>`

        $(main).append(html)

  })      
})