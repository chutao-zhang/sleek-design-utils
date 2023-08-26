Englist | <a href="https://github.com/chutao-zhang/sleek-design-utils/blob/master/README-zh_CN.md" target="_blank">中文</a>

### Installation

```js
npm install @sleek-design/utils
```

### Usage

```js
import { xxx } from "@sleek-design/utils";
```

### API

##### 1. debounce

`debounce(func: Function, delay: number): Function`

eg.

```js
const debounceFunc = debounce(() => {
  console.log("debounce test.");
}, 1 * 1000); // delay (ms)
```

##### 2. throttle

`throttle(func: Function, delay: number): Function`

eg.

```js
const throttleFunc = throttle(() => {
  console.log("throttle test.");
}, 1 * 1000); // delay (ms)
```

##### 3. bytesFormat

`bytesFormat(bytes: number, decimals?: number): string`

eg.

```js
// decimals (default:2)
console.log(bytesFormat(1024, 2)); // => 1 KB
console.log(bytesFormat(1024 * 1024, 2)); // => 1 MB
```

> Note: If `bytes` and `decimals` are not numbers or negative, `0 KB` is returned.

##### 4. stringFormat

`stringFormat(fmt: string, ...args: StringFormatArgs[]): string`

eg.

```js
console.log(stringFormat("Today is {0}/{1}/{2}", 1, 5, 2023)); // => Today is 1/5/2023
console.log(stringFormat("Today is {0}/{1}/{2}", [1, 5, 2023])); // => Today is 1/5/2023
console.log(
  stringFormat("Today is {date}/{month}/{year}", {
    year: 2023,
    month: 5,
    date: 1,
  })
); // => Today is 1/5/2023
```

##### 5. isPC

`isPC(): boolean`

##### 6. isWechat

`isWechat(): boolean`

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
// Same as localStorageUtil
```
