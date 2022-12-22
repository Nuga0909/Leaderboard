import GET_SCORE from './api';

const boardCont = document.querySelector('.score-cont');

const POPULATE_BOARD = async () => {
  boardCont.innerHTML = '';
  const scoreArr = await GET_SCORE();
  scoreArr.sort((a, b) => b.score - a.score);
  scoreArr.forEach((element) => {
    boardCont.innerHTML += `
    <li>
      <p class="name">${element.user} </p>
      <p class="score">${element.score}</p>
    </li>
    `;
  });
};

export default POPULATE_BOARD;