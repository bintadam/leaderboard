let arr = JSON.parse(localStorage.getItem('leaderboard')) || [
    {firstname:"Ahmed", lastname:"Abdi", country:"Germany", score: 90,},
    {firstname:"Jenifer", lastname:"Wambui", country:"kenya", score: 76,},
    {firstname:"Deema", lastname:"Mohamed", country:"Palestine", score: 85,},
    {firstname:"Mathew", lastname:"John", country:"France",score: 64,}
];


function updateLeaderboard(){
    const content = $('.content');
    $(content).empty()

    for(let i =0 ; i<arr.length; i++){

        const html = `
        <div class="list">
            <ul class="lists">
                <li>${arr[i].firstname} ${arr[i].lastname}</li>
                <li>${arr[i].country}</li>
                <li>${arr[i].score}</li>
                <li>
                    <button class="btn-list btn-delete" data-index="${i}"><img class="img" src="icons8-müll.svg" alt=""></button>
                    <button class="btn-list btn-add">+5</button>
                    <button class="btn-list btn-subtract">-5</button></li>
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
        localStorage.setItem("leaderboard", JSON.stringify(arr))

        updateLeaderboard();

  });
  
  updateLeaderboard();
})