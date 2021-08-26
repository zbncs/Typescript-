// 扁平化数组类型

type Flatten<T extends any[]> = T extends [infer R, ...infer U]
    ? R extends any[]
        ? [...Flatten<R>, ...Flatten<U>]
        : [R, ...Flatten<U>]
    : []


type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> 
// [1, 2, 3, 4, 5]
