let arr = JSON.parse(localStorage.getItem('leaderboard')) || [
    {firstname:"Ahmed", lastname:"Abdi", country:"Germany", score: 90,},
    {firstname:"Jenifer", lastname:"Wambui", country:"kenya", score: 76,},
    {firstname:"Deema", lastname:"Mohamed", country:"Palestine", score: 85,},
    {firstname:"Mathew", lastname:"John", country:"France",score: 64,}
];

const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
]

let now = new Date()
let hour = now.getHours()
let min = now.getMinutes()
min = min >= 10 ? min : '0' + min

let day = now.getDate()
let month = months[now.getMonth()];
let year = now.getFullYear()


function updateLeaderboard(){
    const content = $('.content');
    $(content).empty()

    for(let i =0 ; i<arr.length; i++){

        const html = `
        <div class="list">
            <ul class="lists">
                <li>${arr[i].firstname} ${arr[i].lastname}<span class='time'>${month.slice(0,3).toUpperCase()} ${day}, ${year} ${hour}:${min}</span></li>
                <li>${arr[i].country}</li>
                <li>${arr[i].score}</li>
                <li>
                    <button class="btn-list btn-delete" data-index="${i}"><img class="img" src="icons8-müll.svg" alt=""></button>
                    <button class="btn-list btn-add" data-index="${i}" >+5</button>
                    <button class="btn-list btn-subtract" data-index="${i}">-5</button></li>
            </ul>
        </div>`

        $(content).append(html)

    }

    $('.btn-delete').click(function(e){
        e.preventDefault()

        const index = $(this).data('index');

        arr.splice(index, 1);

        localStorage.setItem('leaderboard', JSON.stringify(arr))

        updateLeaderboard()
    })

    $('.btn-add').click(function(e){
        e.preventDefault()
        const index = $(this).data('index');

        arr[index].score += 5

        localStorage.setItem('leaderboard', JSON.stringify(arr))

        updateLeaderboard()
    })
    
    $('.btn-subtract').click(function(e){
        e.preventDefault()
        const index = $(this).data('index');

        arr[index].score -= 5

        localStorage.setItem('leaderboard', JSON.stringify(arr))

        updateLeaderboard()
    })
}

$(document).ready(function(){

    const main = $('.main')
    $(main).append("<p class='error-message' style='display: none;'>All field are required. </p>")

    const btn = $('.btn')
    btn.click(function(e){
        e.preventDefault()

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
        if(!firstname ||!lastname ||!country ||!score){
            $('.error-message').show();
        } else {
            arr.unshift(newObj)
            localStorage.setItem("leaderboard", JSON.stringify(arr))
        }


        updateLeaderboard();

  });
  
  updateLeaderboard();
})