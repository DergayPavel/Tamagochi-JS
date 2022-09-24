class Tamagochi{
    constructor(name){
        this.name=name;
        this.forсes=100;
    }

    health(){
        if(this.forсes>0){
            this.forсes-=0.01;
        }
        //console.log(this.forсes);
        return this.forсes;
    }
    eat(){
        if(this.forсes>90){
            this.forсes=100;
        }
        if(this.forсes<100){
            this.forсes+=10;
        }
        console.log(this.forсes);
        return this.forсes;
    }
}


const penguin = new Tamagochi('Penguin');
const wh=document.documentElement.clientWidth/100;

setInterval(function(){
    penguin.health();
    let whnow=wh*penguin.forсes;
    health.style.width = whnow+'px';
},10);

document
    .querySelector('#eat')
    .addEventListener('click', function(){penguin.eat()});