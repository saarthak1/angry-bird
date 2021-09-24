class Sling{
    constructor(a,b){
        var options={
            bodyA:a,
            pointB:b,
            length:120,
            stiffness:0.04
                    }
        this.sling=Matter.Constraint.create(options);
        Matter.World.add(world,this.sling)
        this.sll=loadImage ("sprites/sling1.png");
        this.bla=loadImage ("sprites/sling2.png")
    }
    display(){
        if (this.sling.bodyA!=null){
            line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,
                this.sling.pointB.x,this.sling.pointB.y)
        }
        image(this.sll,200,50)
        image(this.bla,170,50)
    }
    fly(){
    this.sling.bodyA=null;
    }
    attach(){
        this.sling.bodyA=bird.body;
    }
}
