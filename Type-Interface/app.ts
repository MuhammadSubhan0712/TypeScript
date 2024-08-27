

// -------- Type Interface  --------    //




// type Data = {
//     fullname: string;
//     fathername: string;
//     rollno: number;
//     email: string;
//     age: number;
//     isloggedIn: boolean;
//    }
   
//    let Bio: Data =  { 
//        fullname: "Muhammad Subhan Khan",
//        fathername: "Muhammad Aleem Khan",
//        rollno: 189582,
//        email: "msubhankhan799@gmail.com",
//        age: 23,
//        isloggedIn: true
//     }

// ``interface Data {
//     fullname: string;
//     fathername: string;
//     rollno: number;
//     email: string;
//     age?: number;
//     isloggedIn: boolean;
// }

//    let Bio: Data =  { 
//        fullname: "Muhammad Subhan Khan",
//        fathername: "Muhammad Aleem Khan",
//        rollno: 189582,
//        email: "msubhankhan799@gmail.com",
//        isloggedIn: true
//     }
   
    interface Rectangle {
        height: number,
        width: number
      }
      
      interface ColoredRectangle extends Rectangle {
        color: string
      }
      
      const coloredRectangle: ColoredRectangle = {
        height: 20,
        width: 10,
        color: "red"
      };
console.log(coloredRectangle);


      // ---------- Type Interface vs Type Aliases ---------- //


//       interface Info {
//         fname : string;
//         age: number;
//         phone_no:number
//       }

//       interface Info {
//         Lname:string
//       }

//       let Data : Info = {
//         fname : 'Muhammad',
//         Lname : 'Subhan Khan',
//         age : 23,
//         phone_no : +923122528225
//       }
// console.log(Data);



//       type User = {
//     username: string;
//     age: number;
// }

// type User = {     //wrong syntax
//     lastname: string
// }

interface User {
  username: string;
  age: number;
}

interface User {
  lastname: string;
}

const user: User = {
  username: "abc",
  age: 20,
  lastname: "khan",
};
console.log(user);




      interface Info {
        fname : string;
        age: number;
        phone_no:number
      }
      interface Info {
                Lname:string
              }

interface Birth extends Info {
    Dob: string;
}
let Data : Birth = {
    fname : 'Muhammad',
    Lname : 'Subhan Khan',
    age : 23,
    phone_no : +923122528225,
    Dob: '07-12-2000'

  }

  console.log(Data);
  