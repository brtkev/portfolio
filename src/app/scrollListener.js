const homeHeight = 0;
const navHeight = window.innerHeight * 0.1;
let currentActiveButton = document.getElementById('home');


const onScrollChangeNavDisplay = (ev) => {
    const scrollPos = window.scrollY;
    const aboutHeight = getAboutHeight(scrollPos);
    const projectHeight = getPortfolioHeight(scrollPos);

    if(scrollPos === document.body.scrollHeight - window.innerHeight){
        activateNavButton('contactButton');
    }else if(scrollPos > projectHeight){
        activateNavButton('portfolioButton');
    }else if(scrollPos > aboutHeight){
        activateNavButton('aboutButton');
    }else if( scrollPos >= homeHeight){
        activateNavButton('homeButton');
    }
}

const getAboutHeight = ( ) => {
    let height = getElementBodyOffsetHeight(document.getElementById('tech-container'));
    return window.innerWidth > 768 ? height - navHeight * 3 : height - navHeight * 2;
}

const getPortfolioHeight = () => {
    let height = getElementBodyOffsetHeight(document.getElementById('project'));
    return window.innerWidth > 768 ? height - navHeight * 2 : height - navHeight * 4
}

const activateNavButton = (id) => {
    currentActiveButton.classList.toggle('active');
    let button = document.getElementById(id);
    button.classList.toggle('active');
    currentActiveButton = button;
}