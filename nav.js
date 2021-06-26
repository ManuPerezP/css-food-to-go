
const navList = document.querySelector("#Nav ul");

const navBtn = document.querySelector(".btn-nav");

navBtn.addEventListener("click",function(){

    if(navList.classList.contains("nav-phone_inactive")){
        navList.classList.remove("nav-phone_inactive");
        navList.classList.add("nav-phone_active");
    }else{
        navList.classList.add("nav-phone_inactive");
        navList.classList.remove("nav-phone_active");
    }

    const toggleNavBtn = document.querySelector("#Nav-btn i");

    if(toggleNavBtn.classList.contains('fa-bars')){
        toggleNavBtn.classList.remove('fa-bars');
        toggleNavBtn.classList.add('fa-times');
    }else{
        toggleNavBtn.classList.add('fa-bars');
        toggleNavBtn.classList.remove('fa-times');
    }
});