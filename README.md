# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [https://github.com/baldmannnnn/interactive-rating-component-frontendmentor-challenge]
- Live Site URL: [https://interactive-rating-component-frontendmentor-challenge.vercel.app/]

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - React framework
- [Styled Components](https://styled-components.com/) - For styles
- [Framer Motion](https://www.framer.com/motion/) - Animation library for react

### What I learned

````js
```instead of adding an active class when a button is clicked. I used a a gesture animation prop from motion called whileFocus
```
  whileFocus={{
    backgroundColor: 'var(--neutral-500)',
    color: 'var(--neutral-100)',
  }}

```I also passed a function called handleResetRating on the button .

```
const handleResetState = e => {
    if (
      e.relatedTarget?.type === 'button' ||
      e.relatedTarget?.type === 'submit'
    )
      return

    setRating('')
  }

  <Card.Btn
  // other props
  onBlur={handleResetRating}>{ratings.rate}
  </Card.Btn>
```

``` The function checks for a condition, and if it is false, setRating is fired.
```

```e.relatedTarget returns the element which receive focus when blur takes effect. In my case only buttons can gain a focus, anything else returns null. Then I check if the type is button or submit and if the condition is false, set the state to it's initial value with setRating('').
```

```link for event.relatedTarget https://stackoverflow.com/questions/42764494/blur-event-relatedtarget-returns-null/42764495
```


### Continued development

I've just noticed after uploading it to vercel that the images has to be fetched, thus it sometimes result to the images not being displayed properly. I'll try to find a way to preload the images in Vite

### Useful resources

- [Compound components react blog](https://www.smashingmagazine.com/2021/08/compound-components-react/) - This helped me understand compound component pattern in react. Still need a lot of experience using it to completely understand and implement it the right way.

- [Framer motion tutorial series ](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i/) - This is an awesome tutorial on how to use framer motion in react from The Net Ninja. The video is a bit too old but this is really helpful especially for react beginners like me who struggles with animation.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Frontend Mentor - [@baldmannnnn](https://www.frontendmentor.io/profile/baldmannnnn)
```
````
