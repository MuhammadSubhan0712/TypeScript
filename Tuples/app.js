// ------------  Tuples  ------------
// Tuples are just like typed arrays with predefined length and type of each index i.e number , string ,boolean
// let's have an example: 
var mytuple;
mytuple = ['ALLAH is so merciful', 1, true, null];
console.log('This is my First Tuple', mytuple);
var yourtuple;
yourtuple = ['Hello World', 20043242143];
console.log('This is my Second Tuple', yourtuple);
yourtuple.push('ADd me in the string');
console.log('Add', yourtuple);
// define our tuple
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);
//Named Tuples
var graphs = [55.2, 41.3];
console.log(graphs);
var ;
// Destructuring Tuples
var graph = [55.2, 41.3];
var x = graph[0], y = graph[1];
console.log(graph);
