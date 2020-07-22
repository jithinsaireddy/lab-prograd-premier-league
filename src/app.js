//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  var manager = [managerName, managerAge, currentTeam, trophiesWon];
  return manager;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  //createManager(e);
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(formation) {
  if (formation.length == 0) {
    return null;
  }
  var play = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2],
  };
  return play;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in _ year

function filterByDebut(year) {
  var arr = [];
  players.forEach((element) => {
    if (element.debut == year) {
      arr.push(element);
    }
  });
  return arr;
}

//Progression 4 - Filter players that play at the position ___

function filterByPosition(position) {
  var arr = [];
  players.forEach((element) => {
    if (element.position == position) {
      arr.push(element);
    }
  });
  return arr;
}

//Progression 5 - Filter players that have won __ award

function filterByAward(awardName) {
  let Array = [];
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name === awardName) {
        Array.push(players[i]);
      }
    }
  }
  return Array;
}

//Progression 6 - Filter players that won __ award __ times

function filterByAwardxTimes(awardName, noOfTimes) {
  let arr = [];
  let count = 0,
    m = 0;
  let j;
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        count++;
      }
    }
    if (count == noOfTimes) {
      arr.push(players[i]);
    }
    count = 0;
  }
  return arr;
}

//Progression 7 - Filter players that won __ award and belong to __ country

function filterByAwardxCountry(awardName, country) {
  let arr = [];
  let c = 0;
  for (let i = 0; i < players.length; i++) {
    if (players[i].country == country) {
      for (let j = 0; j < players[i].awards.length; j++) {
        if (players[i].awards[j].name == awardName) {
          arr[c++] = players[i];
        }
      }
    }
  }

  return arr;
}

//Progression 8 - Filter players that won atleast __ awards, belong to __ team and are younger than __

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let arr = [];
  let c = 0;
  for (let i = 0; i < players.length; i++) {
    if (
      players[i].awards.length >= noOfAwards &&
      players[i].team == team &&
      players[i].age <= age
    ) {
      arr[c++] = players[i];
    }
  }
  return arr;
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to ___ team in descending order of awards won

//Challenge 1 - Sort players that have won ___ award __ times and belong to ____ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than ___ years in alphabetical order
//Sort the awards won by them in reverse chronological order
