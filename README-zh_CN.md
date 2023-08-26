<a href="https://github.com/chutao-zhang/sleek-design-utils/tree/master#readme" target="_blank">Englist</a> | 中文

### 安装

```js
npm install @sleek-design/utils
```

### 使用

```js
import { xxx } from "@sleek-design/utils";
```

### API

##### 1. debounce

`debounce(func: Function, delay: number): Function`

eg.

```js
const debounceFunc = debounce(() => {
  console.log("防抖测试");
}, 1 * 1000); // delay 毫秒(ms)
```

##### 2. throttle

`throttle(func: Function, delay: number): Function`

eg.

```js
const throttleFunc = throttle(() => {
  console.log("节流测试");
}, 1 * 1000); // delay 毫秒(ms)
```

##### 3. bytesFormat

`bytesFormat(bytes: number, decimals?: number): string`

eg.

```js
// decimals 小数点位数(默认:2)
console.log(bytesFormat(1024, 2)); // => 1 KB
console.log(bytesFormat(1024 * 1024, 2)); // => 1 MB
```

> 注意: 如果 `bytes` 和 `decimals` 是负数或着是非数字, 将会返回`0 KB`。

##### 4. stringFormat

`stringFormat(fmt: string, ...args: StringFormatArgs[]): string`

eg.

```js
console.log(stringFormat("今天是{0}年{1}月{2}号", 2023, 5, 1)); // => 今天是2023年5月1号
console.log(stringFormat("今天是{0}年{1}月{2}号", [2023, 5, 1])); // => 今天是2023年5月1号
console.log(
  stringFormat("今天是{year}年{month}月{date}号", {
    year: 2023,
    month: 5,
    date: 1,
  })
); // => 今天是2023年5月1号
```

##### 5. isPC

`isPC(): boolean` 检查当前是否在 PC 端

##### 6. isWechat

`isWechat(): boolean` 检查当前是否为微信环境

##### 7. cookieUtil

```js
cookieUtil.get(): object;
cookieUtil.get(name: string): string;
cookieUtil.get(names: string[]): object;
cookieUtil.set(name: string, value: string, options?: ICookieOptions): void;
cookieUtil.set(props: ICookieProps | ICookieProps[]): void;
cookieUtil.remove(name: string, options?: IRemoveCookieOptions): void;
cookieUtil.remove(items: Array<string | IRemoveCookieProps>): void;
cookieUtil.clear(): void;
```

##### 8. localStorageUtil

```js
localStorageUtil.get():object;
localStorageUtil.get(key: string): any;
localStorageUtil.get(keys: string[]): object;
localStorageUtil.set(key: string, value: any): void;
localStorageUtil.set(obj: object): void;
localStorageUtil.remove(key: string): void;
localStorageUtil.remove(keys: string[]): void;
localStorageUtil.clear(): void;
```

##### 9. sessionStorageUtil

```js
// 与localStorageUtil用法相似
```
