function addImgs(caseName, algData, bldData) { //caseName
  //Main Div
  let addToDiv = document.getElementById("cubing-data");
  
  for (var i = 0; i < algData.length; i++) {
    //Sub Div for Each Alg Case
    let newDiv = document.createElement("div");
    newDiv.id = "algs"; //"alg-" + i;

    let newImg = new Image();
    //newImg.id = "img-" + i;
    newImg.src = "http://www.cubing.net/api/visualcube/?fmt=svg&case=" + algData[i].replace(/\s/g, '');	

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
}

// Alg Data (Case Name, Blind and Reg Alg Notation) 
const algCases = ["ULB-URB (AB)",
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
"ULB-DBL (AX)"];

// "UR-UB (BA)", 
// "UR-UL (BD)", 
// "UR-LU (BE)", 
// "UR-LF (BF)",
// "UR-LD (BG)",
// "UR-LB (BH)",
// "UR-FR (BJ)", 
// "UR-FD (BK)", 
// "UR-FL (BL)",
// "UR-RB (BN)", 
// "UR-RD (BO)",
// "UR-RF (BP)", 
// "UR-BU (BQ)",
// "UR-BL (BR)",
// "UR-BD (BS)",
// "UR-BR (BT)",
// "UR-DF (BU)",
// "UR-DR (BV)",
// "UR-DB (BW)",
// "UR-DL (BX)",

// "UL-UB (DA)", 
// "UL-UR (DB)",
// "UL-LF (DF)",
// "UL-LD (DG)",
// "UL-LB (DH)",
// "UL-FR (DJ)",
// "UL-FD (DK)",
// "UL-FL (DL)",
// "UL-RU (DM)",
// "UL-RB (DN)", 
// "UL-RD (DO)",
// "UL-RF (DP)",
// "UL-BU (DQ)",
// "UL-BL (DR)",
// "UL-BD (DS)",
// "UL-BR (DT)",
// "UL-DF (DU)",
// "UL-DR (DV)",
// "UL-DB (DW)",
// "UL-DL (DX)",

// "LU-UB (EA)",
// "LU-UR (EB)",
// "LU-LF (EF)",
// "LU-LD (EG)",
// "LU-LB (EH)",
// "LU-FR (EJ)",
// "LU-FD (EK)",
// "LU-FL (EL)",
// "LU-RU (EM)",
// "LU-RB (EN)",
// "LU-RD (EO)",
// "LU-RF (EP)",
// "LU-BU (EQ)",
// "LU-BL (ER)",
// "LU-BD (ES)",
// "LU-BR (ET)",
// "LU-DF (EU)",
// "LU-DR (EV)",
// "LU-DB (EW)",
// "LU-DL (EX)",

// "LF-UB (FA)",
// "LF-UR (FB)",
// "LF-UL (FD)",
// "LF-LU (FE)",
// "LF-LD (FG)",
// "LF-LB (FH)",
// "LF-FR (FJ)",
// "LF-FD (FK)",
// "LF-RU (FM)",
// "LF-RB (FN)",
// "LF-RD (FO)",
// "LF-RF (FP)",
// "LF-BU (FQ)",
// "LF-BL (FR)",
// "LF-BD (FS)",
// "LF-BR (FT)",
// "LF-DF (FU)",
// "LF-DR (FV)",
// "LF-DB (FW)",
// "LF-DL (FX)",

// "LD-UB (GA)",
// "LD-UR (GB)",
// "LD-UL (GD)",
// "LD-LU (GE)",
// "LD-LF (GF)",
// "LD-LB (GH)",
// "LD-FR (GJ)",
// "LD-FD (GK)",
// "LD-FL (GL)",
// "LD-RU (GM)",
// "LD-RB (GN)",
// "LD-RD (GO)",
// "LD-RF (GP)",
// "LD-BU (GQ)",
// "LD-BL  (GR)",
// "LD-BD  (GS)",
// "LD-BL (GT)",
// "LD-DF  (GU)",
// "LD-DR (GV)",
// "LD-DR (GW)",

const regAlgos = ["Lw' U R' D2 R U' R' D2' R Lw", 
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
"R' z R' R' D R U2 R' D' R U2' R z' R"];

const bldAlgos = ["[Lw': [U, R' D2 R]]", 
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
"[R' z R': [R' D R, U2]]"];

//Calling Function
addImgs(algCases, regAlgos, bldAlgos);
