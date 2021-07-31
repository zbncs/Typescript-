// 移除两端的空格

type WhiteSpace = ' ' | '\n' | '\t';
//移除左边的空格
type TrimLeft1<T extends string> = T extends `${infer First}${infer Rest}`
    ? First extends WhiteSpace
        ? TrimLeft1<Rest>
        : T
    : never

// 移除右边的空格
type TrimRight1<T extends string> = T extends `${infer Rest}${WhiteSpace}`
    ? TrimRight1<Rest>
    : T

// 组合
type Trim<T extends string> = TrimRight1<TrimLeft1<T>>



type trimed1 = Trim<'  Hello World  '> // expected to be 'Hello World'



