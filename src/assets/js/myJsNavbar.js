// code js du composant navbar
import $ from 'jquery';
$(document).ready(function () {
	$('.navbar-light .dmenu').hover(function () {
			$(this).find('.sm-menu').first().stop(true, true).slideDown(150);
		}, function () {
			$(this).find('.sm-menu').first().stop(true, true).slideUp(105)
		});
	}); 