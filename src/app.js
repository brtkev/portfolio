const projects = [
    {
        'name' : 'google clone',
        'url' : 'https://brtkev.github.io/JsMin/google-clone/',
        'repo' : 'https://github.com/brtkev/JsMin/tree/main/google-clone',
        'display' : 'assets/projects/google-clone.png',
        'description' : 'a google clone I made to train my DOM manipulation skills'
    },
    {
        'name' : 'Spense',
        'url' : 'https://brtkev.github.io/spense-homepage/',
        'repo' : 'https://github.com/brtkev/spense-homepage',
        'display' : 'assets/projects/spense-page.png',
        'description' : 'Landing page of spense. made using html/css, 100% responsive'
    },
    {
        'name' : 'Fiber',
        'url' : 'https://brtkev.github.io/Fiber-landing-page/',
        'repo' : 'https://github.com/brtkev/Fiber-landing-page',
        'display' : 'assets/projects/fiber-page.png',
        'description' : 'this a really sweet landing page of fiber made with React, 100% reponsive'
    }
]

/**
 * 
 * @param {HTMLCollectionOf.<Element>|NodeListOf.<Element>} array 
 * @param {string} type 
 * @param {Function} callable 
 */
const addEventListenerToArray = ( array, type, callable) => {
    for(let i = 0; i < array.length; i++){
        array[i].addEventListener(type, callable);
        
    }
}


/**
 * 
 * @param {Element} element 
 * @param {string} msg 
 */
const addTooltip = (element, msg) => {
    element.addEventListener('mouseenter', (ev) => {

        let tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.insertAdjacentHTML('afterbegin', `<p>${msg}</p>`);

        tooltip.style.left = element.offsetLeft + element.offsetWidth + 'px';
        tooltip.style.top = element.offsetTop + element.offsetHeight + 'px';

        tooltip.style.visibility = "hidden";
        element.insertAdjacentElement('beforebegin', tooltip);

        setTimeout(() => {
            tooltip.style.visibility = "visible";
        }, 500);
    });

    element.addEventListener('mouseleave', (ev) => {
        
        let tooltip = element.parentElement.querySelector(".tooltip");
        if(tooltip) tooltip.remove();
            
    });
}

const insertProjectItems = () => {
    const listItemTemplate = document.querySelector('#project__grid-item').content.firstElementChild;
    
    const projectsNodes = projects.map( ( project ) => {
        const listItem = listItemTemplate.cloneNode(true);

        let text = listItem.querySelector('.text-box');
        text.firstElementChild.insertAdjacentText('afterbegin', project.name)
        let previewIcon = listItem.querySelector('.preview-icon');
        previewIcon.href = project.url;
        let codeIcon = listItem.querySelector('.code-icon');
        codeIcon.href = project.repo;

        let image = listItem.querySelector('.project__image');
        image.src = project.display;
        image.alt = project.name;
        
        addTooltip(text, project.description);
        addTooltip(previewIcon, "go to Page");
        addTooltip(codeIcon, "go to Code");
        return listItem;
    })

    const grid = document.getElementById("project__grid-box");
    grid.append(...projectsNodes);

}


document.body.onload = () => {
    
    insertProjectItems();
    let projectTitleImage = document.querySelector('#project #title img');
    addTooltip(projectTitleImage, 'Portfolio repo');

    navBarEventListeners();

}

const navBarEventListeners = () => {
    let homeButton = document.getElementById('homeButton');
    homeButton.addEventListener('click', () => scrollToElement(document.getElementById('home'), 100))
    
    let aboutButton = document.getElementById('aboutButton');
    console.log(window.innerHeight * 0.1)
    aboutButton.addEventListener('click', () => scrollToElement(document.getElementById('tech-container'), 100))

    let portfolioButton = document.getElementById('portfolioButton');
    portfolioButton.addEventListener('click', () => scrollToElement(document.getElementById('project'), 100))

    let contactButton = document.getElementById('contactButton');
    contactButton.addEventListener('click', () => scrollToElement(document.getElementById('contact'), 100));
}

function getElementBodyOffsetY(element){
    return element.getBoundingClientRect().top + document.documentElement.scrollTop;
}

const intervalSpeed = 15;

function scrollToElement(element, scrollDuration){
    y = validateY(getElementBodyOffsetY(element) - document.getElementById('nav').offsetHeight);
    let scrollSteps = getScrollSteps(scrollDuration)
    let scrollStepSize = getScrollStepSize(y, getScrollDirection(y), scrollSteps);

    toggleNavBarButtons();
    scrollInterval(y, scrollStepSize, scrollSteps);
    toggleNavBarButtons();
    
}

let scrollInterval = (y, scrollStepSize, scrollSteps ) =>{
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

const getScrollSteps = scrollDuration => (scrollDuration / intervalSpeed);
const getScrollStepSize = (y, direction, scrollSteps) => direction * Math.abs(y - window.scrollY) / scrollSteps;

const validateY = (y) => {
    if(y === 0) return 1 // cannot be 0
    else if(y > document.body.scrollHeight - window.innerHeight)
        return document.body.scrollHeight - window.innerHeight; //cannot be higher than
    else return y 
}

function getScrollDirection(y){
    if(window.scrollY > y ) return -1
    else return 1;
}
