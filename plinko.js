class Plinko{
    constructor(x,y){
      var option={
          isStatic:true,
      }
      this.radius=10
      this.body=Bodies.circle(x,y,this.radius);
      

    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle

        push();
        translate(pos.x, pos.y);
        rotate(angle)
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop();
    }
}