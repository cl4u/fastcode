<!--
 * @Author: rk
 * @Description:
 * @Date: 2024-07-12 09:11:14
 * @LastEditors: rk
 * @LastEditTime: 2024-07-24 12:05:22
-->

### 安装

```
npm install js-fastcode
```

### 使用

#### 1、引入

```
import {plus} from "js-fastcode"
```

#### 2、使用

```
plus(1,2)
```

> 1、如果函数需要在 template 中使用，因为 template 不能识别函数，所以需要在 methods 中进行定义，然后才能使用。

> 2、其他函数使用方式一样。

```js
<template>
  <div>plus(1,2)</div>
  <button @click="handleNumPlus(1,2)">计算</button>
</template>
<script>
    import {plus} from "js-fastcode"
    export default{
        methods: {
            plus,
            // 计算两个数之和
            handleNumPlus(a,b) {
                plus(a,b)
            },
        }
    }
</script>
```

### 3、文档

[函数使用文档](./DOC.md)
