# La Capsule - Mymails Project

![Image](https://res.cloudinary.com/delfhqsem/image/upload/v1643119029/github/mymails/mymails-6_obsnjg.png)

This tiny project displays centered messages with typing, delete and search
* Uses HTML5 and CSS3 (flex) for message boxes styling and page layout
* Uses JQuery DOM elements selection, event listeners, CSS classes management, adding/hiding/showing messages and computing total number of messages

Files : 
1. index.html : contains the base structure of the mail-area and a few pre-filled messages with Lorem Ipsum
2. style.css  : styling and centering of all the elements, using ids and classes
3. script.js  : 
* properly handles the border of the bottom message
* computes number of messages at first display time and after each modification of message elements
* adds event listeners (click on trash icons, click on button submit and search)
* add a message element when submitting a new message with a default author (me) and the same style as pre-filled messages
