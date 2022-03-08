// Import the coinFlip function from your coin.mjs file
import { coinFlips } from './modules/coin.mjs';
import minimist from 'minimist'

import promptSync from 'prompt-sync';

const prompt = promptSync()

function flipArr(){

    let flip =1

    let args =(minimist)(process.argv.slice(2))

    let flipNum = args["number"];

    if(flipNum>flip){
        flip = flipNum 
    }

    let flipRes = coinFlips(flip);

    let h_count=0
    let t_count=0
    for(let i=0; i<flipRes.length; i++){
        if(flipRes[i]=="heads"){
            h_count++
        }
        else{
            t_count++
        }
    }




    console.log(flipRes);


    let resObj = {
        "heads":h_count,
        "tails":t_count
    }
    if(h_count + t_count == 1 && t_count==0){
        delete resObj.tails
    }
    if(h_count + t_count == 1 && h_count==0){
        delete resObj.heads
    }
    console.log(resObj);


}



try{
    flipArr();

}    catch(e){
    console.error(e.name);
    console.error(e.message);
}