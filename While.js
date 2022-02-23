//multiplication Table Generator
//"While" Type Loop
console.log("While-Loop:" + "\n"); //Print Title
let whileTable = ""; //Main-Var
//Start External Loop
let exLoopRepeat = 1;
while (exLoopRepeat <= 10) {
  //Start Internal Loop (Main-Loop)
  let inLoopRepeat = 1;
  while (inLoopRepeat <= 10) {
    //Config Value For Create Row
    whileTable += exLoopRepeat * inLoopRepeat + "\t";
    //Add One Number To Var Value
    inLoopRepeat++;
  }
  //Add "NewLine" In End Row
  whileTable += "\n";
  //Add One Number To Var Value
  exLoopRepeat++;
}
whileTable += "Created With❤(2022/02/22_21:49)";
//Program End & Print Result
console.log(whileTable);
