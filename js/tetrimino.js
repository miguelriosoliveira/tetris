class Tetrimino {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.side = BLOCK_SIDE;
    }

    move() {
        this.y += 1;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.x, this.y, this.side, this.side);
        ctx.strokeRect(this.x, this.y, this.side, this.side);
    }
}