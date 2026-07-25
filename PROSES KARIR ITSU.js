/* ===========================================================
   MIMPI ITSU
   Premium Animation
   Part 1
=========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       LOADING SCREEN
    ========================================== */

    const loadingScreen = document.querySelector(".loading-screen");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loadingScreen.style.opacity = "0";

            loadingScreen.style.pointerEvents = "none";

            loadingScreen.style.transition = "1s";

            setTimeout(() => {

                loadingScreen.remove();

            },1000);

        },1000);

    });




    /* ==========================================
       CURSOR GLOW
    ========================================== */

    const cursor = document.querySelector(".cursor-glow");

    document.addEventListener("mousemove",(e)=>{

        cursor.style.left = e.clientX + "px";

        cursor.style.top = e.clientY + "px";

    });




    /* ==========================================
       NAVBAR EFFECT
    ========================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 40){

            navbar.style.background =
            "rgba(5,5,5,.80)";

            navbar.style.backdropFilter =
            "blur(30px)";

            navbar.style.borderBottom =
            "1px solid rgba(255,255,255,.08)";

        }

        else{

            navbar.style.background =
            "rgba(5,5,5,.45)";

            navbar.style.borderBottom =
            "1px solid transparent";

        }

    });




    /* ==========================================
       HERO FADE
    ========================================== */

    const hero = document.querySelector(".hero-container");

    hero.style.opacity = "0";

    hero.style.transform = "translateY(60px)";

    hero.style.transition = "1.2s";

    setTimeout(()=>{

        hero.style.opacity = "1";

        hero.style.transform = "translateY(0)";

    },400);




    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const revealElements = document.querySelectorAll(

        ".timeline-card,.skill-card,.future,.contact,.section-title"

    );

    const reveal = new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.style.opacity="1";

                    entry.target.style.transform="translateY(0)";

                    entry.target.style.transition="1s";

                }

            });

        },

        {

            threshold:.15

        }

    );



    revealElements.forEach(item=>{

        item.style.opacity="0";

        item.style.transform="translateY(80px)";

        reveal.observe(item);

    });




    /* ==========================================
       HERO PARALLAX
    ========================================== */

    window.addEventListener("scroll",()=>{

        let scroll = window.scrollY;

        hero.style.transform =

        "translateY(" + scroll * .15 + "px)";

    });




    /* ==========================================
       BUTTON HOVER
    ========================================== */

    document

    .querySelectorAll(

        ".button-primary,.button-secondary"

    )

    .forEach(button=>{

        button.addEventListener("mouseenter",()=>{

            button.style.transform="scale(1.05)";

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform="scale(1)";

        });

    });




    /* ==========================================
       FLOATING CARD
    ========================================== */

    document

    .querySelectorAll(

        ".hero-card"

    )

    .forEach(card=>{

        let rotate = 0;

        setInterval(()=>{

            rotate += .4;

            card.style.transform =

            `translateY(${

                Math.sin(

                    rotate/10

                )*8

            }px)`;

        },40);

    });

});