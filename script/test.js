var QuizViewModel = function() {
  //declared observables
  var self = this;

  // observableArray of our JavaScript Trivia Questions
  // for radio buttons, each question has to have its own name reference to the buttons
  // to accomplish this, a name reference was
  self.questions = ko.observableArray([
    {
      answerGroup: 'q1',

      question:
        '1.	What pattern in JavaScript restricts instantiation of a class to a single object?',
      answers: [
        'A. Constructor Pattern',
        'B. Singleton Pattern',
        'C. Prototype Pattern',
        'D. Mixin Pattern'
      ],
      answer: 'B'
    },
    {
      answerGroup: 'q2',

      question:
        '2.	Which looping statement is known as JavaScript’s basic loop?',
      answers: [
        'A. for loop',
        'B. do/while loop',
        'C. while loop',
        'D. for/in loop'
      ],
      answer: 'C'
    },
    {
      answerGroup: 'q3',

      question:
        '3.	The _______ method returns a string that follows the syntax of the function declaration statement.',
      answers: ['A. toString()', 'B bind()', 'C. call()', 'D. apply()'],
      answer: 'A'
    },
    {
      answerGroup: 'q4',

      question:
        '4.	The _______ pattern aims to encapsulate method invocation, request, or operations into a single object and gives us the ability to both parameterize and pass method calls around that can be executed at our discretion.',
      answers: ['A. Prototype', 'B. Factory', 'C. Command', 'D. Facade'],
      answer: 'C'
    },
    {
      answerGroup: 'q5',

      question:
        '5. JavaScript’s reserve word ______ causes the innermost enclosing loop or switch statement to exit immediately.',
      answers: ['A. Try', 'B. Catch', 'C. Else', 'D. Break'],
      answer: 'D'
    },
    {
      answerGroup: 'q6',

      question:
        '6. Which of the following is NOT a correct way of declaring an array in JavaScript?',
      answers: [
        'A. var arr = [1, "two", 3 , 4 ];',
        'B. var arr = new Array();',
        'C. var[] arr = new Number()[5];',
        'D. None of the above.'
      ],
      answer: 'C'
    },
    {
      answerGroup: 'q7',

      question:
        '7.	Which of the following is true about variable naming conventions in JavaScript?',
      answers: [
        'A. You should not use any of the JavaScript reserved keyword as variable name',
        'B. JavaScript variable names should not start with a numeral 0 − 9.',
        'C. Both of the above.',
        'D. None of the above.'
      ],
      answer: 'C'
    },
    {
      answerGroup: 'q8',

      question: '8.	Which of the following is a valid JavaScript function?',
      answers: [
        'A. var myFunc = function myFunc{ };',
        'B. function myFunc(){ };',
        'C. myFunc function(){ };',
        'D. function myFunc = { };'
      ],
      answer: 'B'
    },
    {
      answerGroup: 'q9',

      question:
        '9.	Which of the following is true about variable naming conventions in JavaScript?',
      answers: [
        'A. You should not use any of the JavaScript reserved keyword as variable name',
        'B. JavaScript variable names should not start with a numeral 0 − 9.',
        'C. Both of the above.',
        'D. None of the above.'
      ],
      answer: 'C'
    },
    {
      answerGroup: 'q10',

      question:
        '10. Which built-in method combines the text of two strings and returns a new string?',
      answers: ['A. end', 'B. concat', 'C. attach', 'D. None of the above.'],
      answer: 'B'
    }
  ]);

  var currentQuestionIndex = ko.observable(0);

  function questionNavigation(numberOfQuestions) {
    if (currentQuestionIndex() + numberOfQuestions >= self.questions().length) {
      return;
    }
    if (currentQuestionIndex() + numberOfQuestions < 0) {
      return;
    }
    currentQuestionIndex(currentQuestionIndex() + numberOfQuestions);
  }

  self.next = function() {
    questionNavigation(1);
  };
  self.previous = function() {
    questionNavigation(-1);
  };

  self.currentQuestion = ko.computed(function() {
    return self.questions()[currentQuestionIndex()];
  });

  selectedAnswer = ko.observable('A');
};
ko.applyBindings(new QuizViewModel());
