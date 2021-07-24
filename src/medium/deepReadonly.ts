// 实现一个通用的DeepReadonly<T>，它将对象的每个参数及其子对象递归地设为只读。

//问题： 递归实现

type Y1 = {
    x: {
        a: 1
        b: 'hi'
    }
    y: 'hey',
    fn: () => void;
}

type Expected = {
    readonly x: {
        readonly a: 1
        readonly b: 'hi'
    }
    readonly y: 'hey'
}

type NoDeepType = string | number | boolean | null | undefined| symbol | bigint | Function;
type DeepReadonly<T> = {
    readonly [P in keyof T]: P extends NoDeepType ? T[P] : DeepReadonly<T[P]>;
}

const todo2: DeepReadonly<Y1> = {
    x: {
        a: 1,
        b: 'hi'
    },
    y: 'hey',
    fn: () => null
}   
// should be same as `Expected`
