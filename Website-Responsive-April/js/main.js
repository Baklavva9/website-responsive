
// function show() {
//     document.getElementById('sidebar').classList.toggle('active');
// }

function show() {
       document.getElementById('sidebar').style.left = "0px" ; 
       document.getElementById('main-content').style.display = "none" ;
}

function closeNav() {
    document.getElementById('sidebar').style.left = "-400px" ; 
    document.getElementById('main-content').style.display = "block" ;
}


// SIGN UP / LOGIN //


function openSignupbox() {
    document.getElementById('wrapper-signup').style.display = "block";
}

function closeSignupbox() {
    document.getElementById('wrapper-signup').style.display = "none";
}

function openLoginbox() {
    document.getElementById('wrapper-login').style.display = "block";
}

function closeLoginbox() {
    document.getElementById('wrapper-login').style.display = "none";
}







// $(document).ready(function(){
//          $("signup-close-btn").click(function(){
//         $("signup-box").animate({left: '400px'});
         
//     });
// });

// $(document).ready(function(){
//   $("close-btn").click(function(){
//         $(".sidebar").animate({left: '800px'});
//     });
// });

