const projects = [
    {
        'name' : 'google clone',
        'url' : '#',
        'repo' : '#',
        'display' : 'assets/google-clone.png',
        'description' : 'a google clone I made to train my DOM manipulation skills'
    },
    {
        'name' : 'google clone',
        'url' : '#',
        'repo' : '#',
        'display' : 'assets/google-clone.png',
        'description' : 'a google clone I made to train my DOM manipulation skills, as well as html/css'
    },
    {
        'name' : 'google clone',
        'url' : '#',
        'repo' : '#',
        'display' : 'assets/google-clone.png',
        'description' : 'a google clone I made to train my DOM manipulation skills, as well as html/css'
    },
    {
        'name' : 'google clone',
        'url' : '#',
        'repo' : '#',
        'display' : 'assets/google-clone.png',
        'description' : 'a google clone I made to train my DOM manipulation skills, as well as html/css'
    },
    {
        'name' : 'google clone',
        'url' : '#',
        'repo' : '#',
        'display' : 'assets/google-clone.png',
        'description' : 'a google clone I made to train my DOM manipulation skills, as well as html/css'
    },
    {
        'name' : 'google clone',
        'url' : '#',
        'repo' : '#',
        'display' : 'assets/google-clone.png',
        'description' : 'a google clone I made to train my DOM manipulation skills, as well as html/css'
    },
    {
        'name' : 'google clone',
        'url' : '#',
        'repo' : '#',
        'display' : 'assets/google-clone.png',
        'description' : 'a google clone I made to train my DOM manipulation skills, as well as html/css'
    },
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

document.body.onload = () => {
    
    insertProjectItems();
    const textImageCovers = document.querySelectorAll('.preview-icon');
    addEventListenerToArray(textImageCovers, 'click', () => console.log("uwu"));
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
