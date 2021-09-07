// A type that take string, number or bigint. The output should be a positive number string

type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer V}` ? V : `${T}`;


type Test1 = -100;
type Re = Absolute<Test1>; // expected to be "100"
