// 외부에서 설정
const accumulator = (acc: any, cur: any) => {
  if (acc === undefined) {
    const result = {} as any;
    for (const key in cur) {
      if (typeof cur[key] === 'number') {
        result[key] = cur[key];
      } else {
        result[key] = '-';
      }
    }
    return result;
  }
  for (const key in cur) {
    if (typeof cur[key] === 'number') acc[key] += cur[key];
  }
  return acc;
};

const groupBy = (
  data: Record<string, string | number>[],
  key: string | number,
  aggFunc?: (acc: any, cur: any) => any,
) => {
  return data.reduce((acc, cur) => {
    const group = cur[key];
    delete cur[key];
    if (acc[group] === undefined) {
      acc[group] = {
        sub: [],
        acc: undefined,
      };
    }
    acc[group]['sub'].push(cur);
    acc[group]['acc'] = aggFunc ? aggFunc(acc[group]['acc'], cur) : undefined;
    return acc;
  }, {} as Record<string, { sub: Record<string, string | number>[]; acc?: Record<string, string | number> }>);
};

const makeSubGroup = (
  data:
    | Record<string, string | number>[]
    | Record<
        string,
        { sub: Record<string, string | number>[]; acc?: Record<string, string | number> }
      >,
  groupKey: string | number,
  aggFunc?: (acc: any, cur: any) => any,
) => {
  if (Array.isArray(data)) {
    return groupBy(data, groupKey, aggFunc);
  }
  return Object.entries(data).reduce((result, [key, { sub, acc }]) => {
    result[key] = {
      acc: acc,
      sub: makeSubGroup(sub, groupKey, aggFunc),
    };
    return result;
  }, {} as Record<string, unknown>);
};

export const makeGroup = (
  data: Record<string, string | number>[],
  keys: (string | number)[],
  aggFunc?: (acc: any, cur: any) => any,
) => {
  return keys.reduce((acc, cur, idx) => {
    if (idx === 0) {
      acc = groupBy(data, cur, aggFunc);
      return acc;
    }
    return makeSubGroup(acc, cur, aggFunc);
  }, {});
};
