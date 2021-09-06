

const navBarEventListeners = () => {
    let homeButton = document.getElementById('homeButton');
    homeButton.addEventListener('click', () => scrollToElement(document.getElementById('home'), 100))
    
    let aboutButton = document.getElementById('aboutButton');
    aboutButton.addEventListener('click', () => scrollToElement(document.getElementById('tech-container'), 100))

    let portfolioButton = document.getElementById('portfolioButton');
    portfolioButton.addEventListener('click', () => scrollToElement(document.getElementById('project'), 100))

    let contactButton = document.getElementById('contactButton');
    contactButton.addEventListener('click', () => scrollToElement(document.getElementById('contact'), 100));

    let menuResponsiveButton = document.getElementById('menu-responsive-button');
    menuResponsiveButton.addEventListener('click', openResponsiveNav)
}

const getElementBodyOffsetHeight = (element) => element.getBoundingClientRect().top + document.documentElement.scrollTop;

const intervalSpeed = 15;

const scrollToElement = (element, scrollDuration) => {
    const height = validateHeight(getElementBodyOffsetHeight(element) - document.getElementById('nav').offsetHeight);
    const scrollSteps = getScrollSteps(scrollDuration)
    const scrollStepSize = getScrollStepSize(height, getScrollDirection(height), scrollSteps);

    toggleNavBarButtons();
    scrollInterval(scrollStepSize, scrollSteps);
    toggleNavBarButtons();
}

const scrollInterval = (scrollStepSize, scrollSteps ) =>{
    let i = 0,interval = setInterval( () => {
        if (i < scrollSteps) window.scrollBy( 0, scrollStepSize );
        else clearInterval(interval);
        i++;
    },intervalSpeed);
} 

const toggleNavBarButtons = () => {
    let buttons = document.getElementsByClassName('list__item__button');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].disabled = !buttons[i].disabled;
    }
}

const fromNavBar = () => {
    console.log("from navbarjs");
}


const openResponsiveNav = (ev) => {
    /** @type {Element} */
    let nav = ev.target.parentElement.parentElement;
    nav.classList.toggle('nav-hidden');
    
    /** @type {Element} */
    let button = ev.target.parentElement;
    console.log(button.children);
    [...button.children].map( img => {
        img.classList.toggle('move-left');
    })
}