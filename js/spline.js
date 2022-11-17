import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/XAp8lVx1VCkKjLX7/scene.splinecode');

export function ecosystemRight1to2()
{
    const titre = document.getElementById("ecosystem_titre");
    const digitalArt = document.getElementById("digitalArt");
    const utility = document.getElementById("utility");
    const gamification = document.getElementById("gamification");
    const dao = document.getElementById("dao");
    const leftTriangle = document.getElementById("ecosystem_triangle_left");
    const rightTriangle = document.getElementById("ecosystem_triangle_right");

    app.emitEvent('mouseUp','Cube 2');
    titre.textContent = "Utility";
    digitalArt.style.left = "-100%";
    utility.style.left = "-100%";
    gamification.style.left = "-100%";
    dao.style.left = "-100%";
    leftTriangle.setAttribute("onclick", "ecosystemLeft2to1()");
    rightTriangle.setAttribute("onclick", "ecosystemRight2to3()");
    leftTriangle.style.cursor = "pointer";
}

export function ecosystemRight2to3()
{
    const titre = document.getElementById("ecosystem_titre");
    const digitalArt = document.getElementById("digitalArt");
    const utility = document.getElementById("utility");
    const gamification = document.getElementById("gamification");
    const dao = document.getElementById("dao");
    const leftTriangle = document.getElementById("ecosystem_triangle_left");
    const rightTriangle = document.getElementById("ecosystem_triangle_right");

    app.emitEvent('mouseUp','Cube 3');
    titre.textContent = "Gamification";
    digitalArt.style.left = "-200%";
    utility.style.left = "-200%";
    gamification.style.left = "-200%";
    dao.style.left = "-200%";
    leftTriangle.setAttribute("onclick", "ecosystemLeft3to2()");
    rightTriangle.setAttribute("onclick", "ecosystemRight3to4()");
}

export function ecosystemRight3to4()
{
    const titre = document.getElementById("ecosystem_titre");
    const digitalArt = document.getElementById("digitalArt");
    const utility = document.getElementById("utility");
    const gamification = document.getElementById("gamification");
    const dao = document.getElementById("dao");
    const leftTriangle = document.getElementById("ecosystem_triangle_left");
    const rightTriangle = document.getElementById("ecosystem_triangle_right");

    app.emitEvent('mouseUp','Cube 4');
    titre.textContent = "DAO";
    digitalArt.style.left = "-300%";
    utility.style.left = "-300%";
    gamification.style.left = "-300%";
    dao.style.left = "-300%";
    leftTriangle.setAttribute("onclick", "ecosystemLeft4to3()");
    rightTriangle.setAttribute("onclick", "");
    rightTriangle.style.cursor = "not-allowed";
}


export function ecosystemLeft2to1()
{
    const titre = document.getElementById("ecosystem_titre");
    const digitalArt = document.getElementById("digitalArt");
    const utility = document.getElementById("utility");
    const gamification = document.getElementById("gamification");
    const dao = document.getElementById("dao");
    const leftTriangle = document.getElementById("ecosystem_triangle_left");
    const rightTriangle = document.getElementById("ecosystem_triangle_right");

    app.emitEvent('mouseUp','Cube');
    titre.textContent = "Digital Art";
    digitalArt.style.left = "0%";
    utility.style.left = "0%";
    gamification.style.left = "0%";
    dao.style.left = "0%";
    leftTriangle.setAttribute("onclick", "");
    rightTriangle.setAttribute("onclick", "ecosystemRight1to2()");
    leftTriangle.style.cursor = "not-allowed"; 
}

export function ecosystemLeft3to2()
{
    const titre = document.getElementById("ecosystem_titre");
    const digitalArt = document.getElementById("digitalArt");
    const utility = document.getElementById("utility");
    const gamification = document.getElementById("gamification");
    const dao = document.getElementById("dao");
    const leftTriangle = document.getElementById("ecosystem_triangle_left");
    const rightTriangle = document.getElementById("ecosystem_triangle_right");

    app.emitEvent('mouseUp','Cube 2');
    titre.textContent = "Utility";
    digitalArt.style.left = "-100%";
    utility.style.left = "-100%";
    gamification.style.left = "-100%";
    dao.style.left = "-100%";
    leftTriangle.setAttribute("onclick", "ecosystemLeft2to1()");
    rightTriangle.setAttribute("onclick", "ecosystemRight2to3()");

}

export function ecosystemLeft4to3()
{
    const titre = document.getElementById("ecosystem_titre");
    const digitalArt = document.getElementById("digitalArt");
    const utility = document.getElementById("utility");
    const gamification = document.getElementById("gamification");
    const dao = document.getElementById("dao");
    const leftTriangle = document.getElementById("ecosystem_triangle_left");
    const rightTriangle = document.getElementById("ecosystem_triangle_right");

    app.emitEvent('mouseUp','Cube 3');
    titre.textContent = "Gamification";
    digitalArt.style.left = "-200%";
    utility.style.left = "-200%";
    gamification.style.left = "-200%";
    dao.style.left = "-200%";
    leftTriangle.setAttribute("onclick", "ecosystemLeft3to2()");
    rightTriangle.setAttribute("onclick", "ecosystemRight3to4()");
    rightTriangle.style.cursor = "pointer"; 
}
