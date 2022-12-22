import { GET_SCORE, URL } from './api';

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

const POST_SCORE = async (userInput) => fetch(URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(userInput),
  })
    .then((response) => response.json())
    .then((data) => data.result);
  
export { POST_SCORE, POPULATE_BOARD };