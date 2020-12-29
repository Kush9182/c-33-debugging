class slingShot{
    constructor(a,b){
      var options ={
          bodyA:  a,
          pointB:  b,
          length:  10,
          stiffness:  0.4,
      }
      this.body=Constraint.create(options);
      this.s=b; 
      this.image1=loadImage("sprites/sling1.png");
      this.image2=loadImage("sprites/sling2.png");
      this.image3=loadImage("sprites/sling3.png");
      World.add(world,this.body);  
    }
    fly(){
      this.body.bodyA=null;
    }
    attach(pqr){
      this.body.bodyA=pqr;
    
    }

    display(){
       image(this.image1,200,80,40,130);
       image(this.image2,175,85,40,70);
       if(this.body.bodyA){
          push();
          var posa=this.body.bodyA.position;
          var posb=this.s; 
          strokeWeight(6);
          stroke(48,22,8)
          if(posa.x<220){
              
              line(posa.x-15,posa.y,posb.x-20,posb.y);
              line(posa.x-15,posa.y,posb.x+20,posb.y-5);
              image(this.image3,posa.x-20,posa.y-10,15,30);
        }
        else {line(posa.x+15,posa.y,posb.x-20,posb.y);
          line(posa.x+15,posa.y,posb.x+20,posb.y-5);
          image(this.image3,posa.x+20,posa.y-10,15,30)}
       
          pop()
      }
       
      }
}