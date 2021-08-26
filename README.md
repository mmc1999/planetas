# Frontend Mentor - Planets fact site solution

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"


### Links


- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [javascript](https://javascript.org/) - JS 


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:


```js
if($enlacePlaneta[indice].outerText.toLowerCase() === nombre) {
        let nuevaListaDesktop = `.listaDato:active {border: none; background-color: #${clase}; mix-blend-mode: normal; color: white;}`;
        let nuevaListaTablet = `.listaDato:hover {border: none; background-color: #${clase}; mix-blend-mode: normal; color: white;}`;
        let nuevaListaMobile = `.listaDato:hover {opacity: 1; border-bottom: 3px solid #${clase}; border-radius: 0px; `;
        let nuevaListaDesktop2 = `.enlacePlaneta:hover { color: white; border-top: 3px solid #${clase}; outline: none;}`
        document.styleSheets[0].cssRules[3].insertRule(nuevaListaMobile, document.styleSheets[0].cssRules[3].cssRules.length)
        document.styleSheets[0].cssRules[4].insertRule(nuevaListaTablet, document.styleSheets[0].cssRules[4].cssRules.length)
        document.styleSheets[0].cssRules[5].insertRule(nuevaListaDesktop, document.styleSheets[0].cssRules[5].cssRules.length)
        document.styleSheets[0].cssRules[5].insertRule(nuevaListaDesktop2, document.styleSheets[0].cssRules[5].cssRules.length)
    }
```


