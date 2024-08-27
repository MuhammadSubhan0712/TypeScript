




// --------------- Type Guards --------------- //


function StudentId(x: string | number) {
    if (typeof x == 'string') {
        console.log('Student');
    }
    if (typeof x === 'number') {
        console.log('Id');
    }
}
StudentId(`446`);
StudentId(446); 

function Wear(T_shirt:string | number) {
    
}