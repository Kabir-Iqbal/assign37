// 37. Large Shirts: 
// Modify the make_shirt() function so that shirts are large by default, with a message that reads 
// I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any 
// size with a different message.
function shirt(label, size) {
    if (size === void 0) { size = "large"; }
    return size + label;
}
var myfun = shirt("The wolf");
console.log(myfun);
