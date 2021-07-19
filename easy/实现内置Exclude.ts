// 实现内置的Exclude <T，U>

// 如果T中和U相等的部分，返回never 否则返回 T（不属于U的部分）
type MyExclude<T, U> = T extends U ? never : T;