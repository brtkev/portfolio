
const getScrollSteps = scrollDuration => (scrollDuration / intervalSpeed);
const getScrollStepSize = (height, direction, scrollSteps) => direction * Math.abs(height - window.scrollY) / scrollSteps;

const validateHeight = (height) => {
    if(height === 0) return 1 // cannot be 0
    else if(height > document.body.scrollHeight - window.innerHeight)
        return document.body.scrollHeight - window.innerHeight; //cannot be higher than
    else return height 
}

function getScrollDirection(height){
    if(window.scrollY > height ) return -1
    else return 1;
}

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

// module.exports = navBarEventListeners;

const getElementBodyOffsetHeight = (element) => element.getBoundingClientRect().top + document.documentElement.scrollTop;
const getElementBodyOffsetWidth = (element) => element.getBoundingClientRect().left + document.documentElement.scrollLeft;

const intervalSpeed = 15;

const scrollToElement = (element, scrollDuration) => {
    const height = validateHeight(getElementBodyOffsetHeight(element) - getHeightAdjusment());
    const scrollSteps = getScrollSteps(scrollDuration)
    const scrollStepSize = getScrollStepSize(height, getScrollDirection(height), scrollSteps);

    toggleNavBarButtons();
    scrollInterval(scrollStepSize, scrollSteps);
    toggleNavBarButtons();
}

const getHeightAdjusment = () => {
    let extraHeight = document.getElementById('nav').offsetHeight;
    return window.innerWidth > 425 ? extraHeight : 0; 
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



const openResponsiveNav = (ev) => {
    /** @type {Element} */
    ev.target.parentElement.parentElement.classList.toggle('nav-hidden');
    changeDisplayedIcon(ev);
}

const changeDisplayedIcon = (ev) => {
    /** @type {Element} */
    let button = ev.target.parentElement;
    [...button.children].map( img => {
        img.classList.toggle('move-left');
    })
}