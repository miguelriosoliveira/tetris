/**
 * Created by miguel on 09/07/17.
 */

let WINDOW = $(window);
let gameScreen = $("canvas");

gameScreen.height(WINDOW.height());
gameScreen.width(9 / 16 * gameScreen.height());
gameScreen.css("background-color", "red");