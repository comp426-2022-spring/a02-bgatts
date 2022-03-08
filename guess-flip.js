import { flipACoin } from './modules/coin.mjs';
import minimist from 'minimist'



function flipCoin(){


    let args =(minimist)(process.argv.slice(2))

    let call = args["call"];

    if(call=="heads" || call=="tails"){
        let ans = flipACoin(call);
        console.log(ans);
    }
    else if (call==undefined){
        throw new SyntaxError('no input');
    }
    else{
        throw new Error('node guess-flip --call=[heads|tails]')
    }
}


try{
    flipCoin();


}    catch(e){
    if (e instanceof SyntaxError){
        console.error('Error: '+ e.message);
    }
    else{
        console.error('Usage: '+ e.message);
    }
}