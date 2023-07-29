Englist | <a href="https://github.com/chutao-zhang/sleek-design-utils/blob/master/README-zh_CN.md" target="_blank">中文</a>

### Installation

```js
npm install @sleek-design/utils
```

### Usage

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