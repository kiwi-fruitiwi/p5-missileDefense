/**
 *  @author kiwi
 *  @date 2022.03.27
 *
 * wikipedia missile defense
 *    bear reading
 * particle system with basic gravity. no edges or wrap
 * longer canvas
 * extremely slow moving projectile
 *    fades in when getting within distance to radar tower or scanner
 *    each missile is an emitter; trail: tiny colored particles
 * reticle animation
 * limited information AI for predicting trajectory
 *    snapshots of velocity in discrete time intervals
 *        → upgrade detection frequency
 *        → upgrade radar range or number of radar towers in 3D
 *    given data points, plot expected trajectory    with dotted line
 *        leave old predictions on screen, faded
 *
 * AI identifies which phase missile is in
 *    prepares interceptor
 *        → upgrade types
 *
 * user interface
 *    status bar top or bottom
 *    using instruction div to output current AI thoughts
 * animations
 *    upgrade screen for new defense types
 * art
 *    2D at first. little pixel defense stations using Apico's pixel scale
 *    basic blender
 * improvement stages: modeling missile atk+def infrastructure in blender
 * architecture ideas: github.com/lukelliot/Missile-Defense
 */
let font
let instructions


function preload() {
    font = loadFont('data/consola.ttf')
}


function setup() {
    let cnv = createCanvas(600, 300)
    cnv.parent('#canvas')
    colorMode(HSB, 360, 100, 100, 100)
    textFont(font, 14)

    /* initialize instruction div */
    instructions = select('#ins')
    instructions.html(`<pre>
        [1,2,3,4,5] → no function
        z → freeze sketch</pre>`)
}


function draw() {
    background(234, 34, 24)



    displayDebugCorner()
}


/** 🧹 shows debugging info using text() 🧹 */
function displayDebugCorner() {
    const LEFT_MARGIN = 10
    const DEBUG_Y_OFFSET = height - 10 /* floor of debug corner */
    const LINE_SPACING = 2
    const LINE_HEIGHT = textAscent() + textDescent() + LINE_SPACING
    fill(0, 0, 100, 100) /* white */
    strokeWeight(0)

    text(`frameCount: ${frameCount}`,
        LEFT_MARGIN, DEBUG_Y_OFFSET - LINE_HEIGHT)
    text(`frameRate: ${frameRate().toFixed(1)}`,
        LEFT_MARGIN, DEBUG_Y_OFFSET)
}


function keyPressed() {
    /* stop sketch */
    if (key === 'z') {
        noLoop()
        instructions.html(`<pre>
            sketch stopped</pre>`)
    }
}