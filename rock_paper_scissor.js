let score = JSON.parse(localStorage.getItem('score')) ||
{
      win : 0,
      loss : 0,
      tie : 0
};

updateScore();

function playGame(playerMove)
{
      let result='';
      const computerMove = pickComputerMove();
      if(playerMove==='Rock')
      {
            if(computerMove==='Rock')
            {
                  result='Tie';
            }
            else if(computerMove==='Paper')
            {
                  result='You lose';
            }
            else
            {
                  result='You lose';
            }
      }

      if(playerMove==='Paper')
      {
            if(computerMove==='Rock')
            {
                  result='You win';
            }
            else if(computerMove==='Paper')
            {
                  result='Tie';
            }
            else
            {
                  result='You lose';
            }
      }

      if(playerMove==='Scissor')
      {
            if(computerMove==='Rock')
            {
                  result='You lose';
            }
            else if(computerMove==='Paper')
            {
                  result='You win';
            }
            else
            {
                  result='Tie';
            }
      }

      if(result === 'You win'){
            score.win++;
      }
      else if(result === 'You lose'){
            score.loss++;
      }
      else{
            score.tie++;
      }

      localStorage.setItem('score', JSON.stringify(score));

      document.querySelector('.js-moves').
      innerHTML = `You picked ${playerMove} - Computer picked ${computerMove}`;
      document.querySelector('.js-result').innerHTML =  result;
      updateScore();
}

function updateScore()
{
      document.querySelector('.js-score').
      innerHTML = `Wins : ${score.win}, Losses : ${score.loss}, Ties :${score.tie}`;
}

function pickComputerMove() 
{
      const randomNumber=Math.random();
      if(randomNumber>=0 && randomNumber<1/3)
      {
            computerMove='Rock';
      }
      else if(randomNumber>=1/3 && randomNumber<2/3)
      {
            computerMove='Paper';
      }
      else
      {
            computerMove='Scissor';
      }
      return computerMove;
}