// Import the coinFlip function from your coin.mjs file
import { coinFlips } from './modules/coin.mjs';
import promptSync from 'prompt-sync';

const prompt = promptSync()

function flipArr(){

    let flip =1

    let flipStr = prompt('how many flips do you want to do?')

    let flipNum = parseInt(flipStr);

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


    process.stdout.write(coinFlips(flip));


    console.log(flipRes);
    let resObj = {
        "heads":h_count,
        "tails":t_count
    }

    process.stdout.write(coinFlips(resObj))



}



try{
    flipArr();

}    catch(e){
    console.error(e.name);
    console.error(e.message);
}