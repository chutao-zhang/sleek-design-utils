/** 当前是否为微信环境 */
export function isWechat() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /micromessenger/.test(userAgent);
}

/** 当前是否为 */
export function isPC() {
    const reg = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
    return !navigator.userAgent.match(reg);
}