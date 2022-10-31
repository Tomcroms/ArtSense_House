gsap.registerPlugin(ScrollTrigger);

gsap.to(".services__main__left__1",{
    scrollTrigger: {
        trigger: ".services",
        start: "100px bottom",
        end: "0px top",  
        scrub: 2,  
        toggleActions: "restart pause reverse pause"
    },
    translateX: "100%",
}); 

gsap.to(".services__main__left__2",{
    scrollTrigger: {
        trigger: ".services",
        start: "200px bottom",
        end: "100px top",  
        scrub: 2, 
        toggleActions: "restart pause reverse pause"
    },
    translateX: "100%",
}); 

gsap.to(".services__main__left__3",{
    scrollTrigger: {
        trigger: ".services",
        start: "300px bottom",
        end: "200px top",  
        scrub: 2, 
        toggleActions: "restart pause reverse pause"
    },
    translateX: "100%",
}); 

gsap.to(".services__main__left__4",{
    scrollTrigger: {
        trigger: ".services",
        start: "400px bottom",
        end: "300px top",  
        scrub: 2, 
        toggleActions: "restart pause reverse pause"
    },
    translateX: "100%",
}); 


gsap.to(".services__main__right__1",{
    scrollTrigger: {
        trigger: ".services",
        start: "100px bottom",
        end: "0px top",  
        scrub: 2,  
        toggleActions: "restart pause reverse pause"
    },
    translateX: "-100%",
}); 

gsap.to(".services__main__right__2",{
    scrollTrigger: {
        trigger: ".services",
        start: "200px bottom",
        end: "100px top",  
        scrub: 2, 
        toggleActions: "restart pause reverse pause"
    },
    translateX: "-100%",
}); 

gsap.to(".services__main__right__3",{
    scrollTrigger: {
        trigger: ".services",
        start: "300px bottom",
        end: "200px top",  
        scrub: 2, 
        toggleActions: "restart pause reverse pause"
    },
    translateX: "-100%",
}); 

gsap.to(".services__main__right__4",{
    scrollTrigger: {
        trigger: ".services",
        start: "400px bottom",
        end: "300px top",  
        scrub: 2, 
        toggleActions: "restart pause reverse pause"
    },
    translateX: "-100%",
}); 