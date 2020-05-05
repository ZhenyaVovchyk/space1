function Stars() {
    this.w = 25;
    this.h = 25;
    this.x = 0;
    this.y = 0;
    this.xx = 0;
    this.yy = 0;
    this.G = 100;
    this.m = Math.random() * 2 - 1;
    this.r = Math.floor(Math.random() * 40 + 25);
    this.r1 = 40;

    // Clear canvas
    this.clearRect = () => { ctx.clearRect(0, 0, canvas.width, canvas.height) };

    //  Draw strokeRect
    this.drawStrokeRect = () => {
        ctx.beginPath();
        ctx.strokeRect(this.x, this.y, this.w, this.h);
        ctx.stroke();
        ctx.closePath();
    };

    // Draw fillRect
    this.drawFillRect = () => {
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.fill();
        ctx.closePath();
    };

    // Draw strokeARC
    this.drawStrokeArc = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
    };

    // Draw fillARC
    this.drawFillArc = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    };

    //draw pocket
    this.drawPocket = (x1, y1) => {
        ctx.beginPath();
        ctx.arc(x1, y1, this.r1, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
    }

    //  Move RECT
    this.moveStars = (massive) => {
        let a, ax, ay, dx, dy, r, step = 0.01;
        for (let i = 0; i < massive.length; i++) {
            for (let j = 0; j < massive.length; i++) {
                if (j == i) continue;
                dx = massive[j].x - massive[i].x;
                dy = massive[j].y - massive[i].y;

                r = dx * dx + dy * dy;
                if (r < 0.1) r = 0.1;
                a = massive[j].G * massive[j].m / r;

                r = Math.sqrt(r);
                ax = a * dx / r;
                ay = a * dy / r;

                massive[i].xx += ax * step;
                massive[i].yy += ay * step;
            }
        }
        for (let i = 0; i < massive.length; i++) {
            massive[i].x += massive[i].xx * step;
            massive[i].yy += massive[i].yy * step;
        }
    };
}