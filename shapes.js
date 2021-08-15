// DRAWING FUNCTIONS *********************************************

function rectangle(col, x, y, w, h) {
    fill(col)
    rect(x, y, w, h)
}

function is_north_east(w, h) {
    r = random(1) > 0.8
    if (r == true) {
        return createVector(w,h)
    } else {
        return createVector(w,0)
    }
}

function two_corners(north_east, t, cols, x, y, w, h) {
    let tw = w/t
    let th = h/t
    let col1= cols[0]
    push()
    translate(x,y)
    if (cols.length > 1) {
        var col2 = cols[1]
    } else {
        var col2 = col1
    }
    if (north_east == false) {
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

function straight_cross(is_nordic, t, col, x, y, w, h) {
    push()
    translate(x,y)
    if (is_nordic) {
        rectangle(col,w/3-t/2,0,t,h)
    } else {
        rectangle(col,w/2-t/2,0,t,h)
    }
    rectangle(col,0,h/2-t/2,w,t)
    pop()
}

function four_triangles(t, cols, x, y, w, h) {
    let num_cols = cols.length
    let tw = w/t
    let th = h/t
    push()
    translate(x,y)
    fill(cols[0])
    triangle(tw,0, w-tw,0, w/2,h/2-th)
    triangle(tw,h, w-tw,h, w/2,h-h/2+th)
    if (num_cols > 1) { 
        fill(cols[1])
    }
    triangle(0,th, 0,h-th, w/2-tw,h/2)
    triangle(w,th, w,h-th, w/2+tw,h/2)
    pop()
}