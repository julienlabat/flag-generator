// GLOBAL PROBABILITIES for weighted random *********************************************

const layer1_prob = {
    // layer 1 type probabilities 
    plain: 0.18,
    vertical: 0.11,
    horizontal: 0.33,
    diagonal: 0.02,
    v_stripe: 0.02,
    h_stripe: 0.15,
    d_stripe: 0.02,
    h_two_stripe: 0.01,
    h_stripes: 0.06,
    h_cross: 0.03,
    d_cross: 0.02,
    double_cross: 0.01,
    double_d_cross: 0.02,
    cross_sections: 0.01,
    zigzag: 0.01
}

const l1_col_prob = {
    plain: { 1: 1 },
    vertical: { 2: 0.26, 3: 0.74 },
    horizontal: { 2: 0.28, 3: 0.67, 4: 0.04 },
    diagonal: { 2: 0.6, 3: 0.4 },
    v_stripe: { 2: 1 },
    h_stripe: { 2: 0.54, 3: 0.23, 4: 0.23 },
    d_stripe: { 3: 0.4, 4: 0.6 },
    h_two_stripe: { 2: 1 },
    h_stripes: { 2: 1 },
    h_cross: { 2: 0.83, 3: 0.17 },
    d_cross: { 2: 0.2, 3: 0.8 },
    double_cross: { 3: 1 },
    double_d_cross: { 3: 1 },
    cross_sections: { 3: 1 },
    zigzag: { 2: 1 }
}

const layer2_prob = {
    // layer 2 probabilities depending on layer1 type
    plain: {
        null: 0.64,
        canton: 0.1512,
        d_rays: 0.0144,
        diamond: 0.0144,
        disc: 0.0684,
        outline: 0.036,
        rays: 0.0144,
        hoist_triangle: 0.036,
        waves: 0.0144
    },
    horizontal: {
        null: 0.735,
        disc: 0.045,
        hoist_section: 0.0725,
        hoist_triangle: 0.1475
    },
    h_stripe: {
        null: 0.74,
        disc: 0.065,
        hoist_triangle: 0.195
    },
    h_stripes: {
        canton: 0.7,
        disc: 0.1,
        hoist_triangle: 0.2
    },
    d_cross: {
        null: 0.75,
        disc: 0.125,
        l2_cross: 0.125,
    },
    double_d_cross: {
        null: 0.4,
        double_h_cross: 0.6
    }
}