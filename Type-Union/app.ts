

// ---------  Type Union  --------- //


let words : ( string | number | boolean );
words = 'Subhan';
console.log(words);


words = 90;

console.log(words);


words = true;
console.log(words);




let fruits :(string | number | boolean | null | symbol | undefined)[];

fruits = ['Mango' , 1 , true , null , Symbol("id") ,undefined ];


console.log(fruits);

type alls =( string | number | boolean | )


 function Types(All:(string | number | boolean)): (string | number | boolean){
    return All;
}

Types('Subbi');
console.log(Types);

Types(37);
console.log(Types);


Types(true);
console.log(Types);



