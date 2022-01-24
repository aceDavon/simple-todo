let data = [{
    "id": 1,
    "first_name": "Valene",
    "last_name": "Hedling",
    "email": "vhedling0@hubpages.com",
    "gender": "Genderfluid"
  }, {
    "id": 2,
    "first_name": "Goldarina",
    "last_name": "Vamplew",
    "email": "gvamplew1@blinklist.com",
    "gender": "Genderqueer"
  }, {
    "id": 3,
    "first_name": "Almira",
    "last_name": "Brigstock",
    "email": "abrigstock2@naver.com",
    "gender": "Genderqueer"
  }, {
    "id": 4,
    "first_name": "Kristine",
    "last_name": "Monaghan",
    "email": "kmonaghan3@craigslist.org",
    "gender": "Genderfluid"
  }, {
    "id": 5,
    "first_name": "Jeddy",
    "last_name": "Revans",
    "email": "jrevans4@dion.ne.jp",
    "gender": "Agender"
  }, {
    "id": 6,
    "first_name": "Aeriell",
    "last_name": "Romaint",
    "email": "aromaint5@deviantart.com",
    "gender": "Bigender"
  }, {
    "id": 7,
    "first_name": "Gordan",
    "last_name": "Alves",
    "email": "galves6@cam.ac.uk",
    "gender": "Bigender"
  }, {
    "id": 8,
    "first_name": "Ailyn",
    "last_name": "Dingle",
    "email": "adingle7@163.com",
    "gender": "Agender"
  }, {
    "id": 9,
    "first_name": "Stanwood",
    "last_name": "Kilfether",
    "email": "skilfether8@ycombinator.com",
    "gender": "Genderfluid"
  }, {
    "id": 10,
    "first_name": "Ron",
    "last_name": "Tidbold",
    "email": "rtidbold9@samsung.com",
    "gender": "Polygender"
  }]
  
$(document).ready(function () {
    $(".box").fadeIn(5000, function(){
        $(".box").append('Animation finished.')
    .fadeOut(4500, function(){
        $(".box").append(' Yes, I am Back!')
    .slideDown(6800, function(){
        $(".box").mouseover(function () { 
            $(this).css({
                backgroundColor: 'green',
                color: 'white'
            })
        })
    })
    })

})

    $(data).each(function (i, element) { 
       let rows = 
       `
        <tr>
            <td>${element.first_name}</td>
            <td>${element.last_name}</td>
            <td>${element.email}</td>
            <td>${element.gender}</td>
        </tr>
       `  
       $('#tableBody').append(rows);
    });
})