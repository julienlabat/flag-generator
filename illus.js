class Illus extends Layer{
    constructor(col, x, y, w, h, multiple=false) {
        super(col, x, y, w, h)
        this.illusCol = this.col[0]
        this.multiple = multiple
    }
    show() {
        // stroke(0,255,255)
        fill(this.col)
        star(this.x+this.w/2, this.y+this.h/2, this.w/13, this.w/5, 5)
    }
}

function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    let rotation = -HALF_PI
    beginShape();
    for (let a = 0 + rotation; a < TWO_PI + rotation; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
}