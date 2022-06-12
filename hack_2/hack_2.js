/**
* mediante el loop for agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [2,3,4]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];
 
for (obj of arr){
    if(Object.values(obj)>1 && Object.values(obj)<5){
        result.push(...Object.values(obj));
    }
}

//export result
module.exports = result;