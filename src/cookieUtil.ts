interface ICookieOptions {
    /** number（秒）| Date */
    expires?: number | Date;
    /** 以秒为单位的数值 */
    maxAge?: number;
    domain?: string;
    path?: string;
    secure?: boolean;
    httpOnly?: boolean;
    sameSite?: "Lax" | "Strict" | "None";
    priority?: "High" | "Medium" | "Low";
    size?: number;
}

interface ICookieProps extends ICookieOptions {
    name: string;
    value: string;
}

interface IRemoveCookieOptions {
    path?: string;
    domain?: string;
}

interface IRemoveCookieProps extends IRemoveCookieOptions {
    name: string;
}

/** cookie字符串转object
 * @param cookieStr cookie字符串
 */
function parseCookies(cookieStr: string) {
    const cookies: Record<string, string> = {};
    const cookiePairs = cookieStr.split('; ').filter(item => item.length > 0);

    for (const cookiePair of cookiePairs) {
        const delimiterIndex = cookiePair.indexOf('=');
        if (delimiterIndex === -1) continue; // 忽略没有等号的项

        const key = decodeURIComponent(cookiePair.slice(0, delimiterIndex));
        const value = decodeURIComponent(cookiePair.slice(delimiterIndex + 1));

        cookies[key] = value;
    }

    return cookies;
}

function formatCookieOptions(options?: ICookieOptions): string {
    if (!options) {
        return '';
    }

    const parts = [];

    if (options.expires) {
        let expires;
        if (typeof options.expires === 'number') {
            const date = new Date();
            date.setTime(date.getTime() + options.expires * 1000);
            expires = date.toUTCString();
        } else if (options.expires instanceof Date) {
            expires = options.expires.toUTCString();
        }
        if (expires) {
            parts.push(`expires=${expires}`);
        }
    }

    if (options.maxAge) {
        parts.push(`max-age=${options.maxAge}`);
    }

    if (options.domain) {
        parts.push(`domain=${options.domain}`);
    }

    if (options.path) {
        parts.push(`path=${options.path}`);
    }

    if (options.secure) {
        parts.push('secure');
    }

    if (options.httpOnly) {
        parts.push('HttpOnly');
    }

    if (options.sameSite) {
        parts.push(`SameSite=${options.sameSite}`);
    }

    return parts.join('; ');
}

/** 获取cookie */
function getCookie(): Record<string, string>;
function getCookie(name: string): string;
function getCookie(names: string[]): Record<string, string>;
function getCookie(args?: string | string[]): string | Record<string, string> {
    const _cookies = document.cookie;

    if (typeof args === "undefined") {
        console.log(_cookies);
        return parseCookies(_cookies);
    }

    if (typeof args === "string") {
        return _cookies.match(new RegExp(`(^| )${args}=([^;]*)(;|$)`))?.[2] || '';
    }

    if (Array.isArray(args)) {
        const result: Record<string, string> = {};

        args.forEach((item) => {
            result[item] = _cookies.match(
                new RegExp(`(^| )${item}=([^;]*)(;|$)`)
            )?.[2] || '';
        });

        return result;
    }

    return {};
}

/** 设置cookie */
function setCookie(name: string, value: string, options?: ICookieOptions): void;
function setCookie(props: ICookieProps | ICookieProps[]): void;
function setCookie(args: string | ICookieProps | ICookieProps[], value?: string, options?: ICookieOptions): void {
    function setSingleCookie(props: ICookieProps): void {
        const { name, value, ...options } = props;
        const formattedOptions = formatCookieOptions(options);
        document.cookie = `${name}=${value}; ${formattedOptions}`;
    }

    if (typeof args === 'string' && value) {
        const cookieProps: ICookieProps = { name: args, value, ...options };
        setCookie([cookieProps]);
    } else if (Array.isArray(args)) {
        args.forEach(cookieProps => {
            setSingleCookie(cookieProps);
        });
    } else if (typeof args === 'object') {
        setSingleCookie(args);
    }
}

/** 删除cookie */
function removeCookie(name: string, options?: IRemoveCookieOptions): void;
function removeCookie(items: Array<string | IRemoveCookieProps>): void;
function removeCookie(args: string | Array<string | IRemoveCookieProps>, options?: IRemoveCookieOptions): void {
    function removeSingleCookie(name: string, options?: IRemoveCookieOptions): void {
        const { path, domain } = options || {};
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT${path ? `; path=${path}` : ''}${domain ? `; domain=${domain}` : ''}`;
    }

    if (typeof args === 'string') {
        removeSingleCookie(args, options);
    } else if (Array.isArray(args)) {
        args.forEach(item => {
            if (typeof item === 'object') {
                removeSingleCookie(item.name, options);
            } else if (typeof item === 'string') {
                removeSingleCookie(item);
            }
        });
    }
}

/** 清空cookie */
function clearAllCookies(): void {
    const cookies = document.cookie.split("; ");
    const names = cookies.map(item => item.split("=")[0]);
    removeCookie(names);
}

export default {
    set: setCookie,
    get: getCookie,
    remove: removeCookie,
    clear: clearAllCookies,
};