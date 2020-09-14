class Paper {
constructor(x,y,r){

    var options = {

        isStatic:false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2

    }

    this.body = Bodies.circle(x,y,r,options)
    this.x=x
    this.y=y
    this.r=r
    World.add(world,this.body)



    this.image = loadImage("paper.png")




}

  display(){
    var pos = this.body.position
    ellipseMode(CENTER)
    fill("purple")
    ellipse(pos.x,pos.y,this.r*2,this.r*2)
    image(this.image,pos.x,pos.y,this.width,this.height)



  }


}