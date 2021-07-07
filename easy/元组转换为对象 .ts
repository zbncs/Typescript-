const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

/* _____________ 你的代码 _____________ */

// 类型“string”无法用于索引类型“T”。
// 类型number用于索引类型
type TupleToObject<T extends readonly any[]> = {
    [P in T[number]]: P
}

const result: TupleToObject<typeof tuple> = {tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
// {tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
