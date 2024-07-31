/*
 * @Author: rk
 * @Description: 工具类函数
 * @Date: 2023-03-06 11:31:05
 * @LastEditors: rk
 * @LastEditTime: 2024-07-12 17:56:34
 */

/**
 * 切换主题的方法
 * @param {*} element 必传
 * @param {String} className 必传
 * @returns
 */
export const toggleClass = (element, className) => {
  if (!element || !className) {
    return;
  }
  element.className = className;
};

/**
 * 表单重置
 * @param {*} vm 必传，指向this实例
 * @param {*} refName 必传，refs名称
 */
export const resetForm = (vm, refName) => {
  if (vm.$refs[refName]) {
    vm.$refs[refName].resetFields();
  }
};

/**
 * 生成32位随机字符串
 * @returns {string}
 */
export const createNonceStr = () => {
  const timestamp = +new Date() + "";
  const randomNum = parseInt((1 + Math.random()) * 65536) + "";
  return (+(randomNum + timestamp)).toString(32);
};

/**
 * 深拷贝
 * @param {*} source 必传
 * @returns
 */
export const deepClone = (source) => {
  const target = Array.isArray(source) ? [] : {};
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (typeof source[key] === "object" && source[key] !== null) {
        target[key] = deepClone(source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
};

/**
 * 将数组每一项转字符串
 * @description 数组每一项都是由number类型组成，其他类型不支持
 * @param {Array} arr 必传
 * @returns
 */
export const numberArray2String = (arr) => {
  for (let i in arr) {
    arr[i] = arr[i] == null || arr[i] == "null" ? "-" : String(arr[i]);
  }
  return arr;
};

/**
 * 获取某个值在数组中的下标
 * @param {Array} list 必传
 * @param {String|Number|Boolean} value 必传
 * @returns
 */
export const getValIndex = (list, value) => {
  return list.findIndex((item) => item === value);
};

/**
 * 生成随机颜色
 * @returns
 */
export const getRandomColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return "rgba(" + r + "," + g + "," + b + ",1)";
};

/**
 * 改变颜色透明度
 * @param {String} color 必传
 * @param {Number} opacity 必传
 * @returns
 */
export const getOpacityColor = (color, opacity) => {
  var theColor = color.toLowerCase();
  //十六进制颜色值的正则表达式
  var r = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是16进制颜色
  if (theColor && r.test(theColor)) {
    if (theColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += theColor.slice(i, i + 1).concat(theColor.slice(i, i + 1));
      }
      theColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var j = 1; j < 7; j += 2) {
      sColorChange.push(parseInt("0x" + theColor.slice(j, j + 2)));
    }
    return "rgba(" + sColorChange.join(",") + "," + opacity + ")";
  }
  return theColor;
};

/**
 * url参数转对象
 * @description 将url中的参数转为对象，如果未传参，则默认使用window.location.search;如www.baidu.com?a=1&b=2 转为{a:1,b:2}
 * @param {*} url 非必传
 * @returns
 */
export const paramsFormate = (url) => {
  url = url ? url.split("?")[1] : "";
  let _url = url || window.location.search.replace("?", "");
  if (_url) {
    return Object.fromEntries(new URLSearchParams(_url));
  }
};

/**
 * 将json对象转为url参数
 * @param {*} json 必传
 * @returns
 */
export const json2UrlParam = (json) => {
  return new URLSearchParams(json).toString();
};

/**
 * 数组根据某个字段进行排序
 * @param {Array} array 必传
 * @param {String} key 必传,根据key进行正序排列
 * @returns
 */
export const sortByType = (array, key) => {
  return array.sort((a, b) => {
    let x = a[key];
    let y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
};

/**
 * 防抖
 * @param {Function} func 必传
 * @param {Number} delay 非必传
 * @param {Boolean} immediate 非必传
 * @returns
 */
export const debounce = (func, delay = 1000, immediate = false) => {
  let timer = null;
  //不能用箭头函数
  return function () {
    //在时间内重复调用的时候需要清空之前的定时任务
    if (timer) {
      clearTimeout(timer);
    }
    //适用于首次需要立刻执行的
    if (immediate && !timer) {
      func.apply(this, arguments);
    }
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
};

/**
 * 节流
 * @param {Function} fn 必传
 * @param {Number} delay 非必传
 * @returns
 */
export const throttle = (fn, delay = 1000) => {
  let lastTime = 0,
    timer = null;
  return function () {
    let _this = this;
    let _arguments = arguments;
    let now = new Date().getTime();
    clearTimeout(timer);
    // 判断上次触发的时间和本次触发的时间差是否小于delay,创建一个timer
    if (now - lastTime < delay) {
      timer = setTimeout(function () {
        lastTime = now;
        fn.apply(_this, _arguments);
      }, delay);
    } else {
      // 否则可以直接执行
      lastTime = now;
      fn.apply(_this, _arguments);
    }
  };
};

/**
 * 对数组对象进行合并并且去重
 * @param {Array} arr1 必传
 * @param {Array} arr2 必传
 * @param {String} key 必传，根据该字段进行去重
 * @param {Number} type 非必传，1-> arr1数据覆盖arr2, 2->arr2数据覆盖arr1
 * @returns
 */
export const uniqueArray = (arr1, arr2, key, type = 2) => {
  let hash = {};
  let list = type == 2 ? [...arr2, ...arr1] : [...arr1, ...arr2];
  return list.reduce((item, next) => {
    hash[next[key]] ? "" : (hash[next[key]] = true && item.push(next));
    return item;
  }, []);
};

/**
 * 修改多维数组对象中的属性名称
 * @description 常用于将name和code 替换成label和value
 * @param {Array} arr 必传，要修改的数组
 * @param {String} pro1 必传，被替换的属性1
 * @param {String} pro2 必传，被替换的属性2
 * @param {String} key1 必传，替换的属性1
 * @param {String} key2 必传，替换的属性2
 * @returns
 */
export const changeArrayProperty = (arr, pro1, pro2, key1, key2) => {
  let obj = {};
  return arr.map((v, i) => {
    obj = {
      [key1]: v[pro1],
      [key2]: v[pro2],
    };
    if (v.children) {
      obj.children = changeArrayProperty(v.children, pro1, pro2, key1, key2);
    }
    return obj;
  });
};

/**
 * 将横向数组转为纵向数组
 * @param {Array} arr 必传
 * @returns
 */
export const horizontal2Vertical = (arr) => {
  let list = [];
  for (let i = 0; i < arr[0].length; i++) {
    list[i] = [];
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      list[j][i] = arr[i][j];
    }
  }
  return list;
};

/**
 * 将纵向数组转为横向数组
 * @param {Array} arr 必传
 * @returns
 */
export const vertical2Horizontal = (arr) => {
  let maxLength = getMaxLength(arr);
  let rowArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < maxLength; j++) {
      if (!rowArr[j]) {
        rowArr[j] = [];
      }
      rowArr[j].push(arr[i][j]);
    }
  }
  return rowArr;
};
/**
 * 获取该行数据最大值，供上边的方法使用
 * @param {Array} arr 必传
 * @returns
 */
export const getMaxLength = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
    }
  }
  return max;
};

/**
 * 将数组里面的对象转换为其他键值对
 * @param {map} userRelations 必传，映射关系
 * @param {Array} arr 必传，要转换的数组
 * @returns
 */
export const demandArr = (userRelations, arr) => {
  let list = [];
  arr.forEach((item) => {
    let obj = {};
    for (let i in item) {
      const key = userRelations[i];
      obj[key] = item[i];
    }
    list.push(obj);
  });
  return list;
};

/**
 * 树形数据结构转换
 * @param {Array} list 必传，需要转换的数组
 * @param {String|Number} key1 必传，父节点id
 * @param {String|Number} key2 必传，子节点id
 * @returns
 */
export const tranListToTree = (list, key1, key2) => {
  const treeList = [],
    map = {};
  list.forEach((item) => {
    if (!item.children) {
      item.children = [];
    }
    map[item[key1]] = item;
  });
  list.forEach((item) => {
    const parent = map[item[key2]];
    if (parent) {
      parent.children.push(item);
    } else {
      treeList.push(item);
    }
  });
  return treeList;
};

/**
 * 数组对象根据字段去重
 * @param {Array} arr 必传，要去重的数组
 * @param {String} key 必传，根据去重的字段名
 * @returns
 */
export const uniqueArrayObject = (arr, key) => {
  if (arr.length === 0) return;
  let list = [];
  const map = {};
  arr.forEach((item) => {
    if (!map[item[key]]) {
      map[item[key]] = item;
    }
  });
  list = Object.values(map);

  return list;
};
/**
 * 下载文件方法处理
 * @param {Object} res 必传，接口返回字段
 * @param {String} title 必传，导出文件名称
 */
export const downloadData = (res, title) => {
  if ("download" in document.createElement("a")) {
    let url = window.URL.createObjectURL(res);
    let link = document.createElement("a");
    link.style.display = "none";
    link.href = url;
    link.setAttribute("download", title);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    navigator.msSaveBlob(res, title);
  }
};

/**
 * 移除对象中值为null, undefined的字段
 * @param {object} obj 必传，对象
 * @returns {object}
 */
export const delEmptyQueryNodes = (obj = {}) => {
  const params = Object.keys(obj)
    .filter((key) => obj[key] !== null && obj[key] !== undefined)
    .reduce(
      (acc, key) => ({
        ...acc,
        [key]: obj[key],
      }),
      {}
    );
  return params;
};

/**
 * 参数处理
 * @param {Object} params  必传，参数对象
 */
export const tansParams = (params) => {
  let result = "";
  for (const propName of Object.keys(params)) {
    const value = params[propName];
    let part = encodeURIComponent(propName) + "=";
    if (value !== null && typeof value !== "undefined") {
      if (typeof value === "object") {
        for (const key of Object.keys(value)) {
          if (value[key] !== null && typeof value[key] !== "undefined") {
            const params = propName + "[" + key + "]";
            let subPart = encodeURIComponent(params) + "=";
            result += subPart + encodeURIComponent(value[key]) + "&";
          }
        }
      } else {
        result += part + encodeURIComponent(value) + "&";
      }
    }
  }
  result = result.slice(0, result.length - 1);
  return result;
};

/**
 * 转驼峰
 * @param {String} str 必传，原字符串
 * @param {Boolean} upperCaseFirst 必传，是否首字母大写
 * @returns 转换后的字符串
 */
export const toCamelCase = (str, upperCaseFirst) => {
  str = (str || "").toLowerCase().replace(/-(.)/g, function (match, group1) {
    return group1.toUpperCase();
  });

  if (upperCaseFirst && str) {
    str = str.charAt(0).toUpperCase() + str.slice(1);
  }

  return str;
};

/**
 * 图片文件转base64
 * @param {*} file 必传，图片文件
 * @returns
 */
export const getBase64 = (file) => {
  return new Promise(function (resolve, reject) {
    const reader = new FileReader();
    let imgResult = "";
    reader.readAsDataURL(file);
    reader.onload = function () {
      imgResult = reader.result;
    };
    reader.onerror = function (error) {
      reject(error);
    };
    reader.onloadend = function () {
      resolve(imgResult);
    };
  });
};

/**
 * 24点数组转96点数组
 * @param {Array} list 必传 要转换的长度为24的数组
 * @param {number} toFixed 非必传 要保留的小数位，默认不处理 注意保留小数位后返回的数据是string类型
 * @returns Array 转化后的长度为96的数组
 */
export const arr24To96 = (list, toFixed) => {
  if (list && list.length !== 0) {
    const _toFixed = toFixed || null;
    const newList = [];
    let n = 0;
    let j = 0;
    for (let i = 0; i < 96; i++) {
      newList.push(list[n]);
      if (_toFixed) {
        newList[i] = isNaN(newList[i]) ? null : newList[i].toFixed(_toFixed);
      }
      if (j < 3) {
        j++;
      } else {
        n++;
        j = 0;
      }
    }
    return newList;
  }
  return null;
};

/**
 * 96点数组转24点数组
 * @param {Array} list 必传 要转换的长度为96的数组
 * @param {Boolean} noAverage 非必传，true表示不对4个点加和的值进行平均
 * @param {number} toFixed 非必传  要保留的小数位，默认不处理 注意保留小数位后返回的数据是string类型
 * @returns Array 转化后的长度为24的数组
 */
export const arr96To24 = (list, noAverage, toFixed) => {
  if (list && list.length !== 0) {
    const _toFixed = toFixed || null;
    const newList = [];
    let val = null;
    for (let i = 0; i < list.length; i++) {
      if (list[i] !== null) {
        val += list[i];
      }
      if ((i !== 0 && (i + 1) % 4 === 0) || i === list.length - 1) {
        if (noAverage) {
          newList.push(val === null ? null : Number(+val));
        } else {
          newList.push(val === null ? null : Number(+val / 4));
        }
        val = null;
      }
    }
    if (_toFixed) {
      for (const i in newList) {
        newList[i] = newList[i] === null ? null : newList[i].toFixed(_toFixed);
      }
    }
    return newList;
  }
  return null;
};

/**
 * 删除字符串的头尾空格
 * @param {String} str 必传
 * @returns
 */
export const stringTrim = (str) => {
  return str.toString().replace(/^\s+|\s+$/gm, "");
};

/**
 * 返回数据类型
 * @param {*} data 必传
 * @returns
 */
export const dataType = (data) => {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
};
