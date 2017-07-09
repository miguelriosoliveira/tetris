let gameScreen = $("canvas");
let ctx = gameScreen[0].getContext("2d");

gameScreen.attr("height", SCREEN_HEIGHT);
gameScreen.attr("width", SCREEN_WIDTH);

function blockLine() {
    for (let i = 0; i < SCREEN_WIDTH / BLOCK_SIDE; i++) {
        let x = i * BLOCK_SIDE;
        let u = new Tetrimino(x);
        u.draw(ctx);
    }
}

let t = new Tetrimino();
t.move();
t.move();
t.move();
t.move();
t.move();
t.move();
t.move();
t.move();
t.draw(ctx);