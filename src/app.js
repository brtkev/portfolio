const projects = [
    {
        'name' : 'start page',
        'url' : 'https://brtkev.github.io/start-page/',
        'repo' : 'https://github.com/brtkev/start-page',
        'display' : 'assets/projects/start-page.png',
        'description' : 'a cool darkish start page for web browsers, for personal use, made with react.'
    },
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
    },
    {
        'name' : 'menu dropdown',
        'url' : 'https://brtkev.github.io/JsMin/menu-dropdown/',
        'repo' : 'https://github.com/brtkev/JsMin/tree/main/menu-dropdown',
        'display' : 'assets/projects/menu-dropdown.png',
        'description' : 'a cool styled dropdown menu for a nav bar, using scss and js'
    },
    {
        'name' : 'coming-soon',
        'url' : '#',
        'repo' : '#',
        'display' : 'assets/home-background.png',
        'description' : 'placeholder sadly :/'
    },
    {
        'name' : 'coming-soon',
        'url' : '#',
        'repo' : '#',
        'display' : 'assets/home-background.png',
        'description' : 'placeholder sadly :/'
    },
]


document.body.onload = () => {

    window.addEventListener('scroll', onScrollChangeNavDisplay);
    onScrollChangeNavDisplay(undefined);

    insertProjectItems();
    addTooltip(document.querySelector('#project #title img'), 'Portfolio repo');

    navBarEventListeners();

}


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
    let tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.insertAdjacentHTML('afterbegin', `<p>${msg}</p>`);

    element.addEventListener('mouseenter', (ev) => {
        tooltip.style.top = getElementBodyOffsetHeight(element) + element.offsetHeight + 'px';
        tooltip.style.left = getElementBodyOffsetWidth(element) + element.offsetHeight + 'px';
        tooltip.style.visibility = "hidden";
        document.body.insertAdjacentElement('afterbegin', tooltip);

        setTimeout(() => {
            tooltip.style.visibility = "visible";
        }, 500);
    });

    element.addEventListener('mouseleave', (ev) => {
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
        if(project.url === '#') previewIcon.target = '_self';
        let codeIcon = listItem.querySelector('.code-icon');
        codeIcon.href = project.repo;
        if(project.repo === '#') codeIcon.target = '_self';

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


