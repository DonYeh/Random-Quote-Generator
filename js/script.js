// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var intervalID = setInterval(printQuote, 30000);     //sets a timer interval for 30 seconds

var quotes = [
	{
	    quote: 'Don\'t cry because it\'s over, smile because it happened.',
	    source: ' Dr. Seuss',
	    tags:  ['advice','appreciation','happy', 'smile']
	},
	{
		quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
		source: ' Albert Einstein',
		tags: ['funny', 'humanity','life']
	},
	{
		quote:'I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
		source: ' Maya Angelou',
		tags: ['perspective','kindness','love']
	},
	{
		quote:'Live as if you were to die tomorrow. Learn as if you were to live forever.',
		source: ' Mahatma Gandhi',
		tags: ['life','learning','advice','appreciation' ]
	},
	{
		quote:'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
		source: ' Ralph Waldo Emerson',
		tags: ['identity','independence','courage']
	},
	{
		quote:'Our greatest glory is not in never falling, but in rising every time we fall',
		source: ' Confucius',
		tags: ['success','failure','challenges','identity']
	},
	{
		quote:'The richest man is not he who has the most, but he who needs the least.',
		source: ' unknown author',
		tags: ['happiness','appreciation','identity']
	},
	{
		quote: 'You miss 100 percent of the shots you never take.',
		source: ' Wayne Gretzky',
		tags: ['sports','success','failure','challenges']
	},
	{
		quote:'Courage is not the absence of fear, but rather the judgement that something else is more important than fear.',
		source: ' Ambrose Redmoon',
		tags: ['courage','fear','motivational']
	},
	{
		quote:'Your time is limited, so don\'t waste it living someone else\'s life.',
		source: ' Steve Jobs',
		tags: ['identity', 'independence','life']
	},
	{
		quote:'You can never cross the ocean until you have the courage to lose sight of the shore',
		source: ' Christopher Columbus',
		tags: ['courage', 'success', 'fear','motivational']
	},
	{
		quote:'It does not matter how slowly you go as long as you do not stop',
		source: ' Confucius',
		tags: ['motivational','perserverence','success']
	},
	{
		quote:'The mind is everything. What you think you become',
		source: ' Buddha',
		tags: ['inspirational', 'positivity', 'belief']
	},

];

var viewedQuotes = [];                                          // array to hold viewed quotes


function getRandomQuote() {
	var randNum = Math.floor(Math.random() * quotes.length);    // creates a random number in order to choose a quote from the array
	var splicedQuote = quotes.splice(randNum, 1)[0];      // splices the random quote out from the main list of quotes
	viewedQuotes.push(splicedQuote);                            // adds the random quote to the list of view quotes
	if(quotes.length === 0) {							
		quotes = viewedQuotes;									// if empty, transfers the quotes from the viewed quotes to the main quotes
		viewedQuotes = [];
	}
	return splicedQuote;                                        // returns the random quote
}

function printQuote() {
	clearInterval(intervalID);                                  //clears the timer interval
	intervalID = setInterval(printQuote, 30000);				//resets the timer interval
	var returnedQuote = getRandomQuote();                       //returns a random quote (object) from the quotes array
	var quote = '<p class="quote">' + returnedQuote.quote + '</p>';
	    quote += '<p class="source">' + returnedQuote.source + '</p>';
	var randomColor = getRandomBackgroundColor();
	document.getElementById('quote-box').innerHTML = quote;
	document.body.style.backgroundColor = randomColor;
	return returnedQuote;
}

function getRandomBackgroundColor() {
  var red = Math.floor(Math.random() * 256 ); //declaring a variable for the red value
  var green = Math.floor(Math.random() * 256 ); //declaring a variable for the green value
  var blue  = Math.floor(Math.random() * 256 ); //declaring a variable for the red value
  var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')'; //combines the red, green and blue values to form the rgb value and stores it in the rgbColor variable
  return rgbColor;
}


