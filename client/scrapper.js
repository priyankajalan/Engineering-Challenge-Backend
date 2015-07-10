'use strict';

var request = require('request'),
	cheerio = require('cheerio'),
	urls = [],
	nutrition = [];

request('http://www.myfitnesspal.com/food', function(error, response, body){
	if(!error && response.statusCode == 200){
		var $ = cheerio.load(body);
		
		$('.food_description a').each(function(){
			var url = $(this).text();
			urls.push(url);
		});
		
		console.log(urls);
	}
});