class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 5
        }

        this.pointB = pointB;
        this.slingS = Matter.Constraint.create(options);
        World.add(world, this.slingS);
        this.polygon = loadImage("polygon.png");

    }
}

fly(){
    this.slingS.bodyA = null;
}

display(){
    image(this.polygon, 44, 207);
    var posX = this.slingS.position.x;
    var posY = this.slingS.position.y;
   
}