$(document).ready(function() {

    function motd(){
        function greeting(d){
            return 'Happy ' + d + '.';
        }

        //Set up the days   
        var d = new Date();
        switch (d.getDay()) {
            case 0:
            var d = 'Sunday'
            return greeting(d);
            break;

            case 1:
            var d = 'Monday';
            return greeting(d);
            break;

            case 2:
            var d = 'Tuesday';
            return greeting(d);
            break;

            case 3:
            var d = 'Wednesday';
            return greeting(d);
            break;

            case 4:
            var d = 'Thursday';
            return greeting(d);
            break;

            case 5:
            var d = 'Friday';
            return greeting(d);
            break;

            case 6:
            var d = 'Saturday';
            return greeting(d);
            break;

            default:
            var d = 'day.';
            return d;
            break;
        }
    }



    function swapImagesAndText(){

        //The Arrows
        var leftArrowClass = '<div class="arrow-left"></div>';      //See line 193 in css.css.
        var rightArrowClass = '<div class="arrow-right"></div>';    //See line 202 in css.css.


        //The Text Swapper
        function swapTheText(productLine) {
            
            var currentSectionTag = $("." + productLine + "-masthead");

            $('.landing-masthead').addClass('off-screen');
            currentSectionTag.removeClass('off-screen');
            currentSectionTag.find('h1').addClass('hover-h1');  //See line 217 in css.css.
            currentSectionTag.find('h2').addClass('hover-h2');  //See line 221 in css.css.
        }


        //The Nodes
        var currentClassChild = $(this).children().attr('class');   //This allows the case statement to check if the current node's child-class matches.
        var badgeClass = $(this).closest('.badge');                 //This will grab a node classed "badge to-left spaced-right" or "badge to-left".


        //The Logic
        switch(currentClassChild) {
            case 'badge-image basecamp':
            swapTheText("basecamp");
            badgeClass.prepend(leftArrowClass);   //This allows us to append div.arrow-left in line 39 in index.html
            break;

            case 'badge-image highrise':
            swapTheText("highrise");
            badgeClass.prepend(leftArrowClass);   //This allows us to append div.arrow-left in line 48 in index.html
            break;

            case 'badge-image campfire':
            swapTheText("campfire");
            badgeClass.prepend(rightArrowClass);  //This allows us to append div.arrow-right in line 57 in index.html
            break;
        }
    }



    function resetImagesAndText(){
        function swapTheText(productLine) {
            $('section').addClass('off-screen');
            $('section').find('h1').removeClass('hover-h1');
            $('section').find('h2').removeClass('hover-h2');
            $("." + productLine + "-masthead").removeClass('off-screen');
        }

        swapTheText("landing");
        $(this).children(".arrow-left").remove();
        $(this).children(".arrow-right").remove();
    }

    
    var motd = motd();
    $('.motd').text(motd);
    $(".badge").on('mouseenter', swapImagesAndText);
    $(".badge").on('mouseleave', resetImagesAndText);
 });