<a href="https://github.com/chutao-zhang/sleek-design-utils/tree/master#readme" target="_blank">Englist</a> | 中文

### 安装

```js
npm install @sleek-design/utils
```

### 使用

```js
import { bytesFormat } from "@sleek-design/utils";

console.log(bytesFormat(2094, 2)); // => '1.07 KB'
console.log(bytesFormat(1024 * 2094, 2)); // => '1.07 MB'
```

### API
- `debounce`
- `throttle`
- `bytesFormat`
- `isWechat`
- `isPC`