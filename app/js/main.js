window.addEventListener('DOMContentLoaded', function () {
      // Выравнивание картинок в карточке

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
      // Выравнивание картинок в карточке

      // фильтр для кнопок products на главной
      let innerFilterbtn = document.querySelector('.productsWeek .productsWeek__filters');
      let productsItems = document.querySelectorAll('.productsWeek__item');
      let innerFilterbtn2 = document.querySelector('.productsNew .productsWeek__filters');
      let productsItems2 = document.querySelectorAll('.productsNew__item');

      function filters(elements, items) {
            elements.addEventListener('click', function (event) {
                  let target = event.target;
                  let nameFilter = target.innerText.toLowerCase();
                  if (target.tagName !== 'BUTTON') return false;
                  for(let i = 0; i < elements.children.length ; i++){
                        console.log(elements.children[i].classList.contains('filters-btn--active'));
                        if(elements.children[i].classList.contains('filters-btn--active')){
                              elements.children[i].classList.remove('filters-btn--active');
                              target.classList.add('filters-btn--active');
                        }
                  }
                  for (let i = 0; i < items.length; i++) {
                        items[i].classList.remove('hide');
                        if (!(items[i].getAttribute('data-f') === nameFilter) && nameFilter !== 'all') {
                              items[i].classList.add('hide');
                        }
                  }
            });
      }
      if (innerFilterbtn) {
            filters(innerFilterbtn, productsItems);
            filters(innerFilterbtn2, productsItems2);
            // фильтр для кнопок products на главной
      }



});
$(function () {
      $('.hero-slider').slick({
            arrows: false,
            dots: true,
            fade: true
      });
      $('.video__btn').fancybox({});
});