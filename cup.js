class Cup extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("cup.png");
      this.visibility = 255;
    }

    display(){
      if(this.body.speed<5){
      super.display();
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
     }
     else{
        push();
        World.remove(world, this.body)
        this.visibility = this.visibility - 5
        tint(255, this.visibility)
        pop();
     }
    }
         
    score(){
      if(this.visibility<0 && this.visibility>-100){
      score++
      }
    }

  };