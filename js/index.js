gsap.registerPlugin(ScrollTrigger);

gsap.to(".innovative__o",{
    scrollTrigger: {
        trigger: ".premPage",
        start: "top top",
        end: "+=200px", 
        scrub: true,  
        pin: true, 
        toggleActions: "restart pause reverse pause"
    },
    width: "8vw", 
});

const tl = gsap.timeline();
tl.to(".services__main__left__1",{translateX: "100%"}).to(".services__main__right__1",{translateX: "-100%"}).to(".services__main__left__2",{translateX: "100%"}).to(".services__main__right__2",{translateX: "-100%"}).to(".services__main__left__3",{translateX: "100%"}).to(".services__main__right__3",{translateX: "-100%"}).to(".services__main__left__4",{translateX: "100%"}).to(".services__main__right__4",{translateX: "-100%"});


ScrollTrigger.create({
    animation: tl,
    trigger: ".services",
    start: "50px top", 
    end:"+=1400px",  
    scrub: true,
    pin: true, 
    toogleActions: "restart pause reverse pause",
});
//anticipatePin: 1 si ça continue de scroll 

function test()
{
    console.log("test"); 
}

function ecosystemLeft2to1()
{
    const titre = document.getElementById("ecosystem_titre");
    const digitalArt = document.getElementById("digitalArt");
    const utility = document.getElementById("utility");
    const gamification = document.getElementById("gamification");
    const dao = document.getElementById("dao");
    const leftTriangle = document.getElementById("ecosystem_triangle_left");
    const rightTriangle = document.getElementById("ecosystem_triangle_right");

    titre.textContent = "Digital Art";
    digitalArt.style.left = "0%";
    utility.style.left = "0%";
    gamification.style.left = "0%";
    dao.style.left = "0%";
    leftTriangle.setAttribute("onclick", "");
    rightTriangle.setAttribute("onclick", "ecosystemRight1to2()");
    leftTriangle.style.cursor = "not-allowed"; 
}

function ecosystemLeft3to2()
{
    const titre = document.getElementById("ecosystem_titre");
    const digitalArt = document.getElementById("digitalArt");
    const utility = document.getElementById("utility");
    const gamification = document.getElementById("gamification");
    const dao = document.getElementById("dao");
    const leftTriangle = document.getElementById("ecosystem_triangle_left");
    const rightTriangle = document.getElementById("ecosystem_triangle_right");

    titre.textContent = "Utility";
    digitalArt.style.left = "-100%";
    utility.style.left = "-100%";
    gamification.style.left = "-100%";
    dao.style.left = "-100%";
    leftTriangle.setAttribute("onclick", "ecosystemLeft2to1()");
    rightTriangle.setAttribute("onclick", "ecosystemRight2to3()");

}

function ecosystemLeft4to3()
{
    const titre = document.getElementById("ecosystem_titre");
    const digitalArt = document.getElementById("digitalArt");
    const utility = document.getElementById("utility");
    const gamification = document.getElementById("gamification");
    const dao = document.getElementById("dao");
    const leftTriangle = document.getElementById("ecosystem_triangle_left");
    const rightTriangle = document.getElementById("ecosystem_triangle_right");

    titre.textContent = "Gamification";
    digitalArt.style.left = "-200%";
    utility.style.left = "-200%";
    gamification.style.left = "-200%";
    dao.style.left = "-200%";
    leftTriangle.setAttribute("onclick", "ecosystemLeft3to2()");
    rightTriangle.setAttribute("onclick", "ecosystemRight3to4()");
    rightTriangle.style.cursor = "pointer"; 
}

function ecosystemRight1to2()
{
    const titre = document.getElementById("ecosystem_titre");
    const digitalArt = document.getElementById("digitalArt");
    const utility = document.getElementById("utility");
    const gamification = document.getElementById("gamification");
    const dao = document.getElementById("dao");
    const leftTriangle = document.getElementById("ecosystem_triangle_left");
    const rightTriangle = document.getElementById("ecosystem_triangle_right");

    titre.textContent = "Utility";
    digitalArt.style.left = "-100%";
    utility.style.left = "-100%";
    gamification.style.left = "-100%";
    dao.style.left = "-100%";
    leftTriangle.setAttribute("onclick", "ecosystemLeft2to1()");
    rightTriangle.setAttribute("onclick", "ecosystemRight2to3()");
    leftTriangle.style.cursor = "pointer";
}

function ecosystemRight2to3()
{
    const titre = document.getElementById("ecosystem_titre");
    const digitalArt = document.getElementById("digitalArt");
    const utility = document.getElementById("utility");
    const gamification = document.getElementById("gamification");
    const dao = document.getElementById("dao");
    const leftTriangle = document.getElementById("ecosystem_triangle_left");
    const rightTriangle = document.getElementById("ecosystem_triangle_right");

    titre.textContent = "Gamification";
    digitalArt.style.left = "-200%";
    utility.style.left = "-200%";
    gamification.style.left = "-200%";
    dao.style.left = "-200%";
    leftTriangle.setAttribute("onclick", "ecosystemLeft3to2()");
    rightTriangle.setAttribute("onclick", "ecosystemRight3to4()");
}

function ecosystemRight3to4()
{
    const titre = document.getElementById("ecosystem_titre");
    const digitalArt = document.getElementById("digitalArt");
    const utility = document.getElementById("utility");
    const gamification = document.getElementById("gamification");
    const dao = document.getElementById("dao");
    const leftTriangle = document.getElementById("ecosystem_triangle_left");
    const rightTriangle = document.getElementById("ecosystem_triangle_right");

    titre.textContent = "DAO";
    digitalArt.style.left = "-300%";
    utility.style.left = "-300%";
    gamification.style.left = "-300%";
    dao.style.left = "-300%";
    leftTriangle.setAttribute("onclick", "ecosystemLeft4to3()");
    rightTriangle.setAttribute("onclick", "");
    rightTriangle.style.cursor = "not-allowed";
}



// gsap.to(".services__main__left__1",{
//     scrollTrigger: {
//         trigger: ".services",
//         start: "100px bottom",
//         end: "-100px top",  
//         scrub: true,  
//         toggleActions: "restart pause reverse pause"
//     },
//     translateX: "100%",
// }); 

// gsap.to(".services__main__left__2",{
//     scrollTrigger: {
//         trigger: ".services",
//         start: "200px bottom",
//         end: "-50px top",  
//         scrub: true, 
//         toggleActions: "restart pause reverse pause"
//     },
//     translateX: "100%",
// }); 

// gsap.to(".services__main__left__3",{
//     scrollTrigger: {
//         trigger: ".services",
//         start: "300px bottom",
//         end: "0px top",  
//         scrub: true, 
//         toggleActions: "restart pause reverse pause"
//     },
//     translateX: "100%",
// }); 

// gsap.to(".services__main__left__4",{
//     scrollTrigger: {
//         trigger: ".services",
//         start: "400px bottom",
//         end: "50px top", 
//         scrub: true, 
//         toggleActions: "restart pause reverse pause"
//     },
//     translateX: "100%",
// }); 
 

// gsap.to(".services__main__right__1",{
//     scrollTrigger: {
//         trigger: ".services",
//         start: "100px bottom",
//         end: "-100px top",  
//         scrub: true,  
//         toggleActions: "restart pause reverse pause"
//     },
//     translateX: "-100%",
// }); 

// gsap.to(".services__main__right__2",{
//     scrollTrigger: {
//         trigger: ".services",
//         start: "200px bottom",
//         end: "-50px top",  
//         scrub: true, 
//         toggleActions: "restart pause reverse pause"
//     },
//     translateX: "-100%",
// }); 

// gsap.to(".services__main__right__3",{
//     scrollTrigger: {
//         trigger: ".services",
//         start: "300px bottom",
//         end: "0px top",  
//         scrub: true, 
//         toggleActions: "restart pause reverse pause"
//     },
//     translateX: "-100%",
// }); 

// gsap.to(".services__main__right__4",{
//     scrollTrigger: {
//         trigger: ".services",
//         start: "400px bottom",
//         end: "50px top",   
//         scrub: true, 
//         toggleActions: "restart pause reverse pause"
//     }, 
//     translateX: "-100%",
// }); 