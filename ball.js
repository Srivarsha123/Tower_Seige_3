class Ball extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("ball.png");
  }
  
  display() {
    super.display();
    imageMode(CENTER)
    image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
  }
};
  