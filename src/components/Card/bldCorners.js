/* Box Titles */
export const cornerCases = ["UBL (A)", "URB (B)", "ULF (D)", "LUB (E)", "LFU (F)", "LDF (G)", "LBD (H)", "FUL (I)", "FDR (K)", "FLD (L)", "RBU (N)", "RDB (O)", "RFD (P)", "BUR (Q)", "BLU (R)", "BDL (S)", "BRD (T)", "DFL (U)", "DRF (V)", "DBR (W)", "DLB (X)"];

/* Individual Alg Objects */
export const algsUBL = [
  {
    case: "UBL-URB (AB)",
    algs: [
      {
        alg: "Lw' U R' D2 R U' R' D2' R Lw",
      },
      {
        alg: "[Lw': [U, R' D2 R]]",
      },
    ],
  },
  {
    case: "UBL-ULF (AD)",
    algs: [
      {
        alg: "R' D' R U2 R' D R U R' D' R U R' D R",
      },
      {
        alg: "[R' D' R U2: [R' D R, U]]",
      },
    ],
  },
  {
    case: "UBL-LFU (AF)",
    algs: [
      {
        alg: "F U2 R' D' R U2' R' D R F'",
      },
      {
        alg: "[F: [U2, R' D' R]]",
      },
    ],
  },
  {
    case: "UBL-LDF (AG)",
    algs: [
      {
        alg: "R' D R U2 R' D' R U2'",
      },
      {
        alg: "[R' D R, U2]",
      },
    ],
  },
  {
    case: "UBL-LBD (AH)",
    algs: [
      {
        alg: "U' R D' R' U2 R D R' U'",
      },
      {
        alg: "[U': [R D' R', U2]]",
      },
    ],
  },
  {
    case: "UBL-FUL (AI)",
    algs: [
      {
        alg: "Lw' U2 R' D2 R U2' R' D2' R Lw",
      },
      {
        alg: "[Lw': [U2, R' D2 R]]",
      },
    ],
  },
  {
    case: "UBL-FDR (AK)",
    algs: [
      {
        alg: "D' R' D R U2 R' D' R U2' D",
      },
      {
        alg: "[D': [R' D R, U2]]",
      },
    ],
  },
  {
    case: "UBL-FLD (AL)",
    algs: [
      {
        alg: "D' U' R D' R' U2 R D R' U' D",
      },
      {
        alg: "[D' U': [R D' R', U2]]",
      },
    ],
  },
  {
    case: "UBL-RBU (AN)",
    algs: [
      {
        alg: "R D R2 D2 R U2 R' D2' R U2' R D' R'",
      },
      {
        alg: "[R D R': [R' D2 R, U2]]",
      },
    ],
  },
  {
    case: "UBL-RDB (AO)",
    algs: [
      {
        alg: "U' R D R' U2 R D' R' U'",
      },
      {
        alg: "[U': [R D R', U2]]",
      },
    ],
  },
  {
    case: "UBL-RFD (AP)",
    algs: [
      {
        alg: "R' D' R U2 R' D R U2",
      },
      {
        alg: "[R' D' R, U2]",
      },
    ],
  },
  {
    case: "UBL-BUR (AQ)",
    algs: [
      {
        alg: "R' D' U2 R' D R U2 R' D' R D R",
      },
      {
        alg: "[R' D': [U2, R' D R]]",
      },
    ],
  },
  {
    case: "UBL-BDL (AS)",
    algs: [
      {
        alg: "R' D2 R U2 R' D2 R U2",
      },
      {
        alg: "[R' D2 R, U2]",
      },
    ],
  },
  {
    case: "UBL-BRD (AT)",
    algs: [
      {
        alg: "D U' R D' R' U2 R D R' U' D'",
      },
      {
        alg: "[D U': [R D' R', U2]]",
      },
    ],
  },
  {
    case: "UBL-DFL (AU)",
    algs: [
      {
        alg: "R F' R' U' R D R' U2 R D' R' U' R F R'",
      },
      {
        alg: "[R F' R' U': [R D R', U2]]",
      },
    ],
  },
  {
    case: "UBL-DRF (AV)",
    algs: [
      {
        alg: "D R D' R2 D R U2 R' D' R U2 R D R' D'",
      },
      {
        alg: "[D R D' R': [R' D R, U2]]",
      },
    ],
  },
  {
    case: "UBL-DBR (AW)",
    algs: [
      {
        alg: "R D' R2 D R U2 R' D' R U2 R D R'",
      },
      {
        alg: "[R D' R': [R' D R, U2]]",
      },
    ],
  },
  {
    case: "UBL-DLB (AX)",
    algs: [
      {
        alg: "R' z R2 D R U2 R' D' R U2 R z' R",
      },
      {
        alg: "[R' z R': [R' D R, U2]]",
      },
    ],
  },
];

export const algsURB = [
  {
    case: "URB-UBL (BA)",
    algs: [
      {
        alg: "Lw' R' D2 R U R' D2' R U' Lw",
      },
      {
        alg: "[Lw': [R' D2 R, U]]",
      },
    ],
  },
  {
    case: "URB-ULF (BD)",
    algs: [
      {
        alg: "R F' R2' D R U R' D' R U' R F R'",
      },
      {
        alg: "[R F' R2': [D, R U R']]",
      },
    ],
  },
  {
    case: "URB-LUB (BE)",
    algs: [
      {
        alg: "R U R D R' U' R D' R2",
      },
      {
        alg: "[R: [U, R D R']]",
      },
    ],
  },
  {
    case: "URB-LFU (BF)",
    algs: [
      {
        alg: "R2 D' R U' R' D R U R",
      },
      {
        alg: "[R': [R' D' R, U']]",
      },
    ],
  },
  {
    case: "URB-LDF (BG)",
    algs: [
      {
        alg: "R' D R U R' D' R U'",
      },
      {
        alg: "[R' D R, U]",
      },
    ],
  },
  {
    case: "URB-LBD (BH)",
    algs: [
      {
        alg: "U' R D' R' U R D R'",
      },
      {
        alg: "[U', R D' R']",
      },
    ],
  },
  {
    case: "URB-FUL (BI)",
    algs: [
      {
        alg: "R U2 R D R' U2 R D' R2",
      },
      {
        alg: "[R: [U2, R D R']]",
      },
    ],
  },
  {
    case: "URB-FDR (BK)",
    algs: [
      {
        alg: "D' R' D R U R' D' R U' D",
      },
      {
        alg: "[D': [R' D R, U]]",
      },
    ],
  },
  {
    case: "URB-FLD (BL)",
    algs: [
      {
        alg: "D R' D' R U R' D R U' D'",
      },
      {
        alg: "[D: [R' D' R, U]]",
      },
    ],
  },
  {
    case: "URB-RDB (BO)",
    algs: [
      {
        alg: "U' R D R' U R D' R'",
      },
      {
        alg: "[U', R D R']",
      },
    ],
  },
  {
    case: "URB-RFD (BP)",
    algs: [
      {
        alg: "R' D' R U R' D R U'",
      },
      {
        alg: "[R' D' R, U]",
      },
    ],
  },
  {
    case: "URB-BLU (BR)",
    algs: [
      {
        alg: "R2 D' R U2 R' D R U2' R",
      },
      {
        alg: "[R': [R' D' R, U2]]",
      },
    ],
  },
  {
    case: "URB-BDL (BS)",
    algs: [
      {
        alg: "R' D2 R U R' D2' R U'",
      },
      {
        alg: "[R' D2 R, U]",
      },
    ],
  },
  {
    case: "URB-BRD (BT)",
    algs: [
      {
        alg: "D U' R D' R' U R D R' D'",
      },
      {
        alg: "[D: [U', R D' R']]",
      },
    ],
  },
  {
    case: "URB-DFL (BU)",
    algs: [
      {
        alg: "x' D2 R U R' D2' R U' R' x",
      },
      {
        alg: "[x': [D2, R U R']]",
      },
    ],
  },
  {
    case: "URB-DRF (BV)",
    algs: [
      {
        alg: "R' D R U' R D' R' U R D R' U R' D' R U'",
      },
      {
        alg: "[R' D R U' R D' R', U]",
      },
    ],
  },
  {
    case: "URB-DBR (BW)",
    algs: [
      {
        alg: "U R D' R' U' R' D R U R' D' R2 D R' U'",
      },
      {
        alg: "[U R D' R': [U', R' D R]]",
      },
    ],
  },
  {
    case: "URB-DLB (BX)",
    algs: [
      {
        alg: "x R' U' R D2 R' U R D2' x'",
      },
      {
        alg: "[x: [R' U' R, D2]]",
      },
    ],
  },
];

export const algsULF = [
  {
    case: "ULF-UBL (DA)",
    algs: [
      {
        alg: "R' D' U' R' D R U' R' D' R U2D R",
      },
      {
        alg: "[R' D' U' : [R' D R, U']]",
      },
    ],
  },
  {
    case: "ULF-URB (DB)",
    algs: [
      {
        alg: "R F' R' 'U R' D R U' R' D' R2 F R'",
      },
      {
        alg: "[R F' R2': [R U R', D]]",
      },
    ],
  },
  {
    case: "ULF-LUB (DE)",
    algs: [
      {
        alg: "U' R2 D R' U2 R D' R' U2' R' U",
      },
      {
        alg: "[U' R: [R D R', U2]]",
      },
    ],
  },
  {
    case: "ULF-LDF (DG)",
    algs: [
      {
        alg: "R' D R U' R' D' R U",
      },
      {
        alg: "[R' D R, U']",
      },
    ],
  },
  {
    case: "ULF-LBD (DH)",
    algs: [
      {
        alg: "U' R D' R' U' R D R' U2",
      },
      {
        alg: "[U': [R D' R', U']]",
      },
    ],
  },
  {
    case: "ULF-FDR (DK)",
    algs: [
      {
        alg: "D' R' D R U' R' D' R U D",
      },
      {
        alg: "[D': [R' D R, U']]",
      },
    ],
  },
  {
    case: "ULF-FLD (DL)",
    algs: [
      {
        alg: "D' R' D' R U' R' D R U D",
      },
      {
        alg: "[D': [R' D' R, U']]",
      },
    ],
  },
  {
    case: "ULF-RBU (DN)",
    algs: [
      {
        alg: "U' R' U2 R' D' R U2' R' D R2 U",
      },
      {
        alg: "[U' R': [U2, R' D' R]]",
      },
    ],
  },
  {
    case: "ULF-RDB (DO)",
    algs: [
      {
        alg: "U' R D R' U' R D' R' U2",
      },
      {
        alg: "[U': [R D R', U']]",
      },
    ],
  },
  {
    case: "ULF-RFD (DP)",
    algs: [
      {
        alg: "R' D' R U' R' D R U",
      },
      {
        alg: "[R' D' R, U']",
      },
    ],
  },
  {
    case: "ULF-BUR (DQ)",
    algs: [
      {
        alg: "U' R2 D R' U R D' R' U' R' U",
      },
      {
        alg: "[U' R: [R D R', U]]",
      },
    ],
  },
  {
    case: "ULF-BLU (DR)",
    algs: [
      {
        alg: "U' R' U' R' D' R U R' D R2 U",
      },
      {
        alg: "[U' R': [U', R' D' R]]",
      },
    ],
  },
  {
    case: "ULF-BDL (DS)",
    algs: [
      {
        alg: "R' D2 R U' R' D2' R U",
      },
      {
        alg: "[R' D2 R, U']",
      },
    ],
  },
  {
    case: "ULF-BRD (DT)",
    algs: [
      {
        alg: "D' R' D' R U' R' D R U D",
      },
      {
        alg: "[D': [R' D' R, U']]",
      },
    ],
  },
  {
    case: "ULF-DFL (DU)",
    algs: [
      {
        alg: "U' x' R U R' D2 R U' R' D2' x U",
      },
      {
        alg: "[U' x': [R U R', D2]]",
      },
    ],
  },
  {
    case: "ULF-DRF (DV)",
    algs: [
      {
        alg: "R' D R U' R D' R' U' R D R' U R' D' R U",
      },
      {
        alg: "[R' D R U' R D' R', U']",
      },
    ],
  },
  {
    case: "ULF-DBR (DW)",
    algs: [
      {
        alg: "R D' R2 D R U' R' D' R U R D R'",
      },
      {
        alg: "[R D' R': [R' D R, U']]",
      },
    ],
  },
  {
    case: "ULF-DLB (DX)",
    algs: [
      {
        alg: "R' D' R2 U' R' D R U R' D' R' D R",
      },
      {
        alg: "[R' D' R: [R U' R', D]]",
      },
    ],
  },
];

export const algsLUB = [
  {
    case: "LUB-URB (EB)",
    algs: [
      {
        alg: "R2 D R' U R D' R' U' R'",
      },
      {
        alg: "[R: [R D R', U]]",
      },
    ],
  },
  {
    case: "LUB-ULF (ED)",
    algs: [
      {
        alg: "U' R U2 R D R' U2' R D' R2 U",
      },
      {
        alg: "[U' R: [U2, R D R']]",
      },
    ],
  },
  {
    case: "LUB-LFU (EF)",
    algs: [
      {
        alg: "z U R' D' R U' R' D R z'",
      },
      {
        alg: "[z: [U, R' D' R]]",
      },
    ],
  },
  {
    case: "LUB-LDF (EG)",
    algs: [
      {
        alg: "U R' U' R' D R U R' D' R2 U'",
      },
      {
        alg: "[U R': [U', R' D R]]",
      },
    ],
  },
  {
    case: "LUB-LBD (EH)",
    algs: [
      {
        alg: "z U R' D' R U R' D R U2 z'",
      },
      {
        alg: "[z U: [R' D' R, U]]",
      },
    ],
  },
  {
    case: "LUB-FUL (EI)",
    algs: [
      {
        alg: "Lw' U R D' R' U2 R D R' U Lw",
      },
      {
        alg: "[Lw' U: [R D' R', U2]]",
      },
    ],
  },
  {
    case: "LUB-FDR (EK)",
    algs: [
      {
        alg: "R U R2 D' R U' R' D R U R U' R'",
      },
      {
        alg: "[R U R': [R' D' R, U']]",
      },
    ],
  },
  {
    case: "LUB-FLD (EL)",
    algs: [
      {
        alg: "R U R' D R U R' D' R U2 R'",
      },
      {
        alg: "[R U: [R' D R, U]]",
      },
    ],
  },
  {
    case: "LUB-RBU (EN)",
    algs: [
      {
        alg: "R' D R2 D' R2' U R2 D R2' D' R2 U' R'",
      },
      {
        alg: "[R: [R2' D R2 D' R2', U]]",
      },
    ],
  },
  {
    case: "LUB-RDB (EO)",
    algs: [
      {
        alg: "R D R D R' U R D' R' U' D' R'",
      },
      {
        alg: "[R D: [R D R', U]]",
      },
    ],
  },
  {
    case: "LUB-RFD (EP)",
    algs: [
      {
        alg: "D' R U R' D R U R' D' R U2 R' D",
      },
      {
        alg: "[D' R U: [R' D R, U]]",
      },
    ],
  },
  {
    case: "LUB-BUR (EQ)",
    algs: [
      {
        alg: "x R' U' L U R U' L' U x'",
      },
      {
        alg: "[x: [R', U' L U]]",
      },
    ],
  },
  {
    case: "LUB-BDL (ES)",
    algs: [
      {
        alg: "U R' U' R' D2 R U R' D2' R2 U'",
      },
      {
        alg: "[U R': [U', R' D2 R]",
      },
    ],
  },
  {
    case: "LUB-BRD (ET)",
    algs: [
      {
        alg: "R U R' D' R U R' D R U2 R'",
      },
      {
        alg: "[R U: [R' D' R, U]]",
      },
    ],
  },
  {
    case: "LUB-DFL (EU)",
    algs: [
      {
        alg: "R2 D2 R' U R D2' R' U' R'",
      },
      {
        alg: "[R: [R D2 R', U]]",
      },
    ],
  },
  {
    case: "LUB-DRF (EV)",
    algs: [
      {
        alg: "U2 x' R U' R' D' R U R' D x U2",
      },
      {
        alg: "[U2 x': [R U' R', D']]",
      },
    ],
  },
  {
    case: "LUB-DBR (EW)",
    algs: [
      {
        alg: "D R2 D' R' U R D R' U' R' D'",
      },
      {
        alg: "[D R: [R D' R', U]]",
      },
    ],
  },
  {
    case: "LUB-DLB (EX)",
    algs: [
      {
        alg: "R2 D' R' U R D R' U' R'",
      },
      {
        alg: "[R: [R D' R', U]]",
      },
    ],
  },
];

export const algsLFU = [
  {
    case: "LFU-UBL (FA)",
    algs: [
      {
        alg: "F R' D' R U2 R' D R U2' F'",
      },
      {
        alg: "[F: [R' D' R, U2]]",
      },
    ],
  },
  {
    case: "LFU-URB (FB)",
    algs: [
      {
        alg: "R' U' R' D' R U R' D R2",
      },
      {
        alg: "[R': [U', R' D' R]]",
      },
    ],
  },
  {
    case: "LFU-LUB (FE)",
    algs: [
      {
        alg: "z R' D' R U R' D R U' z'",
      },
      {
        alg: "[z: [R' D' R, U]]",
      },
    ],
  },
  {
    case: "LFU-LDF (FG)",
    algs: [
      {
        alg: "R' U' D R U R' D' R U' R' U R",
      },
      {
        alg: "[R' U': [D, R U R']]",
      },
    ],
  },
  {
    case: "LFU-LBD (FH)",
    algs: [
      {
        alg: "z R' D' R U2 R' D R U2' z'",
      },
      {
        alg: "[z: [R' D' R, U2]]",
      },
    ],
  },
  {
    case: "LFU-FDR (FK)",
    algs: [
      {
        alg: "z D R U R' D' R U' R' z'",
      },
      {
        alg: "[z: [D, R U R']]",
      },
    ],
  },
  {
    case: "LFU-FLD (FL)",
    algs: [
      {
        alg: "D R' U' D' R U R' D R U' R' U R D'",
      },
      {
        alg: "[D R' U': [D', R U R']]",
      },
    ],
  },
  {
    case: "LFU-RBU (FN)",
    algs: [
      {
        alg: "F' U R' D R U2 R' D' R U F",
      },
      {
        alg: "[F' U: [R' D R, U2]]",
      },
    ],
  },
  {
    case: "LFU-RDB (FO)",
    algs: [
      {
        alg: "R' U' R' D' R U2 R' D R U' R",
      },
      {
        alg: "[R' U': [R' D' R, U2]]",
      },
    ],
  },
  {
    case: "LFU-RFD (FP)",
    algs: [
      {
        alg: "R' U' D' R U R' D R U' R' U R",
      },
      {
        alg: "[R' U': [D', R U R']]",
      },
    ],
  },
  {
    case: "LFU-BUR (FQ)",
    algs: [
      {
        alg: "z D' R U R' D R U' R' z'",
      },
      {
        alg: "[z: [D', R U R']]",
      },
    ],
  },
  {
    case: "LFU-BLU (FR)",
    algs: [
      {
        alg: "x' R U' R' D R U R' D' x",
      },
      {
        alg: "[x': [R U' R', D]]",
      },
    ],
  },
  {
    case: "LFU-BDL (FS)",
    algs: [
      {
        alg: "x' R U2 R' D R U2' R' D' x",
      },
      {
        alg: "[x': [R U2 R', D]]",
      },
    ],
  },
  {
    case: "LFU-BRD (FT)",
    algs: [
      {
        alg: "F D' R U R' D R U' R' F'",
      },
      {
        alg: "[F: [D', R U R']]",
      },
    ],
  },
  {
    case: "LFU-DFL (FU)",
    algs: [
      {
        alg: "U' R' U R U' R' D R U R' D' U' R U",
      },
      {
        alg: "[U' R' U: [R U' R', D]]",
      },
    ],
  },
  {
    case: "LFU-DRF (FV)",
    algs: [
      {
        alg: "R U' R2 D' R U2 R' D R U2 R U R'",
      },
      {
        alg: "[R U' R': [R' D' R, U2]]",
      },
    ],
  },
  {
    case: "LFU-DBR (FW)",
    algs: [
      {
        alg: "z D2 R U R' D2' R U' R' z'",
      },
      {
        alg: "[z: [D2, R U R']]",
      },
    ],
  },
  {
    case: "LFU-DLB (FX)",
    algs: [
      {
        alg: "R2 D2 R U' R' D R U R' D R2'",
      },
      {
        alg: "[R2 D2: [R U' R', D]]",
      },
    ],
  },
];

export const algsLDF = [
  {
    case: "LDF-UBL (GA)",
    algs: [
      {
        alg: "U2 R' D R U2' R' D' R",
      },
      {
        alg: "[U2, R' D R]",
      },
    ],
  },
  {
    case: "LDF-URB (GB)",
    algs: [
      {
        alg: "U R' D R U' R' D' R",
      },
      {
        alg: "[U, R' D R]",
      },
    ],
  },
  {
    case: "LDF-ULF (GD)",
    algs: [
      {
        alg: "U' R' D R U R' D' R",
      },
      {
        alg: "[U', R' D R]",
      },
    ],
  },
  {
    case: "LDF-LUB (GE)",
    algs: [
      {
        alg: "U R2 D R U' R' D' R U R U'",
      },
      {
        alg: "[U R': [R' D R, U']]",
      },
    ],
  },
  {
    case: "LDF-LFU (GF)",
    algs: [
      {
        alg: "z U' R' D' R U R' D R z'",
      },
      {
        alg: "[z: [U', R' D' R]]",
      },
    ],
  },
  {
    case: "LDF-LBD (GH)",
    algs: [
      {
        alg: "z' R U' R' D' R U R' D z",
      },
      {
        alg: "[z': [R U' R', D']]",
      },
    ],
  },
  {
    case: "LDF-FUL (GI)",
    algs: [
      {
        alg: "D R' F2 R D' R' D F2 D' R",
      },
      {
        alg: "-",
      },
    ],
  },
  {
    case: "LDF-FDR (GK)",
    algs: [
      {
        alg: "U D R U' R' D' R U R' U'",
      },
      {
        alg: "[U: [D, R U' R']]",
      },
    ],
  },
  {
    case: "LDF-RBU (GN)",
    algs: [
      {
        alg: "U R U R' D R U2 R' D' R U R' U'",
      },
      {
        alg: "[U R U: [R' D R, U2]]",
      },
    ],
  },
  {
    case: "LDF-RDB (GO)",
    algs: [
      {
        alg: "U D R U' R' D2 R U R' D U'",
      },
      {
        alg: "[U D: [R U' R', D2]]",
      },
    ],
  },
  {
    case: "LDF-RFD (GP)",
    algs: [
      {
        alg: "U R' D R U' R' D2 R U R' D R U'",
      },
      {
        alg: "[U R' D: [R U' R', D2]]",
      },
    ],
  },
  {
    case: "LDF-BUR (GQ)",
    algs: [
      {
        alg: "R' U R U' R' D R U R' D' U' R",
      },
      {
        alg: "[R' U: [R U' R', D]]",
      },
    ],
  },
  {
    case: "LDF-BLU (GR)",
    algs: [
      {
        alg: "Lw U2 R D' R' U R D R' U Lw'",
      },
      {
        alg: "[Lw U': [U', R D' R']]",
      },
    ],
  },
  {
    case: "LDF-BDL (GS)",
    algs: [
      {
        alg: "U D R U' R' D R U R' D2 U'",
      },
      {
        alg: "[U D: [R U' R', D]]",
      },
    ],
  },
  {
    case: "LDF-BRD (GT)",
    algs: [
      {
        alg: "R' D R D' R U R' D R U' R2 D' R",
      },
      {
        alg: "[R' D R: [D', R U R']]",
      },
    ],
  },
  {
    case: "LDF-DRF (GV)",
    algs: [
      {
        alg: "z R' D R U' R' D2 R U R' D R z'",
      },
      {
        alg: "[z R' D R: [U', R' D2 R]]",
      },
    ],
  },
  {
    case: "LDF-DBR (GW)",
    algs: [
      {
        alg: "U R D R U' R' D' R U R2 U'",
      },
      {
        alg: "[U R: [D, R U' R']]",
      },
    ],
  },
  {
    case: "LDF-DLB (GX)",
    algs: [
      {
        alg: "F' R U' R' D2 R U R' D2' F",
      },
      {
        alg: "[F': [R U' R', D2]]",
      },
    ],
  },
];

export const algsLBD = [
  {
    case: "LBD-UBL (HA)",
    algs: [
      {
        alg: "U R D' R' U2' R D R' U",
      },
      {
        alg: "[U': [U2, R D' R']]",
      },
    ],
  },
  {
    case: "LBD-URB (HB)",
    algs: [
      {
        alg: "R D' R' U' R D R' U",
      },
      {
        alg: "[R D' R', U']",
      },
    ],
  },
  {
    case: "LBD-ULF (HD)",
    algs: [
      {
        alg: "U2 R D' R' U R D R' U",
      },
      {
        alg: "[U': [U', R D' R']]",
      },
    ],
  },
  {
    case: "LBD-LUB (HE)",
    algs: [
      {
        alg: "z U2 R' D' R U' R' D R U' z'",
      },
      {
        alg: "[z U: [U, R' D' R]]",
      },
    ],
  },
  {
    case: "LBD-LFU (HF)",
    algs: [
      {
        alg: "z U2 R' D' R U2' R' D R z'",
      },
      {
        alg: "[z: [U2, R' D' R]]",
      },
    ],
  },
  {
    case: "LBD-LDF (HG)",
    algs: [
      {
        alg: "z' D' R U' R' D R U R' z",
      },
      {
        alg: "[z': [D', R U' R']]",
      },
    ],
  },
  {
    case: "LBD-FUL (HI)",
    algs: [
      {
        alg: "Lw' U2 R' D R U2' R' D' R Lw",
      },
      {
        alg: "[Lw': [U2, R' D R]]",
      },
    ],
  },
  {
    case: "LBD-FDR (HK)",
    algs: [
      {
        alg: "U R U' R D' R' U' R D R' U2 R' U'",
      },
      {
        alg: "[U R U': [R D' R', U']]",
      },
    ],
  },
  {
    case: "LBD-FLD (HL)",
    algs: [
      {
        alg: "D2 R U R' D' R U' R' D'",
      },
      {
        alg: "[D2: [R U R', D']]",
      },
    ],
  },
  {
    case: "LBD-RBU (HN)",
    algs: [
      {
        alg: "U R2 D' R' U2 R D R' U2' R' U'",
      },
      {
        alg: "[U R: [R D' R', U2]]",
      },
    ],
  },
  {
    case: "LBD-RDB (HO)",
    algs: [
      {
        alg: "R D' R' U' R D2 R' U R D' R'",
      },
      {
        alg: "[R D': [R' U' R, D2]]",
      },
    ],
  },
  {
    case: "LBD-RFD (HP)",
    algs: [
      {
        alg: "D2 R U R' D2' R U' R'",
      },
      {
        alg: "[D2, R U R']",
      },
    ],
  },
  {
    case: "LBD-BUR (HQ)",
    algs: [
      {
        alg: "U' L U R U' L' U R'",
      },
      {
        alg: "[U' L U, R]",
      },
    ],
  },
  {
    case: "LBD-BLU (HR)",
    algs: [
      {
        alg: "U2 R2 D' R' U R D R' U' R' U2'",
      },
      {
        alg: "[U2 R: [R D' R', U]]",
      },
    ],
  },
  {
    case: "LBD-BRD (HT)",
    algs: [
      {
        alg: "D2 R U R' D R U' R' D",
      },
      {
        alg: "[D': [D', R U R']]",
      },
    ],
  },
  {
    case: "LBD-DFL (HU)",
    algs: [
      {
        alg: "R D R' D R U R' D2 R U' R' D R D' R'",
      },
      {
        alg: "[R D R' D: [R U R', D2]]",
      },
    ],
  },
  {
    case: "LBD-DRF (HV)",
    algs: [
      {
        alg: "D2 R2 D' R' U' R D R' U R' D2'",
      },
      {
        alg: "[D2 R: [R D' R', U']]",
      },
    ],
  },
  {
    case: "LBD-DBR (HW)",
    algs: [
      {
        alg: "R D' R2 D R U R' D' R U' R D R'",
      },
      {
        alg: "[R D' R’: [R’ D R, U]]",
      },
    ],
  },
];

export const algsFUL = [
  {
    case: "FUL-UBL (IA)",
    algs: [
      {
        alg: "Lw' R' D2 R U2 R' D2' R U2' Lw",
      },
      {
        alg: "[Lw': [R' D2 R, U2]]",
      },
    ],
  },
  {
    case: "FUL-URB (IB)",
    algs: [
      {
        alg: "R2 D R' U2 R D' R' U2' R'",
      },
      {
        alg: "[R: [R D R', U2]]",
      },
    ],
  },
  {
    case: "FUL-LUB (IE)",
    algs: [
      {
        alg: "Lw' U' R D' R' U2' R D R' U' Lw",
      },
      {
        alg: "[Lw' U: [U2, R D' R']]",
      },
    ],
  },
  {
    case: "FUL-LDF (IG)",
    algs: [
      {
        alg: "R' D F2' D' R D R' F2' R D'",
      },
      {
        alg: "-",
      },
    ],
  },
  {
    case: "FUL-LBD (IH)",
    algs: [
      {
        alg: "Lw' R' D R U2 R' D' R U2' Lw",
      },
      {
        alg: "[Lw': [R' D R, U2]]",
      },
    ],
  },
  {
    case: "FUL-FDR (IK)",
    algs: [
      {
        alg: "D' R' D F2 D' R D R' F2 R",
      },
      {
        alg: "-",
      },
    ],
  },
  {
    case: "FUL-FLD (IL)",
    algs: [
      {
        alg: "R U R' D R U2 R' D' R U R'",
      },
      {
        alg: "[R U: [R' D R, U2]]",
      },
    ],
  },
  {
    case: "FUL-RBU (IN)",
    algs: [
      {
        alg: "L' D L2 D' L2' U L2 D L2' D' L2 U' L'",
      },
      {
        alg: "[L: [L2' D L2 D' L2', U]]",
      },
    ],
  },
  {
    case: "FUL-RDB (IO)",
    algs: [
      {
        alg: "Lw' U' R D R' U2 R D' R' U' Lw",
      },
      {
        alg: "[Lw' U': [R D R', U2]]",
      },
    ],
  },
  {
    case: "FUL-RFD (IP)",
    algs: [
      {
        alg: "Lw' R' D' R U2 R' D R U2' Lw",
      },
      {
        alg: "[Lw': [R' D' R, U2]]",
      },
    ],
  },
  {
    case: "FUL-BUR (IQ)",
    algs: [
      {
        alg: "R D' U R' D' R U2 R' D R U D R'",
      },
      {
        alg: "[R D'U: [R' D' R, U2]]",
      },
    ],
  },
  {
    case: "FUL-BLU (IR)",
    algs: [
      {
        alg: "R U R' D' U2 R' D R U2' R' D' R D R U' R'",
      },
      {
        alg: "[R U R' D': [U2, R' D R]]",
      },
    ],
  },
  {
    case: "FUL-BDL (IS)",
    algs: [
      {
        alg: "D R' D F2 D' R D R' F2 R D2",
      },
      {
        alg: "-",
      },
    ],
  },
  {
    case: "FUL-BRD (IT)",
    algs: [
      {
        alg: "R U R' D' R U2 R' D R U R'",
      },
      {
        alg: "[R U: [R' D' R, U2]]",
      },
    ],
  },
  {
    case: "FUL-DFL (IU)",
    algs: [
      {
        alg: "R U D R' D' R U2 R' D R U2' D' U' R'",
      },
      {
        alg: "[R UD: [R' D' R, U2]]",
      },
    ],
  },
  {
    case: "FUL-DRF (IV)",
    algs: [
      {
        alg: "D' R U D R' D' R U2 R' D R U2' D' U' R' D",
      },
      {
        alg: "[D' R UD: [R' D' R, U2]]",
      },
    ],
  },
  {
    case: "FUL-DBR (IW)",
    algs: [
      {
        alg: "D R2 D' R' U2 R D R' U2' R' D'",
      },
      {
        alg: "[D R: [R D' R', U2]]",
      },
    ],
  },
  {
    case: "FUL-DLB (IX)",
    algs: [
      {
        alg: "R2 D' R' U2 R D R' U2' R'",
      },
      {
        alg: "[R: [R D' R', U2]]",
      },
    ],
  },
];

export const algsFDR = [
  {
    case: "FDR-UBL (KA)",
    algs: [
      {
        alg: "D' U2 R' D R U2' R' D' R D",
      },
      {
        alg: "[D': [U2, R' D R]]",
      },
    ],
  },
  {
    case: "FDR-URB (KB)",
    algs: [
      {
        alg: "D' U R' D R U' R' D' R D",
      },
      {
        alg: "[D': [U, R' D R]]",
      },
    ],
  },
  {
    case: "FDR-ULF (KD)",
    algs: [
      {
        alg: "D' U' R' D R U R' D' R D",
      },
      {
        alg: "[D': [U', R' D R]]",
      },
    ],
  },
  {
    case: "FDR-LUB (KE)",
    algs: [
      {
        alg: "R U R' U' R' D' R U R' D R2 U' R'",
      },
      {
        alg: "[R U R': [U', R' D' R]]",
      },
    ],
  },
  {
    case: "FDR-LFU (KF)",
    algs: [
      {
        alg: "z R U R' D R U' R' D' z'",
      },
      {
        alg: "[z: [R U R', D]]",
      },
    ],
  },
  {
    case: "FDR-LDF (KG)",
    algs: [
      {
        alg: "U R U' R' D R U R' D' U'",
      },
      {
        alg: "[U: [R U' R', D]]",
      },
    ],
  },
  {
    case: "FDR-LBD (KH)",
    algs: [
      {
        alg: "Lw' U R U' R' D R U R' D' U' Lw",
      },
      {
        alg: "[Lw' U: [R U' R', D]]",
      },
    ],
  },
  {
    case: "FDR-FUL (KF)",
    algs: [
      {
        alg: "R' F2' R D' R' D F2' D' R D",
      },
      {
        alg: "-",
      },
    ],
  },
  {
    case: "FDR-FLD (KL)",
    algs: [
      {
        alg: "z R U' R' D R U R' D' z'",
      },
      {
        alg: "[z: [R U' R', D]]",
      },
    ],
  },
  {
    case: "FDR-RBU (KN)",
    algs: [
      {
        alg: "U' R' U R D R' U2 R D' R' U R U",
      },
      {
        alg: "[U' R' U: [R D R', U2]]",
      },
    ],
  },
  {
    case: "FDR-RDB (KO)",
    algs: [
      {
        alg: "U R U' R' D' R U R' D U'",
      },
      {
        alg: "[U: [R U' R', D']]",
      },
    ],
  },
  {
    case: "FDR-BUR (KQ)",
    algs: [
      {
        alg: "D' R' U R U' R' D R U R' D' U' R D",
      },
      {
        alg: "[D' R' U: [R U' R', D]]",
      },
    ],
  },
  {
    case: "FDR-BLU (KR)",
    algs: [
      {
        alg: "Lw D' U' R' D R U R' D' R D Lw'",
      },
      {
        alg: "[Lw D': [U', R' D R]]",
      },
    ],
  },
  {
    case: "FDR-BDL (KS)",
    algs: [
      {
        alg: "U R U' R' D2 R U R' D2' U'",
      },
      {
        alg: "[U: [R U' R', D2]]",
      },
    ],
  },
  {
    case: "FDR-BRD (KT)",
    algs: [
      {
        alg: "D R D R' U' R D2 R' U R D R' D'",
      },
      {
        alg: "[D R D: [R' U' R, D2]]",
      },
    ],
  },
  {
    case: "FDR-DFL (KU)",
    algs: [
      {
        alg: "U R U' F2 U R' U' R F2 R'",
      },
      {
        alg: " - ",
      },
    ],
  },
  {
    case: "FDR-DBR (KW)",
    algs: [
      {
        alg: "U R D' U' R' D R U R' D' R D R' U'",
      },
      {
        alg: "[U R D': [U', R' D R]]",
      },
    ],
  },
  {
    case: "FDR-DLB (KX)",
    algs: [
      {
        alg: "z R U2 R' D R U2' R' D' z'",
      },
      {
        alg: "[z: [R U2 R', D]]",
      },
    ],
  },
];

export const algsFLD = [
  {
    case: "FLD-UBL",
    algs: [
      {
        alg: "D' U R D' R' U2' R D R' U D",
      },
      {
        alg: "[D' U': [U2, R D' R']]",
      },
    ],
  },
  {
    case: "FLD-URB",
    algs: [
      {
        alg: "D U R' D' R U' R' D R D'",
      },
      {
        alg: "[D: [U, R' D' R]]",
      },
    ],
  },
  {
    case: "FLD-ULF",
    algs: [
      {
        alg: "D U' R' D' R U R' D R D'",
      },
      {
        alg: "[D: [U', R' D' R]]",
      },
    ],
  },
  {
    case: "FLD-LUB",
    algs: [
      {
        alg: "R U2 R' D R U' R' D' R U' R'",
      },
      {
        alg: "[R U: [U, R' D R]]",
      },
    ],
  },
  {
    case: "FLD-LFU",
    algs: [
      {
        alg: "D R' U' R U R' D' R U' R' D U R D'",
      },
      {
        alg: "[D R' U': [R U R', D']]",
      },
    ],
  },
  {
    case: "FLD-LBD",
    algs: [
      {
        alg: "D R U R' D R U' R' D2'",
      },
      {
        alg: "[D2: [D', R U R']]",
      },
    ],
  },
  {
    case: "FLD-FUL",
    algs: [
      {
        alg: "R U' R' D R U2' R' D' R U' R'",
      },
      {
        alg: "[R U: [U2, R' D R]]",
      },
    ],
  },
  {
    case: "FLD-FDR",
    algs: [
      {
        alg: "z D R U' R' D' R U R' z'",
      },
      {
        alg: "[z: [D, R U' R']]",
      },
    ],
  },
  {
    case: "FLD-RBU",
    algs: [
      {
        alg: "F' U R' D' R U2 R' D R U F",
      },
      {
        alg: "[F' U: [R' D' R, U2]]",
      },
    ],
  },
  {
    case: "FLD-RDB",
    algs: [
      {
        alg: "R D2 R' U' R D' R' U R D' R'",
      },
      {
        alg: "[R D: [D, R' U' R]]",
      },
    ],
  },
  {
    case: "FLD-RFD",
    algs: [
      {
        alg: "D R U R' D' R U' R'",
      },
      {
        alg: "[D, R U R']",
      },
    ],
  },
  {
    case: "FLD-BUR",
    algs: [
      {
        alg: "z D' R U' R' D R U R' z'",
      },
      {
        alg: "[z: [D', R U' R']]",
      },
    ],
  },
  {
    case: "FLD-BLU",
    algs: [
      {
        alg: "D x' R U' R' D' R U R' D x D'",
      },
      {
        alg: "[D x': [R U' R', D']]",
      },
    ],
  },
  {
    case: "FLD-BDL",
    algs: [
      {
        alg: "D' R D' R' U' R D2 R' U R D' R' D",
      },
      {
        alg: "[D' R D': [R' U' R, D2]]",
      },
    ],
  },
  {
    case: "FLD-BRD",
    algs: [
      {
        alg: "D R U R' D2 R U' R' D",
      },
      {
        alg: "[D: [R U R', D2]]",
      },
    ],
  },
  {
    case: "FLD-DRF",
    algs: [
      {
        alg: "R U' R2 D R U2 R' D' R U2' R U R'",
      },
      {
        alg: "[R U' R': [R' D R, U2]]",
      },
    ],
  },
  {
    case: "FLD-DBR",
    algs: [
      {
        alg: "D R2 D' R' U' R D R' U R' D'",
      },
      {
        alg: "[D R: [R D' R', U’]]",
      },
    ],
  },
  {
    case: "FLD-DLB",
    algs: [
      {
        alg: "z' U' R U R' D' R U' R' D U z",
      },
      {
        alg: "[z' U': [R U R', D']]",
      },
    ],
  },
];

export const algsRBU = [
  {
    case: "RBU-UBL",
    algs: [
      {
        alg: "R D R' U2 R' D2 R U2' R' D2' R2 D' R'",
      },
      {
        alg: "[R D R': [U2, R' D2 R]]",
      },
    ],
  },
  {
    case: "RBU-ULF",
    algs: [
      {
        alg: "U' R2 D' R U2 R' D R U2' R U",
      },
      {
        alg: "[U' R': [R' D' R, U2]]",
      },
    ],
  },
  {
    case: "RBU-LUB",
    algs: [
      {
        alg: "R U R2' D R2 D' R2' U' R2 D R2' D' R",
      },
      {
        alg: "[R: [U, R2' D R2 D' R2']]",
      },
    ],
  },
  {
    case: "RBU-LFU",
    algs: [
      {
        alg: "F' U' R' D R U2' R' D' R U' F",
      },
      {
        alg: "[F' U: [U2, R' D R]]",
      },
    ],
  },
  {
    case: "RBU-LDF",
    algs: [
      {
        alg: "U R U' R' D R U2' R' D' R U' R' U'",
      },
      {
        alg: "[U R U: [U2, R' D R]]",
      },
    ],
  },
  {
    case: "RBU-LBD",
    algs: [
      {
        alg: "U R U2 R D' R' U2' R D R2 U'",
      },
      {
        alg: "[U R: [U2, R D' R']]",
      },
    ],
  },
  {
    case: "RBU-FUL",
    algs: [
      {
        alg: "R D' R2' D R2 U' R2' D' R2 D R2' U R",
      },
      {
        alg: "[R': [R2 D' R2' D R2, U']]",
      },
    ],
  },
  {
    case: "RBU-FDR",
    algs: [
      {
        alg: "U' R' U' R D R' U2' R D' R' U' R U",
      },
      {
        alg: "[U' R' U: [U2, R D R']]",
      },
    ],
  },
  {
    case: "RBU-FLD",
    algs: [
      {
        alg: "F' U' R' D' R U2' R' D R U' F",
      },
      {
        alg: "[F' U: [U2, R' D' R]]",
      },
    ],
  },
  {
    case: "RBU-RDB",
    algs: [
      {
        alg: "U R U' R' D' R U2 R' D R U' R' U'",
      },
      {
        alg: "[U R U': [R' D' R, U2]]",
      },
    ],
  },
  {
    case: "RBU-RFD",
    algs: [
      {
        alg: "U' R' U' D R D' R' U2 R D R' U2' D' U R U",
      },
      {
        alg: "[U' R' U' D: [R D' R', U2]]",
      },
    ],
  },
  {
    case: "RBU-BLU",
    algs: [
      {
        alg: "U R U2 R D R' U2' R D' R2 U'",
      },
      {
        alg: "[U R: [U2, R D R']]",
      },
    ],
  },
  {
    case: "RBU-BDL",
    algs: [
      {
        alg: "U' R' U' R D' R' U2 R D R' U' R U",
      },
      {
        alg: "[U' R' U’: [R D' R', U2]]",
      },
    ],
  },
  {
    case: "RBU-BRD",
    algs: [
      {
        alg: "U D R U2 R D' R' U2' R D R2 D' U'",
      },
      {
        alg: "[U D R: [U2, R D' R']]",
      },
    ],
  },
  {
    case: "RBU-DFL",
    algs: [
      {
        alg: "U' R2' D R U2 R' D' R U2' R U",
      },
      {
        alg: "[U' R': [R' D R, U2]]",
      },
    ],
  },
  {
    case: "RBU-DRF",
    algs: [
      {
        alg: "U R' F2 R D' R' D F2 D' R D U'",
      },
      {
        alg: "-",
      },
    ],
  },
  {
    case: "RBU-DBR",
    algs: [
      {
        alg: "F' U2 R D R' U2' R D' R' F",
      },
      {
        alg: "[F': [U2, R D R']]",
      },
    ],
  },
  {
    case: "RBU-DLB",
    algs: [
      {
        alg: "U' D R2 D R U2 R' D' R U2' R D' U",
      },
      {
        alg: "[U' D R': [R' D R, U2]]",
      },
    ],
  },
];

export const algsRDB = [
  {
    case: "RDB-UBL",
    algs: [
      {
        alg: "U R D R' U2' R D' R' U",
      },
      {
        alg: "[U': [U2, R D R']]",
      },
    ],
  },
  {
    case: "RDB-URB",
    algs: [
      {
        alg: "R D R' U' R D' R' U",
      },
      {
        alg: "[R D R', U']",
      },
    ],
  },
  {
    case: "RDB-ULF",
    algs: [
      {
        alg: "U2' R D R' U R D' R' U",
      },
      {
        alg: "[U': [U', R D R']]",
      },
    ],
  },
  {
    case: "RDB-LUB",
    algs: [
      {
        alg: "R D U R D R' U' R D' R' D' R'",
      },
      {
        alg: "[R D: [U, R D R']]",
      },
    ],
  },
  {
    case: "RDB-LFU",
    algs: [
      {
        alg: "R' U R' D' R U2' R' D R U R",
      },
      {
        alg: "[R' U': [U2, R' D' R]]",
      },
    ],
  },
  {
    case: "RDB-LDF",
    algs: [
      {
        alg: "U D' R U' R' D2' R U R' D' U'",
      },
      {
        alg: "[U D: [D2, R U' R']]",
      },
    ],
  },
  {
    case: "RDB-LBD",
    algs: [
      {
        alg: "R D R' U' R D2' R' U R D R'",
      },
      {
        alg: "[R D': [D2, R' U' R]]",
      },
    ],
  },
  {
    case: "RDB-FUL",
    algs: [
      {
        alg: "Lw' U R D R' U2' R D' R' U Lw",
      },
      {
        alg: "[Lw' U': [U2, R D R']]",
      },
    ],
  },
  {
    case: "RDB-FDR",
    algs: [
      {
        alg: "U D' R U' R' D R U R' U'",
      },
      {
        alg: "[U: [D', R U' R']]",
      },
    ],
  },
  {
    case: "RDB-FLD",
    algs: [
      {
        alg: "R D R' U' R D R' U R D2' R'",
      },
      {
        alg: "[R D: [R' U' R, D]]",
      },
    ],
  },
  {
    case: "RDB-RBU",
    algs: [
      {
        alg: "U R U R' D' R U2' R' D R U R' U'",
      },
      {
        alg: "[U R U': [U2, R' D' R]]",
      },
    ],
  },
  {
    case: "RDB-RFD",
    algs: [
      {
        alg: "R D' R' D R U R' D' R U' D R'",
      },
      {
        alg: "[R D': [R' D R, U]]",
      },
    ],
  },
  {
    case: "RDB-BUR",
    algs: [
      {
        alg: "U' R U R' U' R D R' U R D' U' R' U",
      },
      {
        alg: "[U' R U: [R' U' R, D]]",
      },
    ],
  },
  {
    case: "RDB-BLU",
    algs: [
      {
        alg: "R' U R' D' R U R' D R U2' R",
      },
      {
        alg: "[R' U: [R' D' R. U]]",
      },
    ],
  },
  {
    case: "RDB-BDL",
    algs: [
      {
        alg: "U D' R U' R' D' R U R' D2 U'",
      },
      {
        alg: "[UD': [R U' R', D']]",
      },
    ],
  },
  {
    case: "RDB-DFL",
    algs: [
      {
        alg: "U' R2' D R U R' D' R U' R U",
      },
      {
        alg: "[U' R': [R' D R, U]]",
      },
    ],
  },
  {
    case: "RDB-DRF",
    algs: [
      {
        alg: "D' U R U' F2 U R' U' R F2' R' D",
      },
      {
        alg: "[D' R: [R' U R U', F2]]",
      },
    ],
  },
  {
    case: "RDB-DLB",
    algs: [
      {
        alg: "R2 D2 R U R' D R U' R' D R2'",
      },
      {
        alg: "[R2 D2: [R U R', D]]",
      },
    ],
  },
];

export const algsRFD = [
  {
    case: "RFD-UBL",
    algs: [
      {
        alg: "U2 R' D' R U2' R' D R",
      },
      {
        alg: "[U2, R' D' R]",
      },
    ],
  },
  {
    case: "RFD-URB",
    algs: [
      {
        alg: "U R' D' R U' R' D R",
      },
      {
        alg: "[U, R' D' R]",
      },
    ],
  },
  {
    case: "RFD-ULF",
    algs: [
      {
        alg: "U' R' D' R U R' D R",
      },
      {
        alg: "[U', R' D' R]",
      },
    ],
  },
  {
    case: "RFD-LUB",
    algs: [
      {
        alg: "D' R U2 R' D R U' R' D' R U' R' D",
      },
      {
        alg: "[D' R U: [U, R' D R]]",
      },
    ],
  },
  {
    case: "RFD-LFU",
    algs: [
      {
        alg: "R' U' R U R' D' R U' R' D U R",
      },
      {
        alg: "[R' U': [R U R', D']]",
      },
    ],
  },
  {
    case: "RFD-LDF",
    algs: [
      {
        alg: "U R' D' R U' R' D2' R U R' D' R U'",
      },
      {
        alg: "[U R' D: [D2, R U' R']]",
      },
    ],
  },
  {
    case: "RFD-LBD",
    algs: [
      {
        alg: "R U R' D2 R U' R' D2'",
      },
      {
        alg: "[R U R', D2]",
      },
    ],
  },
  {
    case: "RFD-FUL",
    algs: [
      {
        alg: "Lw' U2 R' D' R U2' R' D R Lw",
      },
      {
        alg: "[Lw': [U2, R' D' R]]",
      },
    ],
  },
  {
    case: "RFD-FLD",
    algs: [
      {
        alg: "R U R' D R U' R' D'",
      },
      {
        alg: "[R U R', D]",
      },
    ],
  },
  {
    case: "RFD-RBU",
    algs: [
      {
        alg: "U' R' U' D U2 R D' R' U2' R D R' D' U R U",
      },
      {
        alg: "[U' R' U' D: [U2, R D' R']]",
      },
    ],
  },
  {
    case: "RFD-RDB",
    algs: [
      {
        alg: "R D' U R' D R U' R' D' R D R'",
      },
      {
        alg: "[R D': [U, R' D R]]",
      },
    ],
  },
  {
    case: "RFD-BUR",
    algs: [
      {
        alg: "R D R D' R' U' R D R' U D' R'",
      },
      {
        alg: "[R D: [R D' R', U’]]",
      },
    ],
  },
  {
    case: "RFD-BLU",
    algs: [
      {
        alg: "x' R U' R' D' R U R' D x",
      },
      {
        alg: "[x': [R U' R', D']]",
      },
    ],
  },
  {
    case: "RFD-BDL",
    algs: [
      {
        alg: "x' R U2 R' D' R U2' R' D x",
      },
      {
        alg: "[x': [R U2 R', D']]",
      },
    ],
  },
  {
    case: "RFD-BRD",
    algs: [
      {
        alg: "R U R' D' R U' R' D",
      },
      {
        alg: "[R U R', D']",
      },
    ],
  },
  {
    case: "RFD-DFL",
    algs: [
      {
        alg: "R D U R' D' R U' R' D R D' R'",
      },
      {
        alg: "[R D: [U, R' D' R]]",
      },
    ],
  },
  {
    case: "RFD-DBR",
    algs: [
      {
        alg: "R U R' D R U' R D' R' U' R D R' U R' D'",
      },
      {
        alg: "[R: [U, R' D R U' R D' R']]",
      },
    ],
  },
  {
    case: "RFD-DLB",
    algs: [
      {
        alg: "R2 D' R' U' R D R' U R'",
      },
      {
        alg: "[R: [R D' R', U']]",
      },
    ],
  },
];

export const algsBUR = [
  {
    case: "BUR-UBL",
    algs: [
      {
        alg: "R' D' R' D R U2 R' D' R U2' D R",
      },
      {
        alg: "[R' D': [R' D R, U2]]",
      },
    ],
  },
  {
    case: "BUR-ULF",
    algs: [
      {
        alg: "U' R U R D R' U' R D' R2' U",
      },
      {
        alg: "[U' R: [U, R D R']]",
      },
    ],
  },
  {
    case: "BUR-LUB",
    algs: [
      {
        alg: "U R2' D' R U' R' D R U R U'",
      },
      {
        alg: "[U R' U': [U, R' D' R]]",
      },
    ],
  },
  {
    case: "BUR-LFU",
    algs: [
      {
        alg: "z R U R' D' R U' R' D z'",
      },
      {
        alg: "[z: [R U R', D']]",
      },
    ],
  },
  {
    case: "BUR-LDF",
    algs: [
      {
        alg: "R' U D R U' R' D' R U R' U' R",
      },
      {
        alg: "[R' U: [D, R U' R']]",
      },
    ],
  },
  {
    case: "BUR-LBD",
    algs: [
      {
        alg: "R U' L U R' U' L' U",
      },
      {
        alg: "[R, U' L U]",
      },
    ],
  },
  {
    case: "BUR-FUL",
    algs: [
      {
        alg: "R D' U' R' D' R U2' R' D R U' D R'",
      },
      {
        alg: "[R D' U: [U2, R' D' R]]",
      },
    ],
  },
  {
    case: "BUR-FDR",
    algs: [
      {
        alg: "D' R' U D R U' R' D' R U R' U' R D",
      },
      {
        alg: "[D' R' U: [D, R U' R']]",
      },
    ],
  },
  {
    case: "BUR-FLD",
    algs: [
      {
        alg: "z R U' R' D' R U R' D z'",
      },
      {
        alg: "[z: [R U' R', D']]",
      },
    ],
  },
  {
    case: "BUR-RDB",
    algs: [
      {
        alg: "U' R U D R' U' R D' R' U R U' R' U",
      },
      {
        alg: "[U' R U: [D, R' U' R]]",
      },
    ],
  },
  {
    case: "BUR-RFD",
    algs: [
      {
        alg: "R D U' R D' R' U R D R' D' R'",
      },
      {
        alg: "[R D: [U', R D' R']]",
      },
    ],
  },
  {
    case: "BUR-BLU",
    algs: [
      {
        alg: "R U' L' U R' U' L U",
      },
      {
        alg: "[R, U' L' U]",
      },
    ],
  },
  {
    case: "BUR-BDL",
    algs: [
      {
        alg: "R' U D2 R U' R' D2' R U R' U' R",
      },
      {
        alg: "[R' U: [D2, R U' R']]",
      },
    ],
  },
  {
    case: "BUR-BRD",
    algs: [
      {
        alg: "R U' R' U R D R' U' R D' U R'",
      },
      {
        alg: "[R U': [R' U R, D]]",
      },
    ],
  },
  {
    case: "BUR-DFL",
    algs: [
      {
        alg: "U D R' U' R U R' D' R U' R' D U R D' U'",
      },
      {
        alg: "[UD R' U': [R U R', D']]",
      },
    ],
  },
  {
    case: "BUR-DRF",
    algs: [
      {
        alg: "U R' U' R U R' D' R U' R' D U R U'",
      },
      {
        alg: "[U R' U': [R U R’, D']]",
      },
    ],
  },
  {
    case: "BUR-DBR",
    algs: [
      {
        alg: "D R U' R' U R D' R' U' R D U R' D'",
      },
      {
        alg: "[D R U': [R' U R, D']]",
      },
    ],
  },
  {
    case: "BUR-DLB",
    algs: [
      {
        alg: "R U' R' U R D' R' U' R D U R'",
      },
      {
        alg: "[R U': [R' U R, D']] ",
      },
    ],
  },
];

export const algsBLU = [
  {
    case: "BLU-URB",
    algs: [
      {
        alg: "R' U2 R' D' R U2' R' D R2",
      },
      {
        alg: "[R': [U2, R' D' R]]",
      },
    ],
  },
  {
    case: "BLU-ULF",
    algs: [
      {
        alg: "U' R2' D' R U' R' D R U R U",
      },
      {
        alg: "[U' R': [R' D' R, U']]",
      },
    ],
  },
  {
    case: "BLU-LFU",
    algs: [
      {
        alg: "x' D R U' R' D' R U R' x",
      },
      {
        alg: "[x': [D, R U' R']]",
      },
    ],
  },
  {
    case: "BLU-LDF",
    algs: [
      {
        alg: "Lw U' R D' R' U' R D R' U2 Lw'",
      },
      {
        alg: "[Lw U': [R D' R', U']]",
      },
    ],
  },
  {
    case: "BLU-LBD",
    algs: [
      {
        alg: "U2 R U R D' R' U' R D R2' U2'",
      },
      {
        alg: "[U2 R: [U, R D' R']]",
      },
    ],
  },
  {
    case: "BLU-FUL",
    algs: [
      {
        alg: "R U R' D' R' D R U2 R' D' R U2' D R U' R'",
      },
      {
        alg: "[R U R' D': [R' D R, U2]]",
      },
    ],
  },
  {
    case: "BLU-FDR",
    algs: [
      {
        alg: "Lw D' R' D R U' R' D' R U D Lw'",
      },
      {
        alg: "[Lw D': [R' D R, U']]",
      },
    ],
  },
  {
    case: "BLU-FLD",
    algs: [
      {
        alg: "D x' D' R U' R' D R U R' x D'",
      },
      {
        alg: "[D x': [D', R U' R']]",
      },
    ],
  },
  {
    case: "BLU-RBU",
    algs: [
      {
        alg: "U R2 D R' U2 R D' R' U2' R' U'",
      },
      {
        alg: "[U R: [R D R', U2]]",
      },
    ],
  },
  {
    case: "BLU-RDB",
    algs: [
      {
        alg: "R' U2 R' D' R U' R' D R U' R",
      },
      {
        alg: "[R' U: [U, R' D' R]]",
      },
    ],
  },
  {
    case: "BLU-RFD",
    algs: [
      {
        alg: "x' D' R U' R' D R U R' x",
      },
      {
        alg: "[x': [D', R U' R']]",
      },
    ],
  },
  {
    case: "BLU-BUR",
    algs: [
      {
        alg: "U' L' U R U' L U R'",
      },
      {
        alg: "[U' L' U, R]",
      },
    ],
  },
  {
    case: "BLU-BDL",
    algs: [
      {
        alg: "U' R' U' R D' R' U' R D R' U2 R U",
      },
      {
        alg: "[U' R' U': [R D' R', U']]",
      },
    ],
  },
  {
    case: "BLU-BRD",
    algs: [
      {
        alg: "R2 U R D R' U2 R D' R' U R2'",
      },
      {
        alg: "[R2 U: [R D R', U2]]",
      },
    ],
  },
  {
    case: "BLU-DFL",
    algs: [
      {
        alg: "U' R2' D R U' R' D' R U R U",
      },
      {
        alg: "[U' R': [R' D R, U']]",
      },
    ],
  },
  {
    case: "BLU-DRF",
    algs: [
      {
        alg: "U' D' R2' D R U' R' D' R U R D U",
      },
      {
        alg: "[U' D' R': [R' D R, U']]",
      },
    ],
  },
  {
    case: "BLU-DBR",
    algs: [
      {
        alg: "R' U' L' U R2 U' L U R'",
      },
      {
        alg: "[R': [U' L' U, R2]]",
      },
    ],
  },
  {
    case: "BLU-DLB",
    algs: [
      {
        alg: "U' D R2' D R U' R' D' R U R D' U",
      },
      {
        alg: "[U' D R’: [R’ D R, U']]",
      },
    ],
  },
];

export const algsBDL = [
  {
    case: "BDL-UBL",
    algs: [
      {
        alg: "U2 R' D2 R U2' R' D2' R",
      },
      {
        alg: "[U2, R' D2 R]",
      },
    ],
  },
  {
    case: "BDL-URB",
    algs: [
      {
        alg: "U R' D2 R U' R' D2' R",
      },
      {
        alg: "[U, R' D2 R]",
      },
    ],
  },
  {
    case: "BDL-ULF",
    algs: [
      {
        alg: "U' R' D2 R U R' D2' R",
      },
      {
        alg: "[U', R' D2 R]",
      },
    ],
  },
  {
    case: "BDL-LUB",
    algs: [
      {
        alg: "U R2' D2 R U' R' D2' R U R U'",
      },
      {
        alg: "[U R': [R' D2 R, U']]",
      },
    ],
  },
  {
    case: "BDL-LFU",
    algs: [
      {
        alg: "x' D R U2 R' D' R U2' R' x",
      },
      {
        alg: "[x': [D, R U2 R']]",
      },
    ],
  },
  {
    case: "BDL-LDF",
    algs: [
      {
        alg: "U D2 R U' R' D' R U R' D' U'",
      },
      {
        alg: "[U D: [D, R U' R']]",
      },
    ],
  },
  {
    case: "BDL-FUL",
    algs: [
      {
        alg: "D2' R' F2' R D' R' D F2' D' R D'",
      },
      {
        alg: "-",
      },
    ],
  },
  {
    case: "BDL-FDR",
    algs: [
      {
        alg: "U D2 R U' R' D2' R U R' U'",
      },
      {
        alg: "[U: [D2, R U' R']]",
      },
    ],
  },
  {
    case: "BDL-FLD",
    algs: [
      {
        alg: "D' R D R' U' R D2' R' U R D R' D",
      },
      {
        alg: "[D' R D': [D2, R' U' R]]",
      },
    ],
  },
  {
    case: "BDL-RBU",
    algs: [
      {
        alg: "U' R' U R D' R' U2' R D R' U R U",
      },
      {
        alg: "[U' R' U': [U2, R D' R']]",
      },
    ],
  },
  {
    case: "BDL-RDB",
    algs: [
      {
        alg: "U D2' R U' R' D R U R' D U'",
      },
      {
        alg: "[U D': [D', R U' R']]",
      },
    ],
  },
  {
    case: "BDL-RFD",
    algs: [
      {
        alg: "x' D' R U2 R' D R U2' R' x",
      },
      {
        alg: "[x': [D', R U2 R']]",
      },
    ],
  },
  {
    case: "BDL-BUR",
    algs: [
      {
        alg: "R' U R U' R' D2 R U R' D2' U' R",
      },
      {
        alg: "[R' U: [R U' R', D2]]",
      },
    ],
  },
  {
    case: "BDL-BLU",
    algs: [
      {
        alg: "U' R' U2' R D' R' U R D R' U R U",
      },
      {
        alg: "[U' R' U': [U', R D' R']]",
      },
    ],
  },
  {
    case: "BDL-BRD",
    algs: [
      {
        alg: "U' R' U' L U R U' L' U2",
      },
      {
        alg: "[U': [R', U' L U]]",
      },
    ],
  },
  {
    case: "BDL-DFL",
    algs: [
      {
        alg: "x' D2 R U2 R' D2' R U2' R' x",
      },
      {
        alg: "[x': [D2, R U2 R']]",
      },
    ],
  },
  {
    case: "BDL-DRF",
    algs: [
      {
        alg: "U' D' R2' D R U R' D' R U' R D U",
      },
      {
        alg: "[U'D' R’: [R’ D R, U]]",
      },
    ],
  },
  {
    case: "BDL-DBR",
    algs: [
      {
        alg: "U R D2 R U' R' D2' R U R2' U'",
      },
      {
        alg: "[U R: [D2, R U' R']]",
      },
    ],
  },
];

export const algsBRD = [
  {
    case: "BRD-UBL",
    algs: [
      {
        alg: "D U R D' R' U2' R D R' U D'",
      },
      {
        alg: "[D U': [U2, R D' R']]",
      },
    ],
  },
  {
    case: "BRD-URB",
    algs: [
      {
        alg: "D R D' R' U' R D R' U D'",
      },
      {
        alg: "[D: [R D' R', U']]",
      },
    ],
  },
  {
    case: "BRD-ULF",
    algs: [
      {
        alg: "D' U' R' D' R U R' D R D",
      },
      {
        alg: "[D': [U', R' D' R]]",
      },
    ],
  },
  {
    case: "BRD-LUB",
    algs: [
      {
        alg: "R U2 R' D' R U' R' D R U' R'",
      },
      {
        alg: "[R U: [U, R' D' R]]",
      },
    ],
  },
  {
    case: "BRD-LFU",
    algs: [
      {
        alg: "F R U R' D' R U' R' D F'",
      },
      {
        alg: "[F: [R U R', D']]",
      },
    ],
  },
  {
    case: "BRD-LDF",
    algs: [
      {
        alg: "R' U' D R U2 R' D' R U2' R' U R",
      },
      {
        alg: "[R' U' R: [R' D R, U2]]",
      },
    ],
  },
  {
    case: "BRD-LBD",
    algs: [
      {
        alg: "D' R U R' D' R U' R' D2",
      },
      {
        alg: "[D': [R U R', D']]",
      },
    ],
  },
  {
    case: "BRD-FUL",
    algs: [
      {
        alg: "R U' R' D' R U2' R' D R U' R'",
      },
      {
        alg: "[R U: [U2, R' D' R]]",
      },
    ],
  },
  {
    case: "BRD-FDR",
    algs: [
      {
        alg: "D R D' R' U' R D2' R' U R D' R' D'",
      },
      {
        alg: "[D R D: [D2, R' U' R]]",
      },
    ],
  },
  {
    case: "BRD-FLD",
    algs: [
      {
        alg: "D' R U R' D2' R U' R' D'",
      },
      {
        alg: "[D: [D2, R U R']]",
      },
    ],
  },
  {
    case: "BRD-RBU",
    algs: [
      {
        alg: "U D R2 D' R' U2 R D R' U2' R' D' U'",
      },
      {
        alg: "[U D R: [R D' R', U2]]",
      },
    ],
  },
  {
    case: "BRD-RFD",
    algs: [
      {
        alg: "D' R U R' D R U' R'",
      },
      {
        alg: "[D', R U R']",
      },
    ],
  },
  {
    case: "BRD-BUR",
    algs: [
      {
        alg: "R U' D R' U R D' R' U' R U R'",
      },
      {
        alg: "[R U': [D, R' U R]]",
      },
    ],
  },
  {
    case: "BRD-BLU",
    algs: [
      {
        alg: "R2 U' R D R' U2' R D' R' U' R2'",
      },
      {
        alg: "[R2 U: [U2, R D R']]",
      },
    ],
  },
  {
    case: "BRD-BDL",
    algs: [
      {
        alg: "U2' L U R' U' L' U R U",
      },
      {
        alg: "[U': [U' L U, R']]",
      },
    ],
  },
  {
    case: "BRD-DFL",
    algs: [
      {
        alg: "D' R2 D' R' U' R D R' U R' D",
      },
      {
        alg: "[D' R: [R D' R', U']]",
      },
    ],
  },
  {
    case: "BRD-DRF",
    algs: [
      {
        alg: "D' R D U R' D' R U' R' D R D' R' D",
      },
      {
        alg: "[D' R D: [U, R' D' R]]",
      },
    ],
  },
  {
    case: "BRD-DLB",
    algs: [
      {
        alg: "R U' D R' U R D2 R' U' R D U R'",
      },
      {
        alg: "[R U' D: [R' U R, D2]]",
      },
    ],
  },
];

export const algsDFL = [
  {
    case: "DFL-UBL",
    algs: [
      {
        alg: "R F' R' U R D R' U2' R D' R' U R F R'",
      },
      {
        alg: "[R F' R' U': [U2, R D R']]",
      },
    ],
  },
  {
    case: "DFL-URB",
    algs: [
      {
        alg: "x' R U R' D2 R U' R' D2' x",
      },
      {
        alg: "[x': [R U R', D2]]",
      },
    ],
  },
  {
    case: "DFL-ULF",
    algs: [
      {
        alg: "U' x' D2 R U R' D2' R U' R' x U",
      },
      {
        alg: "[U' x': [D2, R U R']]",
      },
    ],
  },
  {
    case: "DFL-LUB",
    algs: [
      {
        alg: "R U R D2 R' U' R D2' R2'",
      },
      {
        alg: "[R: [U, R D2 R']]",
      },
    ],
  },
  {
    case: "DFL-LFU",
    algs: [
      {
        alg: "U' R' U D R U' R' D' R U R' U' R U",
      },
      {
        alg: "[U' R' U: [D, R U' R']]",
      },
    ],
  },
  {
    case: "DFL-LBD",
    algs: [
      {
        alg: "R D R' D' R U R' D2' R U' R' D' R D' R'",
      },
      {
        alg: "[R D R' D: [D2, R U R']]",
      },
    ],
  },
  {
    case: "DFL-FUL",
    algs: [
      {
        alg: "R U D U2 R' D' R U2' R' D R D' U' R'",
      },
      {
        alg: "[R U D: [U2, R' D' R]]",
      },
    ],
  },
  {
    case: "DFL-FDR",
    algs: [
      {
        alg: "R F2' R' U R U' F2' U R' U'",
      },
      {
        alg: "-",
      },
    ],
  },
  {
    case: "DFL-RBU",
    algs: [
      {
        alg: "U' R' U2 R' D R U2' R' D' R2 U",
      },
      {
        alg: "[U' R': [U2, R' D R]]",
      },
    ],
  },
  {
    case: "DFL-RDB",
    algs: [
      {
        alg: "U' R' U R' D R U' R' D' R2 U",
      },
      {
        alg: "[U' R': [U, R' D R]]",
      },
    ],
  },
  {
    case: "DFL-RFD",
    algs: [
      {
        alg: "R D R' D' R U R' D R U' D' R'",
      },
      {
        alg: "[R D: [R' D' R, U]]",
      },
    ],
  },
  {
    case: "DFL-BUR",
    algs: [
      {
        alg: "U D R' U' D' R U R' D R U' R' U R D' U'",
      },
      {
        alg: "[U D R' U': [D', R U R']]",
      },
    ],
  },
  {
    case: "DFL-BLU",
    algs: [
      {
        alg: "U' R' U' R' D R U R' D' R2 U",
      },
      {
        alg: "[U' R': [U', R' D R]]",
      },
    ],
  },
  {
    case: "DFL-BDL",
    algs: [
      {
        alg: "x' R U2 R' D2 R U2' R' D2' x",
      },
      {
        alg: "[x': [R U2 R', D2]]",
      },
    ],
  },
  {
    case: "DFL-BRD",
    algs: [
      {
        alg: "D' R U' R D' R' U R D R2' D",
      },
      {
        alg: "[D' R: [U', R D' R']]",
      },
    ],
  },
  {
    case: "DFL-DRF",
    algs: [
      {
        alg: "U' R' F' R U' R' D' R U R' D F R U",
      },
      {
        alg: "[U' R' F': [R U' R', D']]",
      },
    ],
  },
  {
    case: "DFL-DBR",
    algs: [
      {
        alg: "R2 U' R2 D R2' U R2' U' R2' D' R2' U",
      },
      {
        alg: "[U' R2: [R2 U R2 U' R2, D]]",
      },
    ],
  },
  {
    case: "DFL-DLB",
    algs: [
      {
        alg: "x U R' D R U2 R' D' R U x'",
      },
      {
        alg: "[x U: [R' D R, U2]]",
      },
    ],
  },
];

export const algsDRF = [
  {
    case: "DRF-UBL",
    algs: [
      {
        alg: "D R D' R' U2 R' D R U2' R' D' R2 D R' D'",
      },
      {
        alg: "[D R D' R': [U2, R' D R]]",
      },
    ],
  },
  {
    case: "DRF-URB",
    algs: [
      {
        alg: "U R' D R U' R D' R' U' R D R' U R' D' R",
      },
      {
        alg: "[U, R' D R U' R D' R']",
      },
    ],
  },
  {
    case: "DRF-ULF",
    algs: [
      {
        alg: "U' R' D R U' R D' R' U R D R' U R' D' R",
      },
      {
        alg: "[U', R' D R U' R D' R']",
      },
    ],
  },
  {
    case: "DRF-LUB",
    algs: [
      {
        alg: "U2 x' D' R U' R' D R U R' x U2'",
      },
      {
        alg: "[U2 x': [D', R U' R']]",
      },
    ],
  },
  {
    case: "DRF-LFU",
    algs: [
      {
        alg: "R U' R' U2 R' D' R U2' R' D R2 U R'",
      },
      {
        alg: "[R U' R': [U2, R' D' R]]",
      },
    ],
  },
  {
    case: "DRF-LDF",
    algs: [
      {
        alg: "z R' D' R U' R' D2' R U R' D' R z'",
      },
      {
        alg: "[z R' D R: [R' D2 R, U']]",
      },
    ],
  },
  {
    case: "DRF-LBD",
    algs: [
      {
        alg: "D2 R U' R D' R' U R D R2' D2'",
      },
      {
        alg: "[D2 R: [U', R D' R']]",
      },
    ],
  },
  {
    case: "DRF-FUL",
    algs: [
      {
        alg: "D' R U D U2 R' D' R U2' R' D R D' U' R' D",
      },
      {
        alg: "[D' R U D: [U2, R' D' R]]",
      },
    ],
  },
  {
    case: "DRF-FLD",
    algs: [
      {
        alg: "U L' F2 L U' L' U F2' U' L",
      },
      {
        alg: "[L' U: [U' L U L', F2]]",
      },
    ],
  },
  {
    case: "DRF-RBU",
    algs: [
      {
        alg: "U D' R' D F2' D' R D R' F2' R U'",
      },
      {
        alg: " - ",
      },
    ],
  },
  {
    case: "DRF-RDB",
    algs: [
      {
        alg: "D U R2 U' R' D2 R U R' D2' R' U' D'",
      },
      {
        alg: "[D U R: [R U' R', D2]]",
      },
    ],
  },
  {
    case: "DRF-BUR",
    algs: [
      {
        alg: "U R' U' D' R U R' D R U' R' U R U'",
      },
      {
        alg: "[U R' U': [D', R U R']]",
      },
    ],
  },
  {
    case: "DRF-BLU",
    algs: [
      {
        alg: "U' D' R' U' R' D R U R' D' R2 D U",
      },
      {
        alg: "[U' D' R': [U', R' D R]]",
      },
    ],
  },
  {
    case: "DRF-BDL",
    algs: [
      {
        alg: "U' D' R' U R' D R U' R' D' R2 D U",
      },
      {
        alg: "[U' D' R': [U, R' D R]]",
      },
    ],
  },
  {
    case: "DRF-BRD",
    algs: [
      {
        alg: "D' R D R' D' R U R' D R U' D' R' D",
      },
      {
        alg: "[D' R D: [R' D' R, U]]",
      },
    ],
  },
  {
    case: "DRF-DFL",
    algs: [
      {
        alg: "U' R' F' D' R U' R' D R U R' F R U",
      },
      {
        alg: "[U' R' F': [D', R U' R']]",
      },
    ],
  },
  {
    case: "DRF-DBR",
    algs: [
      {
        alg: "F' R U' R' D' R U2 R' D R U' R' F",
      },
      {
        alg: "[F' R U': [R' D' R, U2]]",
      },
    ],
  },
  {
    case: "DRF-DLB",
    algs: [
      {
        alg: "R U' R' U R D' R' U2 R D R' U R U R'",
      },
      {
        alg: "[R U' R' U: [R D' R', U2]]",
      },
    ],
  },
];

export const algsDBR = [
  {
    case: "DBR-UBL",
    algs: [
      {
        alg: "R D' R' U2 R' D R U2' R' D' R2 D R'",
      },
      {
        alg: "[R D' R': [U2, R' D R]]",
      },
    ],
  },
  {
    case: "DBR-URB",
    algs: [
      {
        alg: "U R D' R2' D R U' R' D' R U R D R' U'",
      },
      {
        alg: "[U R D' R': [R' D R, U']]",
      },
    ],
  },
  {
    case: "DBR-ULF",
    algs: [
      {
        alg: "R D' R' U' R' D R U R' D' R2 D R'",
      },
      {
        alg: "[R D' R': [U', R' D R]]",
      },
    ],
  },
  {
    case: "DBR-LUB",
    algs: [
      {
        alg: "D R U R D' R' U' R D R2' D'",
      },
      {
        alg: "[D R: [U, R D' R']]",
      },
    ],
  },
  {
    case: "DBR-LFU",
    algs: [
      {
        alg: "z R U R' D2 R U' R' D2' z'",
      },
      {
        alg: "[z: [R U R', D2]]",
      },
    ],
  },
  {
    case: "DBR-LDF",
    algs: [
      {
        alg: "U R2 U' R' D R U R' D' R' U'",
      },
      {
        alg: "[U R: [R U' R', D]]",
      },
    ],
  },
  {
    case: "DBR-LBD",
    algs: [
      {
        alg: "R D' R' U R' D R U' R' D' R2 D R'",
      },
      {
        alg: "[R D' R': [U, R' D R]]",
      },
    ],
  },
  {
    case: "DBR-FUL",
    algs: [
      {
        alg: "D R U2 R D' R' U2' R D R2' D'",
      },
      {
        alg: "[D R: [U2, R D' R']]",
      },
    ],
  },
  {
    case: "DBR-FDR",
    algs: [
      {
        alg: "U R D' R' D R U' R' D' R U D R' U'",
      },
      {
        alg: "[U R D': [R' D R, U']]",
      },
    ],
  },
  {
    case: "DBR-FLD",
    algs: [
      {
        alg: "D R U' R D' R' U R D R2' D'",
      },
      {
        alg: "[D R: [U', R D' R']]",
      },
    ],
  },
  {
    case: "DBR-RBU",
    algs: [
      {
        alg: "F' R D R' U2 R D' R' U2' F",
      },
      {
        alg: "[F': [R D R', U2]]",
      },
    ],
  },
  {
    case: "DBR-RFD",
    algs: [
      {
        alg: "D R U' R D' R' U R D R' U R' D' R U' R'",
      },
      {
        alg: "[R: [R' D R U' R D' R', U]]",
      },
    ],
  },
  {
    case: "DBR-BUR",
    algs: [
      {
        alg: "D R U' D' R' U R D R' U' R U R' D'",
      },
      {
        alg: "[D R U': [D', R' U R]]",
      },
    ],
  },
  {
    case: "DBR-BLU",
    algs: [
      {
        alg: "U' L' U R2 U' L U R' U' L' U R2' U' L U R",
      },
      {
        alg: "[[U' L' U, R2], R']",
      },
    ],
  },
  {
    case: "DBR-BDL",
    algs: [
      {
        alg: "U R2 U' R' D2 R U R' D2' R' U'",
      },
      {
        alg: "[U R: [R U' R', D2]]",
      },
    ],
  },
  {
    case: "DBR-DFL",
    algs: [
      {
        alg: "U' R2 D R2 U R2 U' R2 D' R2' U R2'",
      },
      {
        alg: "[U' R2: [D, R2 U R2 U' R2]]",
      },
    ],
  },
  {
    case: "DBR-DRF",
    algs: [
      {
        alg: "F' R U R' D' R U2' R' D R U R' F",
      },
      {
        alg: "[F' R U': [U2, R' D' R]]",
      },
    ],
  },
  {
    case: "DBR-DLB",
    algs: [
      {
        alg: "z R U2 R' D2 R U2' R' D2' z'",
      },
      {
        alg: "[z: [R U2 R', D2]]",
      },
    ],
  },
];

export const algsDLB = [
  {
    case: "DLB-UBL",
    algs: [
      {
        alg: "R' z R' U2 R' D R U2' R' D' R2 z' R",
      },
      {
        alg: "[R' z R': [U2, R' D R]]",
      },
    ],
  },
  {
    case: "DLB-URB",
    algs: [
      {
        alg: "x D2 R' U' R D2' R' U R x'",
      },
      {
        alg: "[x: [D2, R' U' R]]",
      },
    ],
  },
  {
    case: "DLB-ULF",
    algs: [
      {
        alg: "R' D' R D R U' R' D' R U R2' D R",
      },
      {
        alg: "[R' D' R: [D, R U' R']]",
      },
    ],
  },
  {
    case: "DLB-LUB",
    algs: [
      {
        alg: "R U R D' R' U' R D R2'",
      },
      {
        alg: "[R: [U, R D' R']]",
      },
    ],
  },
  {
    case: "DLB-LFU",
    algs: [
      {
        alg: "R2 D' R U' R' D' R U R' D2' R2'",
      },
      {
        alg: "[R2 D2: [D, R U' R']]",
      },
    ],
  },
  {
    case: "DLB-LDF",
    algs: [
      {
        alg: "F' D2 R U' R' D2' R U R' F",
      },
      {
        alg: "[F': [D2, R U' R']]",
      },
    ],
  },
  {
    case: "DLB-FUL",
    algs: [
      {
        alg: "R U2 R D' R' U2' R D R2'",
      },
      {
        alg: "[R: [U2, R D' R']]",
      },
    ],
  },
  {
    case: "DLB-FDR",
    algs: [
      {
        alg: "z D R U2 R' D' R U2' R' z'",
      },
      {
        alg: "[z: [D, R U2 R']]",
      },
    ],
  },
  {
    case: "DLB-FLD",
    algs: [
      {
        alg: "z' U' D' R U R' D R U' R' U z",
      },
      {
        alg: "[z' U': [D', R U R']]",
      },
    ],
  },
  {
    case: "DLB-RBU",
    algs: [
      {
        alg: "U' D R' U2 R' D R U2' R' D' R2 D' U",
      },
      {
        alg: "[U' D R': [U2, R' D R]]",
      },
    ],
  },
  {
    case: "DLB-RDB",
    algs: [
      {
        alg: "R2 D' R U R' D' R U' R' D2' R2'",
      },
      {
        alg: "[R2 D2: [D, R U R']]",
      },
    ],
  },
  {
    case: "DLB-RFD",
    algs: [
      {
        alg: "R U' R D' R' U R D R2'",
      },
      {
        alg: "[R: [U', R D' R']]",
      },
    ],
  },
  {
    case: "DLB-BUR",
    algs: [
      {
        alg: "R U' D' R' U R D R' U' R U R'",
      },
      {
        alg: "[R U': [D', R' U R]]",
      },
    ],
  },
  {
    case: "DLB-BLU",
    algs: [
      {
        alg: "U' D R' U' R' D R U R' D' R2 D' U",
      },
      {
        alg: "[U' D R': [U', R' D R]]",
      },
    ],
  },
  {
    case: "DLB-BRD",
    algs: [
      {
        alg: "R U' D' R' U R D2' R' U' R D' U R'",
      },
      {
        alg: "[R U' D: [D2, R' U R]]",
      },
    ],
  },
  {
    case: "DLB-DFL",
    algs: [
      {
        alg: "x U' R' D R U2' R' D' R U' x'",
      },
      {
        alg: "[x U: [U2, R' D R]]",
      },
    ],
  },
  {
    case: "DLB-DRF",
    algs: [
      {
        alg: "R U' R' U' R D' R' U2' R D R' U' R U R'",
      },
      {
        alg: "[R U' R' U: [U2, R D' R']]",
      },
    ],
  },
  {
    case: "DLB-DBR",
    algs: [
      {
        alg: "z D2 R U2 R' D2' R U2' R' z'",
      },
      {
        alg: "[z: [D2, R U2 R']]",
      },
    ],
  },
];

/* Corner Algs */
export const cornerAlgos = [algsUBL, algsURB, algsULF, algsLUB, algsLFU, algsLDF, algsLBD, algsFUL, algsFDR, algsFLD, algsRBU, algsRDB, algsRFD, algsBUR, algsBLU, algsBDL, algsBRD, algsDFL, algsDRF, algsDBR, algsDLB];