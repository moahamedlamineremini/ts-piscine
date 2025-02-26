"use strict";
function premierelement(tableau) {
    return tableau[0];
}
let tableau1 = [1, 2, 3];
let tableau2 = ["a", "b", "c"];
let tableau3 = [{ nom: "Alice" }, { nom: "Bob" }];
console.log(premierelement(tableau1)); // 1
console.log(premierelement(tableau2)); // a
console.log(premierelement(tableau3)); // { nom: "Alice" }
