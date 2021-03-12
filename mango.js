class Mango{
    constructor(x, y) {
        var options = {
            'isStatic':true,
            'restitution':0,
            'friction':1.0,
            'density':1.0
        }
        this.radius=25;
this.body=Bodies.circle(x,y,25,options);
        this.image = loadImage("mango.png");
        World.add(world,this.body);
      }
      display(){
     
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0,50,50);
        pop();
      }
}