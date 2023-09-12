export const quiz = {
  questions: [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      choices: ["<scripting>", "<js>", "<script>", "<javascript>"],
      type: "MCQ",
      correctAnswer: "<script>",
    },
    {
      question:
        "What is the correct syntax for referring to an external script called 'main.js'?",
      choices: [
        "<script href='main.js'",
        "<script src='main.js'",
        "<script name='main.js'",
      ],
      type: "MCQ",
      correctAnswer: "<script src='main.js'",
    },
    {
      question: "The external JavaScript file must contain the <script> tag.",
      choices: ["True", "False"],
      type: "MCQ",
      correctAnswer: "False",
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      choices: [
        "msgBox('Hello World'",
        "alertBox('Hello World'",
        "alert('Hello World'",
        "msg('Hello World'",
      ],
      type: "MCQ",
      correctAnswer: "alert('Hello World'",
    },
    {
      question: "How do you create a function in JavaScript?",
      choices: [
        "function = myFunction()",
        "function:myFunction()",
        "function myFunction()",
      ],
      type: "MCQ",
      correctAnswer: "function myFunction()",
    },
  ],
};
