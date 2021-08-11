
type ReplaceAll<S extends string, F extends string, T extends string> = 
S extends `${infer W}${F}${infer U}` ? ReplaceAll<`${W}${T}${U}`, F, T> : S


type replaced1 = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
