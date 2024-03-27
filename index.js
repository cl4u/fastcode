/*
 * @Author: rk
 * @Description:
 * @Date: 2023-03-03 16:46:56
 * @LastEditors: rk
 * @LastEditTime: 2023-03-14 11:07:20
 */

const { plus, subtract, multiply, divide } = require("./lib/modules/math");
const {
    isExternal,
    checkTel,
    dataType,
    judgeListComplete,
    isObjEmpty,
    isRepeatValue,
    isObjectValueEqual,
} = require("./lib/modules/validate");
const {
    timeFormate,
    getTomorrow,
    getMonthDays,
    getTenday,
    getQuarter,
    getPrevDate,
    getPreMonth,
    getNextMonth,
    getOtherDate,
    devideTimes,
    devideFormatTimes,
    getHoursTimes,
    diffDays,
} = require("./lib/modules/date");
const {
    toggleClass,
    deepClone,
    createNonceStr,
    numberArray2String,
    getValIndex,
    getRandomColor,
    getOpacityColor,
    paramsFormate,
    json2UrlParam,
    sortByType,
    debounce,
    throttle,
    uniqueArray,
    changeArrayProperty,
    horizontal2Vertical,
    vertical2Horizontal,
    demandArr,
    tranListToTree,
    uniqueArrayObject,
} = require("./lib/modules/utils");

// 计算函数
module.exports.plus = plus;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.divide = divide;

// 验证函数
module.exports.isExternal = isExternal;
module.exports.checkTel = checkTel;
module.exports.dataType = dataType;
module.exports.isObjEmpty = isObjEmpty;
module.exports.judgeListComplete = judgeListComplete;
module.exports.isRepeatValue = isRepeatValue;
module.exports.isObjectValueEqual = isObjectValueEqual;

// 日期函数
module.exports.timeFormate = timeFormate;
module.exports.getTomorrow = getTomorrow;
module.exports.getMonthDays = getMonthDays;
module.exports.getTenday = getTenday;
module.exports.getQuarter = getQuarter;
module.exports.getPrevDate = getPrevDate;
module.exports.getPreMonth = getPreMonth;
module.exports.getNextMonth = getNextMonth;
module.exports.getOtherDate = getOtherDate;
module.exports.devideTimes = devideTimes;
module.exports.devideFormatTimes = devideFormatTimes;
module.exports.getHoursTimes = getHoursTimes;
module.exports.diffDays = diffDays;

// 工具类函数
module.exports.toggleClass = toggleClass;
module.exports.createNonceStr = createNonceStr;
module.exports.deepClone = deepClone;
module.exports.numberArray2String = numberArray2String;
module.exports.getValIndex = getValIndex;
module.exports.getRandomColor = getRandomColor;
module.exports.getOpacityColor = getOpacityColor;
module.exports.paramsFormate = paramsFormate;
module.exports.json2UrlParam = json2UrlParam;
module.exports.sortByType = sortByType;
module.exports.debounce = debounce;
module.exports.throttle = throttle;
module.exports.uniqueArray = uniqueArray;
module.exports.changeArrayProperty = changeArrayProperty;
module.exports.horizontal2Vertical = horizontal2Vertical;
module.exports.vertical2Horizontal = vertical2Horizontal;
module.exports.demandArr = demandArr;
module.exports.tranListToTree = tranListToTree;
module.exports.uniqueArrayObject = uniqueArrayObject;
