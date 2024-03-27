/*
 * @Author: rk
 * @Description: 工具类函数
 * @Date: 2023-03-06 11:31:05
 * @LastEditors: rk
 * @LastEditTime: 2023-11-28 14:38:39
 */

/**
 * 切换主题的方法
 * @param {*} element
 * @param {*} className
 * @returns
 */
export const toggleClass = (element, className) => {
  if (!element || !className) {
    return;
  }
  element.className = className;
};

/**
 * 生成16位随机字符串
 */
export const createNonceStr = () => {
  let chars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let nums = "";
  for (let i = 0; i < 16; i++) {
    //这里是几位就要在这里不改变
    let id = parseInt(Math.random() * 61);
    nums += chars[id];
  }
  return nums;
};

/**
 * 深拷贝
 * @param {*} source
 * @returns
 */
export const deepClone = (source) => {
  if (typeof source !== "object" || source == null) {
    return source;
  }
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
 * @param {*} arr
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
 * @param {*} list
 * @param {*} name
 * @returns
 */
export const getValIndex = (list, name) => {
  return list.findIndex((value) => value === name);
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
 * @param {*} color
 * @param {*} opacity
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
 * 将url中的参数转为对象，如www.baidu.com?a=1&b=2 转为{a:1,b:2}
 * @param {*} url
 * @returns
 */
export const paramsFormate = (url) => {
  url = url ? url.split("?")[1] : "";
  let _url = url || window.location.search().replace("?", "");
  if (_url) {
    return Object.fromEntries(new URLSearchParams(_url));
  }
};

/**
 * 将json对象转为url参数
 * @param {*} json
 * @returns
 */
export const json2UrlParam = (json) => {
  return new URLSearchParams(json).toString();
};

/**
 * 数组根据某个字段进行排序
 * @param {*} array必传
 * @param {*} key必传 根据key进行排序
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
 * @param {*} func
 * @param {*} delay
 * @param {*} immediate
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
 * @param {*} fn
 * @param {*} delay
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
 * @param {*} arr1 必传
 * @param {*} arr2 必传
 * @param {*} key 必传，根据该字段进行去重
 * @param {*} type 1-> arr1数据覆盖arr2, 2->arr2数据覆盖arr1
 * @returns
 */
export const uniqueArray = (arr1, arr2, key, type) => {
  let hash = {};
  let list = type == 2 ? [...arr2, ...arr1] : [...arr1, ...arr2];
  return list.reduce((item, next) => {
    hash[next[key]] ? "" : (hash[next[key]] = true && item.push(next));
    return item;
  }, []);
};

/**
 * 常用于将name和code 替换成label和value
 * 修改多维数组对象中的属性名称
 * @param {*} arr 要修改的数组
 * @param {*} pro1 被替换的属性1
 * @param {*} pro2 被替换的属性2
 * @param {*} key1 替换的属性1
 * @param {*} key2 替换的属性2
 * @returns
 */
export const changeArrayProperty = (arr, pro1, pro2, key1, key2) => {
  if (!Array.isArray(arr)) {
    return;
  }
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
 * @param {*} arr
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
 * @param {*} arr
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
 * @param {*} arr
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
 * @param {*} userRelations 必传，映射关系
 * @param {*} arr 必传，要转换的数组
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
 * @param {*} list 必传，需要转换的数组
 * @param {*} key1 父节点id
 * @param {*} key2 子节点id
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
 * @param {arr} 要去重的数组
 * @param {key} 根据去重的字段名
 * @returns
 */
export const uniqueArrayObject = (arr = [], key = "id") => {
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
