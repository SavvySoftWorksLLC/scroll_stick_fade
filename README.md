# Scroll, Stick, and Fade

##### About Me

This is an abstraction of a navigation bar we created for Savvy Shots Photography's website.

As you scroll down the page, when the navigation bar reaches the top it will become fixed to the top of the page. 

Given the semitransparent nature of its color the text will naturally scroll underneath and still be visible. So we created a `fadebox` underneath that will fade the text out, mimicking the effect often used in movie credits.

##### Setup

`index.html` shows the basic set up.

###### Requires

- Yarn or NPM
- JQuery
- Materize

###### Notes

Included in the `scrollstickfade.js` file is a `console.log` statement - `console.log($(window).scrollTop())` this will output the current window scroll to the developer console. This will help you determine the number you need to input for the `if` statement.

