( function ( $ ) {
	'use strict';

	var orFastType = {
		id: 'or-fasttype',
		name: 'ଫାଷ୍ଟ୍‍ଟାଇପ୍',
		description: 'Odia FastType input method',
		date: '2021-10-15',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: ' Amrutnarayan Panigrahi',
		license: 'GPLv3',
		version: '0.1',
		contextLength: 4,
		maxKeyLength: 2,
		patterns: [
			[ '\\\\([A-Za-z\\>_~\\.0-9])', '\\\\', '$1' ],  // preserve after typing '\'

            ['`' , '୍' ],
			[ '।\\.', '॥' ],
			
			[ 'ାu', 'ୌ' ],
			[ 'ାa', 'ଆ' ],
			[ 'ାo', 'ଅ' ],
			[ 'ାi', 'ୈ' ],
			
			[ 'େe', 'ୀ' ],
			
			[ 'ୋo', 'ୂ' ], 
			[ 'ୋu', 'ୌ' ],
			
			[ 'ିi', 'ୀ' ],
			[ 'େi', 'ୈ' ],
			
			[ 'ୁu', 'ୂ' ],
			
			
			[ '([ଆ-ଔ])a' , '$1ଆ'],
			[ '([ଅ-ଔ])e' , '$1ଏ'],
			[ '([ଅ-ଔ])i' , '$1ଇ'],
			[ '([ଅ-ଔ])o' , '$1ଓ'],
			[ '([ଅ-ଔ])u' , '$1ଉ'],
			[ '([ଅଇ-ଔ])h' , '$1ହ'],
			[ 'ଆh', 'ଆ' ],
			
			
			
			
			
			
			[ '\ a', ' ଆ' ],
			[ '\ e', ' ଏ' ],
			[ '\ f', ' ତ' ],
			[ '\ h', ' ହ' ],
			[ '\ i', ' ଇ' ],
			[ '\ o', ' ଓ' ],
			[ '\ u', ' ଉ' ],			
			
			// Zero width joiner block
			[ '‍a', 'ଆ' ],
			[ '‍e', 'ଏ' ],
			[ '‍f', 'ତ' ],
			[ '‍h', 'ହ' ],
			[ '‍i', 'ଇ' ],
			[ '‍o', 'ଓ' ],
			[ '‍u', 'ଉ' ],
			
			
		    [ 'a', 'ା' ],
			[ 'b', 'ବ' ],
			[ 'c', 'ଚ' ],
			[ 'd', 'ଦ' ],
			[ 'e', 'େ' ],
			[ 'g', 'ଗ' ],
			[ 'i', 'ି' ],
			[ 'j', 'ଜ' ],
			[ 'k', 'କ' ],
			[ 'l', 'ଲ' ],
			[ 'm', 'ମ' ],
			[ 'n', 'ନ' ],
			[ 'o', 'ୋ' ],
			[ 'p', 'ପ' ],
			[ 'q', 'ତ' ],
			[ 'r', 'ର' ],
			[ 's', 'ସ' ],
			[ 't', 'ଟ' ],
			[ 'u', 'ୁ' ],
			[ 'v', 'ଡ' ],
			[ 'w', 'ୱ' ],
			[ 'x', 'କ୍ଷ' ],
			[ 'y', 'ୟ' ],
			[ 'z', 'ଯ' ],


			[ 'A', 'ଅ' ],
			[ 'B', 'ମ୍ବ' ],
			[ 'C', 'ଞ୍ଚ' ],
			[ 'D', 'ନ୍ଦ' ],
			[ 'E', 'ଏ' ],
			[ 'F', '଼' ],
			[ 'G', 'ଙ୍ଗ' ],
			[ 'H', 'ହ' ],
			[ 'I', 'ଇ' ],
			[ 'J', 'ଞ୍ଜ' ],
			[ 'K', 'ଙ୍କ' ],
			[ 'L', 'ଳ' ],
			[ 'M', 'ଂ' ],
			[ 'N', 'ଣ' ],
			[ 'O', 'ଓ' ],
			[ 'P', 'ମ୍ପ' ],
			[ 'Q', 'ନ୍ତ' ],
			[ 'R', 'ୃ' ],
			[ 'S', 'ଷ' ],
			[ 'T', 'ଣ୍ଟ' ],
			[ 'U', 'ଉ' ],
			[ 'V', 'ଣ୍ଡ' ],
			[ 'W', 'ଁ' ],
			[ 'X', 'ଢ଼' ],
			[ 'Y', '୳' ],
			[ 'Z', 'ଡ଼' ],

			[ 'ାh', 'ଆ' ],
			[ 'ବh', 'ଭ' ],
			[ 'ଚh', 'ଛ' ],
			[ 'ଦh', 'ଧ' ],
			[ 'େh', 'ଐ' ],
			[ 'ଗh', 'ଘ' ],
			[ 'ିh', 'ଈ' ],
			[ 'ଜh', 'ଝ' ],
			[ 'କh', 'ଖ' ],
			[ 'ଲh', 'ଳ' ],
			[ 'ୋh', 'ଔ' ],
			[ 'ପh', 'ଫ' ],
			[ 'ତh', 'ଥ' ],
			[ 'ରh', 'ୠ' ],
			[ 'ସh', 'ଶ' ],
			[ 'ଟh', 'ଠ' ],
			[ 'ୁh', 'ଊ' ],
			[ 'ଡh', 'ଢ' ],
			[ 'ୱh', 'ଵ' ],
			[ 'କ୍ଷh', '୵' ],
			[ 'ୟh', 'ଃ' ],
			[ 'ଯh', 'ଽ' ],

			[ 'ାf', '୲' ],
			[ 'ବf', '୍ବ' ],
			[ 'ଚf', '୍ଚ' ],
			[ 'ଦf', '୍ଦ' ],
			[ 'େf', 'ୈ' ],
			[ 'ଗf', '୍ଗ' ],
			[ 'ିf', 'ୀ' ],
			[ 'ଜf', '୍ଜ' ],
			[ 'କf', '୍କ' ],
			[ 'ଲf', '୍ଲ' ],
			[ 'ମf', '୍ମ' ],
			[ 'ନf', '୍ନ' ],
			[ 'ୋf', 'ୌ' ],
			[ 'ପf', '୍ପ' ],
			[ 'ତf', '୍ତ' ],
			[ 'ରf', '୍ର' ],
			[ 'ସf', 'ୡ' ],
			[ 'ଟf', '୍ଟ' ],
			[ 'ୁf', 'ୂ' ],
			[ 'ଡf', '୍ଡ' ],
			[ 'ୱf', '୍ୱ' ],
			[ 'କ୍ଷf', 'ଜ୍ଞ' ],
			[ 'ୟf', '୍ୟ' ],
			[ 'ଯf', '.' ],

			[ 'ଭf', '୍ଭ' ],
			[ 'ଛf', '୍ଛ' ],
			[ 'ଧf', '୍ଧ' ],
			[ 'ଘf', '୍ଘ' ],
			[ 'ଝf', '୍ଝ' ],
			[ 'ଖf', '୍ଖ' ],
			[ 'ଫf', '୍ଫ' ],
			[ 'ଥf', '୍ଥ' ],
			[ 'ଠf', '୍ଠ' ],
			[ 'ଢf', '୍ଢ' ],

			[ 'ଚ/', 'ଞ' ],
			[ 'ଗ/', 'ଙ' ],
			[ 'ଜ/', 'ଞ' ],
			[ 'କ/', 'ଙ' ],
			[ 'ଲ/', 'ଌ' ],
			[ 'ନ/', 'ଣ୍ଣ' ],
			[ 'ର/', 'ର୍' ],
			[ 'ସ/', 'ଷ୍ଣ' ],

			['0','୦'],
			['1','୧'],
			['2','୨'],
			['3','୩'],
			['4','୪'],
			['5','୫'],
			['6','୬'],
			['7','୭'],
			['8','୮'],
			['9','୯'],
			['\\.',' ।'],
			['~','୰'],
			['\\[','‍']
		]
	};

	$.ime.register( orFastType );
}( jQuery ) );
