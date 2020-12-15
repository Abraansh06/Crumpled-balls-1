class Dustbin{

    constructor(x,y,width,height){
        var gopt={
            restitution:0.6,
            density:0.5,
            isStatic:0.3
        }

        this.Body=Bodies.rectangle(x,y,width,height,gopt)
        this.height=height
        this.width=width
        World.add(world,this.Body)
    }

    display(){
        var pos=this.Body.position;
        var angle=this.Body.angle;
          push();
          translate(pos.x,pos.y)
          rotate(angle)
          rectMode(CENTER)
          fill("yellow")
          rect(0,0,this.width,this.height)
          pop();
    }

}