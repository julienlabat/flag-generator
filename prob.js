// GLOBAL PROBABILITIES for weighted random *********************************************

const layer1Prob = {
    // layer 1 type probabilities 
    Plain: 0.18,
    Vertical: 0.11,
    Horizontal: 0.33,
    Diagonal: 0.02,
    VStripe: 0.02,
    HStripe: 0.15,
    DStripe: 0.02,
    HTwoStripe: 0.01,
    HStripes: 0.06,
    HCross: 0.03,
    DCross: 0.02,
    DoubleCross: 0.01,
    DoubleDCross: 0.02,
    CrossSections: 0.01,
    Zigzag: 0.01
}

const l1ColProb = {
    Plain: { 1: 1 },
    Vertical: { 2: 0.26, 3: 0.74 },
    Horizontal: { 2: 0.28, 3: 0.67, 4: 0.04 },
    Diagonal: { 2: 0.6, 3: 0.4 },
    VStripe: { 2: 1 },
    HStripe: { 2: 0.54, 3: 0.23, 4: 0.23 },
    DStripe: { 3: 0.4, 4: 0.6 },
    HTwoStripe: { 2: 1 },
    HStripes: { 2: 1 },
    HCross: { 2: 0.83, 3: 0.17 },
    DCross: { 2: 0.2, 3: 0.8 },
    DoubleCross: { 3: 1 },
    DoubleDCross: { 3: 1 },
    CrossSections: { 3: 1 },
    Zigzag: { 2: 1 }
}

const layer2Prob = {
    // layer 2 probabilities depending on layer1 type
    Plain: {
        null: 0.64,
        Canton: 0.1512,
        DRays: 0.0144,
        Diamond: 0.0144,
        Disc: 0.0684,
        Outline: 0.036,
        Rays: 0.0144, // not  implemented
        HoistTriangle: 0.036,
        Waves: 0.0144 // not  implemented
    },
    Vertical: { null: 1 },
    Horizontal: {
        null: 0.75,
        Disc: 0.04,
        HoistSection: 0.07,
        HoistTriangle: 0.13,
        CutTriangle: 0.01
    },
    Diagonal: { null: 1 },
    VStripe: { null: 1 },
    HStripe: {
        null: 0.74,
        Disc: 0.065,
        HoistTriangle: 0.195
    },
    DStripe: { null: 1 },
    HTwoStripe: { null: 1 },
    HStripes: {
        Canton: 0.7,
        HoistTriangle: 0.3
    },
    HCross: { null: 1 },
    DCross: {
        null: 0.75,
        Disc: 0.125,
        L2Cross: 0.125,
    },
    DoubleCross: { null: 1 },
    DoubleDCross: {
        null: 0.4,
        DoubleHCross: 0.6
    },
    CrossSections: { null: 1 },
    Zigzag: { null: 1 }
}