window.addEventListener('DOMContentLoaded', function () {
      let productsWeekImg = document.querySelectorAll('.productsWeek__item-img');

      function productsImgMargin() {
            for (let i = 0; i < productsWeekImg.length; i++) {
                  let heightProductsWeekImg = productsWeekImg[i].height;

                  if (heightProductsWeekImg < 175 && heightProductsWeekImg >= 170) {
                        productsWeekImg[i].style.marginTop = '13px';
                  } else if (heightProductsWeekImg < 170 && heightProductsWeekImg > 165) {
                        productsWeekImg[i].style.marginTop = '20px';
                  } else if (heightProductsWeekImg < 165 && heightProductsWeekImg > 160) {
                        productsWeekImg[i].style.marginTop = '30px';
                  } else if (heightProductsWeekImg < 160 && heightProductsWeekImg > 155) {
                        productsWeekImg[i].style.marginTop = '27px';
                  } else if (heightProductsWeekImg < 150 && heightProductsWeekImg > 145) {
                        productsWeekImg[i].style.marginTop = '23px';
                  } else if (heightProductsWeekImg < 140 && heightProductsWeekImg > 130) {
                        productsWeekImg[i].style.marginTop = '48px';
                  } 
            }
      }
      productsImgMargin();
});
$(function () {
      $('.hero-slider').slick({
            arrows: false,
            dots: true,
            fade: true
      });
      $('.video__btn').fancybox({});
});