class Dustbin{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=250;
		this.dustbinHeight=100;
		this.wallThickness=20;
		this.angle=0;	
		this.image = loadImage("close.png");
        this.image2 = loadImage("open.png");
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(this.x, this.y-this.dustbinHeight/2-20);
			imageMode(CENTER)
			image(this.image2,0,0,this.wallHeight, this.wallHeight + 2*this.wallThickness);
			pop()

	
			
	}

	
}