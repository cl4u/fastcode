/*
 * @Author: rk
 * @Description: 日期类函数
 * @Date: 2023-03-06 11:30:36
 * @LastEditors: rk
 * @LastEditTime: 2024-07-12 16:40:08
 */

/**
 * 格式化日期时间
 * @description 如果有传入时间，则返回该时间不同格式，如果未传，则返回当前时间的不同格式
 * @param {Number} type 1->返回年月,2->返回年月日,3->返回年月日时分秒
 * @param {Date} timeStamp 如果不传，则默认获取当前时间,可以传入new Date("2024-06-05"),也支持"2024-06-05"字符串形式，还支持时间戳1720669941605
 * @returns
 */
export const timeFormate = (type = 3, timeStamp) => {
  let now = timeStamp ? new Date(timeStamp) : new Date();
  let year = now.getFullYear();
  let month = (now.getMonth() + 1).toString().padStart(2, "0");
  let date = now.getDate().toString().padStart(2, "0");
  let hh = now.getHours().toString().padStart(2, "0");
  let mm = now.getMinutes().toString().padStart(2, "0");
  let ss = now.getSeconds().toString().padStart(2, "0");
  if (type == 1) {
    return `${year}-${month}`;
  } else if (type == 2) {
    return `${year}-${month}-${date}`;
  } else {
    return `${year}-${month}-${date} ${hh}:${mm}:${ss}`;
  }
};

/**
 * 获取明天的日期
 * @description 获取当前时间的明天日期
 * @returns
 */
export const getTomorrow = () => {
  let time = new Date().getTime() + 24 * 60 * 60 * 1000; // 获取明天的日期
  let tomorrow = new Date(time);
  let month = (tomorrow.getMonth() + 1).toString().padStart(2, "0");
  let day = tomorrow.getDate().toString().padStart(2, "0");
  return tomorrow.getFullYear() + "-" + month + "-" + day;
};

/**
 * 获取当前月份的天数
 * @param {Number} year 必传，需要传入年份
 * @param {Numbet} month 必传，需要传入月份
 * @returns
 */
export const getMonthDays = (year, month) => {
  var d = new Date(year, month, 0);
  return d.getDate();
};

/**
 * 查询日期所在旬
 * @description 根据所传日期获取所在旬
 * @param {Date} date 必传，可以传入new Date("2024-06-05"),也支持"2024-06-05"字符串形式，还支持时间戳1720669941605
 * @returns 1: 上旬，2: 中旬，3: 下旬
 */
export const getTenday = (date) => {
  let day = new Date(date).getDate();
  if (day < 11) {
    return 1;
  } else if (day > 10 && day < 21) {
    return 2;
  } else if (day > 20) {
    return 3;
  }
};

/**
 * 查询月份所在季度
 * @description 根据传入的时间获取所在季度
 * @param {Date} date Date类型，必传，可以传入new Date("2024-06-05"),也支持"2024-06-05"字符串形式，还支持时间戳1720669941605
 * @returns 1: 一季度，2: 二季度，3: 三季度，4: 四季度
 */
export const getQuarter = (date) => {
  let nowDate = new Date(date);
  let month = nowDate.getMonth() + 1;
  if (month < 4) {
    return 1;
  } else if (month > 3 && month < 7) {
    return 2;
  } else if (month > 6 && month < 10) {
    return 3;
  } else if (month > 9) {
    return 4;
  }
};

/**
 * 获取n天前的时间
 * @description 获取num天后的时间
 * @param {Number} num  Number类型，获取num前的日期
 * @param {Number} type Number类型，返回数据类型,1->["2022-10","15"], 2->2022-10-15
 * @returns
 */
export const getPrevDate = (num = 1, type) => {
  let now = +new Date();
  let prevDate = new Date(now - num * 24 * 60 * 60 * 1000);
  let year = prevDate.getFullYear();
  let month = (prevDate.getMonth() + 1).toString().padStart(2, "0");
  let date = prevDate.getDate().toString().padStart(2, "0");
  return type === 1
    ? [year + "-" + month, date]
    : year + "-" + month + "-" + date;
};

/**
 * 获取上个月月份
 * @description 接收一个参数，则获取该参数的上个月，如果不传，则获取当前时间的上个月
 * @param {Date} time Date类型，可以传入new Date("2024-06-05"),也支持"2024-06-05"字符串形式，还支持时间戳1720669941605
 * @returns
 */
export const getPreMonth = (time) => {
  let date = "";
  if (time) {
    date = timeFormate(2, time);
  } else {
    date = timeFormate(2, new Date());
  }
  const arr = date.split("-");
  let [year, month, day] = arr;
  let year2 = year;
  let month2 = parseInt(month) - 1;
  if (month2 == 0) {
    year2 = parseInt(year2) - 1;
    month2 = 12;
  }
  let day2 = day;
  let days2 = new Date(year2, month2, 0);
  days2 = days2.getDate();
  if (day2 > days2) {
    day2 = days2;
  }
  if (month2 < 10) {
    month2 = "0" + month2;
  }
  let t2 = year2 + "-" + month2;
  return t2;
};

/**
 * 获取下个月
 * @description 接收一个参数，则获取该参数的下个月，如果不传，则获取当前时间的下个月
 * @param {Date} time Date类型，可以传入new Date("2024-06-05"),也支持"2024-06-05"字符串形式，还支持时间戳1720669941605
 * @returns
 */
export const getNextMonth = (time) => {
  let date = "";
  if (time) {
    date = timeFormate(2, time);
  } else {
    date = timeFormate(2, new Date());
  }
  const arr = date.split("-");
  let [year, month, day] = arr;
  let year2 = year;
  let month2 = parseInt(month) + 1;
  if (month2 == 13) {
    year2 = parseInt(year2) + 1;
    month2 = 1;
  }
  let day2 = day;
  let days2 = new Date(year2, month2, 0);
  days2 = days2.getDate();
  if (day2 > days2) {
    day2 = days2;
  }
  if (month2 < 10) {
    month2 = "0" + month2;
  }
  let t2 = year2 + "-" + month2;
  return t2;
};

/**
 * 获取某一天的日期
 * @description 可以根据传入的时间获取未来或者过去的某一天数据
 * @param {Number} timeType  Number类型，1->表示未来的某一天，2->表示过去的某一天
 * @param {Number} num  num Number类型，表示未来/过去的天数
 * @param {Date} dateTime  Date类型，dateTime是传入时间，默认不传，
 * @param {Number} type  Number类型，type为返回类型，1->是年月日，2->是月日
 * @returns
 */
export const getOtherDate = (timeType = 1, num = 1, dateTime, type = 1) => {
  let time = new Date(dateTime).getTime() || new Date().getTime();
  time =
    timeType === 1
      ? time + 24 * 60 * 60 * 1000 * num
      : time - 24 * 60 * 60 * 1000 * num;
  const date = new Date(time);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  if (type == 2) {
    return month + "-" + day;
  } else {
    return date.getFullYear() + "-" + month + "-" + day;
  }
};

/**
 * @description 根据timeType和num分割时间
 * @param {Number} time Number类型，根据time分割时间
 * @param {Number} type Number类型，type是1，表示从(index+1)计算，type=2表示从index开始计算
 * @param {Number} type type=1,按照15分钟分割[00:15,00:30,00:45,01:00...]
 * @param {Number} type type=2,按照15分钟分割[00:00,00:15,00:30,01:45...]
 * @returns
 */
export const devideTimes = (time = 15, type = 1) => {
  let size = Math.floor((24 * 60) / time);
  let timeArrays = new Array(size).fill("").map((item, index) => {
    let timeVal = type === 1 ? (index + 1) * time : index * time;
    let timeHour = Math.floor(timeVal / 60);
    let timeMinute = timeVal % 60;
    let lastTime =
      (timeHour < 10 ? "0" + timeHour : timeHour) +
      ":" +
      (timeMinute === 0
        ? "00"
        : timeMinute < 10
        ? "0" + timeMinute
        : timeMinute);
    return lastTime;
  });
  return timeArrays;
};

/**
 * @description js按照传值自动生成24小时时间区间
 * @param {Number} time Number类型，根据time分割时间
 * @param {Number} time 按照15分钟分割[00:00-00:15,00:15-00:30...]
 * @param {Number} time 按照30分钟分割[00:00-00:30,00:30-01:00...]
 * @param {Number} time 按照60分钟分割[00:00-01:00,01:00-02:00...]
 * @returns
 */
export const devideFormatTimes = (time = 15) => {
  let size = Math.floor((24 * 60) / time);
  let timeArrays = new Array(size).fill("").map((item, index) => {
    let startVal = index * time;
    let endVal = (index + 1) * time;
    let startHour = Math.floor(startVal / 60);
    let startMinute = startVal % 60;
    let endHour = Math.floor(endVal / 60);
    let endMinute = endVal % 60;
    let startTime =
      (startHour < 10 ? "0" + startHour : startHour) +
      ":" +
      (startMinute === 0
        ? "00"
        : startMinute < 10
        ? "0" + startMinute
        : startMinute);
    let endTime =
      (endHour < 10 ? "0" + endHour : endHour) +
      ":" +
      (endMinute === 0 ? "00" : endMinute < 10 ? "0" + endMinute : endMinute);
    return startTime + " - " + endTime;
  });
  return timeArrays;
};

/**
 * @description 动态生成8760个小时的数组
 * @returns
 */
export const getHoursTimes = () => {
  let hoursArr = [];
  for (let i = 1; i <= 8760; i++) {
    hoursArr.push(i);
  }
  return hoursArr;
};

/**
 * 计算两个日期之间的天数
 * @description 主要计算两个日期之间的天数,不关注日期前后顺序
 * @param {Date} date1 必传，可以传入new Date("2024-06-05"),也支持"2024-06-05"字符串形式，还支持时间戳1720669941605
 * @param {Date} date2 必传，可以传入new Date("2024-06-05"),也支持"2024-06-05"字符串形式，还支持时间戳1720669941605
 * @returns
 */
export const diffDays = (date1, date2) => {
  return Math.ceil(
    Math.abs(new Date(date1) - new Date(date2)) / (1000 * 24 * 60 * 60)
  );
};

/**
 * 获取两个日期之间的所有日期,
 * @description 传入的日期顺序，startDay必须小于endDay，否则返回空数组
 * @param {Date} startDate 必传，可以传入new Date("2024-06-05"),也支持"2024-06-05"字符串形式，还支持时间戳1720669941605
 * @param {Date} endDate 必传，可以传入new Date("2024-06-05"),也支持"2024-06-05"字符串形式，还支持时间戳1720669941605
 * @returns {Array} dates 所有日期数组
 */
export const getAllDate = (starDay, endDay) => {
  let arr = [];
  let dates = [];

  // 设置两个日期UTC时间
  let db = new Date(starDay);
  let de = new Date(endDay);

  // 获取两个日期GTM时间
  let s = db.getTime() - 24 * 60 * 60 * 1000;
  let d = de.getTime() - 24 * 60 * 60 * 1000;
  // 获取到两个日期之间的每一天的毫秒数
  for (let i = s; i <= d; ) {
    i = i + 24 * 60 * 60 * 1000;
    arr.push(parseInt(i));
  }

  // 获取每一天的时间  YY-MM-DD
  for (let j in arr) {
    let time = new Date(arr[j]);
    let year = time.getFullYear(time);
    let mouth =
      time.getMonth() + 1 >= 10
        ? time.getMonth() + 1
        : "0" + (time.getMonth() + 1);
    let day = time.getDate() >= 10 ? time.getDate() : "0" + time.getDate();
    let YYMMDD = year + "-" + mouth + "-" + day;
    dates.push(YYMMDD);
  }

  return dates;
};
