

//  ------------ Type Aliases ------------  //


// type  User = string;
// type  Num = number;


// let username:User = 'M.Subhan Khan';
// let rollno:Num = 189582;


// console.log(username , rollno);



// type All = ( string | number  )[];


// let fruits:All = [1 , 'Mango' , 2 , 'Cherry' , 3 , 'Lychee'];

// console.log(fruits);



type Data = {
 fullname: string;
 fathername: string;
 rollno?: number;
 email: string;
 age: number;
 isloggedIn: boolean;
}

let Bio: Data =  { 
    fullname: "Muhammad Subhan Khan",
    fathername: "Muhammad Aleem Khan",
    email: "msubhankhan799@gmail.com",
    age: 23,
    isloggedIn: true
 }

 Bio.rollno = 189582;
 console.log(Bio);
 


 