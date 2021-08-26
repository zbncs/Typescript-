// MyString<S>,返回S的长度length

// 利用数组的length属性，把所有字符加入数组中
type MyStringLen<S extends string, T extends string[] = []> =
S extends `${infer F}${infer R}`
 ? MyStringLen<R, [...T, F]>
  : T['length'];

let len: MyStringLen<'123456'>;
