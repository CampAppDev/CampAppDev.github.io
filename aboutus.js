$(document).ready(function () {

    var url = document.URL;
    var id = url.substring(url.lastIndexOf('?') + 1);
    var found = false;


    $('.team-member a').each(function () {

            var link = $(this);
            if (link.attr('value') == id) {
                if (!link.hasClass('selected')) {
                    link.addClass('selected');
                }
                found = true;
            }
            else {
                if (link.hasClass('selected')) {

                    link.removeClass("selected");
                }
            }
    });

    $('.about').each(function(){
        var link = $(this);
            if (this.id == id) {
                if (!link.hasClass('current')) {
                    link.addClass('current');
                }
                found = true;
            }
            else {
                if (link.hasClass('current')) {
                    link.removeClass("current");
                }
            }
    });

    $('.team-member a').click(function () {

        var selected = $(this).attr('value');
        
        $('.team-member a').each(function () {

            var link = $(this);
            if (link.attr('value') == selected) {
                if (!link.hasClass('selected')) {
                    link.addClass('selected');
                }
            }
            else {
                if (link.hasClass('selected')) {

                    link.removeClass("selected");
                }
            }
        });

        $('.about').each(function () {
            var about = $(this);
            if (this.id == selected) {
                if (!about.hasClass('current')) {
                    about.addClass('current');

                }
            }

            else {

                if (about.hasClass('current')) {
                    about.removeClass('current');

                }
            }


        });

    });

    if (!found){
        console.log("Here");
            $('#default').trigger('click');
    }




});