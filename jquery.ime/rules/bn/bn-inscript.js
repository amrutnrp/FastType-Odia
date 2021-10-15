( function ( $ ) {
	'use strict';

	var bnInScript = {
		id: 'bn-inscript',
		name: 'ইনস্ক্ৰিপ্ট',
		description: 'Bengali InScript input method',
		date: '2012-10-10',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Junaid P V',
		license: 'GPLv3',
		version: '1.0',
		contextLength: 0,
		maxKeyLength: 0,
		patterns: [
			[ 'X', 'ঁ' ],
			[ 'x', 'ং' ],
			[ '_', 'ঃ' ],
			[ 'D', 'অ' ],
			[ 'E', 'আ' ],
			[ 'F', 'ই' ],
			[ 'R', 'ঈ' ],
			[ 'G', 'উ' ],
			[ 'T', 'ঊ' ],
			[ '\\+', 'ঋ' ],
			[ 'S', 'এ' ],
			[ 'W', 'ঐ' ],
			[ 'A', 'ও' ],
			[ 'Q', 'ঔ' ],
			[ 'k', 'ক' ],
			[ 'K', 'খ' ],
			[ 'i', 'গ' ],
			[ 'I', 'ঘ' ],
			[ 'U', 'ঙ' ],
			[ ';', 'চ' ],
			[ '\\:', 'ছ' ],
			[ 'p', 'জ' ],
			[ 'P', 'ঝ' ],
			[ '\\}', 'ঞ' ],
			[ '\'', 'ট' ],
			[ '"', 'ঠ' ],
			[ '\\[', 'ড' ],
			[ '\\{', 'ঢ' ],
			[ 'C', 'ণ' ],
			[ 'l', 'ত' ],
			[ 'L', 'থ' ],
			[ 'o', 'দ' ],
			[ 'O', 'ধ' ],
			[ 'v', 'ন' ],
			[ 'h', 'প' ],
			[ 'H', 'ফ' ],
			[ 'y', 'ব' ],
			[ 'Y', 'ভ' ],
			[ 'c', 'ম' ],
			[ '\\?', 'য' ],
			[ 'j', 'র' ],
			[ 'J', 'ৎ' ],
			[ 'n', 'ল' ],
			[ 'M', 'শ' ],
			[ '\\<', 'ষ' ],
			[ 'm', 'স' ],
			[ 'u', 'হ' ],
			[ '\\]', '়' ],
			[ 'e', 'া' ],
			[ 'f', 'ি' ],
			[ 'r', 'ী' ],
			[ 'g', 'ু' ],
			[ 't', 'ূ' ],
			[ '\\=', 'ৃ' ],
			[ 's', 'ে' ],
			[ 'w', 'ৈ' ],
			[ 'a', 'ো' ],
			[ 'q', 'ৌ' ],
			[ 'd', '্' ],
			[ '/', 'য়' ],
			[ '\\>', '৤' ],
			[ '0', '০' ],
			[ '1', '১' ],
			[ '2', '২' ],
			[ '3', '৩' ],
			[ '4', '৪' ],
			[ '5', '৫' ],
			[ '6', '৬' ],
			[ '7', '৭' ],
			[ '8', '৮' ],
			[ '9', '৯' ],
			[ 'z', 'ʼ' ],
			[ '\\!', 'অ্যা' ],
			[ '\\#', '্র' ],
			[ '\\$', 'র্' ],
			[ '\\%', 'জ্ঞ' ],
			[ '\\^', 'ত্র' ],
			[ '\\&', 'ক্ষ' ],
			[ '\\*', 'শ্র' ],
			[ '\\(', '\u200D' ],
			[ '\\)', '\u200C' ] ],
		patterns_x: [
			[ 'F', 'ঌ' ],
			[ '\\>', 'ঽ' ],
			[ '\\=', 'ৠ' ],
			[ 'l', 'ৎ' ],
			[ '\\[', 'ড়' ],
			[ '\\{', 'ঢ়' ],
			[ '\\+', 'ৠ' ],
			[ 'R', 'ৡ' ],
			[ 'f', 'ৢ' ],
			[ 'r', 'ৣ' ],
			[ '\\.', '৥' ],
			[ 'x', '৺' ],
			[ '\\<', '৲' ],
			[ ',', '৳' ],
			[ '\\!', '৴' ],
			[ '\\@', '৵' ],
			[ '\\#', '৶' ],
			[ '\\$', '৷' ],
			[ '\\%', '৸' ],
			[ '\\^', '৹' ],
			[ '\\?', '৻' ],
			[ '4', '₹' ] ]
	};

	$.ime.register( bnInScript );
}( jQuery ) );
