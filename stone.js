class Stone
{
    constructor(x , y, w , h)
    {
        var Option = 
        {
            isStatic : false,
            restitution : 0.5,
            density : 2,
            friction : 1
        }
        this.body = Bodies.rectangle(x , y, w , h , Option)
        World.add(world,this.body)
        this.width = w;
        this.height = h;
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