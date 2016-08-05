var quotes = [
	{
	    quote: 'Don\'t cry because it\'s over, smile because it happened.',
	    source: '- Dr. Seuss'
	},
	{
		quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
		source: '- Albert Einstein'
	},
	{
		quote:'I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
		source: '- Maya Angelou'
	},
	{
		quote:'Live as if you were to die tomorrow. Learn as if you were to live forever.',
		source: '- Mahatma Gandhi'
	},
	{
		quote:'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
		source: '- Ralph Waldo Emerson'
	},
	{
		quote:'Our greatest glory is not in never falling, but in rising every time we fall',
		source: '- Confucius'
	},
	{
		quote:'The richest man is not he who has the most, but he who needs the least.',
		source: '- unknown author'
	},
	{
		quote: 'You miss 100 percent of the shots you never take.',
		source: '- Wayne Gretzky'
	},
	{
		quote:'Courage is not the absence of fear, but rather the judgement that something else is more important than fear.',
		source: '- Ambrose Redmoon'
	},
	{
		quote:'Your time is limited, so don\'t waste it living someone else\'s life.',
		source: '- Steve Jobs'
	},
	{
		quote:'You can never cross the ocean until you have the courage to lose sight of the shore',
		source: '- Christopher Columbus'
	},
	{
		quote:'It does not matter how slowly you go as long as you do not stop',
		source: '- Confucius'
	},
	{
		quote:'The mind is everything. What you think you become',
		source: '- Buddha'
	},

];

function getRandomQuote() {
		var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]; //creates a variable with a random quote from the quotes array 	
		return randomQuote;
	}

function printQuote() {
	var returnedQuote = getRandomQuote(); //returns a random quote (object) from the quotes array
	var quote = "<p class="quote">" + returnedQuote.quote + "</p>";
	    quote += "<p class="source">" + returnedQuote.source + "</p>";
	    // <span class="citation"> [citation here] </span> <span class="year"> [year here] </span> </p>
	document.getElementById('quote-box').innerHTML = quote;
	return returnedQuote
}


