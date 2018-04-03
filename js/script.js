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
var open = false;

$("#index-container").click(function() {
  if(open === true) {
    $('.navbar-fixed-bottom').animate({ height: '0px' });
    $(this).css('backgroundPosition', 'top left');
    open = false;
  }
})

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


$('#footerSlideButton').click(function () {
    if(open === false) {
        $('.navbar-fixed-bottom').animate({ height: '255px' });
        $(this).css('backgroundPosition', 'bottom left');
        open = true;
    } else {
        $('.navbar-fixed-bottom').animate({ height: '0px' });
        $(this).css('backgroundPosition', 'top left');
        open = false;
    }
});

$(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form-distributor').validator();


    // when the form is submitted
    $('#contact-form-distributor').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact-form-distributor.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    // data = JSON object that contact-distributor.php returns

                    // we recieve the type of the message: success x danger and apply it to the
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#contact-form-distributor').find('.messages').html(alertBox);
                        // empty the form
                        $('#contact-form-distributor')[0].reset();
                    }
                    return false;
                }
            });
            return false;
        }
    })
});

$(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form-distributor').validator();


    // when the form is submitted
    $('#contact-form-distributor').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact-form-brandpromo.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    // data = JSON object that contact-distributor.php returns

                    // we recieve the type of the message: success x danger and apply it to the
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#contact-form-distributor').find('.messages').html(alertBox);
                        // empty the form
                        $('#contact-form-distributor')[0].reset();
                    }
                    return false;
                }
            });
            return false;
        }
    })
});


$(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form-brandpromo').validator();


    // when the form is submitted
    $('#contact-form-brandpromo').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact-form-brandpromo.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    // data = JSON object that contact-distributor.php returns

                    // we recieve the type of the message: success x danger and apply it to the
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#contact-form-brandpromo').find('.messages').html(alertBox);
                        // empty the form
                        $('#contact-form-brandpromo')[0].reset();
                    }
                    return false;
                }
            });
            return false;
        }
    })
});

$('#form_name').focus(function(){
$(this).css('backgroundColor','#2b2a29');
$(this).css('color', 'white');
$(this).css('fontSize', '0.8em');
$(this).css('textTransform', 'none');
});

$('#form_email').focus(function(){
$(this).css('backgroundColor','#2b2a29');
$(this).css('color', 'white');
$(this).css('fontSize', '0.8em');
$(this).css('textTransform', 'none');
});

$('#form_phone').focus(function(){
$(this).css('backgroundColor','#2b2a29');
$(this).css('color', 'white');
$(this).css('fontSize', '0.8em');
$(this).css('textTransform', 'none');
});

$('#form_message').focus(function(){
$(this).css('backgroundColor','#2b2a29');
$(this).css('color', 'white');
$(this).css('fontSize', '0.8em');
$(this).css('textTransform', 'none');
});

// $('#myInput').blur(function(){
// if($(this).val().length > 0) {
// $(this).css('backgroundColor','red');
// } else {
// $(this).css('backgroundColor','white');
// }
// });
