/*
 * @Author: rk
 * @Description: cache函数
 * @Date: 2024-07-11 10:00:23
 * @LastEditors: rk
 * @LastEditTime: 2024-07-12 16:38:34
 */

/**
 * 设置sessionStorage,键值是基本数据类型
 * @param {String} key 必传，存储键名
 * @param {*} value 必传，存储键值
 */
export const setSessionStorage = (key, value) => {
  if (!sessionStorage) {
    return;
  }
  if (key != null && value != null) {
    sessionStorage.setItem(key, value);
  }
};

/**
 * 获取sessionStorage值，键值是基本数据类型
 * @param {String} key 必传
 * @returns
 */
export const getSessionStorage = (key) => {
  if (!sessionStorage) {
    return;
  }
  if (key != null) {
    return sessionStorage.getItem(key);
  }
};

/**
 * 设置sessionStorage,键值是引用类型
 * @param {String} key 必传
 * @param {*} jsonValue
 */
export const setJsonSessionStorage = (key, jsonValue) => {
  if (jsonValue != null) {
    setSessionStorage(key, JSON.stringify(jsonValue));
  }
};

/**
 * 获取sessionStorage值，键值是引用类型
 * @param {String} key 必传
 * @returns
 */
export const getJsonSessionStorage = (key) => {
  const value = getSessionStorage(key);
  if (value != null) {
    return JSON.parse(value);
  }
};

/**
 * 删除session值
 * @param {String} key 必传
 */
export const removeSessionStorage = (key) => {
  if (key != null) {
    sessionStorage.removeItem(key);
  }
};

/**
 * 设置localStorage,键值是基本数据类型
 * @param {String} key 必传，存储键名
 * @param {*} value 必传，存储键值
 */
export const setLocalStorage = (key, value) => {
  if (!localStorage) {
    return;
  }
  if (key != null && value != null) {
    localStorage.setItem(key, value);
  }
};

/**
 * 获取localStorage值，键值是基本数据类型
 * @param {String} key 必传
 * @returns
 */
export const getLocalStorage = (key) => {
  if (!localStorage) {
    return;
  }
  if (key != null) {
    return localStorage.getItem(key);
  }
};

/**
 * 设置localStorage,键值是引用类型
 * @param {String} key 必传
 * @param {*} jsonValue
 */
export const setJsonLocalStorage = (key, jsonValue) => {
  if (jsonValue != null) {
    setLocalStorage(key, JSON.stringify(jsonValue));
  }
};

/**
 * 获取localStorage值，键值是引用类型
 * @param {String} key 必传
 * @returns
 */
export const getJsonLocalStorage = (key) => {
  const value = getLocalStorage(key);
  if (value != null) {
    return JSON.parse(value);
  }
};

/**
 * 删除local值
 * @param {String} key 必传
 */
export const removeLocalStorage = (key) => {
  if (key != null) {
    localStorage.removeItem(key);
  }
};
