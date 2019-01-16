
function forLoop(array) {
for  (let i = 0; i<25; i++)
   if (i=== 1 ) {array.push ( "I am " + i + " strange loop.")}
  else {array.push ("I am " + i+ " strange loops.")}
  return array;
}
function whileLoop(n){
while (n > 0) {
console.log (--n);
}
(n===0) {return done}
}
function whileLoop(n){
  while (n > 0) {     //you need a { to open the block
    console.log (--n);
   }
  return "done" //you don't need an if here, because it will only execute after n equal 0, and done should be a string
}