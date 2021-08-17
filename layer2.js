class HoistSection extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
        this.w = w/random(2.5,4)
        this.col = [col[0]]
    }
    get coords() {
        return { 
            x: this.x, 
            y: this.y, 
            w: this.w, 
            h: this.h }
    }
    show() {
        rectangle(this.col[0], this.x, this.y, this.w, this.h)
    }
}

class HoistTriangle extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
        this.w = w/random(2,3)
        this.col = [col[0]]
    }
    get coords() {
        return { 
            x: this.x,
            y: this.y + this.h / 4, 
            w: this.w - this.w / 6, 
            h: this.h - this.h / 2}
    }
    show() {
        fill(this.col[0])
        triangle(this.x,this.y, this.x,this.y+this.h, this.x+this.w, this.y+this.h/2)
    }
}

class CutTriangle extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
        this.w = h/2
        this.col = [col[0]]
    }
    get coords() {
        return { 
            x: this.x,
            y: this.y + this.h / 4, 
            w: this.w,
            h: this.h - this.h / 2}
    }
    show() {
        fill(this.col[0])
        push()
        translate(this.x,this.y)
        beginShape()
        vertex(0,0)
        vertex(this.w,this.h/3)
        vertex(this.w,2*this.h/3)
        vertex(0,this.h)
        vertex(0,0)
        endShape()
        pop()
    }
}

class Outline extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
        this.t = w/random(14,18)
        this.col = [col[0]]
    }
    get coords() {
        return { 
            x: this.x + this.t, 
            y: this.y + this.t, 
            w: this.w - 2 * this.t, 
            h: this.h - 2 * this.t 
        }
    }
    show() {
        rectangle(this.col[0],this.x,this.y,this.w,this.t)
        rectangle(this.col[0],this.x,this.y+this.h-this.t,this.w,this.t)
        rectangle(this.col[0],this.x,this.y,this.t,this.h)
        rectangle(this.col[0],this.x+this.w-this.t,this.y,this.t,this.h)
    }
}

class Disc extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
        this.r = w/random(3,3.7)
        this.col = [col[0]]
    }
    get coords() {
        return { 
            x: this.x + this.w/2 - this.r/2,
            y: this.y + this.h/2 - this.r/2, 
            w: this.r, 
            h: this.r }
    }
    show() {
        fill(this.col[0])
        circle(this.x+this.w/2, this.y+this.h/2, this.r)
    }
}

class Diamond extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
        this.tw = w/random(6,8)
        this.th = h/random(6,8)
        this.col = [col[0]]
    }
    get coords() {
        return { 
            x: this.tw*1.6, 
            y: this.th*1.6, 
            w: this.w - this.tw*3.2, 
            h: this.h - this.th*3.2}
    }
    show() {
        fill(this.col[0])
        push()
        translate(this.x,this.y)
        beginShape()
        vertex(this.w/2,this.th)
        vertex(this.w-this.tw,this.h/2)
        vertex(this.w/2, this.h-this.th)
        vertex(this.tw, this.h/2)
        vertex(this.w/2, this.th)
        endShape()
        pop()
    }
}

class DRays extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
        this.t = random(3,5)
    }
    get coords() {
        return { 
            x: this.x, 
            y: this.y, 
            w: this.w, 
            h: this.h }
    }
    show() {
        let tw = this.w/this.t
        let th = this.h/this.t
        push()
        translate(this.x,this.y)
        fill(this.col[0])
        triangle(0,this.h, this.w,0, this.w-tw,0)
        fill(this.col[1])
        triangle(0,this.h, this.w,0, this.w,th)
        pop()
    }
}

class DSection extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
        this.col = [col[0]]
    }
    get coords() {
        return { 
            x: this.x, 
            y: this.y, 
            w: this.w, 
            h: this.h }
    }
    show() {
        fill(this.col[0])
        triangle(this.x,this.y, this.x,this.y+this.h, this.x+this.w/2,this.y+this.h)
        if (random(1) > 0.99) {
            triangle(this.x+this.w,this.y, this.x+this.w,this.y+this.h, this.x+this.w/2,this.y+this.h)
        }
    }
}

class L2Cross extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
        this.t = w/8
        this.col = [col[0]]
    }
    get coords() {
        return { 
            x: this.x, 
            y: this.y, 
            w: this.w, 
            h: this.h }
    }
    show() {
        straightCross(false,this.t,this.col[0],this.x,this.y,this.w,this.h)
    }
}

class DoubleHCross extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
    }
    get coords() {
        return { 
            x: this.x, 
            y: this.y, 
            w: this.w, 
            h: this.h }
    }
    show() {
        let t = this.w/5.5
        straightCross(false,t,this.col[0],this.x,this.y,this.w,this.h)
        t = t/2
        straightCross(false,t,this.col[1],this.x,this.y,this.w,this.h)
    }
}

class Canton extends Layer {
    constructor(col, x, y, w, h, numStripes = 0) {
        super(col, x, y, w, h)
        this.cw = w/2.75
        this.ch = 0
        if (numStripes != 0) {
            this.ch = h/numStripes*floor(numStripes/2)
        } else {
            this.ch = h/2//random(2,3)
        }
        this.col = [col[0]]
    }
    get coords() {
        return { 
            x: this.x, 
            y: this.y, 
            w: this.cw, 
            h: this.ch }
    }
    show() {
        rectangle(this.col[0],this.x,this.y,this.cw,this.ch)
    }
}