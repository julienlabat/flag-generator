// DRAWING FUNCTIONS *********************************************

function rectangle(col, x, y, w, h) {
    fill(col)
    rect(x, y, w, h)
}

function isNorthEast(w, h) {
    r = random(1) > 0.8
    if (r == true) {
        return createVector(w,h)
    } else {
        return createVector(w,0)
    }
}

function twoCorners(northEast, t, cols, x, y, w, h) {
    let tw = w/t
    let th = h/t
    let col1 = cols[0]
    if (cols.length > 1) {
        var col2 = cols[1]
    } else {
        var col2 = col1
    }
    console.log('2corners cols : ' + col1 + ' / ' + col2)
    push()
    translate(x,y)
    if (northEast == false) {
        fill(col1)
        triangle(0,0, 0,h-th, w-tw,0)
        fill(col2)
        triangle(w,h, w,th, tw,h)
    } else {
        fill(col1)
        triangle(0,th, w-tw,h, 0,h)
        fill(col2)
        triangle(w,0, w,h-th, tw,0)
    }
    pop()
}

function straightCross(isNordic, t, col, x, y, w, h) {
    push()
    translate(x,y)
    if (isNordic) {
        rectangle(col,w/3-t/2,0,t,h)
    } else {
        rectangle(col,w/2-t/2,0,t,h)
    }
    rectangle(col,0,h/2-t/2,w,t)
    pop()
}

function fourTriangles(t, cols, x, y, w, h) {
    let numCols = cols.length
    let tw = w/t
    let th = h/t
    push()
    translate(x,y)
    fill(cols[0])
    triangle(tw,0, w-tw,0, w/2,h/2-th)
    triangle(tw,h, w-tw,h, w/2,h-h/2+th)
    if (numCols > 1) { 
        fill(cols[1])
    }
    triangle(0,th, 0,h-th, w/2-tw,h/2)
    triangle(w,th, w,h-th, w/2+tw,h/2)
    pop()
}