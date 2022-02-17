export const Unarray = <T>(v: T | T[]) => (Array.isArray(v) ? v[0] : v);
