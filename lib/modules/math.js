/*
 * @Author: rk
 * @Description: 计算函数
 * @Date: 2023-03-03 16:45:24
 * @LastEditors: rk
 * @LastEditTime: 2023-03-06 09:18:51
 */


/**
 * 两数相加
 * @param num1 必传
 * @param num2 必传
*/
export const plus = (num1, num2) => {
    let r1, r2, m;
    try {
        r1 = num1.toString().split(".")[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = num2.toString().split(".")[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    return (num1 * m + num2 * m) / m
}

/**
 * 两数相减
 * @param num1 必传
 * @param num2 必传
*/
export const subtract = (num1, num2) => {
    let r1, r2, m, n;
    try {
        r1 = num1.toString().split(".")[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = num2.toString().split(".")[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2));
    n = (r1 >= r2) ? r1 : r2;
    return +((num1 * m - num2 * m) / m).toFixed(n);
}

/**
 * 两数相乘
 * @param num1 必传
 * @param num2 必传
*/
export const multiply = (num1, num2) => {
    let m = 0,
        s1 = num1.toString(),
        s2 = num2.toString();
    try {
        m += s1.split(".")[1].length
    } catch (e) { }
    try {
        m += s2.split(".")[1].length
    } catch (e) { }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}

/**
 * 两数相除
 * @param num1 必传
 * @param num2 必传
*/
export const divide = (num1, num2) => {
    let t1 = 0,
        t2 = 0;
    try {
        t1 = num1.toString().split(".")[1].length
    } catch (e) { }
    try {
        t2 = num2.toString().split(".")[1].length
    } catch (e) { }
    Math.r1 = Number(num1.toString().replace(".", ""));
    Math.r2 = Number(num2.toString().replace(".", ""));
    // multiply乘法配合一起使用
    return multiply((Math.r1 / Math.r2), Math.pow(10, t2 - t1));
}
