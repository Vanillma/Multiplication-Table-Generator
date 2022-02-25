//Multiplication Table Generator
//"Do-While" Type Loop
export let doWhileTable = "Do-While-Loop:" + "\n"; //declaration & export Main-Var
//Start External Loop
let exLoopR = 1;
do{
  //Start Internal Loop (Main-Loop)
  let inLoopR = 1;
 do{
   //Config Value For Create Row
    doWhileTable += exLoopR * inLoopR + "\t";
    //Add One Number To value(Internal loop)
    inLoopR++;
    //check condition second loop
  }while(inLoopR <= 10);
  //add "NewLine" end row
  doWhileTable += "\n";
  //add one number to round value(first loop)
  exLoopR++;
  //check condition first loop
}while(exLoopR <= 10);
doWhileTable += "Created Project With❤(2022/02/22_21:49)";