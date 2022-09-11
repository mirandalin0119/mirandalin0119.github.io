"use strict";
particlesJS('particles-js',

	{
		"particles": {
			"number": {
				"value": 80,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 5,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 6,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "repulse"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true,
		"config_demo": {
			"hide_card": false,
			"background_color": "#b61924",
			"background_image": "",
			"background_position": "50% 50%",
			"background_repeat": "no-repeat",
			"background_size": "cover"
		}
	}

);


$(window).scroll(function () {
	if ($(window).scrollTop() >= 50) {
		$('.navbar').css('background', 'white');
		$('.navbar-brand, .navbar .collapse .navbar-nav a ').css('color', '#1B2745');
		$('.navbar').removeClass('navbar-dark').addClass('navbar-light');
		$('.navbarbg').css('background', 'white');

	} else {
		$('.navbar').css('background', 'transparent');
		$('.navbar-brand, .navbar .collapse .navbar-nav a ').css('color', 'white');
		$('.navbar').removeClass('navbar-light').addClass('navbar-dark');
		$('.navbarbg').css('background', 'transparent');
	}
});

var options = {
	strings: ["designs with a focus on users.", "is detail oriented.", "practices empathy through active listening.", "loves photography and digital editing.", "loves to cook and eat.", "plays piano.", "is Taiwanese-American based in Atlanta."],
	typeSpeed: 40,
	loop: true,
	showCursor: false,
}

var typed = new Typed(".typing", options);

document.querySelector(".align-arrow").addEventListener("click", function () {
	document.getElementById("about").scrollIntoView({ behavior: "smooth" })
});


$.fn.visible = function (partial) {

	var $t = $(this),
		$w = $(window),
		viewTop = $w.scrollTop(),
		viewBottom = viewTop + $w.height(),
		_top = $t.offset().top,
		_bottom = _top + $t.height(),
		compareTop = partial === true ? _bottom : _top,
		compareBottom = partial === true ? _top : _bottom;
	return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

};

$(window).scroll(function (event) {

	$("#portfolio .row, #about .row").each(function (i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("animated fadeInDown");
		}
	});

	$("#portfolio .row").each(function (i, el) {
		var el = $(el);
		if (el.visible(true)) {
			el.addClass("animated fadeInDown");
		}
	});
});
