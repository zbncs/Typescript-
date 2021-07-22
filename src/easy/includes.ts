
type Includes<T extends Array<any>, R> = R extends T[number] ? true : false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
type isPillarMen1 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Esidisi'> // expected to be `false`
