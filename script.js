'use strict';

class Carousel {
  constructor(carouselDOM) {
    this.carouselDOM = carouselDOM;
    this.items = this.carouselDOM.querySelectorAll('.carousel_item');
    this.totalItems = this.items.length;
    this.current = 0;
    this.isMoving = false;
  }

  initCarousel() {
    this.isMoving = false;
    this.items[0].classList.add('active');
    this.setEventListener();
  }
  setEventListener() {
    this.prevButton = this.carouselDOM.querySelector('.carousel_button--prev');
    this.nextButton = this.carouselDOM.querySelector('.carousel_button--next');

    this.prevButton.addEventListener('click', () => {
      this.movePrev();
    });

    this.nextButton.addEventListener('click', () => {
      this.moveNext();
    });
  }

  disabledMoving() {
    this.isMoving = true;
    setTimeout(() => {
      this.isMoving = false;
    }, 500);
  }

  moveCarouselTo() {
    if (this.isMoving) return;
    this.disabledMoving();
    let prev = this.current - 1;
    let next = this.current + 1;
    if (this.current === 0) {
      prev = this.totalItems - 1;
    } else if (this.current === this.totalItems - 1) {
      next = 0;
    }
    for (let i = 0; i < this.totalItems; i++) {
      this.items[i]?.classList.remove('active');
      this.items[i]?.classList.remove('prev');
      this.items[i]?.classList.remove('next');

      this.items[this.current].classList.add('active');
      this.items[prev].classList.add('prev');
      this.items[next].classList.add('next');
    }
  }

  moveNext() {
    if (this.isMoving) return;
    if (this.current === this.totalItems - 1) {
      this.current = 0;
    } else {
      this.current++;
    }
    this.moveCarouselTo();
  }

  movePrev() {
    if (this.isMoving) return;
    if (this.current === 0) {
      this.current = this.totalItems - 1;
    } else {
      this.current--;
    }
    this.moveCarouselTo();
  }
}

const carouselDOM = document.querySelector('.carousel');
const carousel = new Carousel(carouselDOM);
carousel.initCarousel();
