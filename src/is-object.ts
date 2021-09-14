function isObject(value: unknown): value is object {
  return typeof value === "object";
}

export default isObject;
