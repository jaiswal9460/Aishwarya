/* ===============================
   Floating Hearts
================================ */

const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = ["❤️","💖","💕","💗","💓","💞"][Math.floor(Math.random()*6)];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (20 + Math.random()*35) + "px";

    heart.style.animationDuration = (6 + Math.random()*6) + "s";

    heart.style.opacity = Math.random();

    heartsContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },12000);

}

setInterval(createHeart,300);



/* ===============================
   Scroll Reveal Animation
================================ */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".glass,.card,.photo-box,.final").forEach(el=>{

    observer.observe(el);

});



/* ===============================
   Typewriter Effect
================================ */

const paragraphs = document.querySelectorAll(".typing p");

paragraphs.forEach((p,index)=>{

    p.style.opacity="0";

    setTimeout(()=>{

        p.style.transition="1s";
        p.style.opacity="1";

    },500*index);

});



/* ===============================
   Button Ripple
================================ */

const btn=document.querySelector(".btn");

btn.addEventListener("mouseenter",()=>{

    btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

    btn.style.transform="scale(1)";

});



/* ===============================
   Random Sparkles
================================ */

function sparkle(){

    const s=document.createElement("div");

    s.innerHTML="✨";

    s.style.position="fixed";

    s.style.left=Math.random()*100+"vw";

    s.style.top=Math.random()*100+"vh";

    s.style.fontSize=(12+Math.random()*20)+"px";

    s.style.pointerEvents="none";

    s.style.opacity="1";

    s.style.transition="2s linear";

    document.body.appendChild(s);

    setTimeout(()=>{

        s.style.transform="translateY(-80px)";
        s.style.opacity="0";

    },50);

    setTimeout(()=>{

        s.remove();

    },2200);

}

setInterval(sparkle,700);



/* ===============================
   Heart Explosion on Click
================================ */

document.addEventListener("click",(e)=>{

    for(let i=0;i<12;i++){

        const h=document.createElement("div");

        h.innerHTML="❤️";

        h.style.position="fixed";

        h.style.left=e.clientX+"px";

        h.style.top=e.clientY+"px";

        h.style.pointerEvents="none";

        h.style.fontSize=(15+Math.random()*20)+"px";

        h.style.transition="1.5s ease-out";

        document.body.appendChild(h);

        const x=(Math.random()-0.5)*250;
        const y=(Math.random()-0.5)*250;

        setTimeout(()=>{

            h.style.transform=`translate(${x}px,${y}px) scale(0)`;

            h.style.opacity="0";

        },20);

        setTimeout(()=>{

            h.remove();

        },1600);

    }

});



/* ===============================
   Smooth Fade In
================================ */

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    document.body.style.transition="1.5s";

    setTimeout(()=>{

        document.body.style.opacity="1";

    },100);

});



/* ===============================
   Optional Background Music
================================ */

/*
1. Put a music.mp3 file in the same folder.

2. Uncomment the code below.

------------------------------------------------

const music = new Audio("music.mp3");

music.loop = true;

document.body.addEventListener("click",()=>{

    music.play();

},{once:true});

------------------------------------------------
*/



/* ===============================
   Console Message ❤️
================================ */

console.log(
"Happy Girlfriend Day ❤️"
);

console.log(
"Made with love for Aishwarya 🌸"
);