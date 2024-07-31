### 函数文档说明

#### 1、计算函数

##### 1.1 plus(num1,num2)

说明：

> 两数相加，接收两个参数 num1 和 num2，支持负数相加

参数：

| 参数 | 是否必传 | 类型   | 说明       |
| ---- | -------- | ------ | ---------- |
| num1 | 必传     | number | 支持浮点数 |
| num2 | 必传     | number | 支持浮点数 |

使用：

```javascript
// 两数相加
plus(2, 3.5);

// 负数相加
plus(-3, -6);
```

##### 1.2 subtract(num1,num2)

说明：

> 两数相减，接收两个参数 num1 和 num2，支持负数相减

参数：

| 参数 | 是否必传 | 类型   | 说明       |
| ---- | -------- | ------ | ---------- |
| num1 | 必传     | number | 支持浮点数 |
| num2 | 必传     | number | 支持浮点数 |

使用：

```javascript
// 两数相减
subtract(3, 8);

// 负数相减
subtract(-3, -8);
```

##### 1.3 multiply(num1,num2)

说明：

> 两数相乘，接收两个参数 num1 和 num2，支持负数

参数：

| 参数 | 是否必传 | 类型   | 说明       |
| ---- | -------- | ------ | ---------- |
| num1 | 必传     | number | 支持浮点数 |
| num2 | 必传     | number | 支持浮点数 |

使用：

```javascript
// 两数相乘
multiply(3, 8);

// 负数相乘
multiply(-3, -8);
```

##### 1.4 divide(num1,num2)

说明：

> 两数相除，接收两个参数 num1 和 num2，支持负数

参数：

| 参数 | 是否必传 | 类型   | 说明       |
| ---- | -------- | ------ | ---------- |
| num1 | 必传     | number | 支持浮点数 |
| num2 | 必传     | number | 支持浮点数 |

使用：

```javascript
// 两数相除
divide(3, 8);

// 负数相除
divide(-3, -8);
```

#### 2、验证类函数

##### 2.1 isExternal(path)

说明：

> 校验是否以 https:|mailto:|tel: 开始的链接，接收一个参数 path

参数：

| 参数 | 是否必传 |  类型  |     说明     |
| :--: | :------: | :----: | :----------: |
| path |   必传   | string | 被校验的链接 |

使用：

```javascript
// 校验是以https开始的链接
isExternal("https://www.baidu.com");

// 校验是以mailto开始的邮箱
isExternal("mailto: 13333333@163.com");

// 校验是以tel开始的手机号
isExternal("tel:888826554");
```

##### 2.2 checkTel(tel)

说明：

> 手机号格式校验，按照最新工信部颁发的手机号段进行匹配，接收一个参数 tel
>
> 只支持手机号，不支持固话

参数：

| 参数 | 是否必传 |  类型  |         说明         |
| :--: | :------: | :----: | :------------------: |
| tel  |   必传   | number | 需要输入校验的手机号 |

使用：

```javascript
// 校验手机号是否合法
isExternal("13266666666");
```

##### 2.3 judgeListComplete(list)

说明：

> 数组对象表单数据提交时判断每一项都不能为空，接收一个参数 list。
>
> 该方法在循环数组的每一项进行验证使用的是 judgeObjectComplete()方法进行判断

参数：

| 参数 | 是否必传 | 类型  |         说明         |
| :--: | :------: | :---: | :------------------: |
| list |   必传   | array | 对该数组进行循环校验 |

使用：

```javascript
// 空数组不能提交
judgeListComplete([]); // false

// 数组对象中有空值不能提交
judgeListComplete([{ name: "xx", age: null }]); // false
```

##### 2.4 isObjEmpty(obj)

说明：

> 判断对象不为空，接收一个参数 obj。
>
> 返回 true 则不为空，否则为空

参数：

| 参数 | 是否必传 |  类型  | 说明 |
| :--: | :------: | :----: | :--: |
| obj  |   必传   | object |      |

使用：

```javascript
// 传递空对象
isObjEmpty({}); // false

// 数组对象中有空值不能提交
isObjEmpty({ name: "xx", age: null }); // true
```

##### 2.5 isRepeatValue(arr,key)

说明：

> 判断数组对象中是否存在有重复的值，接收两个参数 arr 和 key。
>
> 返回 true 说明数组中有重复的值，否则没有。

参数：

| 参数 | 是否必传 |  类型  |               说明               |
| :--: | :------: | :----: | :------------------------------: |
| arr  |   必传   | array  |                                  |
| key  |   必传   | string | 根据该字段进行判断是否有重复的值 |

使用：

```javascript
// 判断数组中id值是否有重复值
isRepeatValue(
  [
    { name: "xx", id: 12 },
    { name: "yy", id: 13 },
  ],
  "id"
); // false

// 数组对象中有空值不能提交
isRepeatValue(
  [
    { name: "xx", id: 12 },
    { name: "yy", id: 13 },
    { name: "xs", id: 12 },
  ],
  "id"
); // true
```

##### 2.6 isObjectValueEqual(obj1,obj2)

说明：

> 判断两个对象是否相等，接收两个参数 obj1 和 obj2。
>
> 返回 true 说明相等，否则不相等

参数：

| 参数 | 是否必传 |  类型  | 说明 |
| :--: | :------: | :----: | :--: |
| obj1 |   必传   | object |      |
| obj2 |   必传   | object |      |

使用：

```javascript
// 判断两个对象是否相同
isObjectValueEqual({ name: "xx", id: 12 }, { name: "yy", id: 13 }); // false

// 判断两个对象是否相同，两个对象顺序不同也返回true
isObjectValueEqual({ name: "xx", id: 12 }, { id: 12, name: "xx" }); // true
```

##### 2.7 blobValidate(data)

说明：

> 验证是否为 blob 格式，接受一个 data 参数。
>
> 返回 true 说明不是 bolb 格式，false 说明是 bolb 对象

参数：

| 参数 | 是否必传 | 类型 | 说明 |
| :--: | :------: | :--: | :--: |
| data |   必传   |      |      |

#### 3、日期函数

##### 3.1 timeFormate([type,timeStamp])

说明：

> 格式化日期时间，接收两个参数，type 和 timeStamp
>
> type 默认传 3，timeStamp 默认传当前时间

参数：

| 参数      | 是否必传 | 类型   | 说明                                                                                            |
| --------- | -------- | ------ | ----------------------------------------------------------------------------------------------- |
| type      | 非必传   | number | 1、返回年月(YYYY-MM) <br>2、返回年月日(YYYY-MM-DD) <br>3、返回年月日时分秒(YYYY-MM-DD HH:mm:ss) |
| timeStamp | 非必传   | Date   | 如果传入该参数，则格式化传入的参数， 否则，默认使用当前时间                                     |

使用：

```javascript
// 获取当前时间年月
timeFormate(1);

// 获取当前时间年月日
timeFormate(2);

// 获取当前时间年月日时分秒
timeFormate(3);

// 获取某天年月日时分秒,第二个参数支持字符串
timeFormate(3, "Thu Nov 23 2021 14:45:11 GMT+0800 (中国标准时间)");

// 获取某天年月日时分秒,第二个参数支持number
timeFormate(3, 1300721936550);
```

##### 3.2 getTomorrow()

说明：

> 获取明天的日期，返回年月日格式(YYYY-MM-DD)

使用：

```javascript
// 获取明天的日期
getTomorrow();
```

##### 3.3 getMonthDays(year,month)

说明：

> 获取月份的天数，接收两个参数 year 和 month

参数：

| 参数  | 是否必传 |  类型  |  说明  |
| :---: | :------: | :----: | :----: |
| year  |   必传   | number |  YYYY  |
| month |   必传   | number | number |

使用：

```javascript
// 获取2023年2月的天数
getMonthDays(2023, 2);

// 获取2023年11月的天数
getMonthDays(2023, 11);
```

##### 3.4 getTenday(date)

说明：

> 查询日期所在旬，接收一个参数 date
>
> 返回值：1 -> 上旬，2 -> 中旬，3 -> 下旬

参数：

| 参数 | 是否必传 | 类型 |                 说明                  |
| :--: | :------: | :--: | :-----------------------------------: |
| date |   必传   | Date | "YYYY-MM-DD"或者时间戳或者 new Date() |

使用：

```javascript
// 获取某天的旬类型
getTenday("2023-03-11");
```

##### 3.5 getQuarter(date)

说明：

> 查询月份所在的季度，接收一个参数 date
>
> 返回值：1 -> 一季度，2 -> 二季度，3 -> 三季度，4 -> 四季度

参数：

| 参数 | 是否必传 | 类型 |                 说明                  |
| :--: | :------: | :--: | :-----------------------------------: |
| date |   必传   | Date | "YYYY-MM-DD"或者时间戳或者 new Date() |

使用：

```javascript
// 获取传入时间所在的季度
getQuarter("2023-05-15");
```

##### 3.6 getPrevDate(num[,type])

说明：

> 获取 num 天前的日期，接收两个参数 num 和 type
>
> num 默认为 1，指获取 1 天前的时间，type 默认为 2，指返回"YYYY-MM-DD"格式的时间

参数：

| 参数 | 是否必传 | 类型   | 说明                                                               |
| ---- | -------- | ------ | ------------------------------------------------------------------ |
| num  | 非必传   | number | 传入要获取的天数                                                   |
| type | 非必传   | number | 默认返回"YYYY-MM-DD" <br> 1、["YYYY-MM","DD"] <br> 2、"YYYY-MM-DD" |

使用：

```javascript
// 获取3天前的日期，返回数据类型为["YYYY-MM","DD"]
getPrevDate(3, 1); // 结果是['2023-11', '21']

// 获取5天前的日期，返回数据类型是"YYYY-MM-DD"
getPrevDate(5); // 结果是'2023-11-19'
```

##### 3.7 getPreMonth(time)

说明：

> 获取上个月月份，接收一个参数 time,如果传参，则是获取当前参数的上个月月份，如果不传参，则获取当前月份的上个月月份
>
> 返回值："YYYY-MM"

参数：

| 参数 | 是否必传 | 类型 | 说明          |
| ---- | -------- | ---- | ------------- |
| time | 非必传   | Date | 返回"YYYY-MM" |

使用：

```javascript
// 获取上个月月份
getPreMonth(); // 结果是'2023-10'
```

##### 3.8 getNextMonth()

说明：

> 获取下个月月份，接收一个参数，则获取该参数的下个月，如果不传，则获取当前时间的下个月
>
> 返回值："YYYY-MM"

参数：

| 参数 | 是否必传 | 类型 | 说明          |
| ---- | -------- | ---- | ------------- |
| time | 非必传   | Date | 返回"YYYY-MM" |

使用：

```javascript
// 获取上个月月份
getNextMonth(); // 结果是'2023-12'
```

##### 3.9 getOtherDate([timeType, num, dateTime, type])

说明：

> 获取某一天的日期。接收四个参数，timeType, num, dateTime, type
> timeType 默认传 1，表示未来的某一天
> num 默认传 1，表示未来 1 天
> dateTime 默认使用当前时间
> type 默认传 1，表示返回年月日

参数：

| 参数     | 是否必传 | 类型   | 说明                                                                                   |
| -------- | -------- | ------ | -------------------------------------------------------------------------------------- |
| timeType | 非必传   | number | 1、表示未来的某一天 <br> 2、表示过去的某一 天                                          |
| num      | 非必传   | number | 表示未来/过去第几天 <br> 例如获取明天或昨天的日期，则 n 为 1，后天或者前天则 n 为 2... |
| dateTime | 非必传   | Date   | 默认不传,如果传参，则以传参的日期为参照时间进行处理                                    |
| type     | 非必传   | number | 默认返回"YYYY-MM-DD" <br> 1、["YYYY-MM","DD"] <br>2、"MM-DD"                           |

使用：

```javascript
// 获取三天之后的日期
getOtherDate(1, 3);

// 获取4天之前的日期
getOtherDate(2, 4);

// 获取5天之后的月日,第三个参数不需要时传入null
getOtherDate(1, 5, null, 2);

// 获取2023-11-02之后的3天，返回月日
getOtherDate(1, 3, "2023-11-02", 2);
```

##### 3.10 devideTimes([time,type=1])

说明：

> 根据 time 将一天时间进行分割，接收一个参数 time
>
> time 默认 15 分钟，type 默认为 1
>
> type=1,按照 15 分钟分割[00:15,00:30,00:45,01:00...]
>
> type=2,按照 15 分钟分割[00:00,00:15,00:30,01:45...]
>
> 需要注意的是，如果时间跨度无法被整除，那么生成的时间区间可能无法完全覆盖 24 小时。

参数：

| 参数 | 是否必传 | 类型   | 说明                                                     |
| ---- | -------- | ------ | -------------------------------------------------------- |
| time | 非必传   | number | 表示按照多长时间进行分割，单位是分钟                     |
| type | 非必传   | number | 默认是 1，代表从 index+1 开始分割<br>2 代表从 index 分割 |

使用：

```javascript
// 以15分钟进行分割时间，从00:15开始
devideTimes(15, 1);

// 以30分钟进行峰时间，从00:00开始
devideTimes(30, 2);
```

##### 3.11 devideFormatTimes([time])

说明：

> 根据 time 自动生成 24 小时时间区间，接收一个参数 time。
>
> time 默认为 15 分钟
>
> 需要注意的是，如果时间跨度无法被整除，那么生成的时间区间可能无法完全覆盖 24 小时。

参数：

| 参数 | 是否必传 | 类型   | 说明                                                                                                                                              |
| ---- | -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| time | 非必传   | number | 表示按照多长时间进行分割，单位是分钟 <br> 按照 15 分钟分割 ["00:00-00:15","00:15-00:30"...]<br> 按照 30 分钟分割 ["00:00-00:30","00:30-01:00"...] |

使用：

```javascript
// 按照15分钟分割
devideFormatTimes();

// 按照60分钟分割
devideFormatTimes(60);
```

##### 3.12 getHoursTimes()

说明：

> 动态将一年的时间生成 8760 个小时的数组

使用：

```javascript
// 生成8760个小时
getHoursTimes();
```

##### 3.13 diffDays(date1,date2)

说明：

> 计算两个日期之间的天数，接收两个参数 date1 和 date2。
>
> 不关注日期前后顺序

参数：

| 参数  | 是否必传 | 类型 | 说明                                  |
| ----- | -------- | ---- | ------------------------------------- |
| date1 | 必传     | Date | "YYYY-MM-DD"或者时间戳或者 new Date() |
| date2 | 必传     | Date | "YYYY-MM-DD"或者时间戳或者 new Date() |

使用：

```javascript
// 计算2023-02-03和2023-10-10之间的天数
diffDays("2023-02-03", "2023-10-10");

// 计算2023-02-03和2022-10-10之间的天数
diffDays("2023-02-03", "2022-10-10");
```

##### 3.14 getAllDate(starDay, endDay)

说明：

> 获取两个日期之间的所有日期，接收两个参数 starDay 和 endDay
>
> 传入的日期顺序，startDay 必须小于 endDay，否则返回空数组

参数：

| 参数  | 是否必传 | 类型 | 说明                                  |
| ----- | -------- | ---- | ------------------------------------- |
| date1 | 必传     | Date | "YYYY-MM-DD"或者时间戳或者 new Date() |
| date2 | 必传     | Date | "YYYY-MM-DD"或者时间戳或者 new Date() |

使用：

```javascript
// 获取2023-02-03和2023-10-10之间的天数
getAllDate("2023-02-03", "2023-10-10");
```

#### 4、缓存函数

##### 4.1 setSessionStorage(key,value)

说明：

> 设置 sessionStorage,接收两个参数 key 和 value
>
> 键值是基本数据类型

参数：

| 参数  | 是否必传 | 类型                  | 说明 |
| ----- | -------- | --------------------- | ---- |
| key   | 必传     | string                |      |
| value | 必传     | number,string,boolean |      |

使用：

```javascript
setSessionStorage("id", 123456);

setSessionStorage("name", "张三");

setSessionStorage("isLogin", true);
```

##### 4.2 getSessionStorage(key)

说明：

> 获取 sessionStorage,接收一个参数 key
>
> 键值是基本数据类型

参数：

| 参数 | 是否必传 | 类型   | 说明 |
| ---- | -------- | ------ | ---- |
| key  | 必传     | string |      |

使用：

```javascript
getSessionStorage("id");

getSessionStorage("name");

getSessionStorage("isLogin");
```

##### 4.3 setJsonSessionStorage(key,value)

说明：

> 设置 sessionStorage,接收两个参数 key 和 value
>
> 键值是引用类型,存储时会进行 JSON.stringify()转换存为字符串

参数：

| 参数  | 是否必传 | 类型          | 说明 |
| ----- | -------- | ------------- | ---- |
| key   | 必传     | string        |      |
| value | 必传     | array, object |      |

使用：

```javascript
setJsonSessionStorage("list", [{ name: "xx", age: 20 }]);

setJsonSessionStorage("userInfo", { name: "张三", age: 20 });
```

##### 4.4 getJsonSessionStorage(key)

说明：

> 获取 sessionStorage,接收一个参数 key
>
> 键值是引用类型,获取时会进行 JSON.parse()转换存为对象、数组

参数：

| 参数 | 是否必传 | 类型   | 说明 |
| ---- | -------- | ------ | ---- |
| key  | 必传     | string |      |

使用：

```javascript
getJsonSessionStorage("list");

getJsonSessionStorage("userInfo");
```

##### 4.5 removeSessionStorage(key)

说明：

> 删除 session 值,接收一个参数 key

参数：

| 参数 | 是否必传 | 类型   | 说明 |
| ---- | -------- | ------ | ---- |
| key  | 必传     | string |      |

使用：

```javascript
removeSessionStorage("list");

removeSessionStorage("userInfo");
```

##### 4.6 setLocalStorage(key,value)

说明：

> 设置 localStorage,接收两个参数 key 和 value
>
> 键值是基本数据类型

参数：

| 参数  | 是否必传 | 类型                  | 说明 |
| ----- | -------- | --------------------- | ---- |
| key   | 必传     | string                |      |
| value | 必传     | number,string,boolean |      |

使用：

```javascript
setLocalStorage("id", 123456);

setLocalStorage("name", "张三");

setLocalStorage("isLogin", true);
```

##### 4.7 getLocalStorage(key)

说明：

> 获取 localStorage,接收一个参数 key
>
> 键值是基本数据类型

参数：

| 参数 | 是否必传 | 类型   | 说明 |
| ---- | -------- | ------ | ---- |
| key  | 必传     | string |      |

使用：

```javascript
getLocalStorage("id");

getLocalStorage("name");

getLocalStorage("isLogin");
```

##### 4.8 setJsonLocalStorage(key,value)

说明：

> 设置 localStorage,接收两个参数 key 和 value
>
> 键值是引用类型,存储时会进行 JSON.stringify()转换存为字符串

参数：

| 参数  | 是否必传 | 类型          | 说明 |
| ----- | -------- | ------------- | ---- |
| key   | 必传     | string        |      |
| value | 必传     | array, object |      |

使用：

```javascript
setJsonLocalStorage("list", [{ name: "xx", age: 20 }]);

setJsonLocalStorage("userInfo", { name: "张三", age: 20 });
```

##### 4.9 getJsonLocalStorage(key)

说明：

> 获取 localStorage,接收一个参数 key
>
> 键值是引用类型,获取时会进行 JSON.parse()转换存为对象、数组

参数：

| 参数 | 是否必传 | 类型   | 说明 |
| ---- | -------- | ------ | ---- |
| key  | 必传     | string |      |

使用：

```javascript
getJsonLocalStorage("list");

getJsonLocalStorage("userInfo");
```

##### 4.10 removeLocalStorage(key)

说明：

> 删除 localstorage 值,接收一个参数 key

参数：

| 参数 | 是否必传 | 类型   | 说明 |
| ---- | -------- | ------ | ---- |
| key  | 必传     | string |      |

使用：

```javascript
removeLocalStorage("list");

removeLocalStorage("userInfo");
```

#### 5、工具函数

##### 5.1 toggleClass(element,className)

说明：

> 切换主题的方法，接收两个参数 element 和 className

参数：

|   参数    | 是否必传 |  类型  | 说明 |
| :-------: | :------: | :----: | :--: |
|  element  |   必传   | string |      |
| className |   必传   | string |      |

使用：

```javascript
// 给某个元素上添加类名
toggleClass(document.body, "custom-" + this.theme);
```

##### 5.2 resetForm(vm,refName)

说明：

> 表单重置，接收两个个参数 vm 和 refName

参数：

|  参数   | 是否必传 |  类型  |             说明              |
| :-----: | :------: | :----: | :---------------------------: |
|   vm    |   必传   |  this  |        指向 this 实例         |
| refName |   必传   | string | 传入该表单的 ref 对应的属性值 |

使用：

```javascript
// 对表单进行重置并且去除校验
resetForm(this, "queryForm");
```

##### 5.3 createNonceStr()

说明：

> 生成 32 位随机字符串

使用：

```javascript
// 随机生成32位字符串，一般用于echarts的id定义
createNonceStr();
```

##### 5.4 deepClone(source)

说明：

> 深拷贝，接收要拷贝的对象或数组。

参数：

|  参数  | 是否必传 |     类型     |         说明         |
| :----: | :------: | :----------: | :------------------: |
| source |   必传   | array,object | 对对象和数组进行拷贝 |

使用：

```javascript
// 对数组或对象进行深拷贝

let arr = [{ name: "xx", age: 30 }];
deepClone(arr);
```

##### 5.5 numberArray2String(arr)

说明：

> 将数组每一项转字符串，数组是简单的数字数组，接收一个参数 arr。

参数：

| 参数 | 是否必传 | 类型  | 说明 |
| :--: | :------: | :---: | :--: |
| arr  |   必传   | array |      |

使用：

```javascript
// 将简单的数字数组转为字符串
let arr = [1, 2, 3];
numberArray2String(arr);
```

##### 5.6 getValIndex(list,name)

说明：

> 获取某个值在数组中的下标，未找到则返回-1，接收两个参数 list 和 name。
> 数组是简单的 string、boolean、number 类型

参数：

| 参数 | 是否必传 |          类型           |      说明      |
| :--: | :------: | :---------------------: | :------------: |
| list |   必传   |          array          |    目标数组    |
| name |   必传   | string、boolean、number | 获取该值的下标 |

使用：

```javascript
// 获取3在数组arr中的下标
let arr = [1, 3, 2, 3];
getValIndex(arr, 3); // 1

let arr = [1, true, 2, "name"];
getValIndex(arr, true); // -1
```

##### 5.7 getRandomColor()

说明：

> 生成随机颜色，返回 rgb 颜色值

使用：

```javascript
// 随机返回颜色值
getRandomColor();
```

##### 5.8 getOpacityColor(color,opacity)

说明：

> 改变颜色透明度，接收两个参数 color 和 opacity。

参数：

|  参数   | 是否必传 |  类型  |       说明       |
| :-----: | :------: | :----: | :--------------: |
|  color  |   必传   | string | 需要改变的颜色值 |
| opacity |   必传   | number |   透明度设置值   |

使用：

```javascript
// 修改透明度
getOpacityColor("#fff", "0.3");
```

##### 5.9 paramsFormate([url])

说明：

> 将 url 中的参数转为对象，如 www.baidu.com?a=1&b=2 转为{a:1,b:2}，接收一个参数 url，如果未传 url，则使用 location.search 的链接

参数：

| 参数 | 是否必传 |  类型  |                   说明                    |
| :--: | :------: | :----: | :---------------------------------------: |
| url  |  非必传  | string | 如未传 url，则获取 location.search 中的值 |

使用：

```javascript
// 将字符串参数转为对象
paramsFormate("https:www.baidu.com?a=123&b=456"); // {a:123,b:456}
```

##### 5.10 json2UrlParam(json)

说明：

> 将 json 对象转为 url 参数，如{a:1,b:2} 转为'a=1&b=2'，接收一个参数 json

参数：

| 参数 | 是否必传 |  类型  |                    说明                     |
| :--: | :------: | :----: | :-----------------------------------------: |
| json |   必传   | object | 需要被转换的 json，只支持 object 类型的数据 |

使用：

```javascript
// 将对象转为字符串
json2UrlParam({ a: 123, b: 456 }); // a=123&b=456
```

##### 5.11 sortByType(arr,key)

说明：

> 数组根据某个字段进行排序，接收两个参数 arr 和 key
> 数组必须是数组对象

参数：

| 参数 | 是否必传 |  类型  |        说明        |
| :--: | :------: | :----: | :----------------: |
| arr  |   必传   | array  |      目标数组      |
| key  |   必传   | string | 根据该字段进行排序 |

使用：

```javascript
// 根据key对数组进行排序

let arr = [
  { id: 23, name: "ee" },
  { id: 3, name: "rr" },
  { id: 13, name: "uu" },
];
sortByType(arr, "id");
```

##### 5.12 debounce(func[,delay,immediate])

说明：

> 防抖函数，支持三个参数：func,delay,immediate

参数：

|   参数    | 是否必传 |   类型   |                 说明                 |
| :-------: | :------: | :------: | :----------------------------------: |
|   func    |   必传   | function |      传入需要进行防抖操作的函数      |
|   delay   |  非必传  |  number  | 默认 1000 毫秒，意为 delay 秒后执行  |
| immediate |  非必传  | boolean  | 默认 false，适用于首次需要立即执行的 |

使用：

```javascript
// 对Input输入框进行防抖操作
debounce(handleClick, 1000, false);
```

##### 5.13 throttle(func[,delay])

说明：

> 节流函数，支持两个参数：func 和 delay

参数：

| 参数  | 是否必传 |   类型   |                说明                 |
| :---: | :------: | :------: | :---------------------------------: |
| func  |   必传   | function |     传入需要进行节流操作的函数      |
| delay |  非必传  |  number  | 默认 1000 毫秒，意为 delay 秒后执行 |

使用：

```javascript
// 对按钮重复点击进行节流操作
throttle(handleClick, 1000);
```

##### 5.14 uniqueArray(arr1,arr2,key[,type])

说明：

> 对数组对象进行合并并且去重,接收四个参数 arr1,arr2,key 和 type。

参数：

| 参数 | 是否必传 |  类型  |                                                         说明                                                         |
| :--: | :------: | :----: | :------------------------------------------------------------------------------------------------------------------: |
| arr1 |   必传   | array  |                                                      目标数组 1                                                      |
| arr2 |   必传   | array  |                                                      目标数组 2                                                      |
| key  |   必传   | string |                                                  根据该字段进行去重                                                  |
| type |  非必传  | number | 默认 1 <br> 1，arr1 和 arr2 中相同 key 的数据，取 arr1 的数据 <br> 2，arr1 和 arr2 中相同 key 的数据，取 arr2 的数据 |

使用：

```javascript
// 合并arr1和arr2,根据id去重

let arr1 = [
  { id: 1, name: "xx" },
  { id: 2, name: "rr" },
  { id: 3, name: "yy" },
];
let arr2 = [
  { id: 1, name: "vv" },
  { id: 2, name: "rr" },
];
uniqueArray(arr1, arr2, "id");
```

##### 5.15 changeArrayProperty(arr,pro1,pro2,key1,key2)

说明：

> 修改树结构数组对象中的属性名称，常用于将省市区的 name 和 code 转换为 elmenet 组件需要的 label 和 value。接收五个参数，arr、pro1、pro2、key1、key2。

参数：

| 参数 | 是否必传 |  类型  |      说明      |
| :--: | :------: | :----: | :------------: |
| arr  |   必传   | array  |  要修改的数组  |
| pro1 |   必传   | string | 被替换的属性 1 |
| pro2 |   必传   | string | 被替换的属性 2 |
| key1 |   必传   | string |  替换的属性 1  |
| key2 |   必传   | string |  替换的属性 2  |

使用：

```javascript
// 替换省市的key

let arr = [
  {
    name: "陕西省",
    code: 12,
    children: [
      { name: "西安", code: 1201 },
      { name: "咸阳", code: 1202 },
    ],
  },
  {
    name: "山东省",
    code: 15,
    children: [
      { name: "青岛", code: 1501 },
      { name: "潍坊", code: 1506 },
    ],
  },
];
changeArrayProperty(arr, "name", "code", "label", "value");

/**
 [
    {
        "label": "陕西省",
        "value": 12,
        "children": [
            {
                "label": "西安",
                "value": 1201
            },
            {
                "label": "咸阳",
                "value": 1202
            }
        ]
    },
    {
        "label": "山东省",
        "value": 15,
        "children": [
            {
                "label": "青岛",
                "value": 1501
            },
            {
                "label": "潍坊",
                "value": 1506
            }
        ]
    }
]
*/
```

##### 5.16 horizontal2Vertical(arr)

说明：

> 将横向数组转为纵向数组，多用于后端返回的 echarts 数据结构不符合前端需要，则对该数据进行处理，接收一个参数 arr。

参数：

| 参数 | 是否必传 | 类型  |     说明     |
| :--: | :------: | :---: | :----------: |
| arr  |   必传   | array | 要修改的数组 |

使用：

```javascript
// 二维数组转换

let arr = [
  [1, 3, 5],
  [2, null, 6],
  [3, 6, 8],
];

horizontal2Vertical(arr);

/**
[
    [1,2,3],
    [3,null,6],
    [ 5,6,8]
]
*/
```

##### 5.17 vertical2Horizontal(arr)

说明：

> 将纵向数组转为横向数组，多用于后端返回的 echarts 数据结构不符合前端需要，则对该数据进行处理，接收一个参数 arr。

参数：

| 参数 | 是否必传 | 类型  |     说明     |
| :--: | :------: | :---: | :----------: |
| arr  |   必传   | array | 要修改的数组 |

使用：

```javascript
// 二维数组转换

let arr = [
  [1, 2, 3],
  [3, null, 6],
  [5, 6, 8],
];
vertical2Horizontal(arr);

/**

[
	[1, 3, 5],
	[2, null, 6],
	[3, 6, 8],
]
*/
```

##### 5.18 demandArr(userRelations, arr)

说明：

> 将数组里面的对象转换为其他键值对，接收两个参数 userRelations 和 arr。

参数：

|     参数      | 是否必传 | 类型  |     说明     |
| :-----------: | :------: | :---: | :----------: |
| userRelations |   必传   |  map  |   映射关系   |
|      arr      |   必传   | array | 要转换的数组 |

使用：

```javascript
// 使用如下，一般是建立一个映射关系，转换为后端需要的字段进行接口传参

let userRelations = {
	姓名: 'name',
	年龄: 'age',
	性别: 'sex',
}
let arr = [
	{ 姓名: 'rl', 年龄: 20, 性别: '男' },
	{ 姓名: 'rk', 年龄: 22, 性别: '女' },
	{ 姓名: 'rj', 年龄: 20, 性别: '男' },
	{ 姓名: 'rh', 年龄: 20, 性别: '女' },
]
demandArr(userRelations, arr)

//
 [{name:"rl",age:20,sex:"男"},...]
```

##### 5.19 tranListToTree(list,key1,key2)

说明：

> 将数据转换为树形结构，接收三个参数 list,key1,key2。

参数：

| 参数 | 是否必传 |     类型      |      说明      |
| :--: | :------: | :-----------: | :------------: |
| list |   必传   |     array     | 需要转换的数组 |
| key1 |   必传   | string,number |   父节点 id    |
| key2 |   必传   | string,number |   子节点 id    |

使用：

```javascript
// 将数组转为树形结构
let arr = [
  { id: "a", pid: "", name: "总裁办" },
  { id: "b", pid: "", name: "行政部" },
  { id: "c", pid: "", name: "财务部" },
  { id: "d", pid: "c", name: "财务核算部" },
  { id: "e", pid: "c", name: "税务管理部" },
  { id: "f", pid: "e", name: "税务管理部-分部" },
]
tranListToTree(arr,"id","pid")

/**
 [
    {
        "id": "a",
        "pid": "",
        "name": "总裁办",
        "children": []
    },
    {
        "id": "b",
        "pid": "",
        "name": "行政部",
        "children": []
    },
    {
        "id": "c",
        "pid": "",
        "name": "财务部",
        "children": [
            {
                "id": "d",
                "pid": "c",
                "name": "财务核算部",
                "children": []
            },
            {
                "id": "e",
                "pid": "c",
                "name": "税务管理部",
                "children": [
                    {
                        "id": "f",
                        "pid": "e",
                        "name": "税务管理部-分部",
                        "children": []
                    }
                ]
            }
        ]
    }
]
 * /
```

##### 5.20 uniqueArrayObject(arr,key)

说明：

> 数组对象根据字段去重，接收两个参数 arr 和 key

参数：

| 参数 | 是否必传 |  类型  |       说明        |
| :--: | :------: | :----: | :---------------: |
| arr  |   必传   | array  |   要转换的数组    |
| key  |   必传   | string | 根据 key 进行去重 |

使用：

```javascript
// 根据id去重

let arr = [
  { id: 1, name: "xx" },
  { id: 2, name: "ee" },
  { id: 1, name: "cc" },
];
uniqueArrayObject(arr, "id");
/**
	[({
		id: 1,
		name: 'xx',
	},
	{
		id: 2,
		name: 'ee',
	})
]
*/
```

##### 5.21 downloadHandle(res,title)

说明：

> 下载文件方法处理，接收两个参数 res 和 title
> res 为后端返回的文件流数据
> title 为文件名

参数：

| 参数  | 是否必传 |  类型  |         说明         |
| :---: | :------: | :----: | :------------------: |
|  res  |   必传   | Object | 后端返回的文件流数据 |
| title |   必传   | string |     导出文件名称     |

使用：

```javascript
downloadHandle(res, title);
```

##### 5.22 delEmptyQueryNodes(obj)

说明：

> 移除对象中值为 null, undefined 的字段
> 一般用于前端请求接口时，将 null 和 undefined 值移除

参数：

| 参数 | 是否必传 |  类型  |    说明    |
| :--: | :------: | :----: | :--------: |
| obj  |   必传   | Object | 处理的对象 |

使用：

```javascript
let obj = {
  name: "xxx",
  age: 30,
  sex: undefined,
  address: null,
};
delEmptyQueryNodes(obj);

// {
//     "name": "xxx",
//     "age": 30
// }
```

##### 5.23 tansParams(params)

说明：

> 参数处理

参数：

| 参数 | 是否必传 |  类型  |    说明    |
| :--: | :------: | :----: | :--------: |
| obj  |   必传   | Object | 处理的对象 |

使用：

```javascript
let obj = {
  name: "xxx",
  age: 30,
  sex: undefined,
  address: null,
};
delEmptyQueryNodes(obj);

// name=xxx&age=30
```

##### 5.24 toCamelCase(str, upperCaseFirst)

说明：

> 转驼峰
> upperCaseFirst 默认是 true,是否首字母大写

参数：

|      参数      | 是否必传 |  类型   |    说明    |
| :------------: | :------: | :-----: | :--------: |
|      str       |   必传   | String  |  原字符串  |
| upperCaseFirst |   必传   | Boolean | 首字母大写 |

使用：

```javascript
toCamelCase("hello");

// Hello
```

##### 5.25 getBase64(file)

说明：

> 图片文件转 base64

参数：

| 参数 | 是否必传 |           类型            |   说明   |
| :--: | :------: | :-----------------------: | :------: |
| file |   必传   | png,jpg,jpeg,gif,bmt,webp | 图片文件 |

使用：

```javascript
getBase64("https://www.baidu.com/img/baidu_resultlogo@2.png");
```

##### 5.26 arr24To96(list, toFixed)

说明：

> 24 点数组转 96 点数组
> toFixed 要保留的小数位

参数：

|  参数   | 是否必传 |  类型  |                                说明                                 |
| :-----: | :------: | :----: | :-----------------------------------------------------------------: |
|  list   |   必传   | Array  |                      要转换的长度为 24 的数组                       |
| toFixed |  非必传  | number | 要保留的小数位，默认不处理 注意保留小数位后返回的数据是 string 类型 |

使用：

```javascript
arr24To96(
  [1, 2, 3, 3, 4, 5, 6, 7, 1, 2, 3, 3, 4, 5, 6, 7, 1, 2, 3, 3, 4, 5, 6, 7],
  3
);

// [
//     "1.000",
//     "1.000",
//     "1.000",
//     "1.000",
//     "2.000",
//     "2.000",
//     "2.000",
//     "2.000",
//     "3.000",
//     "3.000",
//     "3.000",
//     "3.000",
//     "3.000",
//     "3.000",
//     "3.000",
//     "3.000",
//     "4.000",
//     "4.000",
//     "4.000",
//     "4.000",
//     "5.000",
//     "5.000",
//     "5.000",
//     "5.000",
//     "6.000",
//     "6.000",
//     "6.000",
//     "6.000",
//     "7.000",
//     "7.000",
//     "7.000",
//     "7.000",
//     "1.000",
//     "1.000",
//     "1.000",
//     "1.000",
//     "2.000",
//     "2.000",
//     "2.000",
//     "2.000",
//     "3.000",
//     "3.000",
//     "3.000",
//     "3.000",
//     "3.000",
//     "3.000",
//     "3.000",
//     "3.000",
//     "4.000",
//     "4.000",
//     "4.000",
//     "4.000",
//     "5.000",
//     "5.000",
//     "5.000",
//     "5.000",
//     "6.000",
//     "6.000",
//     "6.000",
//     "6.000",
//     "7.000",
//     "7.000",
//     "7.000",
//     "7.000",
//     "1.000",
//     "1.000",
//     "1.000",
//     "1.000",
//     "2.000",
//     "2.000",
//     "2.000",
//     "2.000",
//     "3.000",
//     "3.000",
//     "3.000",
//     "3.000",
//     "3.000",
//     "3.000",
//     "3.000",
//     "3.000",
//     "4.000",
//     "4.000",
//     "4.000",
//     "4.000",
//     "5.000",
//     "5.000",
//     "5.000",
//     "5.000",
//     "6.000",
//     "6.000",
//     "6.000",
//     "6.000",
//     "7.000",
//     "7.000",
//     "7.000",
//     "7.000"
// ]
```

##### 5.27 arr96To24({list, noAverage,toFixed})

说明：

> 96 点数组转 24 点数组

参数：

|   参数    | 是否必传 |  类型   |                                说明                                 |
| :-------: | :------: | :-----: | :-----------------------------------------------------------------: |
|   list    |   必传   |  Array  |                      要转换的长度为 24 的数组                       |
| noAverage |  非必传  | Boolean |                true 表示不对 4 个点加和的值进行平均                 |
|  toFixed  |  非必传  | number  | 要保留的小数位，默认不处理 注意保留小数位后返回的数据是 string 类型 |

使用：

```js
let hoursArr = [];
for (let i = 1; i <= 96; i++) {
  hoursArr.push(i);
}
console.log(arr96To24(hoursArr));

// [
//     2.5,
//     6.5,
//     10.5,
//     14.5,
//     18.5,
//     22.5,
//     26.5,
//     30.5,
//     34.5,
//     38.5,
//     42.5,
//     46.5,
//     50.5,
//     54.5,
//     58.5,
//     62.5,
//     66.5,
//     70.5,
//     74.5,
//     78.5,
//     82.5,
//     86.5,
//     90.5,
//     94.5
// ]
```

##### 5.28 stringTrim(str)

说明：

> 删除字符串的头尾空格

参数：

| 参数 | 是否必传 |  类型  | 说明 |
| :--: | :------: | :----: | :--: |
| str  |   必传   | string |      |

使用：

```javascript
stringTrim(" hello  ");

// hello
```

##### 5.29 dataType(data)

说明：

> 返回数据类型

参数：

| 参数 | 是否必传 | 类型 | 说明 |
| :--: | :------: | :--: | :--: |
| data |   必传   |      |      |

使用：

```javascript
dataType("hello"); // string

dataType(111); // number

dataType(true); // boolean

dataType(null); // null

dataType(undefined); // undefined

dataType({}); // object

dataType([]); // array

dataType(function () {}); // function

dataType(new Date()); // date
```
