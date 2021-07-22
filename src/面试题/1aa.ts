interface Action<T> {
    payload?: T;
    type: string;
}// 假设有Modle这样一个interface
interface Module { 
    count: number;
    message: string;
    asyncMethod<T, U>(action: Promise<T>): Promise<Action<U>>;
    syncMethod<T, U>(action: Action<T>): Action<U>;
}
// 实现type Connect 保留属性为函数类型，其余的摒弃掉
// 把函数类型转化为<T, U>(args: T) => Action<U>

/** 你需要实现的逻辑 */
type PickFuncProp<T> = {
    [P in keyof T]: T[P] extends Function ? P : never;
}[keyof T];

type TransitionFunc<F> = F extends (action: Promise<infer T>) => Promise<Action<infer U>>
                            ? <T, U>(action: T) => Action<U> 
                            : F extends (action: Action<infer T>) => Action<infer U> 
                                ? <T,U>(action: T) => Action<U>  : F;

type Connect<T> = {
    [P in PickFuncProp<T>]: TransitionFunc<T[P]>;
};


type Result = Connect<Module>;
// Result = {
    // asyncMethod<T, U>(input: T): Action<U>;
    // syncMethod<T, U>(action: T): Action<U>; 
// }