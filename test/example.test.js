import { renderGame, renderTeam } from '../render-utils.js';

const test = QUnit.test;

test('the function renderTeam will take in 2 arguments and return the textContent of those arguments within p elements created, which will be contained within a created div element', (expect) => {

    const expected = '<div><p>Ryan</p><p>3</p></div>';
    
    const actual = renderTeam('Ryan', 3);
    // console.log(actual, actual.outerHTML);
    expect.equal(actual.outerHTML, expected, 'this test proves that a function renderTeam will create a div element, and will create a p element within the div element containing textContent for each argument passed');
});

test('the function renderGame will take in an object and create an element div. It will call the renderTeam function with the arguments name1, score1 and again with the arguments name2,   score2 and will append the return value to a div. The function returns the div.', (expect) => {
    const game = {
        name1: 'Team1',
        name2: 'Team2',
        score1: 1,
        score2: 2,
    };

    const expected = '<div><p>Team1</p><p>1</p></div><div><p>Team2</p><p>2</p></div>';
    const actual = renderGame(game);

    expect.equal(actual.innerHTML, expected, 'this test proves that the function renderGame will return 2 div elements containing 2 p elements each, with the textContent value of the value of the keys passed as arguments');
});
