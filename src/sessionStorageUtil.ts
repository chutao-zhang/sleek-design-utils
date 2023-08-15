function parseValue(value: string): any {
    try {
        // 尝试将字符串转换为JSON对象
        return JSON.parse(value);
    } catch (error) {
        // 如果转换失败，则直接返回原字符串
        return value;
    }
}

/** 设置 */
function setItem(key: string, value: any): void;
function setItem(obj: Record<string, any>): void;
function setItem(args: string | Record<string, any>): void {
    if (typeof args === 'string') {
        const key = args;
        const value = arguments[1];
        sessionStorage.setItem(key, JSON.stringify(value));
    } else if (typeof args === 'object') {
        for (const [key, value] of Object.entries(args)) {
            sessionStorage.setItem(key, JSON.stringify(value));
        }
    }
}

/** 获取 */
function getItem(): Record<string, any>;
function getItem(key: string): any;
function getItem(keys: string[]): Record<string, any>;
function getItem(args?: string | string[]): any {
    if (typeof args === 'string') {
        const value = sessionStorage.getItem(args);
        return value !== null ? parseValue(value) : value;
    } else if (typeof args === 'undefined' || Array.isArray(args)) {
        const _sessionStorageJosn = JSON.parse(JSON.stringify(sessionStorage));
        if (Array.isArray(args)) {
            const result: Record<string, any> = {};
            for (const key of args) {
                result[key] = parseValue(_sessionStorageJosn[key]) || null;
            }
            return result;
        }
        return _sessionStorageJosn as Record<string, any>;
    }
    return null;
}

/** 移除 */
function removeItem(key: string): void;
function removeItem(keys: string[]): void;
function removeItem(args: string | string[]): void {
    const keys = Array.isArray(args) ? args : [args];

    keys.forEach(key => {
        sessionStorage.removeItem(key);
    });
}

function clear() {
    sessionStorage.clear();
}

export default {
    get: getItem,
    set: setItem,
    remove: removeItem,
    clear
}