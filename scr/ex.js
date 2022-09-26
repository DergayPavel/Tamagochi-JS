class Tamagochi{
    constructor(){
        this.nameTamagochi=[];
        this.forсes=[];
        this.image=[];
    }
    saveTamagochi(name){
        this.nameTamagochi.push(name);
        this.forсes.push(100);
        this.image.push(getImage())
    }
}

const tamagochi = new Tamagochi();
tamagochi.saveTamagochi('Pen');
const wh=document.documentElement.clientWidth/100;
let optionAdd=document.createElement('option');
optionAdd.innerHTML=tamagochi.nameTamagochi[tamagochi.nameTamagochi.length-1];
tamagochiType.append(optionAdd); 

function eat(){
    let i=getTamagochiIndex();
    if(tamagochi.forсes[i]>0){
        if(tamagochi.forсes[i]>90){
            tamagochi.forсes[i]=100;
        }
        if(tamagochi.forсes[i]<90){
            tamagochi.forсes[i]+=10;
        }
        return tamagochi.forсes;
    }
}

function health (i){
        if(tamagochi.forсes[i]>0){
        tamagochi.forсes[i]-=0.01;
        }
        else{
            tamagochi.image[i]='icons/Sorry.png'
        }
    return tamagochi.forсes[i];
}

function getTamagochiIndex(){
    var name = document.getElementById('tamagochiType').value;
    for(let i=0; i<tamagochi.nameTamagochi.length; i++ ){
        if(name===tamagochi.nameTamagochi[i]){
            return i;
        }
    }
}

setInterval(main,10);

function main(){
    for(let k=0; k<tamagochi.nameTamagochi.length;k++){
        health(k);
    }
    var m=getTamagochiIndex();
    document.getElementById("imgTamagochi").src = tamagochi.image[m];
    var whnow=wh*tamagochi.forсes[m];
    healthy.style.width = whnow+'px';
}

function addTamagochi(){
    let newname=getNames();
    tamagochi.saveTamagochi(newname.toString());
    let optionAdd=document.createElement('option');
    optionAdd.innerHTML=tamagochi.nameTamagochi[tamagochi.nameTamagochi.length-1];
    tamagochiType.append(optionAdd);
}

function getNames(){
    return[
        document.querySelector('#nameTamagochi').value
    ];
}

function getImage(k){
    let image=[];
    image[0]='icons/peng.png';
    image[1]='icons/Bear.png';
    image[2]='icons/dog.jpg';
    image[3]='icons/dinosaur.jpg';
    image[4]='icons/croc.jpg';
    let i=Math.floor(Math.random() * image.length);
    return image[i]
}

document
    .querySelector('#eat')
    .addEventListener('click', eat);

document
    .querySelector('#addTamagochi')
    .addEventListener('click', addTamagochi);


