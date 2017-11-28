$(window).scroll(function(){
    if ($(window).scrollTop() >= 30) {
       $('#nav-container').addClass('fixed-header');
       $('.content').addClass('fixed-header-content');
    }
    else {
       $('#nav-container').removeClass('fixed-header');
       $('.content').removeClass('fixed-header-content');
    }
});