class Tamagochi{
    constructor(name){
        this.nameTamagochi=name;
        this.forсes=100;
    }
    health(){
        if(this.forсes>0){
            this.forсes-=0.01;
        }
        return this.forсes;
    }
    eat(){
        if(this.forсes>90){
            this.forсes=100;
        }
        if(this.forсes<100){
            this.forсes+=10;
        }
        return this.forсes;
    }
}


const tamagochi = new Tamagochi('Penguin');
//const bear = new Tamagochi('Bear');
const wh=document.documentElement.clientWidth/100;

setInterval(function(){
    tamagochi.health();
    let whnow=wh*tamagochi.forсes;
    health.style.width = whnow+'px';
},10);

document
    .querySelector('#eat')
    .addEventListener('click', function(){tamagochi.eat()});

document
    .querySelector('#addTamagochi')
    .addEventListener('click', addTamagochi);


function addTamagochi(){
    let newname=getNames();
}

function getNames(){
    return[
        document.querySelector('#nameTamagochi').value
    ];
}