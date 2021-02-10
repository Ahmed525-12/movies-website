let movies = document.getElementById("Movies")

let searchByWord = document.getElementById("word")
let allMoviesArraay = [];
let allSearchArraay =[];
async function getMovie() {
    let respons = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c63367c4b159cbb9c8e4791d851cb8b8&language=en-US&page=1
    `)
    let responsJson = await respons.json();
    allMoviesArraay = responsJson.results;

    display()
}
let poster = "https://image.tmdb.org/t/p/w500"
function display() {
  
    let cartoona = "";
    for (let i = 0; i < allMoviesArraay.length; i++) {
        cartoona +=
            `
        <div class="col-md-4 mt-3">
<div class="movie position-relative overflow-hidden">
     <img class="w-100" src="${poster+allMoviesArraay[i].poster_path}" alt="">
      <div class="overlay position-absolute text-center pt-5">
          <h2 class="text-white">${allMoviesArraay[i].title}</h2>
          <p class="text-white">${allMoviesArraay[i].overview}</p>
          <h3 class="text-white">${allMoviesArraay[i].original_title}</h3>
          <span class="text-white">${allMoviesArraay[i].vote_average}</span>
      </div>
 </div>
</div>


        `

    }
    movies.innerHTML= cartoona
}


   



searchByWord.addEventListener("keyup",function(){
    newsearch(searchByWord.value)
})

async function newsearch(term) {
    let newsearchword = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=851c779bbf7b7391f7eb05148dd9d7eb&language=en-US&query=${term}&page=1&include_adult=false`)
    let searchJson = await newsearchword.json();
    allSearchArraay = searchJson.results;
    if (term=="") {
        display()
    }
    searchdisplay()

}
function searchdisplay() {
  
    let cartoona = "";
    for (let i = 0; i < allSearchArraay.length; i++) { 
        cartoona +=
            `
        <div class="col-md-4 mt-3">
<div class="movie position-relative overflow-hidden">
     <img class="w-100" src="${poster+allSearchArraay[i].poster_path}" alt="">
      <div class="overlay position-absolute text-center pt-5">
          <h2 class="text-white">${allSearchArraay[i].title}</h2>
          <p class="text-white">${allSearchArraay[i].overview}</p>
          <h3 class="text-white">${allSearchArraay[i].original_title}</h3>
          <span class="text-white">${allSearchArraay[i].vote_average}</span>
      </div>
 </div>
</div>


        `

    }
    movies.innerHTML= cartoona
}

$("#iconSide").click(function(){
    let boxWidth = $(".leftSide").outerWidth(true)
    if ($(".sideMenu").css("left")=="-175px") {
        $(".sideMenu").animate({left:`0px`},1000)
        $("#iconSide").removeClass("fa-list").addClass("fa-times")
        $("li").animate({paddingTop:"10px"},1000)
    } else {
        $(".sideMenu").animate({left:'-175px'},1000)
        $("#iconSide").removeClass("fa-times").addClass("fa-list")
        $("li").animate({paddingTop:"500px"},1000)
    }
})


// --------------------------------------------------up btn --------------------------------------------------------
$(window).scroll(function () {
    $('a').toggleClass('scrollh', $(this).scrollTop() > 50);
});

$(".demoupbtn").click(function(){
    $("body,html").animate({scrollTop:'0'},1000)
})

// --------------------------------------------------up btn --------------------------------------------------------
$("a[href^='#']").click(function(e) {
    let ax = $(e.target).attr("href");
    let ay = $(ax).offset().top;
    $("body,html").animate({scrollTop:ay},1000)
})

// --------------------------------------------------up btn --------------------------------------------------------
















newsearch()
getMovie()