//Multiplication Table Generator
//"For" Type Loop
console.log("For-Loop:" + "\n"); //Print Title  
let forTable = ''; //Main-Var
//Start External Loop
for (let exLR = 1 ; exLR <= 10 ; exLR++) {
  //Start Internal Loop (Main-Loop)
  for (let inLR = 1; inLR <= 10; inLR++) {
    //Config Value For Create Row
    forTable += exLR * inLR + '\t';
  }
  //Add "NewLine" End Row
  forTable += '\n';
}
forTable += "Created With❤(2022/02/22_21:49)";
//Program End & Print Result
console.log(forTable);
