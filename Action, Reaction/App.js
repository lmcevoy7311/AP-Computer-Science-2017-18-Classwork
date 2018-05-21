import React, { Component } from 'react';
import { View, WebView, StatusBar } from 'react-native';

export default class App extends Component {
    render() {

        var webViewCode = `
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script type="text/javascript" src="https://static.codehs.com/gulp/4e6f13f254c3349da3545c0301b74b1806afea50/chs-js-lib/chs.js"></script>

<style>
    body, html {
        margin: 0;
        padding: 0;
    }
    canvas {
        margin: 0px;
        padding: 0px;
        display: inline-block;
        vertical-align: top;
    }
    #btn-container {
        text-align: center;
        padding-top: 10px;
    }
    #btn-play {
        background-color: #8cc63e;
    }
    #btn-stop {
        background-color: #de5844;
    }
    .glyphicon {
        margin-top: -3px;
        color: #FFFFFF;
    }
</style>
</head>

<body>
    <div id="canvas-container" style="margin: 0 auto; ">
        <canvas
        id="game"
        width="400"
        height="480"
        class="codehs-editor-canvas"
        style="width: 100%; height: 100%; margin: 0 auto;"
        ></canvas>
    </div>
    <div id="console"></div>
    <div id="btn-container">
        <button class="btn btn-main btn-lg" id="btn-play" onclick='stopProgram(); runProgram();'><span class="glyphicon glyphicon-play" aria-hidden="true"></span></button>
        <button class="btn btn-main btn-lg" id="btn-stop" onclick='stopProgram();'><span class="glyphicon glyphicon-stop" aria-hidden="true"></span></button>
    </div>

<script>
    var console = {};
    console.log = function(msg){
        $("#console").html($("#console").html() + "     " + msg);
    };

    var runProgram = function() {
        //drawing circle
var eyeWidth = 30;
var pupilWidth = 10;
var x = getWidth();
var y = getHeight();
var noseWidth = 10;
var cyan = "#008B8B";
var darkGray = "#A9A9A9";
var pink = 	"#F08080";
var tan = "#e6b800";
var darkBlue = "#000033";
var angryRed = "#D13617";
var happyGreen = "#6FC40A";
var purple = "#9999ff";
var mouthColor = "#2F2F2F";
var mouthX = 100;
var mouthY = 50;

var one = readLine("Is Lebron James the GOAT?");

function start(){
    reactions();
}

function reactions(){
    if(one == "yes"){
        happyFace();
    }else{
        madFace();
    }
}


function mellowFace(){
    backgroundM();
    hairM();
	backCircleM();
	eyesM();
	pupilsM();
	noseM();
	lipsM();
	mouthM();
    eyebrowsM();
    textM();
}

//Code for Mellow FACE below
function textM(){
    var textM = new Text("Try Again?","30pt Arial");
    textM.setPosition(x/2-130,x/2+230);
    add(textM);
}
function backCircleM(){
    var circle1m = new Circle(x/3);
    circle1m.setPosition(x/2,y/2);
    circle1m.setColor(Color.GRAY);
    add(circle1m);
}
function eyesM(){
    var circle2m = new Circle(eyeWidth);
    circle2m.setPosition(x/2-60, y/2-40);
    circle2m.setColor(Color.WHITE);
    add(circle2m);
    var circle3m = new Circle(eyeWidth);
    circle3m.setPosition(x/2+60, y/2-40);
    circle3m.setColor(Color.WHITE);
    add(circle3m);
}
function pupilsM(){
    var circle4m = new Circle(pupilWidth);
    circle4m.setPosition(x/2-60, y/2-30);
    circle4m.setColor(Color.BLACK);
    add(circle4m);
    var circle5m = new Circle(pupilWidth);
    circle5m.setPosition(x/2+60, y/2-30);
    circle5m.setColor(Color.BLACK);
    add(circle5m);
}
function noseM(){
    var arc1m = new Arc(65,0,20,0);
    arc1m.setColor(darkGray);
    arc1m.setPosition(x/2, y/2-30);
    arc1m.rotate(90);
    add(arc1m);
    var arc2m = new Arc(65,0,20,0);
    arc2m.setColor(darkGray);
    arc2m.setPosition(x/2, y/2-30);
    arc2m.rotate(110);
    add(arc2m);
    
    var oval1m = new Oval(noseWidth,noseWidth-2);
    oval1m.setColor(cyan);
    oval1m.setPosition(x/2-10,y/2+25);
    oval1m.rotate(340);
    add(oval1m);
    var oval2m = new Oval(noseWidth,noseWidth-2);
    oval2m.setColor(cyan);
    oval2m.setPosition(x/2+10,y/2+25);
    oval2m.rotate(20);
    add(oval2m);
}
function mouthM(){
    var oval3m = new Oval(mouthX,mouthY);
    oval3m.setColor(darkBlue);
    oval3m.setPosition(x/2,y/2+75);
    add(oval3m);
}
function lipsM(){
    var oval4m = new Oval(mouthX+15,mouthY+15);
    oval4m.setColor(pink);
    oval4m.setPosition(x/2,y/2+75);
    add(oval4m);
}
function wavesM(){
    var wave1m = new Arc(40,0,25,0);
    wave1m.setPosition(x/2,y-80);
    wave1m.rotate(350);
    add(wave1m);
    var wave2m = new Arc(40,0,25,0);
    wave2m.setPosition(x/2-40,y-80);
    wave2m.rotate(350);
    add(wave2m);
    var wave3m = new Arc(40,0,25,0);
    wave3m.setPosition(x/2-80,y-80);
    wave3m.rotate(350);
    add(wave3m);
}
function hands(){
    var finger1b = new Rectangle(24,44);
    finger1b.setPosition(x/8-2,y-102);
    finger1b.setColor(Color.BLACK);
    add(finger1b);
    var finger1 = new Rectangle(20,40);
    finger1.setPosition(x/8,y-100);
    finger1.setColor(tan);
    add(finger1);
    var finger1a = new Rectangle(16,16);
    finger1a.setPosition(x/8,y-90);
    finger1a.setColor(Color.WHITE);
    add(finger1a);
}
function backgroundM(){
    var backgroundm = new Rectangle(x,y);
    backgroundm.setColor(purple);
    add(backgroundm);
}
function hairM(){
    var hair1m = new Arc(40,0,25,0);
    hair1m.rotate(100);
    add(hair1m);
    hair1m.setPosition(x/2,75);
    var hair2m = new Arc(40,0,25,0);
    hair2m.rotate(100);
    add(hair2m);
    hair2m.setPosition(x/2+20,80);
    var hair3m = new Arc(40,0,25,0);
    hair3m.rotate(100);
    add(hair3m);
    hair3m.setPosition(x/2+40,85);
    var hair4m = new Arc(40,0,25,0);
    hair4m.rotate(100);
    add(hair4m);
    hair4m.setPosition(x/2-20,80);
    var hair5m = new Arc(40,0,25,0);
    hair5m.rotate(100);
    add(hair5m);
    hair5m.setPosition(x/2-40,85);
}
function eyebrowsM(){
    var line1m = new Line(x/2-30, y/2-70,x/2-80,y/2-70);
    line1m.setLineWidth(6);
    add(line1m);
    var line2m = new Line(x/2+30, y/2-80,x/2+80,y/2-80);
    line2m.setLineWidth(6);
    add(line2m);
}

////////////////////////////////////////////////////////////////////////////////
//                              CONFUSED FACE = Var+m                         //
////////////////////////////////////////////////////////////////////////////////

function madFace(){
    background();
    hair();
	backCircle();
	eyes();
	pupils();
	nose();
	lips();
	mouth();
    eyebrows();
    text();
}

//Code for MAD FACE below
function text(){
    var text = new Text("No","30pt Arial");
    text.setPosition(x/2-175,x/2+230);
    add(text);
}
function neck(){
    var rect1 = new Rectangle(100,150);
    rect1.setPosition(x/2-50,x-50);
    rect1.setColor(darkGray);
    add(rect1);
}
function backCircle(){
    var circle1 = new Circle(x/3);
    circle1.setPosition(x/2,y/2);
    circle1.setColor(Color.GRAY);
    add(circle1);
}
function eyes(){
    var circle2 = new Circle(eyeWidth);
    circle2.setPosition(x/2-60, y/2-40);
    circle2.setColor(Color.WHITE);
    add(circle2);
    var circle3 = new Circle(eyeWidth);
    circle3.setPosition(x/2+60, y/2-40);
    circle3.setColor(Color.WHITE);
    add(circle3);
}
function pupils(){
    var circle4 = new Circle(pupilWidth);
    circle4.setPosition(x/2-60, y/2-30);
    circle4.setColor(Color.BLACK);
    add(circle4);
    var circle5 = new Circle(pupilWidth);
    circle5.setPosition(x/2+60, y/2-30);
    circle5.setColor(Color.BLACK);
    add(circle5);
}
function nose(){
    var arc1 = new Arc(65,0,20,0);
    arc1.setColor(darkGray);
    arc1.setPosition(x/2, y/2-30);
    arc1.rotate(90);
    add(arc1);
    var arc2 = new Arc(65,0,20,0);
    arc2.setColor(darkGray);
    arc2.setPosition(x/2, y/2-30);
    arc2.rotate(110);
    add(arc2);
    
    var oval1 = new Oval(noseWidth,noseWidth-2);
    oval1.setColor(cyan);
    oval1.setPosition(x/2-10,y/2+25);
    oval1.rotate(340);
    add(oval1);
    var oval2 = new Oval(noseWidth,noseWidth-2);
    oval2.setColor(cyan);
    oval2.setPosition(x/2+10,y/2+25);
    oval2.rotate(20);
    add(oval2);
}
function mouth(){
    var oval3 = new Oval(mouthX,mouthY);
    oval3.setColor(darkBlue);
    oval3.setPosition(x/2,y/2+75);
    add(oval3);
}
function lips(){
    var oval4 = new Oval(mouthX+15,mouthY+15);
    oval4.setColor(pink);
    oval4.setPosition(x/2,y/2+75);
    add(oval4);
}
function waves(){
    var wave1 = new Arc(40,0,25,0);
    wave1.setPosition(x/2,y-80);
    wave1.rotate(350);
    add(wave1);
    var wave2 = new Arc(40,0,25,0);
    wave2.setPosition(x/2-40,y-80);
    wave2.rotate(350);
    add(wave2);
    var wave3 = new Arc(40,0,25,0);
    wave3.setPosition(x/2-80,y-80);
    wave3.rotate(350);
    add(wave3);
}
function hands(){
    var finger1b = new Rectangle(24,44);
    finger1b.setPosition(x/8-2,y-102);
    finger1b.setColor(Color.BLACK);
    add(finger1b);
    var finger1 = new Rectangle(20,40);
    finger1.setPosition(x/8,y-100);
    finger1.setColor(tan);
    add(finger1);
    var finger1a = new Rectangle(16,16);
    finger1a.setPosition(x/8,y-90);
    finger1a.setColor(Color.WHITE);
    add(finger1a);
}
function background(){
    var background = new Rectangle(x,y);
    background.setColor(angryRed);
    add(background);
}
function hair(){
    var hair1 = new Arc(40,0,25,0);
    hair1.rotate(100);
    add(hair1);
    hair1.setPosition(x/2,75);
    var hair2 = new Arc(40,0,25,0);
    hair2.rotate(100);
    add(hair2);
    hair2.setPosition(x/2+20,80);
    var hair3 = new Arc(40,0,25,0);
    hair3.rotate(100);
    add(hair3);
    hair3.setPosition(x/2+40,85);
    var hair4 = new Arc(40,0,25,0);
    hair4.rotate(100);
    add(hair4);
    hair4.setPosition(x/2-20,80);
    var hair5 = new Arc(40,0,25,0);
    hair5.rotate(100);
    add(hair5);
    hair5.setPosition(x/2-40,85);
}
function eyebrows(){
    var line1 = new Line(x/2-30, y/2-70,x/2-60,y/2-90);
    line1.setLineWidth(10);
    add(line1);
    var line2 = new Line(x/2+30, y/2-70,x/2+60,y/2-90);
    line2.setLineWidth(10);
    add(line2);
}

//////////////////////////////////////////////////////////////////////////////////
//                           HAPPY FACE = Var+h                                 //
//////////////////////////////////////////////////////////////////////////////////

function happyFace(){
    backgroundH();
    hairH();
	backCircleH();
	eyesH();
	pupilsH();
	noseH();
	//teethH();
	//lipsH();
	//mouthH();
	smile();
    eyebrowsH();
    textH();
}

function textH(){
    var textH = new Text("Yes","30pt Arial");
    textH.setPosition(x/2-175,x/2+230);
    add(textH);
}
function neckH(){
    var rect1H = new Rectangle(100,150);
    rect1H.setPosition(x/2-50,x-50);
    rect1H.setColor(darkGray);
    add(rect1H);
}
function backCircleH(){
    var circle1H = new Circle(x/3);
    circle1H.setPosition(x/2,y/2);
    circle1H.setColor(Color.GRAY);
    add(circle1H);
}
function eyesH(){
    var circle2H = new Circle(eyeWidth);
    circle2H.setPosition(x/2-60, y/2-40);
    circle2H.setColor(Color.WHITE);
    add(circle2H);
    var circle3H = new Circle(eyeWidth);
    circle3H.setPosition(x/2+60, y/2-40);
    circle3H.setColor(Color.WHITE);
    add(circle3H);
}
function pupilsH(){
    var circle4H = new Circle(pupilWidth);
    circle4H.setPosition(x/2-60, y/2-30);
    circle4H.setColor(Color.BLACK);
    add(circle4H);
    var circle5H = new Circle(pupilWidth);
    circle5H.setPosition(x/2+60, y/2-30);
    circle5H.setColor(Color.BLACK);
    add(circle5H);
}
function noseH(){
    var arc1H = new Arc(65,0,20,0);
    arc1H.setColor(darkGray);
    arc1H.setPosition(x/2, y/2-30);
    arc1H.rotate(90);
    add(arc1H);
    var arc2H = new Arc(65,0,20,0);
    arc2H.setColor(darkGray);
    arc2H.setPosition(x/2, y/2-30);
    arc2H.rotate(110);
    add(arc2H);
    
    var oval1H = new Oval(noseWidth,noseWidth-2);
    oval1H.setColor(cyan);
    oval1H.setPosition(x/2-10,y/2+25);
    oval1H.rotate(340);
    add(oval1H);
    var oval2H = new Oval(noseWidth,noseWidth-2);
    oval2H.setColor(cyan);
    oval2H.setPosition(x/2+10,y/2+25);
    oval2H.rotate(20);
    add(oval2H);
}
function mouthH(){
    var oval3H = new Oval(mouthX,mouthY);
    oval3H.setColor(Color.WHITE);
    oval3H.setPosition(x/2,y/2+75);
    add(oval3H);
}
function lipsH(){
    var oval4H = new Oval(mouthX+15,mouthY+15);
    oval4H.setColor(pink);
    oval4H.setPosition(x/2,y/2+75);
    add(oval4H);
}
function teethH(){
    var teethH1 = new Rectangle(100,100);
    teethH1.setPosition(x/2-50,y/2+70);
    add(teethH1);
}
function wavesH(){
    var wave1H = new Arc(40,0,25,0);
    wave1H.setPosition(x/2,y-80);
    wave1H.rotate(350);
    add(wave1H);
    var wave2H = new Arc(40,0,25,0);
    wave2H.setPosition(x/2-40,y-80);
    wave2H.rotate(350);
    add(wave2H);
    var wave3H = new Arc(40,0,25,0);
    wave3H.setPosition(x/2-80,y-80);
    wave3H.rotate(350);
    add(wave3H);
}
function backgroundH(){
    var backgroundH = new Rectangle(x,y);
    backgroundH.setColor(happyGreen);
    add(backgroundH);
}
function hairH(){
    var hair1H = new Arc(40,0,25,0);
    hair1H.rotate(100);
    add(hair1H);
    hair1H.setPosition(x/2,75);
    var hair2H = new Arc(40,0,25,0);
    hair2H.rotate(100);
    add(hair2H);
    hair2H.setPosition(x/2+20,80);
    var hair3H = new Arc(40,0,25,0);
    hair3H.rotate(100);
    add(hair3H);
    hair3H.setPosition(x/2+40,85);
    var hair4H = new Arc(40,0,25,0);
    hair4H.rotate(100);
    add(hair4H);
    hair4H.setPosition(x/2-20,80);
    var hair5H = new Arc(40,0,25,0);
    hair5H.rotate(100);
    add(hair5H);
    hair5H.setPosition(x/2-40,85);
}
function eyebrowsH(){
    var line1H = new Line(x/2-40, y/2-80,x/2-80,y/2-80);
    line1H.setLineWidth(4);
    add(line1H);
    var line2H = new Line(x/2+40, y/2-80,x/2+80,y/2-80);
    line2H.setLineWidth(4);
    add(line2H);
}


function smile(){
    
    var smile1 = new Arc(55,180,0,0);
    smile1.setPosition(x/2,y/2+55);
    smile1.setColor(mouthColor);
    add(smile1);
}





        if (typeof start === 'function') {
            start();
        }

        // Overrides setSize() if called from the user's code. Needed because
        // we have to change the canvas size and attributes to reflect the
        // user's desired program size. Calling setSize() from user code only
        // has an effect if Fit to Full Screen is Off. If Fit to Full Screen is
        // On, then setSize() does nothing.
        function setSize(width, height) {
            if (!true) {
                // Call original graphics setSize()
                window.__graphics__.setSize(width, height);

                // Scale to screen width but keep aspect ratio of program
                // Subtract 2 to allow for border
                var canvasWidth = window.innerWidth - 2;
                var canvasHeight = canvasWidth * getHeight() / getWidth();

                // Make canvas reflect desired size set
                adjustMarginTop(canvasHeight);
                setCanvasContainerSize(canvasWidth, canvasHeight);
                setCanvasAttributes(canvasWidth, canvasHeight);
            }
        }
    };

    var stopProgram = function() {
        removeAll();
        window.__graphics__.fullReset();
    }

    window.onload = function() {
        if (!false) {
            $('#btn-container').remove();
        }

        var canvasWidth;
        var canvasHeight;
        if (true) {
            // Get device window width and set program size to those dimensions
            setSize(window.innerWidth, window.innerHeight);
            canvasWidth = getWidth();
            canvasHeight = getHeight();

            if (false) {
                // Make room for buttons if being shown
                $('#btn-container').css('padding', '5px 0');
                canvasHeight -= $('#btn-container').outerHeight();
            }

            setCanvasAttributes(canvasWidth, canvasHeight);
        } else {
            // Scale to screen width but keep aspect ratio of program
            // Subtract 2 to allow for border
            canvasWidth = window.innerWidth - 2;
            canvasHeight = canvasWidth * getHeight() / getWidth();

            // Light border around canvas if not full screen
            $('#canvas-container').css('border', '1px solid #beccd4');

            adjustMarginTop(canvasHeight);
        }

        setCanvasContainerSize(canvasWidth, canvasHeight);

        if (true) {
            runProgram();
        }
    };

    // Set the canvas container width and height.
    function setCanvasContainerSize(width, height) {
        $('#canvas-container').width(width);
        $('#canvas-container').height(height);
    }

    // Set the width and height attributes of the canvas. Allows
    // getTouchCoordinates to sense x and y correctly.
    function setCanvasAttributes(canvasWidth, canvasHeight) {
        $('#game').attr('width', canvasWidth);
        $('#game').attr('height', canvasHeight);
    }

    // Assumes the Fit to Full Screen setting is Off. Adjusts the top margin
    // depending on the Show Play/Stop Buttons setting.
    function adjustMarginTop(canvasHeight) {
        var marginTop = (window.innerHeight - canvasHeight)/2;
        if (false) {
            marginTop -= $('#btn-container').height()/3;
        }
        $('#canvas-container').css('margin-top', marginTop);
    }
</script>
</body>
</html>
`;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden />
                <WebView
                    source={{html: webViewCode, baseUrl: "/"}}
                    javaScriptEnabled={true}
                    style={{ flex: 1 }}
                    scrollEnabled={false}
                    bounces={false}
                    scalesPageToFit={false}
                ></WebView>
            </View>
        );
    }
}
