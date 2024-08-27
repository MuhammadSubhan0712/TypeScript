

// --------- EnuM ---------  //


enum CardinalDirections {
   North,
   
   South,

   East,

   West
}

let Direction = CardinalDirections.North;

console.log(Direction);




enum ErrorCodes {
   
    NotFound = 404,

    Success = 200,

    Accepted = 202,

    BadRequest = 400

}
let codes = ErrorCodes.Accepted;
console.log(codes);


enum team_Rank_T20 { 
    India = 1 , 
    
    Australia = 2 ,

    England = 3 , 
    
    West_Indies = 4 , 

    South_Africa = 5 , 

    NewZealand = 6 , 

    Pakistan = 7,':(' 

}

let T20Cricket = team_Rank_T20.Pakistan;

console.log(T20Cricket);



enum team_Batsman { 
    Pakistan = 'Babar Azam' ,
 
    India = 'Virat Kohli' , 

    Srilanka = 'Kusal Mendis' ,

    Afghanistan = 'Rahmanullah Gurbaz' ,

    Australia = 'David Warner' ,

    England = 'Jos Buttler' , 
    
    West_Indies = 'Nicholas Pooran' , 

    South_Africa = 'Aiden Markram' , 

    NewZealand = 'Daryl Mitchel' 
}
let batsman = team_Batsman.India;

console.log(batsman);




























// enum CardinalDirections {
//     North,
//     East,
//     South,
//     West
//   }
//   let currentDirection = CardinalDirections.North;
//   // logs 0
//   console.log(currentDirection);



//   enum CardinalDirections {
//     North = 1,
//     East,
//     South,
//     West
//   }
//   // logs 1
//   console.log(CardinalDirections.North);
//   // logs 4
//   console.log(CardinalDirections.West);





//   enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accepted = 202,
//     BadRequest = 400
//   }
//   // logs 404
//   console.log(StatusCodes.NotFound);
//   // logs 200
//   console.log(StatusCodes.Success);


//   enum CardinalDirections {
//     North = 'North',
//     East = "East",
//     South = "South",
//     West = "West"
//   };
//   // logs "North"
//   console.log(CardinalDirections.North);
//   // logs "West"
//   console.log(CardinalDirections.West);