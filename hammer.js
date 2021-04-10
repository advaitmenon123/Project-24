class Hammer
{
    constructor(x , y, w , h)
    {
        var Option = 
        {
            isStatic : false,
            restitution : 0.5,
            density : 0.7,
            friction : 1.5
        }
        this.body = Bodies.rectangle(x , y, w , h , Option)
        World.add(world,this.body)
        this.width = w;
        this.height = h;
    }

    display()
    {
        var angle = this.body.angle
        this.body.position.x = mouseX
        this.body.position.y = mouseY
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)

        rectMode(CENTER)
        rect(0,0, this.width, this.height)
        pop()
    }

}