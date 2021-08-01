// 实现一个首字母大写的类型 Capitalize<T>


type MyCapitalize<T extends string> = T extends `${infer First}${infer Rest}`
    ? `${Uppercase<First>}${Rest}`
    : never

// type MyCapitalize1<T extends string> = Capitalize<T>

type capitalized = MyCapitalize<'hello world'>
// expected to be 'Hello world'
