//  JavaScript is a scripting language, the syntax of JavaScript is mostly influenced by the programming language C.


var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct =0;
// an array is an ordered list of values. In other words, we can say that arrays facilitate the storage of multiple items under a single name.
var questions = [
    ["Who is the head sponsor of SAIL?", "Mr. Favour", "Mr. Eleazer", "Sen. Abiru", "C" ],
    ["Who is the most handsome Techman in Nigeria?", "Mr. Joel", "Mr. Favour", "Mr. Kola", "B" ],
    ["When sound waves travel from air to water which of these remains constant?", "Frequency", "Length", "Speed", "A" ],
    ["Who was the first to study the solar system?", "Isaac Newton", "George Ohms", "Michael Faraday", "A" ],
    ["Which type of fish covers the sea for miles together and is a wonderful sight to see?", "Catfish", "Tilapia fish", "Jelly fish", "C"],
    ["Who was known as the Man of thousand faces?", "Joel Dareal", "Edward Eleazer", "Lon Chaney", "C" ],
    ["Who is the most pulchritudinous girl in the world?", "Ikechukwu Helen", "Abayomi Deborah", "Hammed Halimat", "B"],
    ["The best fashionista in Nigeria is?", "Abayomi Olufunmi", "Keita Anita", "Sunday Dorcas", "A"],
    ["What is the name of the most beautiful Calabar babe", "Mercy Johnson", "Mary Andondeye", "Rita Domonic", "B"],
    ["Who is the lady known for her beauty with brains", "Ini Edo", "Omotola Jolade", "Mary K", "C"],
    ["What is the value of x if 24 + 12 = x^2?", "36", "6", "18", "B"],
    ["Simplify (y+2/x-4) = 0", "y = -4", "2x = 0", "y = -2", "C"],
    ["The ages in years, of four boys are 10, 12, 14, and 18. What is the average age of the boys?", "12", "13.5", "14", "B"],
    ["Simplify, correct to three significant figures, (0.0023 x 0.577)", "0.132", "0.00132", "0.00133", "C"],
    ["If x varies directly as the square of y and x=45 when y=9, find x when y=6.", "20", "25", "30", "A"],
    ["Which of the following has the shortest wavwlength?", "Gamma ray", "Visible light", "Infrared ray", "A"],
    ["The time rate of change of displacement is known as...", "Speed", "Velocity", "Acceleration", "B"],
    ["Which of the following values on the absolute scale of temperature is the ice point", "0K", "100K", "273K", "C"],
    ["A body dropped from a certain height above the ground level, falls with uniform...", "Speed", "Acceleration", "Velocity", "B"],
    ["Which of the following concepts is not an evidence of the particle nature of the matter", "Crystallization", "Diffussion", "Diffraction", "A"]
];

//Functions can be termed as a group of reusable code which can be called anywhere in your program. This means is that it allows you to define a block of code, give it a name and then execute it as many times as you want. 
function _(x) {
    return document.getElementById(x);
}
function renderQuestion(){
    test = _("test");
    if(pos >= questions.length){
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
        _("test_status").innerHTML = "Test Completed";
        //pos = 0;
        //correct = 0;
        return false;
    }
    // You can call your object from the multifuncional array by calling their index numbers, number ranging from "0" representing the first object and so on.
    _("test_status").innerHTML = "Question "+ (pos+1)+" of "+questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input class='ch' type='radio' name='choices' value='A'> "+chA+"<br><br><br>";
    test.innerHTML += "<input class='ch' type='radio' name='choices' value='B'> "+chB+"<br><br><br>";
    test.innerHTML += "<input class='ch' type='radio' name='choices' value='C'> "+chC+"<br><br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
        if(choices[i].checked){
            choice = choices[i].value;
        }
    }
    if(choice  == questions[pos][4]){
        correct++;
    }
    pos++;
    renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
