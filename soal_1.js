var n = prompt("jumlah n?");
var k = prompt("jumlah k?");
var cek = ""

for (let i = 0; i < k; i++) {
    cek = cek+n;
  }
    
while(cek.length > 1) {
   var temp = 0;
   for(var i = 0; i < cek.length; i++) {
       temp = temp+cek[i];
   }
   cek = temp;
}
    
console.log(cek);
