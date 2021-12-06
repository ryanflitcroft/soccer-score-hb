// consider: what data type is game here? where will you need to pass it this data type in your app?
export function renderGame(game) {
    //creates an element div, stored in variable 'div'
    //calls renderTeam(game.name1, game.score1), stored in variable team1Div
    //calls renderTeam(game.name2, game.score2), stored in variable team2Div
    //appends team1Div, team2Div to div
    //returns div, containing team1Div team2Div 
    const div = document.createElement('div');
    //renderTeam(name, score);
    const team1Div = renderTeam(game.name1, game.score1);
        //returns <div> <p>name</p> <p>score</p> </div>
    const team2Div = renderTeam(game.name2, game.score2);
        //returns <div> <p>name</p> <p>score</p> </div>

    div.append(team1Div, team2Div);

    div.classList.add('game');

    return div;
    // renderGame(game) 
        // returns <div> <p>name1</p> <p>score1</p> </div> 
        //         <div> <p>name2</p> <p>score2</p> </div>
}

//creates element div, stored in variable teamDiv
//creates element p, stored in variable nameDiv
//creates element p, stored in variable scoreDiv
//nameDiv text content is equal to the argument passed in name
//scoreDiv text content is equal to the argument passed in scoreDiv
//nameDiv and scoreDiv are appended to teamDiv div 
//returns teamDiv
// ** teamDiv = <div> <p>name</p> <p>score</p> </div> **

export function renderTeam(name, score) {
    const teamDiv = document.createElement('div');
    const nameDiv = document.createElement('p');
    const scoreDiv = document.createElement('p');

    nameDiv.textContent = name;
    scoreDiv.textContent = score;

    teamDiv.append(nameDiv, scoreDiv);

    return teamDiv;
}