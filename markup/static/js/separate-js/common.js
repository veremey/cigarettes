$(document).ready(function(){

  // $('body').on('click', function(e){
  //   var tg = $(e.target).attr('class');
  //   console.log(tg);
  // });

  $('.go-top').click(goTop);

  $('.trigger').click(function(){
    $(this).toggleClass('is-active');
  });

  if($(document).width() < 1024){
    $('.aside__header').click(function(){
      $(this).parent('.aside').toggleClass('is-closed');
    });
  }

  var $scrollTop = $(document).scrollTop();
  if($scrollTop > 1){
    $('.page').addClass('page-scrolled');
  } else {
    $('.page').removeClass('page-scrolled');
  }

  if($(document).width() < 1025) {
    $('.aside').addClass('is-closed');
  } else {
    $('.aside').removeClass('is-closed');
  }

});

// scroll document
$(window).on('scroll', function(){
  var $scrollTop = $(document).scrollTop();
  if($scrollTop > 1){
    $('.page').addClass('page-scrolled');
  } else {
    $('.page').removeClass('page-scrolled');
  }
});

//  resize document
$(window).on('resize', function(){
  if($(document).width() < 1025) {
    $('.aside').addClass('is-closed');
  } else {
    $('.aside').removeClass('is-closed');
  }
  if($(document).width() < 1024){
    $('.aside__header').click(function(){
      $(this).parent('.aside').toggleClass('is-closed');
    });
  }
});




function goTop(e){
  e.preventDefault();

  $('html, body').animate({scrollTop: 0}, 1000);
  $('.page').removeClass('page-scrolled');
}

//custom select
var x, i, j, selElmnt, a, b, c;

x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);