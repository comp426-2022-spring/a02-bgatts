// Import the coinFlip function from your coin.mjs file
import { coinFlips } from './modules/coin.mjs';
import promptSync from 'prompt-sync';

const prompt = promptSync()


let flipNum = prompt('how many flips do you want to do?')

let flip = parseInt(flipNum);

let flipRes = coinFlips(flip);

console.log(flipRes);