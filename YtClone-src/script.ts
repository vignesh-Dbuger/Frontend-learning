import { cloneDeep } from "lodash";
import { log } from "node:console";

const obj={
    name:"vignesh",
    address:{
        city:"chennai"
    }
};
const cloned=cloneDeep(obj);
console.log(cloned);
