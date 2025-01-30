const slideInit = (sliderItem, options) => {
  if (sliderItem instanceof Element) {
    const items = sliderItem.querySelectorAll(".slide-item");
    const slideArea = sliderItem.querySelector(".slide-area");
    const next = sliderItem.querySelector(".next");
    const prev = sliderItem.querySelector(".prev");

    sliderItem.style = `
    width: ${options?.width ? options.width + "px" : " auto "} ;
    height: ${options?.height ? options.height + "px" : "auto"} ;
  `;

    let currentIndex = 0;
    next.addEventListener("click", function () {

      currentIndex++;
      if (currentIndex == items.length - 1 ) {
        this.setAttribute("disabled", "true");
        this.classList.add("disabled");
      } else {
        prev.removeAttribute("disabled");
        prev.classList.remove("disabled");
     
      }
      items[currentIndex-1].style = `
        left: -100%
      `;
        items[currentIndex].style = `
          left: 0
        `;

      // console.log(currentIndex);

    });
    prev.addEventListener("click", function () {

      console.log(currentIndex);
      
      currentIndex--;
      if (currentIndex == 0 ) {
        this.setAttribute("disabled", "true");
        this.classList.add("disabled");
      } else {
        next.removeAttribute("disabled");
        next.classList.remove("disabled");
     
      }
      items[currentIndex+1].style = `
        left: 100%
      `;
        items[currentIndex].style = `
          left: 0
        `;

      // console.log(currentIndex);

    });

    console.log(sliderItem);
  }
};

export default slideInit;
