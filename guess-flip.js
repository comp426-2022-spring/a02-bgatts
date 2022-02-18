import { flipACoin } from './modules/coin.mjs';
import promptSync from 'prompt-sync';

const prompt = promptSync()

function flipCoin(){
    let  call = prompt('Heads or tails? ');

    if(call=="heads" || call=="tails"){
        let ans = flipACoin(call);
        console.log(ans);
    }
    else{
        throw (new Error('Type heads or tails'));

    }
}


try{
    flipCoin();

}    catch(e){
    console.error(e.name);
    console.error(e.message);
}