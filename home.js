//$(document).ready(function(){

//    $('#subscribe').click(function () {

//        var email = $('#subscribeEmail').val();
//        if (is_valid_email(email)) {

//            add_subscriber(email);
//        }
//        else {
//            alert("failed!")
//        }
//    });

//    $('#subscribeEmail').keyup(function () {
//        var email = this.text;
//        if (is_valid_email) {
//            $('#subscribe').addClass('green');
//        }
//        else {
//            $('#subscribe').removeClass('green');
//        }
//    })

//});


//var is_valid_email = function (email) {

//    if (email == ""){
//        return false;
//    }
//    else{

//        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//        return regex.test(email);
//    }
//}

//var add_subscriber = function (sub) {

//    data = { email: sub + "\n" };

//    $.ajax({

//        url: 'Home/Subscribe/',
//        data:JSON.stringify(data),
//        type: 'POST',
//        dataType: 'json',
//        contentType: "application/json; charset=utf-8",
//        success:function(result){
//            console.log("Successfully added!"); 
//        },
//        error: function (xhr, status, error) {
//            console.log(error);
//        }


//    });


//}



$(document).ready(function () {


    $('#prev').click(function () {

        var current = $('#current_slide').val();
        var total = $('.slide').length;

        var new_slide = current > 0 ? (current - 1) % total : total - 1;

        $('#current_slide').val(new_slide);
       

        $('.slide').each(function () {

            if ($(this).attr('number') == new_slide) {
                $(this).addClass('current');
            }
            else {
                if ($(this).hasClass('current')) {
                    $(this).removeClass('current');
                }
            }

        });

    });

    $('#next').click(function () {

        var current = $('#current_slide').val();
        var total = $('.slide').length;

        var new_slide = (current + 1) % (total);
        $('#current_slide').val(new_slide);


        $('.slide').each(function () {

            if ($(this).attr('number') == new_slide) {
                $(this).addClass('current');
            }
            else {
                if ($(this).hasClass('current')) {
                    $(this).removeClass('current');
                }
            }

        });

    });

})
