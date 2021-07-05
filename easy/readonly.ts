interface Todo1 {
    title: string
    description: string
}

/* _____________ 你的代码 _____________ */
// readonly 每一项

type MyReadonly<T> = {
   readonly [k in keyof T]: T[k]
}
  
const todo1: MyReadonly<Todo1> = {
    title: "Hey",
    description: "foobar"
}
  
todo1.title = "Hello" // Error: cannot reassign a readonly property
todo1.description = "barFoo" // Error: cannot reassign a readonly property
  