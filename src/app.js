const projects = [
    {
        'name' : 'google clone',
        'url' : '#',
        'repo' : '#',
        'display' : 'assets/google-clone.png'
    },
    {
        'name' : 'google clone',
        'url' : '#',
        'repo' : '#',
        'display' : 'assets/google-clone.png'
    },
    {
        'name' : 'google clone',
        'url' : '#',
        'repo' : '#',
        'display' : 'assets/google-clone.png'
    },
    {
        'name' : 'google clone',
        'url' : '#',
        'repo' : '#',
        'display' : 'assets/google-clone.png'
    },
    {
        'name' : 'google clone',
        'url' : '#',
        'repo' : '#',
        'display' : 'assets/google-clone.png'
    },
    {
        'name' : 'google clone',
        'url' : '#',
        'repo' : '#',
        'display' : 'assets/google-clone.png'
    },
    {
        'name' : 'google clone',
        'url' : '#',
        'repo' : '#',
        'display' : 'assets/google-clone.png'
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


document.body.onload = () => {
    
    insertProjectItems();
    const textImageCovers = document.querySelectorAll('.preview-icon');
    addEventListenerToArray(textImageCovers, 'click', () => console.log("uwu"));
}

const insertProjectItems = () => {
    let itemHTML = `
    <li class="project__grid-item">
        <img class="project__image" src="" alt="" >
        <div class="project__image-cover">
            <div class="text-box">
                <p></p>
            </div>
            <a class="preview-icon" href="#"><img src="assets/preview-icon.png" alt="preview icon"></a>
            <a class="code-icon" href="#"><img  src="assets/code-logo.png" alt="preview icon"></a>
        </div>
    </li>
    `;
    itemHTML = itemHTML.trim();

    const projectsNodes = projects.map( ( project ) => {
        const template = document.createElement('template');
        template.insertAdjacentHTML('afterbegin', itemHTML);

        template.querySelector('.text-box p').insertAdjacentText('afterbegin', project.name);
        template.querySelector('.preview-icon').href = project.url;
        template.querySelector('.code-icon').href = project.repo;
        let image = template.querySelector('.project__image');
        image.src = project.display;
        image.alt = project.name;

        return template.firstElementChild;
    })

    const grid = document.getElementById("project__grid-box");
    grid.append(...projectsNodes);


}
