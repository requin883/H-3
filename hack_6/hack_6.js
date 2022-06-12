/**
* modificar los valores de las propiedades (name y role) del objeto result, 
* name -> capital,
* role -> upper
* 
* 
* output => {
    id:100,
    name:"Foo",
    role:"ADMIN"
}
*/
let result = {
    id:100,
    name:"foo",
    role:"admin"
};
for (key in result){
    if(key == "name"){
        result[key] = result[key][0].toUpperCase() + result[key].slice(1,);
    }
    if(key == "role"){
        result[key] = result[key].toUpperCase();
    }
}
 console.log(result);
//export result
module.exports = result; 
