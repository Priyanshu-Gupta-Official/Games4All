console.log("Hello from Games4All");
let sc1 = new Scene();
let ob = new ECS(20,20);
function bob(self){
    self.x = mouseX*(1);
    self.y = mouseY*(1);
    self.r = Math.random()*100 - 50;
}
function Circle(self){
    if (!ob.r){
        console.warn("NO radius value in object, plz declare it by obj_name.r = SIZE;");
    }else{
        ellipse(self.x,self.y,self.r,self.r);
    }
}
sc1.add(ob);
ob.r = 10;
ob.scripts.push(bob);
ob.render = Circle;
function setup(){
    createCanvas(400,400);
}
function draw(){
    background(100);
sc1.update()
sc1.render()
}