# JavaScript30 - Challenge Notes

An enumeration and brief description of the key concepts I encountered whilst resolving the challenges.

## Day 1 - JS Drum Kit

- DOM event `keydown`
- DOM event `transitionend` triggers when a transition finishes.
- Customized `data-attributes` can be added to any HTML element by using `data-*` where `*` is the custom name
- `HTMLMediaElement` DOM API to support basic media-related capabilities for audio and video

## Day 2 - CSS + JS Clock

- `setInterval(func, miliseconds)` sets a loop that excecutes `func` for every `miliseconds` cycle.
- `transition-timing-function` CSS property to set transition duration. Interesting effects can be achieved using the `cubic-bezier` function

## Day 3 - Playing with CSS Variables and JS

- `CSS variables`
- `:root` is usually the best place to define CSS variable
- `filter` CSS property to add visual effects like blur and saturation
- `document.documentElement` to get the root element
- DOM event `input` triggers on every single change as opposed to the DOM event `change` that only triggers on `mouseup` or `mouseleave`
- `element.target.dataset` is an object that stores all the `data-attributes` that where defined for a given HTML element
