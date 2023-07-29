/** 节流
 * @param func 需要节流的执行函数
 * @param delay 函数执行频率（时间间隔：ms）
 */
export default function throttle<T extends (...args: any[]) => any>(func: T, delay: number): (...args: Parameters<T>) => void;
