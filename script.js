$(document).ready(function(){

    const btn = $('.btn')
    btn.click(function(e){
        e.preventDefault()

        const main = $('.main')
        const firstname = $('#firstname').val()
        const lastname = $('#lastname').val()  
        const country= $('#country').val()
        const score = parseInt($('#score').val())

        const arr =[
            {firstname:"Ahmed", lastname:"Abdi", country:"Germany", score: 90,},
            {firstname:"Jenifer", lastname:"Wambui", country:"kenya", score: 76,},
            {firstname:"Deema", lastname:"Mohamed", country:"Palestine", score: 85,},
            {firstname:"Mathew", lastname:"John", country:"France",score: 64,}
        ]

        for(let i =0 ; i<arr.length; i++){

            const html = `
            <div class="card">
                <p>${arr[i].firstname} ${arr[i].lastname}</p>
                <p>${arr[i].country}</p>
                <p>${arr[i].score}</p>
            </div>`

            $(main).append(html)
        }

        const newObj = {
            firstname: firstname,
            lastname: lastname,
            country: country,
            score: score
        }

        arr.push(newObj)
        console.log(arr)

  })      
})