const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rFWPvMf2tm4lv7qe7KDr/scores/';

const GET_SCORE = async () => fetch(URL)
  .then((response) => response.json())
  .then((data) => data.result)
  .catch((error) => error);

 export default GET_SCORE;