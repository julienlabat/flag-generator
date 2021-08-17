class Layer {
    constructor(col, x, y, w, h) {
        this.col = col
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }
    get cols() {
        return this.col
    }
    get numCols() {
        return this.col.length
    }
}

class Plain extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
    }
    show() {
        rectangle(this.col[0], this.x, this.y, this.w, this.h)
    }
}

class Vertical extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
        if (col.length == 2 &&random(1) < 0.08) {
            // rare : 2 colors (1/3 | 2/3) (eg. Portugal)
            this.type = 'unequal'
        } else { 
            // 2 or 3 equal parts
            this.type = 'equal'
        }
    }
    show() {
        if (this.type == 'unequal') {
            let sep = 3
            rectangle(this.col[0],this.x,this.y,this.w,this.h)
            rectangle(this.col[1],this.x+this.w/sep,this.y,this.w-this.w/sep,this.h)
        } else {
            for (let i=0; i < this.numCols; i++) {
                rectangle(this.col[i],this.x+i*this.w/this.numCols,this.y,this.w/this.numCols,this.h)
            }
        }
    }
}

class Horizontal extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
        if (col.length == 3 && random(1) < 0.06) {
            // rare 3 cols (1/2 | 1/4 | 1/4) (eg. Colombia)
            this.type = 'unequal3'
        }
        else if (col.length == 2 && Math.random() < 0.05) {
            // rare 2 cols (3/4 | 1/4) (eg. Belarus)
            this.type = 'unequal2'
        } else {
            this.type = 'equal'
        }
    }
    show() {
        if (this.type == 'unequal3') {
            rectangle(this.col[0], this.x, this.y, this.w, this.h/2)
            rectangle(this.col[1], this.x, this.y+this.h/2, this.w, this.h/4)
            rectangle(this.col[2], this.x, this.y+this.h/2+this.h/4, this.w, this.h/4)
        }
        else if (this.type == 'unequal2') {
            rectangle(this.col[0], this.x, this.y, this.w, this.h/2+this.h/4)
            rectangle(this.col[1], this.x, this.y+this.h/2+this.h/4, this.w, this.h/4)
        }
        else {
            for (let i=0; i<this.numCols; i++) {
                rectangle(this.col[i],this.x,this.y+i*this.h/this.numCols,this.w,this.h/this.numCols)
            }
        }
    }
}

class Diagonal extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
        this.corner = isNorthEast(w,h)
        if (this.corner.y == 0) {
            this.northEast = false
        } else {
            this.northEast = true
        }
    }
    show() {
        rectangle(this.col[0], this.x, this.y, this.w, this.h)
        if (this.numCols == 3) {
            let t = this.w/random(14, 80)
            let cols = [this.col[1], this.col[2]]
            twoCorners(this.northEast, t, cols, this.x, this.y, this.w, this.h)
        } else {
            fill(this.col[1])
            triangle(this.x,this.y, this.x,this.y+this.h, this.x+this.corner.x, this.y+this.corner.y)
        }
    }
}

class VStripe extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
    }
    show() {
        let t = random(2,3)
        rectangle(this.col[0], this.x, this.y, this.w, this.h)
        rectangle(this.col[1], this.x+(this.w-(this.w/t))/2,this.y,this.w/t,this.h)
    }
}

class HStripe extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
    }
    show() {
        rectangle(this.col[0], this.x, this.y, this.w, this.h)
        if (this.numCols == 4) {
            rectangle(this.col[3],this.x,this.y+this.h/2,this.w,this.h/2)
        }
        if (this.numCols > 2) {
            let t = this.h/random(3.5,4.5)
            rectangle(this.col[2],this.x,this.y+this.h/2-t,this.w,2*t)
        }
        let t = this.h/random(5,6)
        rectangle(this.col[1],this.x,this.y+this.h/2-t,this.w,2*t)
    }
}

class DStripe extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
        this.corner = isNorthEast(w,h)
        if (this.corner.y == 0) {
            this.northEast = false
        } else {
            this.northEast = true
        }
    }
    show() {
        rectangle(this.col[0], this.x, this.y, this.w, this.h)
        var t = random(6,8)
        twoCorners(this.northEast, t, [this.col[1]], this.x, this.y, this.w, this.h)
        if (this.numCols == 4) {
            t = t/1.6
            let col3 = this.col.slice(2)
            twoCorners(this.northEast, t, col3, this.x, this.y, this.w, this.h)
        }
    }
}

class HTwoStripe extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
    }
    show() {
        rectangle(this.col[0], this.x, this.y, this.w, this.h)
        push()
        translate(this.x,this.y)
        let pos = this.h/10
        let rh = pos
        rectangle(this.col[1],0,pos,this.w,rh)
        rectangle(this.col[1],0,this.h-pos-rh,this.w,rh)
        pop()
    }
}

class HStripes extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
        this.numStripes = int(random(5,14))
        if (!this.col.includes('#ffffff')) {
            this.col.pop()
            this.col.unshift('#ffffff')
        }
    }
    show() {
        let sh = this.h/this.numStripes
        for (let i=0; i<=this.numStripes; i++) {
            rectangle(this.col[i%2], this.x, this.y+i*sh, this.w, sh)
        }
    }
}

class HCross extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
        if (this.numCols != 3 && random(1) > 0.5) {
            this.type = 'nordic'
            this.isNordic = true
        } else {
            this.type = 'central'
            this.isNordic = false
        }
    }
    show() {
        rectangle(this.col[0], this.x, this.y, this.w, this.h)
        // quarter sections for 3 colors layout
        if (this.numCols == 3) {
            let col2 = this.col[2]
            rectangle(col2,this.x,this.y,this.w/2,this.h/2)
            rectangle(col2,this.x+this.w/2,this.y+this.h/2,this.w/2,this.h/2)
        }
        // drawing the cross
        let t = this.w/8
        straightCross(this.isNordic, t, this.col[1], this.x, this.y, this.w, this.h)
    }
}

class DCross extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
    }
    show() {
        rectangle(this.col[0],this.x,this.y,this.w,this.h)
        // four triangles
        let t = random(7,10)
        let cols = [this.col[1]]
        if (this.numCols == 3) {
            cols.push(this.col[2])
        }
        fourTriangles(t,cols,this.x,this.y,this.w,this.h)
    }
}

class DoubleCross extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
        this.isNordic = random(1) > 0.5
        if (this.isNordic == true) {
            this.type = 'nordic'
        } else {
            this.type = 'central'
        }
    }
    show() {
        rectangle(this.col[0], this.x, this.y, this.w, this.h)
        // cross first pass
        let t = this.w/random(5,6)
        straightCross(this.isNordic,t,this.col[1],this.x,this.y,this.w,this.h)
        // cross second pass
        t = t/2
        straightCross(this.isNordic,t,this.col[2],this.x,this.y,this.w,this.h)
    }
}

class DoubleDCross extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
    }
    show() {
        rectangle(this.col[0], this.x, this.y, this.w, this.h)
        // fourTriangles pass one
        let t = 12
        let col1 = [this.col[1]]
        fourTriangles(t,col1,this.x,this.y,this.w,this.h)
        // fourTriangles pass two
        t = t/2
        let col2 = [this.col[2]]
        fourTriangles(t,col2,this.x,this.y,this.w,this.h)
    }
}

class CrossSections extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
        this.col = col.filter(function(item) {
            return item !== '#ffffff'
        })
        this.col.unshift("#ffffff")
    }
    show() {
        rectangle(this.col[0], this.x, this.y, this.w, this.h)
        // two corner sections
        rectangle(this.col[1],this.x+this.w/2,this.y,this.w/2,this.h/2)
        rectangle(this.col[2],this.x,this.y+this.h/2,this.w/2,this.h/2)
    }
}

class Zigzag extends Layer {
    constructor(col, x, y, w, h) {
        super(col, x, y, w, h)
        this.numPikes = 1
        while (this.numPikes%2 == 1) { 
            this.numPikes = int(random(11,21))
        }
    }
    show() {
        rectangle(this.col[0], this.x, this.y, this.w, this.h)
        // hoist section with zigzag right border
        let hw = this.w/4
        let pw = this.w/8
        fill(this.col[1])
        push()
        translate(this.x,this.y)
        beginShape()
        vertex(0,this.h)
        vertex(0,0)
        vertex(hw,0)
        for (let i=0; i<(this.numPikes+1); i++) {
            vertex(hw+pw*(i%2),i*this.h/this.numPikes)
        }
        vertex(hw,this.h)
        vertex(0,this.h)
        endShape()
        pop()
    }
}
