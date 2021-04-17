function match(string){
    let state = start;
    for(let c of string){
        state = state(c)
        console.log(c, state)
    }
    return state === end;
}

function start(c){
    if(c === 'a')
        return foundA;
    else
        return start;
}

function end(c){
    return end;
}

function foundA(c){
    if(c === 'b')
        return foundB;
    else
        return start(c)
}

function foundB(c){
    if(c === 'x')
        return end;
    else
        return start(c);
}

console.log(match('aabbabcabababx'))