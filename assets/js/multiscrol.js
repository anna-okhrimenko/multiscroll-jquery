$(document).ready(function() {
	$('#multiscroll').multiscroll({
        scrollingSpeed: 1500,
        // navigation: true,
        loopBottom: true,
		loopTop: true,
    });

    $('.slide-up').click(function() {
        $('#multiscroll').multiscroll.moveSectionUp();
    });

    $('.slide-down').click(function() {
        $('#multiscroll').multiscroll.moveSectionDown();
    });

    $('.move-navigation button').click(function() {
        let slideNumber = $(this).attr('data-slide');
        $('#multiscroll').multiscroll.moveTo(slideNumber);
    });
    
    
});