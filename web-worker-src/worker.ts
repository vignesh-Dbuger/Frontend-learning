//@ts-ignore
import * as Comlink from "https://unpkg.com/comlink/dist/esm/comlink.mjs";
export type workerapi={
    heavycalc(num:number):number;
}
const api:workerapi={
    heavycalc(num:number){
        let result=0;
         console.log(num);
        for(let i=0;i<num * 1000000;i++){
            result+=i;
        }
        console.log(result);
        
        return result;
    },
};
Comlink.expose(api);