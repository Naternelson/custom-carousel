# Custom Carousel 

This carousel effect for react creates a custom framework to pagiate your elements with animation.

## Carousel Wrapper
 
The Wrapper element holds all the information that the Carousel Box and the Carousel Pages utilize for its effect

## Carousel 

A Div box that animates its height based on the height of the active child page

## Carousel Page

The Animated page that transitions in and out based on whether it is featured or not. The id of the page is automatically created based on its order in the component tree. 

The animation can transition with some options.

1. Loop
2. Wait
3. Delay

### Loop 
The Loop option allows the page to wrap around to the first page if no additional pages are detected

### Wait 
The Wait options can control whether the transisition animation should complete before a new transition is called.

## Delay
The transition can be delayed in milliseconds

## usePageNavigation
A Custom hook to handle transitioning pages on the carousel.
It accepts an object for the loop, wait and delay options outlined above.
Three functions are returned to handle transitioning forward by one page, back one page, and to a custom index