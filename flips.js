// Import the coinFlip function from your coin.mjs file
import { coinFlips } from './modules/coin.mjs';
import promptSync from 'prompt-sync';

const prompt = promptSync()

function flipArr(){
    let flipNum = prompt('how many flips do you want to do?')

    let flip = parseInt(flipNum);

    if(flip == undefined){
        flip =1;
    }

    let flipRes = coinFlips(flip);

    process.stdout.write(flipRes);

}



try{
    flipArr();

}    catch(e){
    console.error(e.name);
    console.error(e.message);
}