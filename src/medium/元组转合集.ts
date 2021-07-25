// 实现泛型TupleToUnion<T>，它覆盖元组的值与其值联合。


type TupleToUnion<T extends Array<any>> = T[number];

type Arr = ['1', '2', '3']

const a1: TupleToUnion<Arr> = '1' // expected to be '1' | '2' | '3'
