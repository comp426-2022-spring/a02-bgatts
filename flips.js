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

    console.log(flipRes);

}



try{
    flipArr();

}    catch(e){
    console.error(e.name);
    console.error(e.message);
}