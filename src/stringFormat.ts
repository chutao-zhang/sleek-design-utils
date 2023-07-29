type StringFormatArgs = string | number;

export default function stringFormat(fmt: string, ...args: StringFormatArgs[]): string;
export default function stringFormat(fmt: string, args: StringFormatArgs[]): string;
export default function stringFormat(fmt: string, params: { [key: string]: StringFormatArgs }): string;

export default function stringFormat(fmt: string, ...args: any[]): string {
  if (args.length === 1 && Array.isArray(args[0])) {
    return fmt.replace(/\{(\d+)\}/, (match, index) => String(args[0][index] || ''));
  } else if (args.length === 1 && typeof args[0] === 'object') {
    const params = args[0];
    return fmt.replace(/\{(\w+)\}/, (match, key) => String(params[key] || ''));
  } else {
    return fmt.replace(/\{(\d+)\}/, (match, index) => String(args[index] || ''));
  }
}