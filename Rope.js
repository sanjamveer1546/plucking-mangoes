class Rope {
    constructor(bodyA ,pointB){
        var options= {
            bodyA : bodyA ,
            pointB :pointB ,
            length:50,
            stiffness :0.04
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope); 
     
    }
    fly(){
        this.rope.bodyA=null;
    }
display(){
   if( this.rope.bodyA){ 
       var pointA =this.rope.bodyA.position;
    var pointB =this.rope.pointB;
   fill("red");
    line(pointA.x,pointA.y,pointB.x,pointB.y);
   }
}
}