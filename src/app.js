const textImageCovers = document.querySelectorAll('.project__image-cover p');


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

    addEventListenerToArray(textImageCovers, 'click', magic);
    projectPreview()
}

/**
 * 
 * @param {Event} ev 
 */
function magic(ev){
    console.log(ev.currentTarget.parentElement.parentElement);

    /**@type {Element} */
    let listItem = ev.currentTarget.parentElement.parentElement;
    listItem.classList.add('project__focused-li')
}


const projectPreview = () => {
    const previewContainer = document.getElementById('project__display-container');
    const image = document.getElementsByClassName('project__image')[0];
    previewContainer.children[0].appendChild(image.cloneNode());
    previewContainer.children[1].children[0].textContent = image.nextElementSibling.firstElementChild.textContent;
}