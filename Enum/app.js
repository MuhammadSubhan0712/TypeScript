// --------- EnuM ---------  //
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["South"] = 1] = "South";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var Direction = CardinalDirections.North;
console.log(Direction);
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["NotFound"] = 404] = "NotFound";
    ErrorCodes[ErrorCodes["Success"] = 200] = "Success";
    ErrorCodes[ErrorCodes["Accepted"] = 202] = "Accepted";
    ErrorCodes[ErrorCodes["BadRequest"] = 400] = "BadRequest";
})(ErrorCodes || (ErrorCodes = {}));
var codes = ErrorCodes.Accepted;
console.log(codes);
var team_Rank_T20;
(function (team_Rank_T20) {
    team_Rank_T20[team_Rank_T20["India"] = 1] = "India";
    team_Rank_T20[team_Rank_T20["Australia"] = 2] = "Australia";
    team_Rank_T20[team_Rank_T20["England"] = 3] = "England";
    team_Rank_T20[team_Rank_T20["West_Indies"] = 4] = "West_Indies";
    team_Rank_T20[team_Rank_T20["South_Africa"] = 5] = "South_Africa";
    team_Rank_T20[team_Rank_T20["NewZealand"] = 6] = "NewZealand";
    team_Rank_T20[team_Rank_T20["Pakistan"] = 7] = "Pakistan";
    team_Rank_T20[team_Rank_T20[":("] = 8] = ":(";
})(team_Rank_T20 || (team_Rank_T20 = {}));
var T20Cricket = team_Rank_T20.Pakistan;
console.log(T20Cricket);
var team_Batsman;
(function (team_Batsman) {
    team_Batsman["Pakistan"] = "Babar Azam";
    team_Batsman["India"] = "Virat Kohli";
    team_Batsman["Srilanka"] = "Kusal Mendis";
    team_Batsman["Afghanistan"] = "Rahmanullah Gurbaz";
    team_Batsman["Australia"] = "David Warner";
    team_Batsman["England"] = "Jos Buttler";
    team_Batsman["West_Indies"] = "Nicholas Pooran";
    team_Batsman["South_Africa"] = "Aiden Markram";
    team_Batsman["NewZealand"] = "Daryl Mitchel";
})(team_Batsman || (team_Batsman = {}));
var batsman = team_Batsman.India;
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
