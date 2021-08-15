
// parameters ****************************************

const w = 400
const h = 260

COLORS = {
    "#ffffff": 0.2,
    "#ab123b": 0.03,
    "#e03844": 0.22,
    "#f2822c": 0.01,
    "#f9c343": 0.11,
    "#549E47": 0.11,
    "#1F6029": 0.02,
    "#35abb6": 0.01,
    "#9cdcf2": 0.03,
    "#356EDE": 0.1,
    "#263B8C": 0.11,
    "#1a1a1a": 0.05
}

// Main Flag class ***********************************

class Flag {
    constructor(x, y, w, h, layers=[]) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.layer1 = layers[0]
        this.layer2 = layers[1]
        this.layer3 = layers[2]
        this.l1_col = create_palette(weighted_random(l1_col_prob[this.layer1]))
        this.num_stripes = 0
        if (this.layer1 == 'double_d_cross' && this.layer2 == 'double_h_cross') {
            this.l2_col = this.l1_col.slice(0,2)
        } else if (this.layer1 == 'h_stripes') {
            let exc = this.l1_col.slice()
            exc.push("#ffffff")
            this.l2_col = create_palette(1, exc)            
        } else {
            this.l2_col = create_palette(2, this.l1_col)
        }
    }

    get_layer(layer_num) {
        let layer = 'layer' + layer_num
        let l = this[layer]
        return l
    }

    set_layer(layer_num, layer_type) {
        let l = 'layer' + layer_num
        this[l] = layer_type
    }

    show() {
        // render layer 1
        console.log('l1 colors : ' + this.l1_col)
        if (this.layer1 !== 'h_stripes') {
            eval(this.layer1 + "(this.l1_col, this.x, this.y, this.w, this.h)")
        } else {
            this.num_stripes = int(random(5,14))
            eval(this.layer1 + "(this.l1_col, this.x, this.y, this.w, this.h, this.num_stripes)")
        }
        // render layer 2
        console.log('l2 colors : ' + this.l2_col)
        if (this.layer2 !== 'null' && this.layer2 !== undefined) {
            if (this.layer1 == 'h_stripes' && this.layer2 == 'canton') {
                eval(this.layer2 + "(this.l2_col, this.x, this.y, this.w, this.h, this.num_stripes)")
            } else {
                eval(this.layer2 + "(this.l2_col, this.x, this.y, this.w, this.h)")
            }
        }
    }
}

// P5 main functions *********************************

function setup() {
    createCanvas(w, h)
    noStroke()
    noLoop()
}

function draw() {
    console.clear()
    let layers = pick_layers()
    let f = new Flag(0, 0, w, h, layers)
    console.log('* LAYER 1 : ' + f.get_layer(1))
    console.log('* LAYER 2 : ' + f.get_layer(2))
    // console.log('>>> LAYER 3 : ' + f.get_layer(3))
    f.show()
}

// UTILS *********************************************

function pick_layers() {
    let l1 = weighted_random(layer1_prob)
    let l2 = weighted_random(layer2_prob[l1])
    let l3 = 'not implemented'
    return [l1, l2, l3]
}

function weighted_random(obj) {
    /** Returns a random pick from weighted elements object
     *  obj: obj of choices with weights adding up to 1
     *  (eg. { choice1: 0.6, choice2: 0.4 })
     */
    let full_list = []
    for (i in obj) {
        let ratio = int(obj[i]*1000)
        for (let j=0; j<ratio; j++) {
            full_list.push(i)
        }
    }
    let r = int(random(1000))
    return full_list[r]
}

function create_palette(num_col, other=[]) {
    /** Returns a list of num_col colors from {color:weight} object 
     *  num_col: int number of colors in list
     *  other: list of forbidden colors if needed
    */
    let colors = []
    while (colors.length < num_col) {
        let c = weighted_random(COLORS)
        if (colors.includes(c) == false && other.includes(c) == false) { colors.push(c) }
    }
    return colors
}