gsap.registerPlugin(ScrollTrigger);

gsap.to(".innovative__o",{
    scrollTrigger: {
        trigger: ".header",
        start: "top top",
        end: "+=250px",   
        scrub: 1, 
        toggleActions: "restart pause reverse pause"
    },
    width: "8vw", 
});

const tl = gsap.timeline();
tl.to(".services__main__left__1",{translateX: "100%"}).to(".services__main__right__1",{translateX: "-100%"}).to(".services__main__left__2",{translateX: "100%"}).to(".services__main__right__2",{translateX: "-100%"}).to(".services__main__left__3",{translateX: "100%"}).to(".services__main__right__3",{translateX: "-100%"}).to(".services__main__left__4",{translateX: "100%"}).to(".services__main__right__4",{translateX: "-100%"});


ScrollTrigger.create({
    animation: tl,
    trigger: ".services",
    start: "0px top",
    end:"+=1400px",
    scrub: true,
    pin: true,
    pinSpacing: false, 
    toogleActions: "restart pause reverse pause",
    anticipatePin: 1
});



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