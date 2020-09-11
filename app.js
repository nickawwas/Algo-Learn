"use strict";

let alg = "R2 U' R2' S R2 S' U R2'";
alg = alg.replace(/\s/g,''); 

let sourced = `http://www.cubing.net/api/visualcube/?fmt=svg&amp;case= ${alg}`;
console.log("hello");

<img src=${sourced}>

// fetch("./cubing-data.json")
//   .then(function(resp) {
//     return resp.json();
//    })
//   .then(function(data) {
//    console.log(data);
//    });
