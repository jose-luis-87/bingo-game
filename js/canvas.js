////////////////////////////////////////////////////////////
// CANVAS
////////////////////////////////////////////////////////////
var stage
var canvasW = 0;
var canvasH = 0;

/*!
 * 
 * START GAME CANVAS - This is the function that runs to setup game canvas
 * 
 */
function initGameCanvas(w, h) {
    var gameCanvas = document.getElementById("gameCanvas");
    gameCanvas.width = w;
    gameCanvas.height = h;

    canvasW = w;
    canvasH = h;
    stage = new createjs.Stage("gameCanvas");

    createjs.Touch.enable(stage);
    stage.enableMouseOver(20);
    stage.mouseMoveOutside = true;

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", tick);
}

var guide = false;
var canvasContainer, mainContainer, gameContainer, confirmContainer, resultContainer;
var guideline, bg, cover, logo, buttonStart, buttonContinue;

$.prize = {};

/*!
 * 
 * BUILD GAME CANVAS ASSERTS - This is the function that runs to build game canvas asserts
 * 
 */
function buildGameCanvas() {
    canvasContainer = new createjs.Container();
    mainContainer = new createjs.Container();

    gameContainer = new createjs.Container();
    ballsContainer = new createjs.Container();
    ballsRevealContainer = new createjs.Container();
    ballsSelectContainer = new createjs.Container();
    cardContainer = new createjs.Container();
    tableContainer = new createjs.Container();
    confirmContainer = new createjs.Container();
    resultContainer = new createjs.Container();
    starContainer = new createjs.Container();

    bg = new createjs.Bitmap(loader.getResult('background'));
    cover = new createjs.Bitmap(loader.getResult('cover'));
    logo = new createjs.Bitmap(loader.getResult('logo'));

    buttonStart = new createjs.Bitmap(loader.getResult('buttonStart'));
    centerReg(buttonStart);
    buttonStart.x = canvasW / 2;
    buttonStart.y = canvasH / 100 * 77;

    //game
    itemBall = new createjs.Bitmap(loader.getResult('itemBall'));
    centerReg(itemBall);
    itemBall.x = -500;

    itemBallBg = new createjs.Bitmap(loader.getResult('itemBallBg'));
    //centerReg(itemBallBg);
    itemBallBg.x = -500;

    itemBallShadow = new createjs.Bitmap(loader.getResult('itemBallShadow'));
    centerReg(itemBallShadow);
    itemBallShadow.x = -500;

    itemBallDim = new createjs.Bitmap(loader.getResult('itemBallDim'));
    centerReg(itemBallDim);
    itemBallDim.x = -500;

    itemBallGuess = new createjs.Bitmap(loader.getResult('itemBallGuess'));
    centerReg(itemBallGuess);
    itemBallGuess.x = -500;

    itemBallBonus = new createjs.Bitmap(loader.getResult('itemBallBonus'));
    centerReg(itemBallBonus);
    itemBallBonus.x = -500;

    itemBallHit = new createjs.Bitmap(loader.getResult('itemBallHit'));
    centerReg(itemBallHit);
    itemBallHit.x = -500;

    itemSphere = new createjs.Bitmap(loader.getResult('itemSphere'));
    centerReg(itemSphere);
    itemStick = new createjs.Bitmap(loader.getResult('itemStick'));
    centerReg(itemStick);
    itemShine = new createjs.Bitmap(loader.getResult('itemShine'));
    centerReg(itemShine);

    itemSphere.x = gameData.sphereX;
    itemSphere.y = gameData.sphereY + 25;
    itemStick.x = gameData.sphereX;
    itemStick.y = gameData.sphereY;
    itemShine.x = gameData.sphereX;
    itemShine.y = gameData.sphereY;

    itemBar = new createjs.Bitmap(loader.getResult('itemBar'));
    centerReg(itemBar);
    itemBar.x = gameData.sphereX;
    itemBar.y = canvasH / 100 * 81;

    itemBarBonus = new createjs.Bitmap(loader.getResult('itemBarBonus'));
    centerReg(itemBarBonus);
    itemBarBonus.x = gameData.sphereX;
    itemBarBonus.y = canvasH / 100 * 81;

    buttonSphereStart = new createjs.Bitmap(loader.getResult('buttonSphereStart'));
    centerReg(buttonSphereStart);
    buttonSphereStart.x = gameData.sphereX;
    buttonSphereStart.y = gameData.sphereY;


    itemCard = new createjs.Bitmap(loader.getResult('itemCard'));
    centerReg(itemCard);
    itemCard.x = canvasW / 100 * 68;
    itemCard.y = canvasH / 100 * 51;

    itemBarUser = new createjs.Bitmap(loader.getResult('itemBar'));
    centerReg(itemBarUser);
    itemBarUser.x = itemCard.x;
    itemBarUser.y = canvasH / 100 * 81;

    buttonLucky = new createjs.Bitmap(loader.getResult('buttonLucky'));
    centerReg(buttonLucky);
    buttonLucky.x = itemCard.x;
    buttonLucky.y = canvasH / 100 * 81;

    itemNumberBg = new createjs.Bitmap(loader.getResult('itemNumberBg'));
    centerReg(itemNumberBg);
    itemNumberSelectBg = new createjs.Bitmap(loader.getResult('itemNumberSelectBg'));
    centerReg(itemNumberSelectBg);
    itemNumberBg.x = -500;
    itemNumberSelectBg.x = -500;

    itemTable = new createjs.Bitmap(loader.getResult('itemTable'));
    centerReg(itemTable);
    itemTable.x = itemCard.x;
    itemTable.y = canvasH / 100 * 48;

    selectTitleTxt = new createjs.Text();
    selectTitleTxt.font = "26px quantifybold";
    selectTitleTxt.color = "#fff";
    selectTitleTxt.textAlign = "center";
    selectTitleTxt.lineHeight = 29;
    selectTitleTxt.shadow = 1;
    selectTitleTxt.textBaseline = 'alphabetic';
    selectTitleTxt.text = 'STAGE 1 COMPLETE';
    selectTitleTxt.x = itemBarUser.x;
    selectTitleTxt.y = canvasH / 100 * 25;


    selectTitleTxt2 = new createjs.Text();
    selectTitleTxt2.font = "20px quantifybold";
    selectTitleTxt2.color = "#fff";
    selectTitleTxt2.textAlign = "center";
    selectTitleTxt2.textBaseline = 'alphabetic';
    selectTitleTxt2.text = 'O prueba suerte y que el juego elija por ti.';
    selectTitleTxt2.x = itemBarUser.x;
    selectTitleTxt2.y = canvasH / 100 * 92;

    numberTitleTxt = new createjs.Text();
    numberTitleTxt.font = "28px quantifybold";
    numberTitleTxt.color = "#fff";
    numberTitleTxt.textAlign = "center";
    numberTitleTxt.textBaseline = 'alphabetic';
    numberTitleTxt.text = numberTextDisplay;
    numberTitleTxt.x = itemBarUser.x;
    numberTitleTxt.y = canvasH / 100 * 74;

    var startX = itemBarUser.x;
    var startY = canvasH / 100 * 32;
    var spaceY = 43;

    var extraBall = bonusBall == true ? 1 : 0;
    var totalNum = score_arr.length + extraBall;

    for (var n = 0; n < score_arr.length + extraBall; n++) {
        $.prize['bg' + n] = new createjs.Bitmap(loader.getResult('itemPrizeBg'));
        centerReg($.prize['bg' + n]);
        $.prize['bg' + n].x = startX;
        $.prize['bg' + n].y = startY;

        $.prize['bgselect' + n] = new createjs.Bitmap(loader.getResult('itemPrizeSelectBg'));
        centerReg($.prize['bgselect' + n]);
        $.prize['bgselect' + n].x = startX;
        $.prize['bgselect' + n].y = startY;

        $.prize['text' + n] = new createjs.Text();
        $.prize['text' + n].font = "25px quantifybold";
        $.prize['text' + n].color = "#FFF";
        $.prize['text' + n].textAlign = "left";
        $.prize['text' + n].textBaseline = 'alphabetic';
        $.prize['text' + n].x = itemBarUser.x - 180;
        $.prize['text' + n].y = startY + 10;

        $.prize['score' + n] = new createjs.Text();
        $.prize['score' + n].font = "28px quantifybold";
        $.prize['score' + n].color = "#fff";
        $.prize['score' + n].textAlign = "right";
        $.prize['score' + n].textBaseline = 'alphabetic';
        $.prize['score' + n].x = itemBarUser.x + 180;
        $.prize['score' + n].y = startY + 10;

        var textString = '';
        var scoreString = '';
        var scoreNum = score_arr[totalNum - 1];

        if (bonusBall) {
            if (n == 0) {
                totalNum--;
                textString = matchTextDisplay.replace('[NUMBER]', totalNum);
                scoreString = scoreTextDisplay.replace('[NUMBER]', addCommas(score_arr[totalNum - 1]));
            } else if (n == 1) {
                textString = bonusTextDisplay.replace('[NUMBER]', totalNum);
                scoreString = scoreTextDisplay.replace('[NUMBER]', addCommas(bonusScore[0]));
                scoreNum = bonusScore[0];
                totalNum++;
            } else {
                textString = matchTextDisplay.replace('[NUMBER]', totalNum);
                scoreString = scoreTextDisplay.replace('[NUMBER]', addCommas(score_arr[totalNum - 1]));
            }
        } else {
            textString = matchTextDisplay.replace('[NUMBER]', totalNum);
            scoreString = scoreTextDisplay.replace('[NUMBER]', addCommas(score_arr[totalNum - 1]));
        }

        $.prize['text' + n].text = textString;
        $.prize['score' + n].text = scoreString;
        $.prize['score' + n].score = scoreNum;

        totalNum--;
        startY += spaceY;

        tableContainer.addChild($.prize['bgselect' + n], $.prize['bg' + n], $.prize['text' + n], $.prize['score' + n]);
    }

    tableContainer.addChild(numberTitleTxt);

    buttonLeft = new createjs.Bitmap(loader.getResult('buttonLeft'));
    centerReg(buttonLeft);
    buttonLeft.x = itemCard.x - 170;
    buttonLeft.y = canvasH / 100 * 26;

    buttonRight = new createjs.Bitmap(loader.getResult('buttonRight'));
    centerReg(buttonRight);
    buttonRight.x = itemCard.x + 170;
    buttonRight.y = canvasH / 100 * 26;

    cardContainer.addChild(buttonLeft, buttonRight);

    //result
    itemResult = new createjs.Bitmap(loader.getResult('itemResult'));

    resultTitleTxt = new createjs.Text();
    resultTitleTxt.font = "42px quantifybold";
    resultTitleTxt.color = "#fff";
    resultTitleTxt.textAlign = "center";
    resultTitleTxt.textBaseline = 'alphabetic';
    resultTitleTxt.text = 'STAGE 1 COMPLETE';
    resultTitleTxt.x = canvasW / 2;
    resultTitleTxt.y = canvasH / 100 * 52;

    resultTitleTxt2 = new createjs.Text();
    resultTitleTxt2.font = "42px quantifybold";
    resultTitleTxt2.color = "#fff";
    resultTitleTxt2.textAlign = "center";
    resultTitleTxt2.textBaseline = 'alphabetic';
    resultTitleTxt2.text = '¡EL DUELO ES TUYO!';
    resultTitleTxt2.x = canvasW / 2;
    resultTitleTxt2.y = canvasH / 100 * 42;

    resultTitleTxt3 = new createjs.Text();
    resultTitleTxt3.font = "30px quantifybold";
    resultTitleTxt3.color = "#fff";
    resultTitleTxt3.textAlign = "center";
    resultTitleTxt3.textBaseline = 'alphabetic';

    resultTitleTxt3.x = canvasW / 2;
    resultTitleTxt3.y = canvasH / 100 * 42;






    buttonContinue = new createjs.Bitmap(loader.getResult('buttonContinue'));
    centerReg(buttonContinue);
    createHitarea(buttonContinue);
    buttonContinue.x = canvasW / 2;
    buttonContinue.y = canvasH / 100 * 70;

    //option
    buttonFullscreen = new createjs.Bitmap(loader.getResult('buttonFullscreen'));

    buttonExit = new createjs.Bitmap(loader.getResult('buttonExit'));
    centerReg(buttonExit);


    createHitarea(buttonExit);

    //exit
    itemExit = new createjs.Bitmap(loader.getResult('itemExit'));

    buttonConfirm = new createjs.Bitmap(loader.getResult('buttonConfirm'));
    centerReg(buttonConfirm);
    buttonConfirm.x = canvasW / 100 * 39;
    buttonConfirm.y = canvasH / 100 * 67;

    buttonCancel = new createjs.Bitmap(loader.getResult('buttonCancel'));
    centerReg(buttonCancel);
    buttonCancel.x = canvasW / 100 * 61;
    buttonCancel.y = canvasH / 100 * 67;

    confirmMessageTxt = new createjs.Text();
    confirmMessageTxt.font = "38px quantifybold";
    confirmMessageTxt.color = "#fff";
    confirmMessageTxt.textAlign = "center";
    confirmMessageTxt.textBaseline = 'alphabetic';
    confirmMessageTxt.text = exitMessage;
    confirmMessageTxt.lineHeight = 40;
    confirmMessageTxt.x = canvasW / 2;
    confirmMessageTxt.y = canvasH / 100 * 50;

    confirmContainer.addChild(itemExit, buttonConfirm, buttonCancel, confirmMessageTxt);
    confirmContainer.visible = false;

    if (guide) {
        guideline = new createjs.Shape();
        guideline.graphics.setStrokeStyle(2).beginStroke('red').drawRect((stageW - contentW) / 2, (stageH - contentH) / 2, contentW, contentH);
    }

    mainContainer.addChild(cover, logo, buttonStart);

    gameContainer.addChild(itemBallBg, itemBallShadow, itemBall, itemBallDim, itemBallGuess, itemBallBonus, itemBallHit, itemNumberBg, itemNumberSelectBg, ballsContainer, itemStick, itemSphere, itemShine, buttonSphereStart, itemBar, itemBarBonus, ballsRevealContainer, itemCard, itemBarUser, ballsSelectContainer, buttonLucky, cardContainer, tableContainer, selectTitleTxt, selectTitleTxt2, );
    resultContainer.addChild(itemResult, resultTitleTxt, resultTitleTxt2, buttonContinue);



    canvasContainer.addChild(bg, mainContainer, gameContainer, resultContainer, confirmContainer, buttonExit, guideline);
    stage.addChild(canvasContainer);

    resizeCanvas();
}


/*!
 * 
 * RESIZE GAME CANVAS - This is the function that runs to resize game canvas
 * 
 */
function resizeCanvas() {
    if (canvasContainer != undefined) {
        if (curPage == 'main') {
            buttonExit.visible = false;

        } else {
            buttonExit.visible = true;
            buttonExit.x = (canvasW - offset.x) - 75;
            buttonExit.y = offset.y + 700;

        }
    }
}

/*!
 * 
 * REMOVE GAME CANVAS - This is the function that runs to remove game canvas
 * 
 */
function removeGameCanvas() {
    stage.autoClear = true;
    stage.removeAllChildren();
    stage.update();
    createjs.Ticker.removeEventListener("tick", tick);
    createjs.Ticker.removeEventListener("tick", stage);
}

/*!
 * 
 * CANVAS LOOP - This is the function that runs for canvas loop
 * 
 */
function tick(event) {
    updateGame();
    stage.update(event);
}

/*!
 * 
 * CANVAS MISC FUNCTIONS
 * 
 */
function centerReg(obj) {
    obj.regX = obj.image.naturalWidth / 2;
    obj.regY = obj.image.naturalHeight / 2;
}

function createHitarea(obj) {
    obj.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(0, 0, obj.image.naturalWidth, obj.image.naturalHeight));
}