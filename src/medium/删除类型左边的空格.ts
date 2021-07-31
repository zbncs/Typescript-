// TrimLeft<T>，它接受一个精确的字符串类型，并返回一个新的字符串，其中开始的空格被删除。

type TrimLeft<S extends string> = S extends `${infer First}${infer Rest}` 
    ? First extends ' ' | '\n' | '\t' 
        ? TrimLeft<Rest> 
        : S 
    : never


type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '

// ts中没有直接删除功能，需要利用 有无 这一项来判断。
// 本题只要看First是不是空格