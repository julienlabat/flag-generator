function plain(col, x, y, w, h){
    if (col[0] == "#1a1a1a" && random(1) < 0.8) {
        col = create_palette(1, ["#1a1a1a"])
    }
    rectangle(col[0], x, y, w, h)
}

function vertical(col, x, y, w, h){
    let num_cols = col.length
    // rare : 2 colors (1/3 | 2/3) (eg. Portugal)
    if (num_cols == 2 && random(1) < 0.08) {
        let sep = 3
        rectangle(col[0],x,y,w,h)
        rectangle(col[1],x+w/sep,y,w-w/sep,h)
    } 
    // 2 or 3 equal parts
    else {
        for (let i=0; i < col.length; i++) {
            rectangle(col[i],x+i*w/num_cols,y,w/num_cols,h)
        }
    }
}

function horizontal(col, x, y, w, h){
    let num_cols = col.length
    // rare 3 cols (1/2 | 1/4 | 1/4) (eg. Colombia)
    if (num_cols == 3 && random(1) < 0.06) {
        rectangle(col[0], x, y, w, h/2)
        rectangle(col[1], x, y+h/2, w, h/4)
        rectangle(col[2], x, y+h/2+h/4, w, h/4)
    }
    // rare 2 cols (3/4 | 1/4) (eg. Belarus)
    else if (num_cols == 2 && Math.random() < 0.05) {
        rectangle(col[0], x, y, w, h/2+h/4)
        rectangle(col[1], x, y+h/2+h/4, w, h/4)
    }
    // equal parts
    else {
        for (let i=0; i<num_cols; i++) {
            rectangle(col[i],x,y+i*h/num_cols,w,h/num_cols)
        }
    }
}

function diagonal(col, x, y, w, h){
    let num_cols = col.length
    let corner = is_north_east(w,h)
    if (corner.y == 0) {
        var north_east = false
    } else {
        var north_east = true
    }
    rectangle(col[0], x, y, w, h)
    if (num_cols == 3) {
        let t = w/random(14, 80)
        let cols = [col[1], col[2]]
        two_corners(north_east, t, cols, x, y, w, h)
    } else {
        fill(col[1])
        triangle(x,y, x,y+h, x+corner.x, y+corner.y)
    }
}

function v_stripe(col, x, y, w, h){
    let t = random(2,3)
    rectangle(col[0], x, y, w, h)
    rectangle(col[1], x+(w-(w/t))/2,y,w/t,h)
}

function h_stripe(col, x, y, w, h){
    let num_cols = col.length
    rectangle(col[0], x, y, w, h)
    if (num_cols == 4) {
        rectangle(col[3],x,y+h/2,w,h/2)
    }
    if (num_cols > 2) {
        let t = h/random(3.5,4.5)
        rectangle(col[2],x,y+h/2-t,w,2*t)
    }
    let t = h/random(5,6)
    rectangle(col[1],x,y+h/2-t,w,2*t)
}

function d_stripe(col, x, y, w, h){
    let num_cols = col.length
    let corner = is_north_east(w,h)
    if (corner.y == 0) {
        var north_east = false
    } else {
        var north_east = true
    }
    let col1 = [col[0]]
    rectangle(col1, x, y, w, h)
    let t = random(6,8)
    let col2 = [col[1]]
    two_corners(north_east, t, col2, x, y, w, h)
    if (num_cols == 4) {
        t = t/1.6
        let col3 = col.slice(2)
        two_corners(north_east, t, col3, x, y, w, h)
    }
}

function h_two_stripe(col, x, y, w, h){
    rectangle(col[0], x, y, w, h)
    push()
    translate(x,y)
    let pos = h/10
    let rh = pos
    let col1 = col[1]
    rectangle(col1,0,pos,w,rh)
    rectangle(col1,0,h-pos-rh,w,rh)
    pop()
}

function h_stripes(col, x, y, w, h, num_stripes=0){
    if (!col.includes('#ffffff')) {
        col.pop()
        col.unshift('#ffffff')
    }
    let sh = h/num_stripes
    for (let i=0; i<=num_stripes; i++) {
        rectangle(col[i%2], x, y+i*sh, w, sh)
    }
}

function h_cross(col, x, y, w, h){
    let num_cols = col.length
    let is_nordic = random(1) > 0.5
    rectangle(col[0], x, y, w, h)
    // quarter sections for 3 colors layout
    if (num_cols == 3) {
        is_nordic = false
        col2 = col[2]
        rectangle(col2,x,y,w/2,h/2)
        rectangle(col2,x+w/2,y+h/2,w/2,h/2)
    }
    // drawing the cross
    t = w/8
    straight_cross(is_nordic, t, col[1], x, y, w, h)
}

function d_cross(col, x, y, w, h){
    let num_cols = col.length
    rectangle(col[0],x,y,w,h)
    // four_triangles
    let t = random(7,10)
    let cols = [col[1]]
    if (num_cols == 3) {
        cols.push(col[2])
    }
    four_triangles(t,cols,x,y,w,h)
}

function double_cross(col, x, y, w, h){
    let is_nordic = random(1) > 0.5
    // plain field
    rectangle(col[0],x,y,w,h)
    // cross first pass
    let t = w/random(5,6)
    straight_cross(is_nordic,t,col[1],x,y,w,h)
    // cross second pass
    t = t/2
    straight_cross(is_nordic,t,col[2],x,y,w,h)
}

function double_d_cross(col, x, y, w, h){
    // plain field
    rectangle(col[0],x,y,w,h)
    // four_triangles pass one
    let t = 12
    let col1 = [col[1]]
    four_triangles(t,col1,x,y,w,h)
    // four_triangles pass two
    t = t/2
    let col2 = [col[2]]
    four_triangles(t,col2,x,y,w,h)

}

function cross_sections(col, x, y, w, h){
    let cols = col.filter(function(item) {
        return item !== '#ffffff'
    })
    cols.unshift("#ffffff")
    // plain field
    rectangle(cols[0],x,y,w,h)
    // two corner sections
    rectangle(cols[1],x+w/2,y,w/2,h/2)
    rectangle(cols[2],x,y+h/2,w/2,h/2)
}

function zigzag(col, x, y, w, h){
    // prevent black field
    if (col[0] == "#1a1a1a") { 
        col = create_palette(2, ["#1a1a1a"])
    }
    // plain field
    rectangle(col[0],x,y,w,h)
    // hoist section with zigzag right border
    let hw = w/4
    let num_pikes = 1
    while (num_pikes%2 == 1) { 
        num_pikes = int(random(11,21))
    }
    let pw = w/8
    fill(col[1])
    push()
    translate(x,y)
    beginShape()
    vertex(0,h)
    vertex(0,0)
    vertex(hw,0)
    for (let i=0; i<(num_pikes+1); i++) {
        vertex(hw+pw*(i%2),i*h/num_pikes)
    }
    vertex(hw,h)
    vertex(0,h)
    endShape()
    pop()
}
