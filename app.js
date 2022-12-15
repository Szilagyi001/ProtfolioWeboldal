let menu = document.querySelector(`#menu-icon`);
let navbar = document.querySelector(`.navbar`);

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
}

const sr = ScrollReveal ({
    distance: `40px`,
    duration: 1500,
    reset: true
})

sr.reveal(` .home-text`,{delay:250, origin:`top`})
sr.reveal(` .home-img`,{delay:550, origin:`bottom`})


sr.reveal(` .home-text h5`,{delay:550, origin:`top`})
sr.reveal(` .home-text h1`,{delay:550, origin:`bottom`})


sr.reveal(` .about, .services, .education, .projects-content, .cta, .contact`, {delay:150, origin:`bottom`})


