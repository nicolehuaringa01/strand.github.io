/* ============================================
   STRAND
   Main JavaScript
============================================ */


/* ==========================
   Fade In Animation
========================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("fade");

    observer.observe(section);

});


/* ==========================
   Navbar Shadow
========================== */

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>30){

        navbar.style.boxShadow="0 10px 35px rgba(0,0,0,.06)";

    }

    else{

        navbar.style.boxShadow="none";

    }

});


/* ==========================
   Smooth Button Hover
========================== */

document.querySelectorAll(".primary-button,.secondary-button").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-3px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});


/* ==========================
   Fake Search
========================== */

const search=document.querySelector(".nav-search input");

if(search){

search.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

window.location.href="search.html";

}

});

}
