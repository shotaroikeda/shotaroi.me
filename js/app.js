var main = function () {
    // Navigation bar handling
    // Use a pseudo disappearing effect
    $('.navi-bar').hover(
	function() {
	    $('.inactive').animate({
		"color" : "black"
	    });
	},
	function() {
	    $('.inactive').animate({
		"color" : "white"
	    });
	}
    );

    // Simulate Navi-bar's hovering

    $('#navi-home').hover(
	function () {
	    $(this).finish();
	    $(this).animate({
		"border-bottom-width": "5px"
	    });
	},
	function () {
	    $(this).finish();
	    if ($(this).hasClass("active")) {
		$(this).animate({
		    "border-bottom-width": "5px"
		});
	    }
	    else {
		$(this).animate({
		    "border-bottom-width": "0px"
		});
	    }
	});

    $('#navi-products').hover(
	function () {
	    $(this).finish();
	    $(this).animate({
		"border-bottom-width": "5px"
	    });
	},
	function () {
	    $(this).finish();
	    if ($(this).hasClass("active")) {
		$(this).animate({
		    "border-bottom-width": "5px"
		});
	    }
	    else {
		$(this).animate({
		    "border-bottom-width": "0px"
		});
	    }
	});

    $('#navi-about').hover(
	function () {
	    $(this).finish();
	    $(this).animate({
		"border-bottom-width": "5px"
	    });
	},
	function () {
	    $(this).finish();
	    if ($(this).hasClass("active")) {
		$(this).animate({
		    "border-bottom-width": "5px"
		});
	    }
	    else {
		$(this).animate({
		    "border-bottom-width": "0px"
		});
	    }
	});

    $('#navi-contact').hover(
	function () {
	    $(this).finish();
	    $(this).animate({
		"border-bottom-width": "5px"
	    });
	},
	function () {
	    $(this).finish();
	    if ($(this).hasClass("active")) {
		$(this).animate({
		    "border-bottom-width": "5px"
		});
	    }
	    else {
		$(this).animate({
		    "border-bottom-width": "0px"
		});
	    }
	});
    // handling clicked navi-bar elements
    $('#navi-home').click(function () {
	$('.active').addClass('inactive');
	$('.active').removeClass('active');
	$(this).addClass('active');
	$(this).removeClass('inactive');

	$('.inactive').finish().animate({
	    "border-bottom-width": "0px"
	});

    });
    $('#navi-products').click(function () {
	$('.active').addClass('inactive');
	$('.active').removeClass('active');
	$(this).addClass('active');
	$(this).removeClass('inactive');

	$('.inactive').finish().animate({
	    "border-bottom-width": "0px"
	});

    });
    $('#navi-about').click(function () {
	$('.active').addClass('inactive');
	$('.active').removeClass('active');
	$(this).addClass('active');
	$(this).removeClass('inactive');

	$('.inactive').finish().animate({
	    "border-bottom-width": "0px"
	});

    });
    $('#navi-contact').click(function () {
	$('.active').addClass('inactive');
	$('.active').removeClass('active');
	$(this).addClass('active');
	$(this).removeClass('inactive');

	$('.inactive').finish().animate({
	    "border-bottom-width": "0px"
	});

    });

    $('.arrow-left').click(function() {
	var currentPanel = $('.active-panel');
	var prevPanel = currentPanel.prev();

	if (prevPanel.length === 0) {
	    prevPanel = $('.slide').last();
	}

	currentPanel.hide("slide", {direction: "right"}, 1000);
	currentPanel.removeClass("active-panel");

	prevPanel.show("slide", {direction: "left"}, 1000);
	prevPanel.addClass("active-panel");
    })

    /* Default functions to run once when loading index.html*/
    $('.slide-panels div:not(.active-panel)').hide();
};

/*
  var naviHoverOn = function (element) {
  $(element).animate({
  "border-bottom": "5px solid #FF85CB"
  });
  };

  var naviHoverOff = function(element) {
  if ($(element).hasClass("active")) {
  $(element).animate({
  "border-bottom": "5px solid #53BBF4"
  });
  }
  else {
  $(element).animate({
  "border-bottom": "none"
  });
  }
  };
*/

$(document).ready(main);
