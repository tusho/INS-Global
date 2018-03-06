$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});

// $(document).on('click','.navbar-collapse.in',function(e) {
//     if( $(e.target).is('a:not(".dropdown-toggle")') ) {
//         $(this).collapse('hide');
//     }
// });
