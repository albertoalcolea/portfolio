var MAX_SIZE_ALBUM = 1024;

document.createElement('figure');
document.createElement('figcaption');

$(document).ready(function() {
	var selected = 'renol2';
	change_album(selected);

	$('figcaption').css('top', '-183px');

	$('figure').hover(function() {
		$(this).find('img').stop().animate({'top': '183px'}, 300, function(){});
		$(this).find('figcaption').stop().animate({'top': '0'}, 300, function(){});
	}, function() {
		$(this).find('img').stop().animate({'top': '0'}, 300, function(){});
		$(this).find('figcaption').stop().animate({'top': '-183px'}, 300, function(){});
	});

	$('.cover').click(function() {
		selected = $(this).attr('id').split('-')[1];
		change_album(selected);
	});

	$('.cover').hover(function() {
		$(this).css({ opacity: 1 });
	}, function() {
		if ($(this).attr('id') != 'cover-' + selected) {
			$(this).css({ opacity: 0.3 });
		}
	});

	$(window).resize(function() {
		change_album(selected);
	});
});

function change_album(newAlbum) {
	$('.info-album').css('display', 'none');

	if ( $(document).width() > MAX_SIZE_ALBUM ) {
		$('#' + newAlbum).css('display', 'inline-block');
	} else {
		$('#' + newAlbum).css('display', 'block');
	}

	$('.cover').css({ opacity: 0.3 });
	$('#cover-' + newAlbum).css({ opacity: 1 });
}
