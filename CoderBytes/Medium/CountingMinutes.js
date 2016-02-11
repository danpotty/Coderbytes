// Using the JavaScript language, have the function CountingMinutes(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320.

function PMchecker(timeStr){
  if(timeStr.indexOf('p') !== -1 || timeStr.indexOf('P') !== -1){
    return true;
  }
  else return false;
}

function CountingMinutes(str) {

  var ans;

  var time1 = str.split('-')[0];
  console.log(time1);
  var time1Obj = {};
  time1Obj.hour = parseInt(time1.split(':')[0]);
  time1Obj.minute = parseInt(time1.replace(/[a-z]/ig, '').split(':')[1]);
  console.log(time1Obj);

  var time2 = str.split('-')[1];
  console.log(time2);
  var time2Obj = {};
  time2Obj.hour = parseInt(time2.split(':')[0]);
  time2Obj.minute = parseInt(time2.replace(/[a-z]/ig, '').split(':')[1]);
  console.log(time2Obj);

  if(PMchecker(time1) && time1Obj.hour < 12){
    time1Obj.hour += 12;
  }

  if(!PMchecker(time1) && time1Obj.hour === 12){
    time1Obj.hour = 0;
  }

  if(PMchecker(time2) && time2Obj.hour < 12){
    time2Obj.hour += 12;
  }

  if(!PMchecker(time2) && time2Obj.hour === 12){
    time2Obj.hour = 0;
  }

  time1Obj.inMins = time1Obj.hour*60 + time1Obj.minute;
  time2Obj.inMins = time2Obj.hour*60 + time2Obj.minute;

  if(time2Obj.inMins > time1Obj.inMins){
    ans = time2Obj.inMins - time1Obj.inMins;
  } else if
    (time2Obj.inMins < time1Obj.inMins){
    ans = 1440 - time1Obj.inMins + time2Obj.inMins;
  } else {
    ans = 0;
  }

  return ans;
}

CountingMinutes('10:45am-12:15am');
