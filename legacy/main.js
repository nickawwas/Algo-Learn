// Legacy Code: Adding Images Using Vanilla JS
const addImgs = (caseName, algData, bldData) => {
  //Main Div
  let addToDiv = document.getElementById("cubing-data");

  for (let i = 0; i < algData.length; i++) {
    //Sub Div for Each Alg Case
    let newDiv = document.createElement("div");
    newDiv.id = `alg-${i}`;

    let newImg = new Image();
    newImg.id = `img-${i}`;
    newImg.src =
      "http://www.cubing.net/api/visualcube/?fmt=svg&case=" +
      algData[i].replace(/\s/g, "");

    let algCase = document.createElement("p");
    algCase.textContent = caseName[i];
    algCase.id = "alg-case";

    let regAlg = document.createElement("p");
    regAlg.textContent = algData[i];
    regAlg.id = "alg-moves";

    let bldAlg = document.createElement("p");
    bldAlg.textContent = bldData[i];
    bldAlg.id = "bld-moves";

    //Adds Elements to Sub Div
    newDiv.appendChild(algCase);
    newDiv.appendChild(newImg);
    newDiv.appendChild(regAlg);
    newDiv.appendChild(bldAlg);

    //Adds Sub Div Into Main Div
    addToDiv.appendChild(newDiv);
  }
};

// Alg Data (Case Name, Blind and Reg Alg Notation)
const algCases = [
  "ULB-URB (AB)",
  "ULB-ULF (AD)",
  "ULB-LFU (AF)",
  "ULB-LDF (AG)",
  "ULB-LBD (AH)",
  "ULB-FUL (AI)",
  "ULB-FDR (AK)",
  "ULB-FLD (AL)",
  "ULB-RBU (AN)",
  "ULB-RDB (AO)",
  "ULB-RFD (AP)",
  "ULB-BUR (AQ)",
  "ULB-BDL (AS)",
  "ULB-BDR (AT)",
  "ULB-DFL (AU)",
  "ULB-DFR (AV)",
  "ULB-DBR (AW)",
  "ULB-DBL (AX)",
];

const regAlgos = [
  "Lw' U R' D2 R U' R' D2' R Lw",
  "R' D' R U2 R' D R U R' D' R U' U2' R' D R",
  "F U2 R' D' R U2' R' D R F'",
  "R' D R U2 R' D' R U2'",
  "U' R D' R' U2 R D R' U2' U",
  "Lw' U2 R' D2 R U2' R' D2' R Lw",
  "D' R' D R U2 R' D' R U2' D",
  "D' U' R D' R' U2 R D R' U2' U D",
  "R D R' R' D2 R U2 R' D2' R U2' R D' R'",
  "U' R D R' U2 R D' R' U2' U",
  "R' D' R U2 R' D R U2'",
  "R' D' U2 R' D R U2' R' D' R D R",
  "R' D2 R U2 R' D2' R U2'",
  "D U' R D' R' U2 R D R' U2' U D'",
  "R F' R' U' R D R' U2 R D' R' U2' U R F R'",
  "D R D' R' R' D R U2 R' D' R U2' R D R' D'",
  "R D' R' R' D R U2 R' D' R U2' R D R'",
  "R' z R' R' D R U2 R' D' R U2' R z' R",
];

const bldAlgos = [
  "[Lw': [U, R' D2 R]]",
  "[R' D' R U2: [R' D R, U]]",
  "[F: [U2, R' D' R]]",
  "[R' D R, U2]",
  "[U': [R D' R', U2]]",
  "[Lw': [U2, R' D2 R]]",
  "[D': [R' D R, U2]]",
  "[D' U': [R D' R', U2]]",
  "[R D R': [R' D2 R, U2]]",
  "[U': [R D R', U2]]",
  "[R' D' R, U2]",
  "[R' D': [U2, R' D R]]",
  "[R' D2 R, U2]",
  "[D U': [R D' R', U2]]",
  "[R F' R' U': [R D R', U2]]",
  "[D R D' R': [R' D R, U2]]",
  "[R D' R': [R' D R, U2]]",
  "[R' z R': [R' D R, U2]]",
];

//Calling Function
addImgs(algCases, regAlgos, bldAlgos);
