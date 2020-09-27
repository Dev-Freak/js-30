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

## Day 4 - Array Cardio Day 1

- `console.table` to show a list of results more clearly
- `Array.prototype.sort (a, b)` a takes precedence y return > 0. b takes precedence if return < 0. Otherwise there is no change.
- `Array.prototype.reduce` can take an empty object as `initialValue` and return the updated object every iteration
- `Array.prototype` methods can be chained together to achieve complex logics:

```
  links
  .map((link) => link.innerHTML)
  .filter((link) => link.includes("de"));

```

## Day 5 - Flex Panels Image Gallery

- `flex-grow:` to make Flex children take different amounts of available space
- `transform: translate()` to move elements across the layout

## Day 6 - Ajax Type Ahead

- `fetch` built-in DOM API replaces the legacy XMLHTTPRequest
- `\``` use template literals to create html
- `RegExp` greatly reduces the complexity of finding substrings
- `string.join()` normally concatenates strings with a comma (,) unless you pass an argument to the function `string.join('')`
- While playing with a different implementation, I learnt that `document.createElement()` can create any type of HTML element and that `document.createTextNode` is necessary to append text on any "text element" (Ej: h1, p)
