class QuestionList {
    constructor() {
        this.list = [];
    }

    addQuestion(question, options, answer) {
        this.list.push({ question, options, answer });
    }

    displayQuestions() {
        this.list.forEach((questionObj, index) => {
            console.log(`Question ${index + 1}: ${questionObj.question}`);
            console.log(`Options: ${questionObj.options.join(', ')}`);
            console.log(`Answer: ${questionObj.answer}`);
        });
    }
}

const Questions = new QuestionList();

Questions.addQuestion("What command is used to list all files and directories in the current directory in the command line?", ["ls", "cd", "mkdir", "cp"], "ls");
Questions.addQuestion("Which Git command is used to download a remote repository to your local machine?", ["git push", "git pull", "git commit", "git clone"], "git clone");
Questions.addQuestion("Which CSS property is used to change the color of text?", ["font-family", "text-align", "background-color", "color"], "color");
Questions.addQuestion("Which keyword is used to declare a variable in JavaScript?", ["func", "class", "var", "if"], "var");
Questions.addQuestion("What HTML tag is used to create a hyperlink?", ["<link>", "<a>", "<p>", "<h1>"], <a></a>);


Questions.displayQuestions();
