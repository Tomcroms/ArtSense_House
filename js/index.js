const loader = document.getElementById("loader");
window.addEventListener("load",function(){
    loader.style.display = "none";
});
 

async function connectWallet()
{
    if(window.ethereum !== 'undefined')
    {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		let accounts = await provider.send("eth_requestAccounts", []);
		const signer = await provider.getSigner();
		let account = accounts[0];

        let btn = document.getElementById("btnSignIn");
        btn.textContent = accounts[0];
		btn.removeAttribute("onclick");
	}
    else
    {
		document.getElementById("bouton").style.width = "140px";
		document.getElementById("bouton").textContent = "Please install metamask";
    }
}


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
    start: "-20px top", 
    end:"+=1400px",  
    scrub: true,
    pin: true, 
    toogleActions: "restart pause reverse pause",
    anticipatePin: 2,
});
//anticipatePin: 1 si ça continue de scroll 

function test()
{
    console.log("test"); 
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