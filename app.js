import { renderGame } from './render-utils.js';
const currentGameEl = document.getElementById('current-game-container');
const pastGamesEl = document.getElementById('past-games-container');

const nameForm = document.getElementById('name-form');
const teamOneAddButton = document.getElementById('team-one-add-button');
const teamTwoAddButton = document.getElementById('team-two-add-button');
const teamOneSubtractButton = document.getElementById('team-one-subtract-button');
const teamTwoSubtractButton = document.getElementById('team-two-subtract-button');
const finishGameButton = document.getElementById('finish-game-button');
const teamOneLabel = document.getElementById('team-one-name');
const teamTwoLabel = document.getElementById('team-two-name');

let name1 = '';
let name2 = '';
let score1 = 0;
let score2 = 0;
let pastGamesArray = [];

nameForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(nameForm);

    name1 = data.get('team-one');
    name2 = data.get('team-two');

    nameForm.reset();
    displayCurrentGameEl();
});

teamOneAddButton.addEventListener('click', () => {
    score1++;
    displayCurrentGameEl();
});

teamTwoAddButton.addEventListener('click', () => {
    score2++;
    displayCurrentGameEl();
});

teamOneSubtractButton.addEventListener('click', () => {
    score1--;
    displayCurrentGameEl();
});

teamTwoSubtractButton.addEventListener('click', () => {
    score2--;
    displayCurrentGameEl();
});

finishGameButton.addEventListener('click', () => {
    const game = {
        name1,
        name2,
        score1,
        score2
    };
    pastGamesArray.push(game);

    displayAllGames();

    name1 = '';
    name2 = '';
    score1 = 0;
    score2 = 0;
    displayCurrentGameEl();
});

function displayCurrentGameEl() {
    const game = {
        name1,
        name2,
        score1,
        score2
    };

    currentGameEl.textContent = '';
    teamOneLabel.textContent = name1;
    teamTwoLabel.textContent = name2;

    let gameEl = renderGame(game);
    currentGameEl.append(gameEl);
}


function displayAllGames() {
    pastGamesEl.textContent = '';

    for (let past of pastGamesArray) {
        let pastGame = renderGame(past);
        pastGamesEl.append(pastGame);
    }
}


displayCurrentGameEl();
