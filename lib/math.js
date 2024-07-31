/*
 * @Author: rk
 * @Description: 计算函数
 * @Date: 2023-03-03 16:45:24
 * @LastEditors: rk
 * @LastEditTime: 2024-07-12 16:40:46
 */

/**
 * 两数相加
 * @description 支持整数、浮点数
 * @param {Number} num1 必传
 * @param {Number} num2 必传
 * @return {Number}
 */
export const plus = (num1, num2) => {
  let r1, r2, m;
  try {
    r1 = num1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = num2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (num1 * m + num2 * m) / m;
};

/**
 * 两数相减
 * @description 支持整数、浮点数
 * @param {Number} num1 必传
 * @param {Number} num2 必传
 * @return {Number}
 */
export const subtract = (num1, num2) => {
  let r1, r2, m, n;
  try {
    r1 = num1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = num2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = r1 >= r2 ? r1 : r2;
  return +((num1 * m - num2 * m) / m).toFixed(n);
};

/**
 * 两数相乘
 * @description 支持整数、浮点数
 * @param {Number} num1 必传
 * @param {Number} num2 必传
 * @return {Number}
 */
export const multiply = (num1, num2) => {
  let m = 0,
    s1 = num1.toString(),
    s2 = num2.toString();
  try {
    m += s1.split(".")[1].length;
  } catch (e) {}
  try {
    m += s2.split(".")[1].length;
  } catch (e) {}
  return (
    (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
    Math.pow(10, m)
  );
};

/**
 * 两数相除
 * @description 支持整数、浮点数
 * @param {Number} num1 必传
 * @param {Number} num2 必传
 * @return {Number}
 */
export const divide = (num1, num2) => {
  let c;
  let d;
  let e = 0;
  let f = 0;
  try {
    e = num1.toString().split(".")[1].length;
  } catch (g) {}

  try {
    f = num2.toString().split(".")[1].length;
  } catch (g) {}

  return (
    (c = Number(num1.toString().replace(".", ""))),
    (d = Number(num2.toString().replace(".", ""))),
    floatMul(c / d, Math.pow(10, f - e))
  );
};

/**
 * 相除精度方法
 * @description 支持整数、浮点数
 * @param {Number} num1 必传
 * @param {Number} num2 必传
 * @return {Number}
 */
export const floatMul = (num1, num2) => {
  let c = 0;
  const d = num1.toString();
  const e = num2.toString();
  try {
    c += d.split(".")[1].length;
  } catch (f) {}

  try {
    c += e.split(".")[1].length;
  } catch (f) {}

  return (
    (Number(d.replace(".", "")) * Number(e.replace(".", ""))) / Math.pow(10, c)
  );
};
