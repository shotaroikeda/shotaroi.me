var navi_hov1 = function() {
    $(this).animate({
        "border-bottom-width": "5px"
    });
}

var navi_hov2 = function () {
    if ($(this).hasClass("active")) {
        $(this).animate({
            "border-bottom-width": "5px"
        }, {queue:false});
    }
    else {
        $(this).finish();
        $(this).animate({
            "border-bottom-width": "0px"
        }, {queue:false});
    }
}

var navi_add_active = function () {
    $('.active').addClass('inactive');
    $('.active').removeClass('active');
    $(this).addClass('active');
    $(this).removeClass('inactive');

    $('.inactive').finish().animate({
        "border-bottom-width": "0px"
    });
}

var navi_add_inactive = function () {
    $('.active').addClass('inactive');
    $('.active').removeClass('active');
    $(this).addClass('active');
    $(this).removeClass('inactive');

    $('.inactive').finish().animate({
        "border-bottom-width": "0px"
    });
}

var main = function () {
    // Navigation bar handling
    // Use a pseudo disappearing effect
    $('.navi-bar').hover(
        function() {
            $('.inactive').animate({
                "color" : "black"
            }, {queue:false});
        },
        function() {
            $(this).finish();
            $('.inactive').animate({
                "color" : "white"
            }, {queue:false});
        }
    );

    // Simulate Navi-bar's hovering

    $('#navi-home').hover(
        navi_hov1,navi_hov2
    );

    $('#navi-projects').hover(
        navi_hov1, navi_hov2
    );

    $('#navi-about').hover(
        navi_hov1, navi_hov2
    );

    $('#navi-contact').hover(
        navi_hov1, navi_hov2
    );

    // handling clicked navi-bar elements
    $('#navi-home').click(navi_add_active);
    $('#navi-projects').click(navi_add_active);
    $('#navi-about').click(navi_add_active);
    $('#navi-contact').click(navi_add_active);

    // Panels
    // Animation for panels
    $('.arrow-left').click(function() {
        var currentPanel = $('.active-panel');
        var prevPanel = currentPanel.prev();

        if (prevPanel.length === 0) {
            prevPanel = $('.slide').last();
        }

        currentPanel.hide("slide", {direction: "right"}, 500, function () {
            prevPanel.show("slide", {direction: "left"}, 500);
            prevPanel.addClass("active-panel");
        }).removeClass("active-panel");
    })

    $('.arrow-right').click(function () {
        var currentPanel = $('.active-panel');
        var nextPanel = currentPanel.next();

        if (nextPanel.length === 0) {
            nextPanel = $('.slide').first();
        }

        currentPanel.hide("slide", {direction: "left"}, 500, function () {
            nextPanel.show("slide", {direction: "right"}, 500);
            nextPanel.addClass("active-panel");
        }).removeClass("active-panel");
    })

    // Arrows that control the panels

    /* Default functions to run once when loading index.html*/
    $('.active-panel').show();
};

var page_logic = function () {
    $('#navi-projects').click(function () {
	var currentPage = $(".active-page");
	var newPage = $(".projects-page"); 

	/*
	currentPage.fadeOut(500);
	newPage.fadeIn(500);
	*/
	currentPage.fadeOut(500).removeClass("active-page").addClass("inactive-page");
	newPage.fadeIn(1000).addClass("active-page").removeClass("inactive-page");
    });

    
}


$(document).ready(page_logic);
$(document).ready(main);

