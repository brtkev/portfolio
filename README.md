- [ ] home
- [ ] projects
- [ ] contact
# portfolio
front-end developer porfolio

WORK IN PROGRESS



## positioning the tooltip of the project list items

prooved to be kind of difficult at first but I managed to position it using:
event's .pageX, .pageY 

but it didn't place the container in the way I wanted so I started looking for solutions.

so I found that placing the tooltip as a sibling of the target Element insteed of placing it
at the body is way better for what I wanted because I could just use the target element's position 
plus its width/height to position the tooltip in the way I wanted.


```
tooltip.style.left = element.offsetLeft + element.offsetWidth + 'px';
tooltip.style.top = element.offsetTop + element.offsetHeight + 'px';

element.insertAdjacentElement('beforebegin', tooltip);
```

this way the tooltip would never get in the way of the hovered element.