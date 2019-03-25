export function getList(sentence) {
	var words = sentence.split(' ');
	var finalList = [];
	var vo = words.map((word, index) => {
		var splitted = word.split('');
		var currentList = [];
		for (var i = 0; i < splitted.length; i++) {
			if (isVo(splitted[i])) {
				if (matcher(word.substring(i))) {
					currentList.push(matcher(word.substring(i)));
					i = i + matcher(word.substring(i)).length;
				}
			}
		}
		finalList.push(currentList);
	});
	console.log(finalList);
	return finalList;
}

function matcher(sentence) {
	if (sentence.substring(0, 1).includes('a')) {
		if (sentence.substring(0, 2).includes('an')) {
			return 'an';
		} else if (sentence.substring(0, 2).includes('ai')) {
			return 'ai';
		} else if (sentence.substring(0, 2).includes('am')) {
			return 'am';
		} else if (sentence.substring(0, 3).includes('ain')) {
			return 'ain';
		} else if (sentence.substring(0, 2).includes('au')) {
			return 'au';
		} else {
			return 'a';
		}
	} else if (sentence.substring(0, 1).includes('e')) {
		if (sentence.substring(0, 3).includes('eau')) {
			return 'eau';
		} else if (sentence.substring(0, 2).includes('eu')) {
			return 'eu';
		} else if (sentence.substring(0, 2).includes('en')) {
			return 'en';
		} else if (sentence.substring(0, 2).includes('ei')) {
			return 'ei';
		} else if (sentence.substring(0, 2).includes('em')) {
			return 'em';
		} else if (sentence.substring(0, 2).includes('er')) {
			return 'er';
		} else if (sentence.substring(0, 2).includes('ez')) {
			return 'ez';
		} else if (sentence.substring(0, 2).includes('es')) {
			return 'es';
		} else if (sentence.substring(0, 3).includes('ein')) {
			return 'ein';
		} else if (sentence.substring(0, 3).includes('est')) {
			return 'est';
		} else {
			return 'e';
		}
	} else if (sentence.substring(0, 1).includes('i')) {
		if (sentence.substring(0, 2).includes('in')) {
			return 'in';
		} else if (sentence.substring(0, 2).includes('im')) {
			return 'im';
		} else if (sentence.substring(0, 3).includes('ien')) {
			return 'ien';
		} else {
			return 'i';
		}
	} else if (sentence.substring(0, 1).includes('o')) {
		if (sentence.substring(0, 3).includes('ou')) {
			return 'ou';
		} else if (sentence.substring(0, 3).includes('oi')) {
			return 'oi';
		} else if (sentence.substring(0, 3).includes('on')) {
			return 'on';
		} else if (sentence.substring(0, 3).includes('oin')) {
			return 'oin';
		} else {
			return 'o';
		}
	} else if (sentence.substring(0, 1).includes('u')) {
		if (sentence.substring(0, 2).includes('ui')) {
			return 'ui';
		} else {
			return 'u';
		}
	} else if (sentence.substring(0, 1).includes('é')) {
		return 'é';
	} else if (sentence.substring(0, 1).includes('è')) {
		return 'è';
	} else {
		return false;
	}
}

function isVo(letter) {
	return [ 'a', 'e', 'i', 'o', 'u', 'y' ].includes(letter);
}
