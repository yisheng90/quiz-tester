//Questions Set

// Math
var question1 = new Question('Which of the following is a subset of  {b, c, d}?', ['{ }', '{a}', '{1 , 2 , 3} ', '{a, b, c}'], 0)
var question2 = new Question('The value of 5 in the number  357.21 is', ['5 tenths', '5 ones', '5 tens', '5 hundreds'], 2)
var question3 = new Question('In coordinate geometry, the equation of the x-axis is  ', ['y = x', 'y = 0', 'x = 0', 'y = 1'], 1)
var question4 = new Question('3x - 4(x + 6) =', ['x + 6', '-x - 24', '7x + 6', '-7x - 24'], 1)
var question5 = new Question('3 4/5 expressed as a decimal is', ['3.40', '3.45', '3.50', '3.80', '3.90'], 3)
var question6 = new Question('Which of the following is the Highest Common Factor of 18, 24 and 36?', ['6', '18', '36', '72'], 0)
var question7 = new Question('If  -2<-x/2< 4 ,  then', ['4 > x < -8', '4 < x > -8', '4 < x < -8', '4 > x > -8'], 3)
var question8 = new Question('Items bought by a trader for $80 are sold for $100. The profit expressed as a percentage of cost price is', ['2.5%', '20%', '25%', '50%'], 2)

var math = new Quiz([question1, question2, question3, question4, question5, question6, question7, question8], 'math')

// science
var science1 = new Question('Brass gets discoloured in air because of the presence of which of the following gases in air?', ['Oxygen', 'Hydrogen sulphide', 'Carbon dioxide', 'Nitrogen'], 1)
var science2 = new Question('Which of the following is a non metal that remains liquid at room temperature?', ['Phosphorous', 'Bromine', 'Chlorine', 'Helium'], 1)
var science3 = new Question('Chlorophyll is a naturally occurring chelate compound in which central metal is', ['Copper', 'Magnesium', 'Iron', 'Calcium'], 1)
var science4 = new Question('Which of the following is used in pencils?', ['Graphite', 'Silicon', 'Charcoal', 'Phosphorous'], 0)
var science5 = new Question('Which of the following metals forms an amalgam with other metals?', ['Tin', 'Mercury', 'Lead', 'Zinc'], 1)
var science6 = new Question('The gas usually filled in the electric bulb is', ['Oxygen', 'Hydrogen sulphide', 'Carbon dioxide', 'Nitrogen'], 3)
var science7 = new Question('Washing soda is the common name for', ['Sodium bicarbonate', 'Calcium bicarbonate', 'Sodium carbonate', 'Calcium carbonate'], 2)
var science8 = new Question('Which of the gas is not known as green house gas?', ['Hydrogen', 'Nitrus Oxide', 'Carbon dioxide', 'Mathane'], 0)

var science = new Quiz([science1, science2, science3, science4, science5, science6, science7, science7], 'science')

// sportss
var sports1 = new Question('Which was the 1st non Test playing country to beat India in an international match?', ['Canada', 'Sri Lanka', 'Zimbabwe', 'East Afica'], 1)
var sports2 = new Question('Track and field star Carl Lewis won how many gold medals at the 1984 Olympic games?', ['One', 'Two', 'Four', 'Eight'], 2)
var sports3 = new Question('Who was the first Indian to win the World Amateur Billiards title?', ['Geet Sethi', 'Wilson Jones', 'Michael Ferreira', 'Manoj Kothari'], 1)
var sports4 = new Question('Which NBA player scored 8 points in the final 7 seconds of a game to lead his team to victory?', ['Baron Davis', 'Kevin Garnett', 'Stephon Maurbury', 'Reggie Miller'], 3)
var sports5 = new Question('How long are professional Golf Tour players allotted per shot?', ['45 seconds', '25 seconds', '1 minute', '2 minutes'], 0)
var sports6 = new Question('Who won the 1993 "King of the Ring"?', ['Owen Hart', 'Bret Hart', 'Edge', 'Mabel'], 1)
var sports7 = new Question('Which country won the Cricket World Cup in 1999?', ['Australia',, 'South Africa', 'Pakistan', 'England'], 0)
var sports8 = new Question('Who did The Rock beat to win his first WWE Title?', ['Triple H', 'Stone Cold Steve Austin', 'Mankind', 'Bret Hart'], 2)

var sports = new Quiz([sports1, sports2, sports3, sports4, sports5, sports6, sports7, sports8], 'sports')


var language1 = new Question('I ..... tennis every Sunday morning.', ['Playing', 'Play', 'Am playing', 'Am play'], 1)
var language2 = new Question('Don\'t make so much noise. Noriko ..... to study for her ESL test!', ['Try', 'Tries', 'Tried', 'Is trying'], 3)
var language3 = new Question('Jun-Sik ..... his teeth before breakfast every morning.', ['Will cleaned', 'Is cleaning', 'Cleans', 'Clean'], 2)
var language4 = new Question('Sorry, she can\'t come to the phone. She ..... a bath!', ['Is having', 'Having', 'Have', 'Has'], 0)
var language5 = new Question('..... many times every winter in Frankfurt.', ['It snows', 'It snowed', 'It is snowing', 'It is snow'], 0)
var language6 = new Question('How many students in your class ..... from Korea?', ['Comes', 'Come', 'Came', 'Are coming'], 1)
var language7 = new Question('Weather report: \"It\'s seven o\'clock in Frankfurt and ..... .\"', ['There is snow',, 'It\'s snowing', 'It snows', 'It snowed'], 1)
var language8 = new Question('Babies ..... when they are hungry.', ['Cry', 'Cries', 'Cried', 'Are crying'], 0)

var language = new Quiz([language1, language2, language3, language4, language5, language6, language7, language8], 'language')