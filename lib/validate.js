/*
 * @Author: rk
 * @Description: 验证类函数
 * @Date: 2023-03-06 09:19:18
 * @LastEditors: rk
 * @LastEditTime: 2024-07-12 16:41:13
 */

/**
 * 校验以https|mailto|tel开始的字符串
 * @param {String} path 必传
 * @returns {Boolean}
 */
export const isExternal = (path) => {
  return /^(https?:|mailto:|tel:)/.test(path);
};

/**
 * 手机号格式校验
 * @param {Number} tel 必传
 * @returns {Boolean}
 */
export const checkTel = (tel) => {
  tel = tel.toString().replace(/^\s+|\s+$/gm, "");
  let regMoblie =
    /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
  if (!regMoblie.test(tel)) {
    return false;
  }
  return true;
};

/**
 * 判断数组对象是否为空
 * @description 使用场景：数组对象表单数据提交时判断每一项都不能为空
 * @param {Array} list 必传
 * @returns {Boolean}
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

  function judgeObjectComplete(ObjectValue) {
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
  }
};

/**
 * 判断对象不为空
 * @param {Object} obj 必传
 * @returns {Boolean}
 */
export const isObjEmpty = (obj) => {
  return Object.keys(obj).length !== 0;
};

/**
 * 判断数组对象中是否存在有重复的值
 * @param {Array} arr 必传
 * @param {String} key 必传
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
 * @param {Object} obj1 必传
 * @param {Object} obj2 必传
 * @returns {Boolean}
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

/**
 * 验证是否为blob格式
 * @param {*} data
 * @returns true说明不是blob格式，否则是blob格式
 */
export const blobValidate = async (data) => {
  try {
    const text = await data.text();
    JSON.parse(text);
    return false;
  } catch (error) {
    return true;
  }
};
