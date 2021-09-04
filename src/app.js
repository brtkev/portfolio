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

    let homeButton = document.querySelector('#homeButton');
    console.log(homeButton)
}

