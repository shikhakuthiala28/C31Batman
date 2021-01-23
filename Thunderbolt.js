class Thunderbolt{
    constructor(x, y) {

        var options = {
            'isStatic':true,
        }
        
        this.body=Bodies.circle(x,y,50,options);
        this.image1=loadImage("images/thunderbolt/1.png");
        this.image2=loadImage("images/thunderbolt/2.png");
        this.image3=loadImage("images/thunderbolt/3.png");
        this.image4=loadImage("images/thunderbolt/4.png");
        World.add(world, this.body);
      }
      display(){
        
        var pos= this.body.position;
        
        imageMode(CENTER);
        if(frameCount%80===0){
            var rand=Math.round(random(1,4));
            switch (rand){
                case 1: image(this.image1,pos.x,pos.y,250,250); 
                break;
                case 2: image(this.image2,pos.x,pos.y,250,250); 
                break;
                 case 3: image(this.image3,pos.x,pos.y,250,250);
                 break;
                 case 4: image(this.image4,pos.x,pos.y,250,250);
                 break;
                 default:
                 break;
            }

        }

        
      }
}