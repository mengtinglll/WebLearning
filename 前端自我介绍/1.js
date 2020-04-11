var inputData = readline().split(' ');
var type = inputData.shift();
var number = inputData;
var height=0;
var width = 0;
var length = number.length;
if(length === 1){
    height = number[0];
    width = number[0];
}
if(length === 2) {
    height = number[0];
    width = number[1];
}
if (length === 3){
    height = number[0];
    width = number[1];
}
if(length === 4){
    height = number[0];
    width = number[3];
}
console.log(200+height,200+width);

