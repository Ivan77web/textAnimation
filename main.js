function res(){
    let all = [];
    let messages = prompt("Сколько сообщений должно быть?");
    for(let i = 1; i <= messages; i++ ){
        all[i-1] = "-" + prompt(`Введите ${i} сообщение`);
    }

    let allWord = all.join("<br>");
    let word = '';
    let i = 0;

    setInterval(() => {
        
        if(word.length == allWord.length){
            return;
        }
        
        word = word + allWord[i];
        i++;
        
        let j = word.length-1;
        if( word[j] != "<" ){
            if(word.length  == allWord.length){
                text.innerHTML = word;
            } else{
                text.innerHTML = word + "_";
            }
        } else{ 
        }

    }, 100);
}

let text = document.querySelector(".text");
let button = document.querySelector(".button");
let buttonTwo = document.querySelector(".buttonTwo");

res();

button.addEventListener("pointerdown", function(event){
    text.innerHTML = "";
})

buttonTwo.addEventListener("pointerdown", function(){
    res();
})

document.addEventListener("pointerdown", function(event){
    if(event.target.className != ("button" || "buttonTwo")) return;
    event.target.style.background = "red";
})

document.addEventListener("pointerup", function(event){
    
    if(event.target.className != ("button" || "buttonTwo")) return;
    
    event.target.style.background = null;
})
