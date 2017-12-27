jQuery( document ).ready(function( $ ) {

    // animations
    $(".green-stripe").show("slide",
        { direction: "left"}, 1000, function(){
            $('.droppin-logo').show('fade', {duration: 500}, function(){
                $('.pin').show("slide", {direction: "up"}, function() {

                    $('.iphone-left, .iphone-right').show('fade', {duration: 500}, function() {



                       $('.site-text').show('fade', 1000);
                    })
                })
            })
        });

    $( "#email-submit" ).submit(function( event ) {
        event.preventDefault();
        var email = $( "input:first" ).val();
        if(validateEmail(email) === true) {
            var params = 'email='+$( "input:first" ).val()+'&safe=GO';
            $.post(templateDir+'/addToDB.php', params, function(msg){
                console.log('msg = '+msg);
                if(msg === 'true') {
                    $('#email-submit').hide();
                    $('.beta-tester').hide();
                    $('.error').hide();
                    $('.thankyou').show();
                } else {
                    $('.error').show();
                }

            });
        } else {
            alert('invalid email');
        }
    });
});

function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}

/* old

$(".green-stripe").show("slide",
        { direction: "left"}, 1000, function(){
            $('.iphone-left, .iphone-right').show('fade', {duration: 500}, function() {
                $('.pin').show("slide", {direction: "down"});
                $('.droppin-logo').show('fade', {duration: 500});
                // show logo animation then show text
                //$('.site-text').show('fade', 1000);
            })
        });
 */