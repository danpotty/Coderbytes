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
