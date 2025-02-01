# slider-package
![show](https://github.com/user-attachments/assets/71e94412-8e0e-42b3-92de-9378283139b9)

## **How to use**
- open your main.js file
- type it as module file
```javascript
import slideInit from './slider.js' ;
const slider = document.querySelector(".slider") ;
slideInit(slider) ;
```

**Link CSS**
```HTML
<link rel="stylesheet" href="main.css" />
```


**add html**
```html
<div class="slider">
  <div class="slide-area">
    <div class="slide-item">
      <img src="./assets/1.jpg" alt="">
    </div>
    <div class="slide-item">text 1</div>
    <div class="slide-item">text 2</div>
    <div class="slide-item">text 3</div>
  </div>
  <button class="next ">next</button>
  <button class="prev  disabled" disabled>prev</button>
</div>
```







