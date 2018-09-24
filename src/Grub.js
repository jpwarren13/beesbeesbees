
function Grub() {

        this.age = 0;
        this.color = 'pink';
        this.food = 'jelly';
    return this;

    };
Grub.prototype.eat = function(){
 return 'Mmmmmmmmm ' + this.food;
      }



function Bee(){
            Grub.call(this);
            this.age = 5;
            this.color = 'yellow';
            this.job = 'Keep on growing';
        }

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;


function HoneyMakerBee () {
        Bee.call(this);
        this.age = 10;
        this.job = 'make honey';
        this.honeyPot = 0;
    return this;
    };
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

    makeHoney(){
        this.honeyPot++;
    }
    giveHoney(){
        this.honeyPot--;
    }

}

class ForagerBee extends Bee {
    constructor(){
        super();
        this.age = 10;
        this.job = 'find pollen';
        this.canFly = true;
        this.treasureChest = [];
    }
    forage(treasure){
        this.treasureChest.push(treasure);
    }
}

class RetiredForagerBee extends ForagerBee {
    constructor(){
        super();
        this.age = 40;
        this.job = 'gamble';
        this.canFly = false;
        this.color = 'grey';
        
    }
    forage(){
        return 'I am too old, let me play cards instead';
    }
    gamble(treasure){
    this.treasureChest.push(treasure);
    }
}
