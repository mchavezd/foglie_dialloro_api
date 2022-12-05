export function toFixed(num: number, precision = 4) {
  return parseFloat(num.toFixed(precision));
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function exhaustiveCheck(param: never): never {
  throw new Error("Exhaustive check failed");
}

export type Maybe<T> = T | undefined | null;

export function isNullish<T>(data: Maybe<T>): data is null | undefined {
  return data === null || data === undefined;
}
