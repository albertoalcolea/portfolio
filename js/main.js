//$("#projects-list article:nth-child(3n+3)").css("margin-right", 0);

document.createElement('figure');
document.createElement('figcaption');

$(document).ready(function() {
	var selected = change_album('renol2');

	$('figcaption').css('top', '-183px');

	$('figure').hover(function() {
		$(this).find('img').stop().animate({'top': '183px'}, 300, function(){});
		$(this).find('figcaption').stop().animate({'top': '0'}, 300, function(){});
	}, function() {
		$(this).find('img').stop().animate({'top': '0'}, 300, function(){});
		$(this).find('figcaption').stop().animate({'top': '-183px'}, 300, function(){});
	});

	$('.cover').click(function() {
		var album = $(this).attr('id').split('-')[1];
		selected = change_album(album);
	});

	$('.cover').hover(function() {
		$(this).css({ opacity: 1 });
	}, function() {
		if ($(this).attr('id') != selected) {
			$(this).css({ opacity: 0.3 });
		}
	});
});


function change_album(newAlbum) {
	$('.info-album').css('display', 'none');
	$('#' + newAlbum).css('display', 'inline-block');

	$('.cover').css({ opacity: 0.3 });
	$('#cover-' + newAlbum).css({ opacity: 1 });

	return 'cover-' + newAlbum;
}
