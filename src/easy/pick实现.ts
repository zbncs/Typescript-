interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

// 自己实现
// Pick<> 返回的是属性和属性值
// K 只能是 string | number | symbol
type MyPick<T, K extends string | number | symbol> = {[k in K]: k extends keyof T ? T[k] : never};

  
type TodoPreview = MyPick<Todo, 'title' | 'completed'>
  
const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
  