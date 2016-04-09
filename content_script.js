function replace_player(IdName) {
	console.log('replace_player start!');
	var elems = document.getElementById(IdName);
	var child = document.getElementById("movie_player");
	elems.removeChild(child);
	elems.innerHTML = '<iframe src="http://v.rpsofts.com/i.php?url='
						+document.location.href
						+'" frameborder="0" autoplay="1" scrolling="1" width="100%" height="100%" allowtransparency></iframe>';
	console.log('replace_player done!');
}

if(document.getElementById('player')){
	replace_player('player');
}
