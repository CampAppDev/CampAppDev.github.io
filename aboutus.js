$(document).ready(function () {


    $('.team-member a').click(function () {

        var selected = $(this).attr('value');
        var id = "#" + selected;
        
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



});