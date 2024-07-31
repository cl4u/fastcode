/*
 * @Author: rk
 * @Description: 统一出口
 * @Date: 2024-07-12 09:07:09
 * @LastEditors: rk
 * @LastEditTime: 2024-07-12 17:56:42
 */
import * as math from "./math.js";
import * as validate from "./validate.js";
import * as date from "./date.js";
import * as utils from "./utils.js";
import * as cache from "./cache.js";

// 计算函数
export const plus = math.plus;
export const subtract = math.subtract;
export const multiply = math.multiply;
export const divide = math.divide;
export const floatMul = math.floatMul;

// 验证函数
export const isExternal = validate.isExternal;
export const checkTel = validate.checkTel;
export const judgeListComplete = validate.judgeListComplete;
export const isObjEmpty = validate.isObjEmpty;
export const isRepeatValue = validate.isRepeatValue;
export const isObjectValueEqual = validate.isObjectValueEqual;
export const blobValidate = validate.blobValidate;

// 日期函数
export const timeFormate = date.timeFormate;
export const getTomorrow = date.getTomorrow;
export const getMonthDays = date.getMonthDays;
export const getTenday = date.getTenday;
export const getQuarter = date.getQuarter;
export const getPrevDate = date.getPrevDate;
export const getPreMonth = date.getPreMonth;
export const getNextMonth = date.getNextMonth;
export const getOtherDate = date.getOtherDate;
export const devideTimes = date.devideTimes;
export const devideFormatTimes = date.devideFormatTimes;
export const getHoursTimes = date.getHoursTimes;
export const diffDays = date.diffDays;
export const getAllDate = date.getAllDate;

// 缓存函数
export const setSessionStorage = cache.setSessionStorage;
export const getSessionStorage = cache.getSessionStorage;
export const setJsonSessionStorage = cache.setJsonSessionStorage;
export const getJsonSessionStorage = cache.getJsonSessionStorage;
export const removeSessionStorage = cache.removeSessionStorage;
export const setLocalStorage = cache.setLocalStorage;
export const getLocalStorage = cache.getLocalStorage;
export const setJsonLocalStorage = cache.setJsonLocalStorage;
export const getJsonLocalStorage = cache.getJsonLocalStorage;
export const removeLocalStorage = cache.removeLocalStorage;

// 工具函数
export const toggleClass = utils.toggleClass;
export const resetForm = utils.resetForm;
export const createNonceStr = utils.createNonceStr;
export const deepClone = utils.deepClone;
export const numberArray2String = utils.numberArray2String;
export const getValIndex = utils.getValIndex;
export const getRandomColor = utils.getRandomColor;
export const getOpacityColor = utils.getOpacityColor;
export const paramsFormate = utils.paramsFormate;
export const json2UrlParam = utils.json2UrlParam;
export const sortByType = utils.sortByType;
export const debounce = utils.debounce;
export const throttle = utils.throttle;
export const uniqueArray = utils.uniqueArray;
export const changeArrayProperty = utils.changeArrayProperty;
export const horizontal2Vertical = utils.horizontal2Vertical;
export const vertical2Horizontal = utils.vertical2Horizontal;
export const getMaxLength = utils.getMaxLength;
export const demandArr = utils.demandArr;
export const tranListToTree = utils.tranListToTree;
export const uniqueArrayObject = utils.uniqueArrayObject;
export const downloadData = utils.downloadData;
export const delEmptyQueryNodes = utils.delEmptyQueryNodes;
export const tansParams = utils.tansParams;
export const toCamelCase = utils.toCamelCase;
export const getBase64 = utils.getBase64;
export const arr24To96 = utils.arr24To96;
export const arr96To24 = utils.arr96To24;
export const stringTrim = utils.stringTrim;
export const dataType = utils.dataType;
