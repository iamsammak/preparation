// Given a list of students with the time periods that they are busy during the day,
// find all the time periods that they are all available.

// 24 * 60 * 60 = 86400
// 60 * 60 = 3600

// Divide the day into blocks
// Example: 0 - 3600 is 12am to 1am

// no seconds, just minutes
// 1440 minutes in a day
// 0 - 60 is 12am to 1am

// bar graph represented by an array
// [0, 1440] means 0 to 1440 is the free period

// hector comes in and he is busy from 9am to 12:30pm, 1:15pm-4pm, 6pm to 8pm
// 540-750, 795-960, 1080-1200
// [0, 540, 750, 795, 960, 1080, 1200, 1440]

// Sarah comes in and she is busy from 4am-10am, 7pm-750pm, 8:30pm-10pm
// 240-600, 1140-1190, 1230-1320

// is 240 smaller than 540, yes then push 240
// is 600 smaller than 540, no so push 540


function toSeconds(armyTimeString) {
  // example input: '12:45' or '23:13'
  let hourMinArr = armyTimeString.split(":");
  let hour = parseInt(hourMinArr[0] * 60);
  let min = parseInt(hourMinArr[1]);
  let seconds = hour + min;
  return seconds;
}

// sample busyTimesArray
// ['09:00 to 12:30', '13:15 to 16:00', '18:00 to 20:00']

function calcFreeTime(busyTimesArray) {
  let freeTime = [0, 1440];

  for(let i = 0; i < busyTimesArray.length; i++) {
    let busyTime = busyTimesArray[i].split(" to ");
    let startBusy = toSeconds(busyTime[0]);
    let endBusy = toSeconds(busyTime[1]);

    for(let j = 0; j < freeTime.length; j++) {
      if (freeTime[j] < startBusy) {

      }
    }
  }
}
