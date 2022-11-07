gsap.registerPlugin(ScrollTrigger);

gsap.to(".innovative__o",{
    scrollTrigger: {
        trigger: ".header",
        start: "top top",
        end: "+=150px",   
        scrub: true, 
        toggleActions: "restart pause reverse pause"
    },
    width: "8vw",
}); 

gsap.to(".services__main__left__1",{
    scrollTrigger: {
        trigger: ".services",
        start: "100px bottom",
        end: "-100px top",  
        scrub: 1,  
        toggleActions: "restart pause reverse pause"
    },
    translateX: "100%",
}); 

gsap.to(".services__main__left__2",{
    scrollTrigger: {
        trigger: ".services",
        start: "200px bottom",
        end: "-50px top",  
        scrub: 1, 
        toggleActions: "restart pause reverse pause"
    },
    translateX: "100%",
}); 

gsap.to(".services__main__left__3",{
    scrollTrigger: {
        trigger: ".services",
        start: "300px bottom",
        end: "0px top",  
        scrub: 1, 
        toggleActions: "restart pause reverse pause"
    },
    translateX: "100%",
}); 

gsap.to(".services__main__left__4",{
    scrollTrigger: {
        trigger: ".services",
        start: "400px bottom",
        end: "50px top", 
        scrub: 1, 
        toggleActions: "restart pause reverse pause"
    },
    translateX: "100%",
}); 
 

gsap.to(".services__main__right__1",{
    scrollTrigger: {
        trigger: ".services",
        start: "100px bottom",
        end: "-100px top",  
        scrub: 1,  
        toggleActions: "restart pause reverse pause"
    },
    translateX: "-100%",
}); 

gsap.to(".services__main__right__2",{
    scrollTrigger: {
        trigger: ".services",
        start: "200px bottom",
        end: "-50px top",  
        scrub: 1, 
        toggleActions: "restart pause reverse pause"
    },
    translateX: "-100%",
}); 

gsap.to(".services__main__right__3",{
    scrollTrigger: {
        trigger: ".services",
        start: "300px bottom",
        end: "0px top",  
        scrub: 1, 
        toggleActions: "restart pause reverse pause"
    },
    translateX: "-100%",
}); 

gsap.to(".services__main__right__4",{
    scrollTrigger: {
        trigger: ".services",
        start: "400px bottom",
        end: "50px top",   
        scrub: 1, 
        toggleActions: "restart pause reverse pause"
    }, 
    translateX: "-100%",
}); 