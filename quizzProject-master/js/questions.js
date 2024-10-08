//IIFE (Immediately Invoked Function Expression)
(function () {

  /****** FONCTION TIMER ******/

  // initialise temps
  var interval;

  function tick(cpt) {
    if (cpt > -1) {
      document.getElementById("Chrono").innerHTML = "Timer: " + cpt;
    } else if (currentSlide === slides.length - 1) {
      showResults();
      // NOPE NOIPE NOPE
      clearInterval(interval);//Stop Timer
    } else {
      showOneResult() //réponse si timeout
    };
  }

  // start chrono
  function timer() {
    var cpt = 10;
    interval = setInterval(() => tick(cpt--), 1000); //interval = setInterval(function(){tick(cpt--)}, 1000)
  };
  timer();

  /****** FIN FONCTION TIMER ******/

  /****** QUESTIONS ******/
  const myQuestions = [
    {
      question: "1• Combien de bras et de jambes possède encore Dark Vador ?",
      answers: {
        a: "0",
        b: "2",
        c: "4"
      },
      correctAnswer: "a"
    },
    {
      question: "2• Que dit Navi à Link ?",
      answers: {
        a: "Listen !",
        b: "Hey ! Listen !",
        c: "Stay ! Listen !"
      },
      correctAnswer: "b"
    },
    {
      question: "3• Qui est 'Soap' ?",
      answers: {
        a: "Un soldat du KGB",
        b: "un soldat du SAS ",
        c: "Un soldat de la Navy",
      },
      correctAnswer: "b"
    },
    {
      question: "4• Quelle est le pouvoir de Magneto?",
      answers: {
        a: "Rembobiner une cassette",
        b: "Controler le Fer",
        c: "Etre juste méchant",
      },
      correctAnswer: "b"
    },
    {
      question: "5• Que mange Sacha ?",
      answers: {
        a: "Des pokemons",
        b: "Des animaux",
        c: "Il est vegan",
      },
      correctAnswer: "a"
    },
    {
      question: "6• Combien font 2 + 2 ?",
      answers: {
        a: "2",
        b: "22",
        c: "4"
      },
      correctAnswer: "c"
    },
    {
      question: "7• Combien font 2 x 2 ?",
      answers: {
        a: "2",
        b: "22",
        c: "4"
      },
      correctAnswer: "c"
    },
    {
      question: "8• Combien font 2² ?",
      answers: {
        a: "2",
        b: "22",
        c: "4"
      },
      correctAnswer: "c"
    },
    {
      question: "9• Combien font racine(2) x racine(2) ?",
      answers: {
        a: "2",
        b: "22",
        c: "4"
      },
      correctAnswer: "a"
    },
    {
      question: "10• Combien font 2! ?",
      answers: {
        a: "2",
        b: "22",
        c: "4"
      },
      correctAnswer: "a"
    },
    {
      question: "11• Qu'est-ce qui n'est pas une arme pour Hitman?",
      answers: {
        a: "Corde à Piano",
        b: "Pistolet Silencieux",
        c: "Tout est une arme pour Hitman"
      },
      correctAnswer: "c"
    },
    {
      question: "12• Quel est le nom d'origine de Mario ?",
      answers: {
        a: "Jumpman",
        b: "Speedman",
        c: "Strongman"
      },
      correctAnswer: "a"
    },
    {
      question: "13• Quel est le jeu video le plus vendu ?",
      answers: {
        a: "Minecraft",
        b: "GTA V",
        c: "Tetris",
      },
      correctAnswer: "c"
    },
    {
      question: "14• Que mange Homer Simpson ?",
      answers: {
        a: "Des Beignets",
        b: "Des Donuts",
        c: "Des carottes",
      },
      correctAnswer: "b"
    },
    {
      question: "15• Quelle est LA théorie de Walking Dead ?",
      answers: {
        a: "Ils sont tous mort",
        b: "Ce sont les Aliens les responsables",
        c: "Rick est un 'Walking Dead'",
      },
      correctAnswer: "c"
    },
    {
      question: "16• D'où vient The Punisher ?",
      answers: {
        a: "Dare Devil",
        b: "X-Men",
        c: "Spiderman"
      },
      correctAnswer: "c"
    },
    {
      question: "17• Combien de console Nintendo a t-elle sorti ?",
      answers: {
        a: "10",
        b: "12",
        c: "14"
      },
      correctAnswer: "c"
    },
    {
      question: "18• Qu'est-ce qu'une RAM?",
      answers: {
        a: "Un outil pour ramer",
        b: "La mémoire vive d'un ordinateur",
        c: "Un truc qui rame tout le temps"
      },
      correctAnswer: "b"
    },
    {
      question: "19• Quelle équipe est top 1 sur World of Warcraft?",
      answers: {
        a: "Method Black",
        b: "nLite",
        c: "Pinguins"
      },
      correctAnswer: "a"
    },
    {
      question: "20• Quel est l'intru ?",
      answers: {
        a: "Samsung",
        b: "Phillips",
        c: "Huawai"
      },
      correctAnswer: "a"
    },
    {
      question: "21• Qui est une Legend?",
      answers: {
        a: "Béring",
        b: "Suez",
        c: "Gibraltar"
      },
      correctAnswer: "c"
    },
    {
      question: "22• En quelle année se déroule la Guerre entre les Humains et les Machines?",
      answers: {
        a: "2019",
        b: "2029",
        c: "2039"
      },
      correctAnswer: "b"
    },
    {
      question: "23• Quelle couleur représente la meilleure qualité d'un loot ?",
      answers: {
        a: "blanc",
        b: "bleu",
        c: "vert",
      },
      correctAnswer: "b"
    },
    {
      question: "24• Combien de fois Luke Skylwalker combat son père ?",
      answers: {
        a: "1",
        b: "2",
        c: "3",
      },
      correctAnswer: "b"
    },
    {
      question: "25• Quelle est l'année d'origine de Marty McFly?",
      answers: {
        a: "1985",
        b: "1986",
        c: "1987",
      },
      correctAnswer: "a"
    },
    {
      question: "26• Sur quel jeu Millenium n'est pas présent ?",
      answers: {
        a: "PES 2019",
        b: "Star Citizen",
        c: "Hearthstone"
      },
      correctAnswer: "a"
    },
    {
      question: "27• Qui ne fait pas partie de l'USS Enterprise?",
      answers: {
        a: "Kirk",
        b: "Ulula",
        c: "Spock"
      },
      correctAnswer: "b"
    },
    {
      question: "28• Quel journal est apporté à Gary Hobson par un chat?",
      answers: {
        a: "Chicago Sun-Times",
        b: "Chicago Daily",
        c: "Chicago News"
      },
      correctAnswer: "a"
    },
    {
      question: "29• Quel Stark est encore en vie ?",
      answers: {
        a: "Arya Stark",
        b: "Rob Stark",
        c: "Tony Stark"
      },
      correctAnswer: "a"
    },
    {
      question: "30• Dans quel univers est la planette Abydos?",
      answers: {
        a: "Star Wars",
        b: "Star Gate",
        c: "Star Trek"
      },
      correctAnswer: "b"
    }
  ];
  /****** FIN QUESTIONS ******/


  /****** FONCTION CREATE QUESTIONS ******/
  function buildQuiz() {

    // Stockage des questions pour le push
    const output = [];

    // On passe chaque question avec fonction fléchée
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // Stockage des réponses
      const answers = [];
      // Pour chaque question séléctionnée
      for (letter in currentQuestion.answers) {
        // ajoute réponses
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // question + réponses push
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // concaténation des questions pushées pour l'afficher
    quizContainer.innerHTML = output.join("");
  }
  /****** FIN FONCTION CREATE QUESTIONS ******/


  /****** FONCTION SHOW RESULTS ******/
  function showResults() {

    // stop timer
    clearInterval(interval);

    // récupère les réponses
    const answerContainers = quizContainer.querySelectorAll(".answers");

    //Score de l'utilisateur qui s'incrémente
    let numCorrect = 0;

    // On passe chaque question avec fonction fléchée
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // on récupère la réponse sélectionnée
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      // Si bonne reponse
      if (userAnswer === currentQuestion.correctAnswer) {
        // on ajoute un point
        numCorrect++;
        // color le texte en vert
        answerContainers[questionNumber].style.color = "green";
      } else {
        // si faux ou timeOut : en rouge
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // montre le score total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    resultsContainer.style.display = "inline-block";

    //changement de btn
    document.getElementById("btn-result").style.display = "block";
    nextButton.style.display = "none";
  }
  /****** FIN FONCTION SHOW RESULTS ******/

 
  /****** FONCTION SHOW SLIDES ******/
  function showSlide(n) {

    //définit la slide affichée
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    //jusqu'à la fin du questionnaire: btn next
    if (currentSlide === slides.length - 1) {
      okButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else { //sinon  btn submit
      okButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
    resultsContainer.style.display = "none";
  }
  /****** FIN FONCTION SHOW SLIDES ******/


    /****** FONCTION SHOW ONE RESULT ******/
    function checkFunc() {
      if (document.querySelectorAll('input[type="radio"]:checked').length === 0) alert("Pas de réponse : 0 point");
    }
    
    function showAlert(currentQuestion,questionNumber){
      const answerContainers = quizContainer.querySelectorAll(".answers");
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      const rep = quizContainer.querySelectorAll(".answers");

      if (userAnswer === currentQuestion.correctAnswer) {
        // on ajoute un point
        alert("CORRECT !");;
        // color le texte en vert
      } else {
        // si faux ou timeOut : en rouge
        alert(" FAUX ! La bonne reponse est " + rep);
        }
    }

    function showOneResult() {
  
      // stop timer
      clearInterval(interval);
  
      //verif si une case est cochée
      checkFunc();
      
      //select rep et compare
      showAlert();

      //Passe au slide suivant
      showNextSlide();
    };
    /****** FIN FONCTION SHOW RESULTS ******/


  /****** FONCTION NEXT SLIDES ******/
  function showNextSlide() {
    clearInterval(interval);
    showSlide(currentSlide + 1);
    timer();
  }

  //même fonction mais fin du jeu
  function showNextResult() {
    clearInterval(interval);
    showSlide(currentSlide + 1);
  }
  /****** FIN FONCTION NEXT SLIDES ******/


  /****** FONCTION PREVIOUS SLIDES ******/
  function showPreviousResult() {
    showSlide(currentSlide - 1);
  }
  /****** FIN FONCTION PREVIOUS SLIDES ******/


  /****** INIT() ******/

  //input div
  const okButton = document.getElementById("ok");
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  //output questions
  buildQuiz();

  //output btn + slide
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  //output question 1
  showSlide(0);

  //output btn-result
  const previousResult = document.getElementById("presult");
  const nextResult = document.getElementById("nresult");
  document.getElementById("btn-result").style.display = "none";

  //events btn
  //on slides
  okButton.addEventListener("click", showOneResult);
  submitButton.addEventListener("click", showResults);

  //on btn-result
  previousResult.addEventListener("click", showPreviousResult);
  nextResult.addEventListener("click", showNextResult);
  /****** FIN INIT() ******/

})();

/* A corriger */

// Slide-1 et +1 : fixer la limite