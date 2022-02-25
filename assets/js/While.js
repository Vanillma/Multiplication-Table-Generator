//multiplication Table Generator
//"While" Type Loop
export let whileTable = "While-Loop:" + "\n"; //declaration & export Main-Var
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
whileTable += "Created Project With❤(2022/02/22_21:49)";