'use strict';

var request = require('request'),
	cheerio = require('cheerio'),
	urls = [],
	nutritions = [];

//scrapping the list of foods
request('http://www.myfitnesspal.com/food', function(error, response, body){
	if(!error && response.statusCode == 200){
		var $ = cheerio.load(body);
		
		$('.food_description a').each(function(){
			var url = $(this).text();
			urls.push(url);
		});
		
		//console.log(urls);

	}
});

//scrapping the nutritional values
request('http://www.myfitnesspal.com/food/calories/homemade-chicken-salad-filling-210105188', function(error, response, body){
	if(!error && response.statusCode == 200){
		var $ = cheerio.load(body);
		
		$('#nutrition-facts td').each(function(){
			var nutrition = $(this).text();
			nutritions.push(nutrition);
		});
		
		console.log(nutritions);

	}
});