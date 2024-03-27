/*
 * @Author: rk
 * @Description: 验证类函数
 * @Date: 2023-03-06 09:19:18
 * @LastEditors: rk
 * @LastEditTime: 2023-11-27 19:10:31
 */

/**
 * 校验以https|mailto|tel开始的字符串
 * @param {*} path
 * @returns {Boolean}
 */
export const isExternal = (path) => {
  return /^(https?:|mailto:|tel:)/.test(path);
};

/**
 * 删除字符串的头尾空格
 * @param {*} x
 * @returns
 */
export function stringTrim(x) {
  return x.toString().replace(/^\s+|\s+$/gm, "");
}
/**
 * 手机号格式校验
 * @param {*} tel
 * @returns {Boolean}
 */
export const checkTel = (tel) => {
  tel = stringTrim(tel);
  let regMoblie =
    /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
  if (!regMoblie.test(tel)) {
    return false;
  }
  return true;
};

/**
 * 检测数据类型
 * @param {*} data
 * @returns
 */
export const dataType = (data) => {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
};

/***** 数组对象表单数据提交时判断每一项都不能为空  start****/

/**
 * 对外层数组进行判断
 * @param {*} list
 * @returns
 */
export const judgeListComplete = (list) => {
  if (list.length <= 0) {
    return false;
  }
  let isNotComplete = list.findIndex((item) => {
    return judgeObjectComplete(item) === false;
  });
  if (isNotComplete > -1) {
    return false;
  } else {
    return true;
  }
};
/**
 * 对循环数组的每一项进行验证
 * @param {*} ObjectValue
 * @returns
 */
export const judgeObjectComplete = (ObjectValue) => {
  let flag = true;
  for (let key in ObjectValue) {
    if (!ObjectValue[key]) {
      flag = false;
    }
  }
  if (!flag) {
    return false;
  } else {
    return true;
  }
};

/***** 数组对象表单数据提交时判断每一项都不能为空  end****/

/**
 * 判断对象不为空
 * @param {*} obj
 * @returns
 */
export const isObjEmpty = (obj) => {
  return Object.keys(obj).length !== 0;
};

/**
 * 判断数组对象中是否存在有重复的值
 * @param {*} arr
 * @param {*} key
 * @returns true -> 说明数组中有重复的值，否则没有
 */
export const isRepeatValue = (arr, key) => {
  const property = arr.map((item) => item[key]);
  // 去重操作
  const propertySet = [...new Set(property)];
  // 如果数组长度不等于去重之后对象的size，说明数组中是有重复的值
  if (propertySet.length != property.length) {
    return true;
  }
  return false;
};

/**
 * 判断两个对象是否相等
 * @param {*} obj1
 * @param {*} obj2
 * @returns
 */
export const isObjectValueEqual = (obj1, obj2) => {
  var aProps = Object.getOwnPropertyNames(obj1);
  var bProps = Object.getOwnPropertyNames(obj2);
  // 判断属性名的length是否一致
  if (aProps.length != bProps.length) {
    return false;
  }
  // 循环取出属性名，再判断属性值是否一致
  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];
    if (obj1[propName] !== obj2[propName]) {
      return false;
    }
  }
  return true;
};
