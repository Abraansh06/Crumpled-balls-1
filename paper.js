class Paper{

    constructor(x,y){
        var opt={
            restitution:0.6,
            density:0.5,
            friction:0.6,
            isStatic :false
        }

        this.body=Bodies.circle(x,y,20,opt)
        this.radius=20
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
          push();
          translate(pos.x,pos.y)
          rotate(angle)
          ellipseMode(RADIUS)
          fill("lime")
          ellipse(0,0,this.radius)
          pop();
    }

}