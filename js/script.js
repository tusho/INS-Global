// $(document).ready(function () {
//   $(".navbar-nav li a").click(function(event) {
//     $(".navbar-collapse").collapse('hide');
//   });
// });


//
// $('#stuff').click(function(){
//    $('#stuff').animate({ 'margin-left': '+=150px'}, 1000);
//    return false;
// });


// $(document).ready(function(){
//        $('#stuff').click(function(){
//            $('body').css("margin-left",200);
//        });
//        $('#stuff').click(function(){
//            $('body').css("margin-left",0);
//        });
//    });

$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

var open = false;
        $('#footerSlideButton').click(function () {
            if(open === false) {
                $('.navbar-fixed-bottom').animate({ height: '235px' });
                $(this).css('backgroundPosition', 'bottom left');
                open = true;
            } else {
                $('.navbar-fixed-bottom').animate({ height: '0px' });
                $(this).css('backgroundPosition', 'top left');
                open = false;
            }
        });
