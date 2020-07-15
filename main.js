const rect = new mojs.Shape({
    shape: 'rect',
    left: 0,
    top: 0,
    fill: 'none',
    radius: 20,
    stroke: {
        '#ffacb7':'#ffe0ac'
    },
    strokeWidth: {10:0},
    strokeDasharray: '100%',
    strokeDashoffset: {
        '-100%':'100%',
        '100%':'-100%'
    },
    angle: {
        0:100
    },
    duration: 2000,
    onComplete: function(){
        this.replay()
    }
}).play();

document.onmousemove = (e) => {
    let position = {
        x: e.clientX,
        y: e.clientY
    }
    rect.tune(position);
}