'use strict';

//requiring the modules
var request = require('request'),
	cheerio = require('cheerio'),
	urls = [],
	nutritions = [];

//scrapping the list of foods
request('http://www.myfitnesspal.com/food', function(error, response, body){
	if(!error && response.statusCode == 200){
		var $ = cheerio.load(body);
		
		//selecting the class food_description and anchor element
		$('.food_description a').each(function(){
			//selecting the text of the element selected
			var url = $(this).text();
			//pushing the data to the urls array
			urls.push(url);
		});
		
		//console.log(urls);

	}
});

//scrapping the nutritional values
request('http://www.myfitnesspal.com/food/calories/homemade-chicken-salad-filling-210105188', function(error, response, body){
	if(!error && response.statusCode == 200){
		var $ = cheerio.load(body);
		
		//selecting the id value nutrition-facts and the td element
		$('#nutrition-facts td').each(function(){
			//selecting the text of the element selected
			var nutrition = $(this).text();
			//pushing the data to the nutritions array
			nutritions.push(nutrition);
		});
		
		//display the nutritions array data in the console
		console.log(nutritions);

	}
});