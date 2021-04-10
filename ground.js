class Ground
{
    constructor(x , y, w, h )
    {
        var option = 
        {
          isStatic : true
        }
        this.body = Bodies.rectangle(x , y, w , h , option)

        this.width = w;
        this.height = h;
        World.add(world,this.body)
    }

    display()
    {
        var angle = this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)

        rectMode(CENTER)
        rect(0,0, this.width, this.height)
        pop()
    }

}