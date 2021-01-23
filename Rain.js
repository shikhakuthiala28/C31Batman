class Rain {
    constructor(x, y,r) {

        var options ={
            restitution:0.1
        }
              
        this.body = Bodies.circle(x, y, r,options);    
        this.radius=r;   
        //this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius,this.radius);

        if(this.body.position.y>700){
            Matter.Body.setPosition(this.body,{x: random(0,height),y:0})
        }
        pop();
    }

};