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
    else if (call==undefined){
        throw new SyntaxError('No input');
    }
    else{
        throw new SyntaxError('Usage: node guess-flip --call=[heads|tails]')
    }
}


try{
    flipCoin();

}    catch(e){
    console.error('Error: '+ e.message);
}