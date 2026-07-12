/*=========================================
        TEAM ECO VISION
=========================================*/

// Smooth scrolling for navbar links

document.querySelectorAll('.nav-links a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({

                behavior:'smooth'

            });

        }

    });

});


// Active Navigation while scrolling

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});
// Navbar background on scroll

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.style.background="rgba(0,0,0,.88)";

        navbar.style.backdropFilter="blur(20px)";

    }

    else{

        navbar.style.background="rgba(0,0,0,.65)";

    }

});
// Scroll Reveal

const hiddenElements=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});
/*=========================================
        ANIMATED COUNTERS
=========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 80;

            const updateCounter = () => {

                if (count < target) {

                    count += speed;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target + "+";

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});
/*=========================================
        BACK TO TOP BUTTON
=========================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.classList.add("show");

    }

    else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/*=========================================
        PARTICLE BACKGROUND
=========================================*/

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = canvas.parentElement.offsetHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const particles=[];

const particleCount=80;

for(let i=0;i<particleCount;i++){

    particles.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        radius:Math.random()*2+1,

        dx:(Math.random()-0.5)*0.4,

        dy:(Math.random()-0.5)*0.4

    });

}

function animateParticles(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="#00E676";

    particles.forEach(p=>{

        ctx.beginPath();

        ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);

        ctx.fill();

        p.x+=p.dx;

        p.y+=p.dy;

        if(p.x<0 || p.x>canvas.width) p.dx*=-1;

        if(p.y<0 || p.y>canvas.height) p.dy*=-1;

    });

    requestAnimationFrame(animateParticles);

}

animateParticles();
/*=========================================
        HERO TYPING EFFECT
=========================================*/

const typingText = document.getElementById("typing-text");

const message = "Engineering the Future with AI, Robotics & Intelligent Automation";

let index = 0;

function typeWriter(){

    if(index < message.length){

        typingText.textContent += message.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

}

window.addEventListener("load",typeWriter);
/*=========================================
        MOBILE MENU
=========================================*/

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if(navMenu.classList.contains("active")){

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-times");

    }

    else{

        icon.classList.remove("fa-times");

        icon.classList.add("fa-bars");

    }

});

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

        menuToggle.querySelector("i").classList.remove("fa-times");

        menuToggle.querySelector("i").classList.add("fa-bars");

    });

});
/*=========================================
            GALLERY LIGHTBOX
=========================================*/

const galleryImages = document.querySelectorAll(".gallery-card img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");

const closeLightbox = document.querySelector(".close-lightbox");

galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("active");

        lightboxImage.src = img.src;

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});