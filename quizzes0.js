// require('quiz-logic.js')
// require('quiz-questions.js')

var currentPlayer = 1

$(document).ready(function () {
  var whichDiv
  var subject
  var timer

  // Menu Page
  $('.menu .subject').click(function () {
    whichDiv = $('div').index(this)
    console.log('whichDiv', whichDiv)
    if (whichDiv === 2) {
      subject = math
    } else if (whichDiv === 3) {
      subject = science
    } else if (whichDiv === 4) {
      subject = sports
    } else if (whichDiv === 5) {
      subject = language
    }
    $('.menu').hide()
    $('.quiz').fadeIn()
    showQuestionBank(subject)
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
    $('.questions-bank button').remove()
    $('.quiz').hide()
    $('.menu').fadeIn()
    subjec = 0
  })

  // Create Question Page after the question is selected
  $('.questions-bank').off('click', 'button')
  $('.questions-bank').on('click', 'button', function () {
    var index = $('button').index(this)
    $('.progress').removeClass('invisible')
    $('.questions-bank button').hide()
    $('.question h1').text(subject.questions[subject.sequence[index]].prompt)
    $('.question').fadeIn().delay('1000')
    subject.currentQuestion = subject.sequence[index]
    $('.question button').remove()

    // Create Answer Cards
    for (var i = 0; i < subject.numberOfAnswers(); i++) {
      $('.question').append('<button>' + subject.questions[subject.sequence[index]].options[i] + '</button>')
      $('.question button').addClass('btn btn-default btn-lg')
       .fadeIn()
    }

    // Timer Bars
    var time = 30
    var barSize = parseInt($('.progress-bar').css('width'))
    var width = barSize

    timer = setInterval(function () {
      time -= 0.1
      width = time * (barSize / 30)

      $('.progress-bar').css('width', width + 'px')
      .text(time.toFixed(2) + 's')
      if (time <= 0) {
        clearInterval(timer)
        currentPlayer = 3 - currentPlayer

        updateDisplay(subject)
      } else if (time <= 10) {
        $('.progress-bar').addClass('progress-bar-danger')
      }
    }, 100)
  })

  // Check answer and update display after answer is selected
  $('.question').off('click', 'button')
  $('.question').on('click', 'button', function () {
    clearInterval(timer)
    var index
    index = $('button').index(this)

    if (subject.playTurn((index - 8)) === true) {
      $('.questions-bank button:nth-child(' + (subject.sequence.indexOf(subject.currentQuestion) + 1) + ')').addClass('done')
      .removeAttr('id')
      .text(subject.questions[subject.sequence[subject.sequence.indexOf(subject.currentQuestion)]].prompt)
      .prop('disabled', true)
    } else {
      $('.question button:nth-child(' + (index - 6) + ')').addClass('btn-danger')
    }

    updateDisplay(subject)
  })

  $('.playagain').click(function () {
    $('.alert').addClass('invisible')
    $('.questions-bank button').removeClass('done')
    .text('')
    .prop('disabled', false)
    questionSequence(subject)
    subject.restart()
  })
})

function questionSequence (subject) {
  var num = 0
  var i = 0
  subject.sequence = []
  while (i < subject.questions.length) {
    num = Math.floor(Math.random() * subject.questions.length)
    if (subject.sequence.includes(num) !== true) {
      subject.sequence.push(num)
      i++
    }
  }
}

function updateDisplay (subject) {
  $('.progress-bar').css('width', '100%')
  .removeClass('progress-bar-danger')
  .text('30s')
  $('.progress').addClass('invisible')
  $('.question').hide()
  $('.question button').remove()
  $('.questions-bank button').fadeIn()
  // Update the score
  $('#player' + currentPlayer).css({
    'border': 'red 4px solid',
    'border-radius': '100px'
  })
  $('#player' + (3 - currentPlayer)).removeAttr('style')
  $('.player1').text(subject.player1Points)
  $('.player2').text(subject.player2Points)

  // update diaplay when game is over
  if (subject.checkGameOver() === true) {
    if (subject.whoWon() === 3) {
      $('.alert p').text('It is a draw game.')
    } else if (subject.whoWon() > 0) {
      $('.alert p').text('Player ' + subject.whoWon() + ' won quiz round.')
    }

    $('.alert').removeClass('invisible')
    .css('z-index', '1')
  }
}

function showQuestionBank (subject) {
  // Reshuffle the question order
  questionSequence(subject)

  // Update Question Bank Page
  updateDisplay(subject)

  // Create Question Cards
  for (var i = 0; i < subject.questions.length; i++) {
    $('.questions-bank').append('<button></button>')
    $('.questions-bank button').addClass('btn btn-lg btn-default')
    .attr('id', subject.type)
  }
}
