function play(playerHand){
    const hands =['グー','チョキ','パー'];
    const computerHand=hands[Math.floor(Math.random()*3)];
    let result='';

    if(playerHand==computerHand){
        result ='あいこ';
    }else if(    (playerHand === 'グー' && computerHand === 'チョキ') ||
    (playerHand === 'チョキ' && computerHand === 'パー') ||
    (playerHand === 'パー' && computerHand === 'グー')
)
{
        result ='あなたの勝ち';
    }else{
        result ='あなたの負け';
    }

    document.getElementById('result').textContent=`あなた：${playerHand} / コンピューター：${computerHand} -> ${result}`;
}

