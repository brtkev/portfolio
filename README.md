- [ ] navegation
- [X] home
- [X] portfolio
- [X] contact
# portfolio
front-end developer porfolio

## to do
- [] update states of navegation's buttons

## positioning the tooltip of the project list items

prooved to be kind of difficult at first but I managed to position it using:
event's .pageX, .pageY 

but it didn't place the container in the way I wanted so I started looking for solutions.

so I found that placing the tooltip as a sibling of the target Element insteed of placing it
at the body is way better for what I wanted because I could just use the target element's position 
plus its width/height to position the tooltip in the way I wanted.


```javascript
tooltip.style.left = element.offsetLeft + element.offsetWidth + 'px';
tooltip.style.top = element.offsetTop + element.offsetHeight + 'px';

element.insertAdjacentElement('beforebegin', tooltip);
```

>this way the tooltip would never get in the way of the hovered element.

## smooth scrolling on nav buttons' click

at first I found a quick [solution](https://stackoverflow.com/a/52478645/16828543) investigating on google.

with a little of modification it would do what I needed but not what I wanted.

then I found out a way to consistenly get where an element was located relative to the body:
```javascript
const getElementBodyOffsetHeight = (element) => element.getBoundingClientRect().top + document.documentElement.scrollTop;
```

after that I started to modify the original solution I got and molded it into something that would fit better and more efficiently what I was after

- get the height of the element
- get the amount of steps in an interval of time
- get the size of each step using the height and current location of the window
- and iterate the size, the amount of steps

```javascript
const scrollToElement = (element, scrollDuration) => {
    const height = validateHeight(getElementBodyOffsetHeight(element) - document.getElementById('nav').offsetHeight);
    const scrollSteps = getScrollSteps(scrollDuration)
    const scrollStepSize = getScrollStepSize(height, getScrollDirection(height), scrollSteps);

    toggleNavBarButtons();
    scrollInterval(scrollStepSize, scrollSteps);
    toggleNavBarButtons();
}
```

>at first I wasn't going for a iterate over a fixed amount of steps depending on the height
>but at some point during trail and error, I realized it was a better way to do it