let str = 'ALan'

function isIsogram(str){
    
    str = str.toLowerCase()
    infra = 0;

    for(var i = 0; i < str.length; i++) {
        for(var j = i+1; j < str.length; j++) {
            if (str[i] === str[j]) {
                infra++;
            }
        }
    }

    if (infra == 0) {
        return true;
    } else {
        return false;
    }
  }


  console.log(isIsogram(str))
//   const chai = require("chai");
//   const assert = chai.assert;
//   chai.config.truncateThreshold=0;
  
//   describe("Tests", () => {
//     it("test", () => {
//       assert.strictEqual( isIsogram("Dermatoglyphics"), true );
//       assert.strictEqual( isIsogram("isogram"), true );
//       assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
//       assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
//       assert.strictEqual( isIsogram("isIsogram"), false );
//       assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
//     });
//   });
  

