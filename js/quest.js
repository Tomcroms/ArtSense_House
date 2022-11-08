function transitionAvailable()
{
    let selection = document.getElementById("carroussel_selection");

    let available = document.getElementById("available");
    let completed = document.getElementById("completed");
    let levels = document.getElementById("levels");

    selection.style.left = "16.66%";
    available.style.left = "0%";
    completed.style.left = "0%";
    levels.style.left = "0%";
}

function transitionCompleted()
{
    let selection = document.getElementById("carroussel_selection");

    let available = document.getElementById("available");
    let completed = document.getElementById("completed");
    let levels = document.getElementById("levels");

    selection.style.left = "50%";
    available.style.left = "-100%";
    completed.style.left = "-100%";
    levels.style.left = "-100%";
}

function transitionLevels()
{
    let selection = document.getElementById("carroussel_selection");

    let available = document.getElementById("available");
    let completed = document.getElementById("completed");
    let levels = document.getElementById("levels");

    selection.style.left = "83.3%";
    available.style.left = "-200%";
    completed.style.left = "-200%";
    levels.style.left = "-200%";
}