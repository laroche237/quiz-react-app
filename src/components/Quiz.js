import React, {useCallback, useState} from 'react';
import Question from './Question';
import questions from '../data/questions';
import Chronos from './Chronos';
import './Quiz.css';



const Quiz = ( ) => {
        const [score, setScore] = useState(0);//stocke le score de l'utilisateur
    const [currentPage, setCurrentPage]=useState(0)//Page actuelle
    const [quizComplet, setQuizComplet]=useState(false);
    
    const questionPerPage=3;

    const handleAnswerChange=(isCorrect)=>{
      setScore(score + 1);
    };

    const handleNextPage=()=>{

      //Passer à la page suivante si elle existe
      const pageNumber = questions.length/questionPerPage;
      if(currentPage< pageNumber-1){
        setCurrentPage(currentPage+1);
        }else{
          setQuizComplet(true);
        }
    }
    const total=questions.length;
    const percentage = (score / total) * 100;

  const getResultMessage = () => {
    if (percentage === 100) {
      return 'Excellent ! Parfaitement maîtrisé dans le temps imparti.';
    } else if (percentage >= 80) {
      return 'Très bien ! Continuez ainsi.';
    } else if (percentage >= 50) {
      return 'Bien, mais il y a place à amélioration.';
    } else {
      return 'Vous pouvez mieux faire.';
    }
  };

  const handleRestart = () => {
    window.location.reload();
    setScore(0);
  };
  const handlePreviousQuestion = useCallback(() => {
    setCurrentPage((prevPage) =>
    Math.max(prevPage-1,0));
  },[])



    if(quizComplet){
      return(
        <div className='result-section'>
        <h2>Résultat</h2>
        <p>
          Vous avez obtenu {score} sur {total} ({percentage.toFixed(2)}%)
        </p>
        <p>
          {getResultMessage()};
        </p>
        <button className='restart-button' onClick={handleRestart}>
          Recommencer le Quiz
        </button>
      </div>
      )
    }

    //Calculer les questions à afficher sur la page actuelle
    const startIndex = currentPage * questionPerPage;
    
    const currentQuestionn = questions.slice(startIndex, startIndex+questionPerPage);
        return (
      <div className='quiz'>
        <h1> Page {currentPage+1}</h1>
      <Chronos   handleNextPage={handleNextPage}
      setQuizComplet={setQuizComplet} /> 
      {currentQuestionn.map((question,index)=>(
      <Question
      key={startIndex+index}
      question={question}      
      handleAnswerChange={handleAnswerChange}
      handleNextPage={handleNextPage}
      questionNumber={startIndex+index+1}
      totalQuestions={questions.length}
      
    />  
      ))}
        <div>
      <button onClick={handlePreviousQuestion} disabled={currentPage===0 ||(currentPage)*questionPerPage>=questions.length}>Précédent</button>
      <button onClick={handleNextPage} disabled={(currentPage)*questionPerPage>=questions.length} >Suivant</button>
        </div>
      </div>
    );
  };
  
  export default Quiz;
  