( function ( $ ) {
	'use strict';

	var beKbd = {
		id: 'be-kbd',
		name: 'Belarusian kbd',
		description: 'Belarusian keyboard layout',
		date: '2013-02-09',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Parag Nemade',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '\\`', 'ё' ],
			[ 'q', 'й' ],
			[ 'w', 'ц' ],
			[ 'e', 'у' ],
			[ 'r', 'к' ],
			[ 't', 'е' ],
			[ 'y', 'н' ],
			[ 'u', 'г' ],
			[ 'i', 'ш' ],
			[ 'o', 'ў' ],
			[ 'p', 'з' ],
			[ '\\[', 'х' ],
			[ '\\]', '\'' ],
			[ 'a', 'ф' ],
			[ 's', 'ы' ],
			[ 'd', 'в' ],
			[ 'f', 'а' ],
			[ 'g', 'п' ],
			[ 'h', 'р' ],
			[ 'j', 'о' ],
			[ 'k', 'л' ],
			[ 'l', 'д' ],
			[ ';', 'ж' ],
			[ '\'', 'э' ],
			[ '\\\\', '\\' ],
			[ 'z', 'я' ],
			[ 'x', 'ч' ],
			[ 'c', 'с' ],
			[ 'v', 'м' ],
			[ 'b', 'і' ],
			[ 'n', 'т' ],
			[ 'm', 'ь' ],
			[ ',', 'б' ],
			[ '\\.', 'ю' ],
			[ '/', '.' ],
			[ '\\!', '!' ],
			[ '\\@', '\"' ],
			[ '\\#', '№' ],
			[ '\\$', ';' ],
			[ '\\%', '%' ],
			[ '\\^', ':' ],
			[ '\\&', '?' ],
			[ '\\*', '*' ],
			[ '\\(', '(' ],
			[ '\\)', ')' ],
			[ '\\_', '_' ],
			[ '\\+', '+' ],
			[ '\\~', 'Ё' ],
			[ 'Q', 'Й' ],
			[ 'W', 'Ц' ],
			[ 'E', 'У' ],
			[ 'R', 'К' ],
			[ 'T', 'Е' ],
			[ 'Y', 'Н' ],
			[ 'U', 'Г' ],
			[ 'I', 'Ш' ],
			[ 'O', 'Ў' ],
			[ 'P', 'З' ],
			[ '\\{', 'Х' ],
			[ '\\}', '\'' ],
			[ 'A', 'Ф' ],
			[ 'S', 'Ы' ],
			[ 'D', 'В' ],
			[ 'F', 'А' ],
			[ 'G', 'П' ],
			[ 'H', 'Р' ],
			[ 'J', 'О' ],
			[ 'K', 'Л' ],
			[ 'L', 'Д' ],
			[ ':', 'Ж' ],
			[ '\"', 'Э' ],
			[ '\\|', '|' ],
			[ 'Z', 'Я' ],
			[ 'X', 'Ч' ],
			[ 'C', 'С' ],
			[ 'V', 'М' ],
			[ 'B', 'І' ],
			[ 'N', 'Т' ],
			[ 'M', 'Ь' ],
			[ '\\<', 'Б' ],
			[ '\\>', 'Ю' ],
			[ '\\?', ',' ]
		]

	};
	$.ime.register( beKbd );

}( jQuery ) );