// Replace<S, From, To>，从S中，把From替换成To


// type Replace<S, From, To> = S extends `${}`;

type Replace<S extends string, W extends string, P extends string> = 
S extends `${infer F}${W}${infer E}` ? `${F}${P}${E}` : S


type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'
