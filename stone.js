class Stone{
    constructor(x, y,diametre) {
        var options = {
            'restitution':0.6,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, diametre, options);
        this.diametre=diametre;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.diametre);
        pop();
      }
}