//@ts-ignore
import * as Comlink from "https://unpkg.com/comlink/dist/esm/comlink.mjs";
import type { workerapi } from "./worker";
const worker =new Worker("./worker.js",{type:"module"});
const api=Comlink.wrap<workerapi>(worker);
const btn=document.getElementById("run")!;
btn.addEventListener("click",async ()=>{
    console.log("main thread");
    const result=await api.heavycalc(5);
    console.log("result",result);
    alert("done!");
});