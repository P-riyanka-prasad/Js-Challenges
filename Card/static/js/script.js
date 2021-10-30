function ageInDays(){
    var birthYear = prompt("What year were you born ...?");
    var ageInDays = (2021-birthYear)*365;
    var h1 = document.createElement('h1');
   
    var textanswer = document.createTextNode('You are' + ageInDays + 'days old');
    h1.setAttribute('id','ageinDays');
    h1.appendChild(textanswer);
    document.getElementById('result').appendChild(h1);
    console.log(ageInDays);
}

function reset(){
    document.getElementById('ageinDays').remove(); 
}