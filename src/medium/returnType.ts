// 不使用 ReturnType 实现 TypeScript 的 ReturnType<T> 范型。
const fn = (v: boolean) => {
    if (v)
        return 1
    else
        return 2
}

type MyReturnType<F extends (...args: any) =>any> = F extends (...args: any) => infer F ? F : never;

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"
type b = ReturnType<typeof fn>