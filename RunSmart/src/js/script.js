//( var name = "Nurseit"; устаревший var
// let number = 7; // let мы можем когда-то помняться информацию заданию внутри number
// const pi = 3.14; const мы не можем поменять информацию заданию внутр pi

// let leftBorderWidth = 200; переменая сперва пишем с маленькой букв если добавим слова то с большой

// типы данные 
// number - число для обозночение заплаты, количество px в общем что можно измерить количественно
// string - можем поместить абсолютно люблю информацию описать словами. как страку - "", '', ``
// true/false 
// null - короче чего не существует в коде.
// undefined - что-то существует но значение не имеет. пример let git;

//alert(1234)
// console.log(number); ответ выводит в консоле разработчика

// confirm("Вам есть 18?");  справишиваем у пользовталя 
// let answer = prompt("Вам есть 18?", ""); спрашиваем у пользователя и он может писать
// console.log(answer);

// console.log(4 + 4);


// let isChecked = true,
//     isClose= false;
// && оператор И
// console.log(isChecked && isClose);

// || логические операторы ИЛИ
// console.log(isChecked || isClose);

// условия if или else
// if (2 * 4 == 8 * 1){
//   console.log('верно');
// } else {
//   console.log('ошибка')
// }

// let answer = confirm("Вам есть 18?");
// if (answer){
//   console.log('проходите');
// } else {
//   console.log('уходите');
// }

// const num = 50;

// if (num < 49){
//   console.log('неправильно');
// } else if (num > 100){
//   console.log('много');
// } else {
//   console.log('верно');
// }



// for() - цикл
// for (let i = 1; i < 8;i++){
//   console.log(i);
// }



// Функция
// function logging(){
//   console.log(222);
// }
// logging();)


$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 1000, 
    adaptiveHeight: true,
    autoplay: false,
    nextArrow:  false,
    prevArrow: false,
  });

  // $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
  //   $(this)
  //     .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
  //     .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  // });



  function toggleSlide(item) {
    $(item).each(function(i){
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');
  
  // Modal

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });
  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  });

  //Validation

  // $('#consultataion-form').validate();
  // $('#consultation form').validate();
  // $('#order form').validate();
  
  function validateForms(form){
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите {0} символа!")
          },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
        }
      }
    });
  };

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  //Masked
  $('input[name=phone]').mask("0 (999) 999-999");

  //server
  
  $('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).validate()) {
      return;
    }

    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('clow');

      $('form').trigger('reset');
    });
    return false;
  });


  // Smooth scroll and pageup

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  //smoothness and animation 

  $("a[href=#up]").on('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  }); 

  //WOw библеотека and animeta
  new WOW().init();
});