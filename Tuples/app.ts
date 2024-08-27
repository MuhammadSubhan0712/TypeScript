



// ------------  Tuples  ------------

// Tuples are just like typed arrays with predefined length and type of each index i.e number , string ,boolean



// let's have an example: 


let mytuple : [string | number | boolean | null];


mytuple = ['ALLAH is so merciful' , 1 , true , null ];\

console.log('This is my First Tuple', mytuple);


let yourtuple : [string | number];

yourtuple = ['Hello World' , 20043242143];


console.log('This is my Second Tuple',yourtuple);


yourtuple.push('ADd me in the string');

console.log('Add',yourtuple);










// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');

console.log(ourTuple);





//Named Tuples

const graphs: [x: number, y: number] = [55.2, 41.3];

console.log(graphs);



const 

// Destructuring Tuples
const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;


console.log(graph);
