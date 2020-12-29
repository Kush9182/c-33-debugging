class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke=loadImage("sprites/smoke.png");
    this.memory = [];
  }
  display(){
    super.display();
    
    if(this.body.velocity.x>5&&this.body.position.x>200){
     
        var position = [this.body.position.x,this.body.position.y];
        this.memory.push(position);
  }
    for(var p=0;p<this.memory.length;p++){
       image(this.smoke,this.memory[p][0],this.memory[p][1]);
    }
  }
  
}



 