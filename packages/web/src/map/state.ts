/**
 * Map state shape description.
 *
 * @license BSD-2-Clause
 * @copyright Mat. 2020-present
 */




/**
 * Map component initial state.
 */
export default {

    // is map loaded and ready?
    ready: false,

    // what's the tilesource (map style)?
    tileSourceIndex: 0,

    // viewport state
    viewport: {
        bearing: 0,
        latitude: 52.06,
        longitude: 19.85,
        pitch: 0,
        zoom: 5,
    },

    // viewport dimensions
    dimensions: {
        width: 0,
        height: 0,
    },

};
