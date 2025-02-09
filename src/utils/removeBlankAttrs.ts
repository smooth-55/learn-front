/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
const removeBlankAttributes = (obj: any) =>
  Object.entries(obj).reduce((a: any, [k, v]) => {
    if (v && !(Array.isArray(v) && v.length === 0)) {
      a[k] = v;
    }
    return a;
  }, {});

export { removeBlankAttributes };
