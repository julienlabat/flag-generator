
// parameters ****************************************

const W = 400
const H = 260

const debug = true

const COLORS = {
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
        this.l1Name = layers[0]
        this.l2Name = layers[1]
        // construct layer 1
        let l1Col = createPalette(weightedRandom(l1ColProb[this.l1Name]))
        this.layer1 = eval('new ' + this.l1Name + "(l1Col, this.x, this.y, this.w, this.h)")
        // construct layer 2
        if (this.l2Name !== 'null') {
            let l2Col = this.createL2Palette()
            this.layer2 = eval('new ' + this.l2Name + '(l2Col, this.x, this.y, this.w, this.h, this.layer1.numStripes)')
        }
        // construct illus zones
    }

    createL2Palette() {
        // union jack style : forcing same colors for second cross
        if (this.l1Name == 'DoubleDCross' && this.l2Name == 'DoubleHCross') {
            return [this.layer1.cols[1], this.layer1.cols[0]]
        // HStripes : prevent white and l1 cols
        } else if (this.l1Name == 'HStripes') {
            let exc = this.layer1.cols.slice()
            return createPalette(1, exc)
        // others : prevent l1 cols      
        } else {
            return createPalette(2, this.layer1.cols)
        }
    }

    show() {
        // render layer 1
        this.layer1.show()
        
        // render layer 2
        if (this.l2Name !== 'null') {
            this.layer2.show()
            if (debug == true) {
                // debug layer2 coords
                stroke('#ff6781')
                noFill()
                rect(this.layer2.coords.x,this.layer2.coords.y, this.layer2.coords.w, this.layer2.coords.h)
            }
        }
    }
}

// P5 main functions *********************************

function setup() {
    createCanvas(W, H)
    noLoop()
}

function draw() {
    noStroke()
    console.clear()
    let layers = pickLayers()
    let f = new Flag(0, 0, W, H, layers)
    if (debug == true) {
        console.log('> LAYER 1 : ' + f.l1Name)
        console.log('  l1 colors : ' + f.layer1.numCols + ' : ' + f.layer1.cols)
        console.log('  l1 type : ' + f.layer1.type)
        if (f.l2Name != 'null') {
            console.log('> LAYER 2 : ' + f.l2Name)
            console.log('  l2 colors : ' + f.layer2.numCols + ' : ' + f.layer2.cols)
        }
    }
    f.show()
}

// UTILS *********************************************

function pickLayers() {
    let l1 = weightedRandom(layer1Prob)
    let l2 = weightedRandom(layer2Prob[l1])
    return [l1, l2]
}

function weightedRandom(obj) {
    /** Returns a random pick from weighted elements object
     *  obj: obj of choices with weights adding up to 1
     *  (eg. { choice1: 0.6, choice2: 0.4 })
     */
    let fullList = []
    for (i in obj) {
        let ratio = int(obj[i]*1000)
        for (let j=0; j<ratio; j++) {
            fullList.push(i)
        }
    }
    let r = int(random(1000))
    return fullList[r]
}

function createPalette(numCol, other=[]) {
    /** Returns a list of numCol colors from {color:weight} object 
     *  numCol: int number of colors in list
     *  other: list of forbidden colors if needed
    */
    let colors = []
    while (colors.length < numCol) {
        let c = weightedRandom(COLORS)
        if (colors.includes(c) == false && other.includes(c) == false) { colors.push(c) }
    }
    return colors
}