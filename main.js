let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car', 'my code'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function generadorExcusa(arr){
    let nuevaExcusa = who[Math.floor(Math.random() * arr.length)] + " " + 
                    action[Math.floor(Math.random() * arr.length)] + " " + 
                    what[Math.floor(Math.random() * arr.length)] + " " + 
                    when[Math.floor(Math.random() * arr.length)]
    return nuevaExcusa
}

function agregarFrase(){
    document.getElementById("excusa").innerHTML = generadorExcusa(who, action, 
    what, when);
}

window.onload = function(){agregarFrase()};