
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

var quiz = {
  questions: [question1, question2, question3, question4, question5, question6, question7, question8],
  isGameOver: false,
  currentQuestion: 0,
  player1Points: 0,
  player2Points: 0
}

var currentPlayer = 1

// Prototype Method
function numberOfQuestions() {
  console.log('numberOfQuestion', quiz.questions.length)
  return quiz.questions.length
}

function currentQuestion() {
  console.log('currentQuestion', quiz.currentQuestion)
  return quiz.currentQuestion
}

function numberOfAnswers() {
  // console.log('numberOfAnswers', quiz.questions[currentQuestion() ]['options'].length)
  return quiz.questions[currentQuestion()].options.length
}

function correctAnswer() {
//  console.log(quiz.questions[currentQuestion()].correctAnswerIndex)
  return quiz.questions[currentQuestion()].correctAnswerIndex
}

function playTurn(choice) {
  if (isGameOver()) { return false }
  if (correctAnswer() === choice) {
    quiz['player' + currentPlayer + 'Points'] += 1
    result = true
  } else {
    result = false
  }
  quiz.currentQuestion += 1
  currentPlayer = 3 - currentPlayer

  isGameOver()

  return result
}
/*
function isGameOver() {
  if (currentQuestion() === numberOfQuestions()) {
    whoWon()
    return true
  }
  return false
}
*/
function isGameOver() {
  if (whoWon() !== 0) {
    return true
  } else {
    return false
  }
}

function whoWon() {
  if ((quiz.currentQuestion) < quiz.questions.length) {
    return 0
  } else if (quiz.player1Points> quiz.player2Points) {
    return 1
  } else if (quiz.player2Points> quiz.player1Points) {
    return 2
  } else {
    return 3
  }
}
/*
function whoWon() {
  if (quiz.player1Points === 0 && quiz.player2Points === 0) {
    return 0
  }
  var point = quiz.player1Points - quiz.player2Points
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
*/

function restart () {
  quiz.isGameOver = false,
  quiz.currentQuestion = 0,
  quiz.player1Points = 0,
  quiz.player2Points = 0,
  currentPlayer = 1
}

$(document).ready(function () {


  $('.menu div div').click(function () {
    var whichDiv = $('div').index(this)
    console.log('whichDiv', whichDiv);
  })


//  updateDisplay when webpage first loaded
  updateDisplay()

// call playTurn(choice) and updateDispaly() when answer has been selected
  $('body').on('click', 'button', function () {
    var index = $('button').index(this)
    console.log(index)
    if (isGameOver() === false) {
      if (playTurn(index) === true) {
        $('.answer button:nth-child(' + (index + 1) + ')').addClass('btn-success')
      } else {
        $('.answer button:nth-child(' + (index + 1) + ')').addClass('btn-danger')
      }
      timeout = setTimeout(function () { updateDisplay() }, 500)
    }
  })

  $('.alert button').click(function () {
    $('.alert').addClass('invisible')
    $('.row, .answer button, h1').removeAttr('style')
    restart()
  })
})

function updateDisplay () {
  $('h3:nth-child(1)').text('Player 1: ' + quiz.player1Points)
  $('h3:nth-child(2)').text('Player 2: ' + quiz.player2Points)
  if (isGameOver() === true) {
    $('.row').css({
      background: 'rgba(0,0,0,0.1)'
    })
    $('.answer button, h1').css({
      opacity: 0.5
    })
    if (whoWon() === 3) {
      $('.alert p').text('It is a draw game.')
    } else if (whoWon() > 0) {
      $('.alert p').text('Player ' + whoWon() + ' won quiz round.')
    }

    $('.alert').removeClass('invisible')
    .css('z-index', '1')
  } else {
    $('h1').text(quiz.questions[quiz.currentQuestion].prompt)
    $('.answer button').remove()
    for (var i = 0; i < numberOfAnswers(); i++) {
      $('.answer').append('<button>' + quiz.questions[quiz.currentQuestion].options[i] + '</button>')
      $('.answer button').addClass('btn btn-default btn-lg')
      .fadeIn()
    }
  }
}
