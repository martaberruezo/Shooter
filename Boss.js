

class Boss extends Opponent{

    constructor (game){
       
        
        const speed = VELOCIDAD_JEFE*1.5,
        myImageDead = BOSS_PIC_DEAD,
        myImage = BOSS_PIC;
        super(game);
        this.speed = speed;
        this.image.src = myImage;
        this.myImageDead = myImageDead;
        setTimeout(() =>
        this.shoot(), 10 + getRandomNumber(2500));
    }

    collide(){
        this.image.src = this.myImageDead
        this.game.endGame();
    }
}