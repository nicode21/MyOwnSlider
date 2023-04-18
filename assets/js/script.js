"use strict";


let icons = document.querySelectorAll(".slider i");
let imgs = document.querySelectorAll(".slider .images img");
let dots = document.querySelectorAll(".slider .dots .dot");

let translate = 0;

icons[1].addEventListener("click", function () {
  if (translate >= -(100 * (imgs.length - 1) - 1)) {
    translate -= 100;
    imgs.forEach(img => {
      img.style.transform = `translate(${translate}%)`;
    });
    console.log(translate);
  } else if (imgs[translate / -100].nextElementSibling == null /* && translate > -100 */) {
    translate = 0;
    imgs.forEach(img => {
      img.style.transform = `translate(${translate}%)`;
    });
  }

  dots.forEach(dot => {
    if ((translate / -100) + 1 == dot.getAttribute("data-id")) {
      dot.classList.add("active-dot");
    } else {
      dot.classList.remove("active-dot");
    }
  });
})

icons[0].addEventListener("click", function () {
  if (translate <= -1) {
    translate += 100;
    imgs.forEach(img => {
      img.style.transform = `translate(${translate}%)`;
    });
    console.log(translate);
  } else if (imgs[translate / -100].previousElementSibling == null /* && translate > -100 */) {
    translate = -900;
    imgs.forEach(img => {
      img.style.transform = `translate(${translate}%)`;
    });
  }

  dots.forEach(dot => {
    if ((translate / -100) + 1 == dot.getAttribute("data-id")) {
      dot.classList.add("active-dot");
    } else {
      dot.classList.remove("active-dot");
    }
  });
})
console.log(translate);

dots.forEach(dot => {

  dot.addEventListener("click", function () {
    translate = (parseInt(this.getAttribute("data-id")) - 1) * (-100);
    console.log(translate);

    imgs.forEach(img => {
      img.style.transform = `translate(${translate}%)`;
    });
    dots.forEach(dot => {
      dot.classList.remove("active-dot");

    });
    this.classList.add("active-dot");
  })

});













