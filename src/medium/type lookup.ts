// 在此挑战中，我们想通过在联合Cat | Dog中搜索公共type字段来获取相应的类型。
// 换句话说，在以下示例中，我们期望LookUp<Dog | Cat, 'dog'>获得Dog，LookUp<Dog | Cat, 'cat'>获得Cat。

interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
}

// T extends U, T的属性只能比U多，不能少。

type LookUp<T, R extends string> = T extends {type: R} ? T : never;

// 测试
type P = Cat extends {type: 'cat', breeds: any} ? 1 : '';


type MyDog = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
