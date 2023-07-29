/** 防抖
 * @param func 需要防抖的执行函数
 * @param delay 函数执行延时时长（ms）
 */
export default function debounce<T extends (...args: any[]) => any>(func: T, delay: number): (...args: Parameters<T>) => void;
