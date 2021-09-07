// Implement the String to Union type. Type take string argument. The output should be a union of input letters


type StringToUnion<S extends string> = S extends `${infer F}${infer R}` ? F | StringToUnion<R> : never;

type Test2 = '123456789';
type Res1 = StringToUnion<Test2>; // expected to be "1" | "2" | "3"
