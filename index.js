// const link01 = document.querySelector('.link');
// const burgerE1 = document.querySelector('.burger_btn');
let Topbutton = document.getElementById('Topbtn')

window.onscroll = function() {scrollFunction()};



//Show Btn menu
// burgerE1.addEventListener('click',() => {
//     link01.classList.toggle('link--open');
// })
// burgerE1.addEventListener('click',() =>{
//     burgerE1.classList.toggle('.burger_btn--open')
// })



//click button to top
function scrollFunction(){
    if(document.body.scrollTop >50 || document.dispatchEvent.scrollTop > 20){
        Topbutton.style.display ="block";
    }else{
        Topbutton.style.display ="none";
    }
}

function topFunction(){
    document.documentElement.scrollTop = 0;

}
function aboutFunction(){
    document.documentElement.scroll('Resum')
}



//click button to show burger button menu list
function myFunction() {
    var x = document.getElementById("btnmenulist");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }










// function showPassage(mypassage){
//     var  mypassage = "Welcome to My Web";
//     alert(mypassage);
//     function showPassage1 (mypassage1){
//         var mypassage1 = "我有一個兩年的計畫,這網頁也會隨著我不斷學習,會持續更新網頁 \n 2023. /9 /10"
//         alert(mypassage1)
//     }
//     showPassage1()
// }
// showPassage()