class Stone{
    constructor(x, y) {
        var options = {
            
           
            'restitution':0.8,
            'friction':0,
            'density':1.0
        }
        this.radius=25;
        this.body=Bodies.circle(x,y,25,options);
        this.image = loadImage("stone.png");
        World.add(world,this.body);
      }

      
      display(){
     
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, 50,50);
        pop();
      }
}