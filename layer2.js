function hoist_section(col, x, y, w, h) {
    rectangle(col[0], x, y, w/random(2.5,4), h)
}

function canton(col, x, y, w, h, num_stripes=0) {
    let ch = 0
    if (num_stripes != 0) {
        ch = h/num_stripes*floor(num_stripes/2)
    } else {
        ch = h/random(2,3)
    }
    console.log('stripes : '+ num_stripes)
    let cw = w/2.75
    rectangle(col[0],x,y,cw,ch)
}

function hoist_triangle(col, x, y, w, h) {
    let t = w/random(2,3)
    fill(col[0])
    triangle(x,y, x,y+h, x+t, y+h/2)
}

function cut_triangle(col, x, y, w, h) {
    fill(col[0])
    push()
    translate(x,y)
    beginShape()
    vertex(0,0)
    vertex(h/2,h/3)
    vertex(h/2,2*h/3)
    vertex(0,h)
    vertex(0,0)
    endShape()
    pop()
}

function outline(col, x, y, w, h) {
    let t = w/random(10,14)
    rectangle(col[0],x,y,w,t)
    rectangle(col[0],x,y+h-t,w,t)
    rectangle(col[0],x,y,t,h)
    rectangle(col[0],x+w-t,y,t,h)
}

function disc(col, x, y, w, h) {
    fill(col[0])
    let r = w/random(3,3.7)
    circle(x+w/2,y+h/2,r)
}

function diamond(col, x, y, w, h) {
    let tw = w/random(6,8)
    let th = h/random(6,8)
    fill(col[0])
    push()
    translate(x,y)
    beginShape()
    vertex(w/2,th)
    vertex(w-tw,h/2)
    vertex(w/2, h-th)
    vertex(tw, h/2)
    vertex(w/2, th)
    endShape()
    pop()
}

function d_rays(col, x, y, w, h) {
    let col1 = col[0]
    let col2 = col[1]
    let t = random(3,5)
    let tw = w/t
    let th = h/t
    push()
    translate(x,y)
    fill(col1)
    triangle(0,h, w,0, w-tw,0)
    fill(col2)
    triangle(0,h, w,0, w,th)
    pop()
}

function d_section(col, x, y, w, h) {
    fill(col[0])
    triangle(x,y, x,y+h, x+w/2,y+h)
    if (random(1) > 0.99) {
        triangle(x+w,y, x+w,y+h, x+w/2,y+h)
    }
}

function l2_cross(col, x, y, w, h) {
    let t = w/8
    straight_cross(false,t,col[0],x,y,w,h)
}

function double_h_cross(col, x, y, w, h) {
    let col1 = col[1]
    let col2 = col[0]
    let t = w/5.5
    straight_cross(false,t,col1,x,y,w,h)
    t = t/2
    straight_cross(false,t,col2,x,y,w,h)
}