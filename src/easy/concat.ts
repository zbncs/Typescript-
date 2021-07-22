
type Concat<T extends Array<any>, R extends Array<any>> = [...T, ...R];

type Result1 = Concat<[1], [2]> // expected to be [1, 2]
