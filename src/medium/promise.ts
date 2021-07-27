// 键入函数PromiseAll，它接受PromiseLike对象数组，返回值应为Promise<T>，其中T是解析的结果数组。


const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

declare function PromiseAll<T extends any[]>(arr: [...T]): Promise<{
    [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K]
}>

// expected to be `Promise<[number, number, string]>`
const p = PromiseAll([promise1, promise2, promise3])



// T [...T] 的区别
declare function aaa<T extends any[]>(a: T): T;
declare function bbb<T extends any[]>(a: [...T]): T;

const aaaaa = aaa([1, 2, '9']) // (string | number)[]
const bbbbb = bbb([1, 2, '9']) // [number, number, string]