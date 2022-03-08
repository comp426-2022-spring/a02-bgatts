import { flipACoin } from './modules/coin.mjs';
import minimist from 'minimist'



function flipCoin(){


    let args =(minimist)(process.argv.slice(2))

    let call = args["call"];
    console.log(call)

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