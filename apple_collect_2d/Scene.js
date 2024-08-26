class Scene {
    constructor() {
        this.objects = [];
    }
    add(elt){
        if(elt instanceof ECS){
            this.objects.push(elt);
        }
    }
    render() {
        for (let i of this.objects) {
            i.render(i);
        }
    }
    update() {
        for (let ib of this.objects) {
            ib.update(ib);
        }
    }
}
