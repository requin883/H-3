/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la propiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la propiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};
let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];
let result ={};
let i =1;
levels.map(obj=>{obj.LEVEL=`L${i}`; i++});

Object.keys(foo).map(property =>{
if(property == "name"){ 
        result[property] = foo[property][0].toUpperCase() + foo[property].slice(1);
    }

    if(property == "roles"){
        result[property] = foo[property][0].toUpperCase();
        result[property] = [result[property],roleSuperUser,roleUser];
    }
    if (property == "skills"){
        result[property] = [...foo[property],...skills]
        .map(item=> item=="html"||item=="css"?item.toUpperCase():item[0].toUpperCase()+item.slice(1));
    }
})
result["levels"] = levels;

console.log(result);
//export result
module.exports = result; 