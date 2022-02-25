//Multiplication Table Generator
//"For" Type Loop
export let forTable = "For-Loop:" + "\n"; //declaration & export Main-Var
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
forTable += "Created Project With❤(2022/02/22_21:49)";