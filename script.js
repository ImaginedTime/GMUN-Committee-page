VanillaTilt.init(document.querySelectorAll(".discover-committees-img, .discover-interaction-img, .committee-img"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
});


const thoughtImages = document.querySelector(".thought-images");

for (let i = 0; i < 64; i++) 
{
    let num = Math.floor(Math.random() * 360);
    let content = "./images/" + (i % 2 == 0 ? "bulb.svg" : "hand.svg");

    thoughtImages.innerHTML += `<div> <img src="${ content }" style="transform: rotate(${ num }deg);"> </div>`;
}
