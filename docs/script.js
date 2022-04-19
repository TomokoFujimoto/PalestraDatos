const $allQuestions = document.querySelectorAll(".faq-question-container");
const $allAnswers = document.querySelectorAll(".faq-answer");
const $allTitles = document.querySelectorAll(".faq-question-title");
const $allIcons = document.querySelectorAll(".link_icon")

//console.log($AllQuestions)

function openQuestion(question) {
    question.querySelector(".faq-answer").classList.add("active");
}

function closeQuestion(question) {
    question.querySelector(".faq-answer").classList.remove("active");
    question.querySelector(".faq-arrow-icon").style.transform = "none";
}

function closeAll(question, isActive) {
    if (isActive) {
        question.querySelector(".faq-answer").classList.remove("active");
        
    }
}

let lastQuestion = null;

function closeLast() {
    if (lastQuestion) {
        closeQuestion(lastQuestion);
    }

}


    

 $allQuestions.forEach(question =>{
     question.addEventListener("click", function () {
        closeLast();
            if (question === lastQuestion) {
                lastQuestion = null;
            } else {
                openQuestion(question);
                lastQuestion = question;
            }
           
        })
    
    })


$allIcons.forEach(icon => icon.addEventListener('click', function(e){
    e.stopPropagation()
}))


