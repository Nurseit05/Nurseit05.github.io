const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', function() {
  menu.classList.add('active');
});

closeElem.addEventListener('click', function() {
  menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( function(item, i) {
  lines[i].style.width = item.innerHTML;
});



$('form').submit(function(e) {
  e.preventDefault();


  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find("input").val("");
    $(this).find("textarea").val("");
    $('#consultation').fadeOut();
    $('form').trigger('reset');
  });
  return false;
});