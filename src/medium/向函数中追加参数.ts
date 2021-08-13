// 实现一个范型 AppendArgument<Fn, A>，对于给定的函数类型 Fn，以及一个任意类型 A，返回一个新的函数 G。
// G 拥有 Fn 的所有参数并在末尾追加类型为 A 的参数。


type AppendArgument<Fn extends Function, A> = Fn extends (...args: infer R) => infer C ?
(...args: [...R, A]) => C : never


type Fn = (a: number, b: string) => number

type Result2 = AppendArgument<Fn, boolean> 
// 期望是 (a: number, b: string, x: boolean) => number
