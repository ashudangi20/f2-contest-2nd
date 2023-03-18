function OpeningCeremony(callbackFnc) {
    console.log("Let the games begin");
  
    const score = {red: 0, blue: 0, green: 0, yellow: 0};
  
    setTimeout(() => {
      Race100M(score, callbackFnc);
    }, 1000);
  }
  
  function Race100M(score, callbackFnc) {
    console.log("Race100M starts!");
    console.log("Previous Score: ", score);
  
    const timeTaken = {};
    timeTaken.red = Math.floor(Math.random() * 6) + 10;
    timeTaken.blue = Math.floor(Math.random() * 6) + 10;
    timeTaken.green = Math.floor(Math.random() * 6) + 10;
    timeTaken.yellow = Math.floor(Math.random() * 6) + 10;
  
    console.log("Time Taken: ", timeTaken);
  
    const sortedTimes = Object.keys(timeTaken).sort((a,b) => timeTaken[a] - timeTaken[b]);
    const firstPlace = sortedTimes[0];
    const secondPlace = sortedTimes[1];
  
    score[firstPlace] += 50;
    score[secondPlace] += 25;
  
    console.log(`${firstPlace} won the race with ${timeTaken[firstPlace]} seconds and got 50 points`);
    console.log(`${secondPlace} came second with ${timeTaken[secondPlace]} seconds and got 25 points`);
    console.log("Updated Score: ", score);
  
    setTimeout(() => {
      callbackFnc(score, LongJump);
    }, 1000);
  }
  
  function LongJump(score, callbackFnc) {
    console.log("LongJump starts!");
    console.log("Previous Score: ", score);
  
    const selectedColor = ["red", "yellow", "green", "blue"][Math.floor(Math.random() * 4)];
    score[selectedColor] += 150;
  
    console.log(`${selectedColor} won the LongJump and got 150 points`);
    console.log("Updated Score: ", score);
  
    setTimeout(() => {
      callbackFnc(score, HighJump);
    }, 2000);
  }
  
  function HighJump(score) {
    console.log("HighJump starts!");
    console.log("Previous Score: ", score);
  
    const color = prompt("Which color secured the highest jump?");
  
    if (color) {
      const colorScore = score[color];
      if (colorScore !== undefined) {
        score[color] += 100;
        console.log(`${color} secured the highest jump and got 100 points`);
        console.log("Updated Score: ", score);
      } else {
        console.log("Invalid color entered!");
      }
    } else {
      console.log("Event was cancelled");
    }
  
    AwardCeremony(score);
  }
  
  function AwardCeremony(score) {
    console.log("AwardCeremony starts!");
    console.log("Final Score: ", score);
  
    const sortedScore = Object.keys(score).sort((a,b) => score[b] - score[a]);
    console.log(`${sortedScore[0]} came first with ${score[sortedScore[0]]} points`);
    console.log(`${sortedScore[1]} came second with ${score[sortedScore[1]]} points`);
    console.log(`${sortedScore[2]} came third with ${score[sortedScore[2]]} points`);
  }
  
