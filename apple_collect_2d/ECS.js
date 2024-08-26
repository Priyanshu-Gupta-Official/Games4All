class ECS {
    constructor(x = 0, y = 0, scripts = []) {
        this.x = x;
        this.y = y;
        this.scripts = scripts;
    }
    render(self) {
        point(self.x, self.y);
        push();
        stroke(Math.random() * 255, Math.random() * 255, Math.random() * 255);
        strokeWeight(10);
        pop();
    }
    update(self) {
        for (let i of self.scripts) {
            i(this);
        }
    }
}
