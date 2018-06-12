var openNav = false;

$("body").click(function() {
  if(openNav === true) {
    $('.navbar-fixed-bottom').animate({ height: '0px' });
    $(this).css('backgroundPosition', 'top left');
    openNav = false;
  }
})

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


$('#footerSlideButton').click(function (e) {
    e.stopPropagation();
    if(openNav === false) {
        $('.navbar-fixed-bottom').animate({ height: '255px' });
        $(this).css('backgroundPosition', 'bottom left');
        openNav = true;
    } else {
        $('.navbar-fixed-bottom').animate({ height: '0px' });
        $(this).css('backgroundPosition', 'top left');
        openNav = false;
    }
});

jQuery("#inatureskincare, #lucaspapaw, #wotnot").hover(function(){
        jQuery(this).css( 'cursor', 'pointer' );
        jQuery(this).find('h2').toggleClass("hover");
    });

jQuery("#inatureskincare, #lucaspapaw, #wotnot").click(function(){
        window.open($(this).find("a").attr("href"));
       return false;
    });

jQuery("#shopinature, #shoplucaspapaw, #shopwotnot").click(function(){
        window.open($(this).find("a").attr("href"));
       return false;
    });

    $(function () {
      $('#joinbutton').on('click', function (event) {
          event.preventDefault();
        alert("Huh");
        var email = 'info@inatureskincare.com';
        var subject = 'Enquiry to join INS';
        var emailBody = '';
        window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
      });
    });

$(function () {

    $('#contact-form-distributor').validator();
    $('#contact-form-distributor').on('submit', function (e) {

        if (!e.isDefaultPrevented()) {
            var url = "contact-form-distributor.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                    if (messageAlert && messageText) {

                        $('#contact-form-distributor').find('.messages').html(alertBox);

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

    $('#contact-form-distributor').validator();
    $('#contact-form-distributor').on('submit', function (e) {

        if (!e.isDefaultPrevented()) {
            var url = "contact-form-brandpromo.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                    if (messageAlert && messageText) {
                        $('#contact-form-distributor').find('.messages').html(alertBox);
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

    $('#contact-form-brandpromo').validator();
    $('#contact-form-brandpromo').on('submit', function (e) {

        if (!e.isDefaultPrevented()) {
            var url = "contact-form-brandpromo.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                    if (messageAlert && messageText) {
                        $('#contact-form-brandpromo').find('.messages').html(alertBox);
                        $('#contact-form-brandpromo')[0].reset();
                    }
                    return false;
                }
            });
            return false;
        }
    })
});
