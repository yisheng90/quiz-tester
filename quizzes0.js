
// question constructor
function Question (prompt, options, answer) {
  this.prompt = prompt
  this.options = options
  this.correctAnswerIndex = answer
}

var question1 = new Question('Which of the following is a subset of  {b, c, d}?', ['{ }', '{a}', '{1 , 2 , 3} ', '{a, b, c}'], 0)
var question2 = new Question('The value of 5 in the number  357.21 is', ['5 tenths', '5 ones', '5 tens', '5 hundreds'], 2)
var question3 = new Question('In coordinate geometry, the equation of the x-axis is  ', ['y = x', 'y = 0', 'x = 0', 'y = 1'], 1)
var question4 = new Question('3x - 4(x + 6) =', ['x + 6', '-x - 24', '7x + 6', '-7x - 24'], 1)
var question5 = new Question('3 4/5 expressed as a decimal is', ['3.40', '3.45', '3.50', '3.80', '3.90'], 3)
var question6 = new Question('Which of the following is the Highest Common Factor of 18, 24 and 36?', ['6', '18', '36', '72'], 0)
var question7 = new Question('If  -2<-x/2< 4 ,  then', ['4 > x < -8', '4 < x > -8', '4 < x < -8', '4 > x > -8'], 3)
var question8 = new Question('Items bought by a trader for $80 are sold for $100. The profit expressed as a percentage of cost price is', ['2.5%', '20%', '25%', '50%'], 2)

var science1 = new Question('Brass gets discoloured in air because of the presence of which of the following gases in air?', ['Oxygen', 'Hydrogen sulphide', 'Carbon dioxide', 'Nitrogen'], 1)
var science2 = new Question('Which of the following is a non metal that remains liquid at room temperature?', ['Phosphorous', 'Bromine', 'Chlorine', 'Helium'], 1)
var science3 = new Question('Chlorophyll is a naturally occurring chelate compound in which central metal is', ['Copper', 'Magnesium', 'Iron', 'Calcium'], 1)
var science4 = new Question('Which of the following is used in pencils?', ['Graphite', 'Silicon', 'Charcoal', 'Phosphorous'], 0)
var science5 = new Question('Which of the following metals forms an amalgam with other metals?', ['Tin', 'Mercury', 'Lead', 'Zinc'], 1)
var science6 = new Question('The gas usually filled in the electric bulb is', ['Oxygen', 'Hydrogen sulphide', 'Carbon dioxide', 'Nitrogen'], 3)
var science7 = new Question('Washing soda is the common name for', ['Sodium bicarbonate', 'Calcium bicarbonate', 'Sodium carbonate', 'Calcium carbonate'], 2)
var science8 = new Question('Which of the gas is not known as green house gas?', ['Hydrogen', 'Nitrus Oxide', 'Carbon dioxide', 'Mathane'], 0)

var sport1 = new Question('Which was the 1st non Test playing country to beat India in an international match?', ['Canada', 'Sri Lanka', 'Zimbabwe', 'East Afica'], 1)
var sport2 = new Question('Track and field star Carl Lewis won how many gold medals at the 1984 Olympic games?', ['One', 'Two', 'Four', 'Eight'], 2)
var sport3 = new Question('Who was the first Indian to win the World Amateur Billiards title?', ['Geet Sethi', 'Wilson Jones', 'Michael Ferreira', 'Manoj Kothari'], 1)
var sport4 = new Question('Which NBA player scored 8 points in the final 7 seconds of a game to lead his team to victory?', ['Baron Davis', 'Kevin Garnett', 'Stephon Maurbury', 'Reggie Miller'], 3)
var sport5 = new Question('	How long are professional Golf Tour players allotted per shot?', ['45 seconds', '25 seconds', '1 minute', '2 minutes'], 0)
var sport6 = new Question('Who won the 1993 "King of the Ring"?', ['Owen Hart', 'Bret Hart', 'Edge', 'Mabel'], 1)
var sport7 = new Question('Which country won the Cricket World Cup in 1999?', ['Australia',, 'South Africa', 'Pakistan', 'England'], 0)
var sport8 = new Question('Who did The Rock beat to win his first WWE Title?', ['Triple H', 'Stone Cold Steve Austin', 'Mankind', 'Bret Hart'], 2)

function Quiz (questions, type) {
  this.questions = questions
  this.isGameOver = false
  this.completedQuestion = 0
  this.currentQuestion = 0
  this.player1Points = 0
  this.player2Points = 0
  this.sequence = [0, 1, 2, 3, 4, 5, 6, 7]
  this.type = type
}

var math = new Quiz([question1, question2, question3, question4, question5, question6, question7, question8], 'math')

var science = new Quiz([science1, science2, science3, science4, science5, science6, science7, science7], 'science')
var sports = new Quiz([sport1, sport2, sport3, sport4, sport5, sport6, sport7, sport8], 'sports')

var currentPlayer = 1

// Prototype Method
Quiz.prototype.numberOfQuestions = function () {
  // console.log('numberOfQuestion', this.questions.length)
  return this.questions.length
}

Quiz.prototype.currentQuestionNo = function () {
//  console.log('currentQuestionNo', this.currentQuestion)
  return this.currentQuestion
}

Quiz.prototype.numberOfAnswers = function () {
  // console.log('numberOfAnswers', this.questions[this.currentQuestionNo()].options.length)
  return this.questions[this.currentQuestionNo()].options.length
}

Quiz.prototype.correctAnswer = function () {
//  console.log('correct answer', this.questions[this.currentQuestionNo()].correctAnswerIndex)
  return this.questions[this.currentQuestionNo()].correctAnswerIndex
}

Quiz.prototype.checkGameOver = function () {
  console.log(this.completedQuestion)
  if (this.completedQuestion === this.numberOfQuestions()) {
    this.whoWon()
  //  console.log('passed')
    return true
  }
  return false
}

Quiz.prototype.playTurn = function (choice) {
  // console.log('start', quiz.currentQuestion)
  // console.log(this);
  // var gameover = typeof(this.checkGameOver())
  // console.log(gameover);
  if (this.checkGameOver()) { return false }
  if (this.correctAnswer() === choice) {
    if (currentPlayer === 1) {
      this['player1Points'] += 1
    } else {
      (
      this['player2Points'] += 1
    )
    }
    this.completedQuestion += 1
    result = true
  } else {
    result = false
  }
  // console.log('fired')

  currentPlayer = 3 - currentPlayer
  // console.log('player', currentPlayer)
  console.log('player1', this.player1Points)
  console.log('player2', this.player2Points)
  // console.log('end', quiz.currentQuestion)
  this.checkGameOver()

  return result
}

Quiz.prototype.whoWon = function () {
  if (this.player1Points === 0 && this.player2Points === 0) {
    return 0
  }
  var point = this.player1Points - this.player2Points
  if (point > 0) {
    console.log('player 1')
    return 1
  } else if (point < 0) {
    console.log('player 2')
    return 2
  } else if (point === 0) {
    return 3
    console.log('draw')
  }
}

Quiz.prototype.restart = function () {
  this.isGameOver = false,
  this.currentQuestion = 0,
  this.completedQuestion = 0,
  this.player1Points = 0,
  this.player2Points = 0,
  currentPlayer = 1
}

Quiz.prototype.questionNo = function () {
  var num = 0
  var i = 0
  this.sequence = []
  while (i < this.questions.length) {
    num = Math.floor(Math.random() * this.questions.length)
    if (this.sequence.includes(num) !== true) {
      this.sequence.push(num)
      i++
    }
  }
}

Quiz.prototype.updateDisplay = function () {
  $('.progress-bar').css('width', '100%')
  .removeClass('progress-bar-danger')
  .text('30s')
  $('.progress').addClass('invisible')
  $('.answer').hide()
  $('.answer button').remove()
  $('.prompt button').fadeIn()
  // Update the score
  $('#player' + currentPlayer).css({
    'border': 'red 4px solid',
    'border-radius': '100px'
  })
  $('#player' + (3 - currentPlayer)).removeAttr('style')
  $('.player1').text(this.player1Points)
  $('.player2').text(this.player2Points)

  // update diaplay when game is over
  if (this.checkGameOver() === true) {
    if (this.whoWon() === 3) {
      $('.alert p').text('It is a draw game.')
    } else if (this.whoWon() > 0) {
      $('.alert p').text('Player ' + this.whoWon() + ' won quiz round.')
    }

    $('.alert').removeClass('invisible')
    .css('z-index', '1')
  }
}
var timer
Quiz.prototype.uI = function () {
  //  updateDisplay when webpage first loaded
  this.questionNo()
  this.updateDisplay()
  var self = this
  for (var i = 0; i < this.questions.length; i++) {
  //  console.log(this.questions[this.sequence[i]].prompt)
    $('.prompt').append('<button></button>')
    $('.prompt button').addClass('btn btn-lg btn-default card')
    .attr('id', self.type)
  }

  // call playTurn(choice) and updateDispaly() when answer has been selected
  $('.prompt').off('click', 'button')
  $('.prompt').on('click', 'button', function () {
    var index = $('button').index(this)
     // console.log(subject)
    $('.progress').removeClass('invisible')
    $('.prompt button').hide()
    $('.answer h1').text(self.questions[self.sequence[index]].prompt)
    $('.answer').fadeIn().delay('1000')
    self.currentQuestion = self.sequence[index]
    $('.answer button').remove()

    for (var i = 0; i < self.numberOfAnswers(); i++) {
      $('.answer').append('<button>' + self.questions[self.sequence[index]].options[i] + '</button>')
      $('.answer button').addClass('btn btn-default btn-lg')
       .fadeIn()
    }

    var time = 30
    var barSize = parseInt($('.progress-bar').css('width'))
    var width = barSize

    timer = setInterval(function () {
      time -= 0.1
      width = time * (barSize / 30)

      $('.progress-bar').css('width', width + 'px')
      .text(time.toFixed(2)+'s')
      if (time <= 0) {
        clearInterval(timer)
        currentPlayer = 3 - currentPlayer

        self.updateDisplay()
      } else if (time <= 10) {
      $('.progress-bar').addClass('progress-bar-danger')
      }
    }, 100)
  })

  $('.answer').off('click', 'button')
  $('.answer').on('click', 'button', function () {
    clearInterval(timer)
    var index
    index = $('button').index(this)

    if (self.playTurn((index - 8)) === true) {
      $('.prompt button:nth-child(' + (self.sequence.indexOf(self.currentQuestion) + 1) + ')').addClass('done')
      .removeAttr('id')
      .text(self.questions[self.sequence[self.sequence.indexOf(self.currentQuestion)]].prompt)
      .prop('disabled', true)
    } else {
      $('.answer button:nth-child(' + (index - 6) + ')').addClass('btn-danger')
    }

    self.updateDisplay()
// alert(currentPlayer);
  })

  $('.playagain').click(function () {
    $('.alert').addClass('invisible')
    $('.prompt button').removeClass('done')
    .text('')
    .prop('disabled', false)
    self.questionNo()
    self.restart()
  })
}

$(document).ready(function () {
  var whichDiv
  var subject

  $('.menu .subject').click(function () {
    whichDiv = $('div').index(this)
    console.log('whichDiv', whichDiv)
    if (whichDiv === 2) {
      subject = math
    } else if (whichDiv === 3) {
      subject = science
    } else if (whichDiv === 4) {
      subject = sports
    }
    $('.menu').hide()
    $('.quiz').fadeIn()
    subject.uI()
    console.log(subject.currentQuestionNo())
    console.log(subject.completedQuestion)
  })

  $('.subject').hover(function () {
    var index = $('.subject').index(this)
    console.log(index)
    $('.subject:nth-child(' + (index + 1) + ')').append('<h1 class="display-1 text-center text-uppercase">' + this.id + '<h1>')
  },
    function () {
      $('.subject').find('h1').remove()
    })

  $('.mainmenu').click(function () {
    $('.alert').addClass('invisible')
    $('.prompt button').remove()
    $('.quiz').hide()
    $('.menu').fadeIn()
    subjec = 0
  })
})
