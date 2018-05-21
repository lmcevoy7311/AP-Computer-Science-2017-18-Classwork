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
        var x = getWidth();
var y = getHeight();

function start(){
    bondOptions();
    setTimer(actionBond, 2000);
}

function bondOptions(){
    America();
    Greece();
    headerText();
}

function actionBond(){
    var country = readLine("What country are your bonds from?: ");
    if(country == "Greece"){
        var int = 1.06;
        var countryL = "€";
        coverGreece();
    }
    if(country == "America"){
        var int = 1.02;
        var countryL = "$";
        coverAmerica();
        America();
    }
    stopTimer(actionBond);

    setTimer(questions,2000);
    function questions(){
        var time = readInt("How many years will bonds be owned?: ");
        var money = readInt("What is quantity of investment?: ");
        stopTimer(questions);
        if(country=="America"||country=="Greece"){
            var yes = int*time*money;
            var roundedYes = Math.round(yes);
            var yesText = new Text(countryL + roundedYes, "50pt Arial");
            yesText.setPosition(50,y/2-50);
            yesText.setColor(Color.black);
            yesText.setRotation(0);
            add(yesText);
            
            var webBox = new WebImage("http://demo.qodeinteractive.com/central/wp-content/uploads/2013/05/header.jpg");
            webBox.setSize(x,50);
            webBox.setPosition(0,y/2);
            add(webBox);
            
            var result = roundedYes - money;
            var one = "You made " + countryL + result + " off your ";
            var two = time + " year investment!";
            println(one + two);
            
            var estimateText = new Text(one, "15pt Arial");
            estimateText.setPosition(10,y/2+20);
            estimateText.setColor(Color.black);
            add(estimateText);
            
            var estimateText2 = new Text(two, "15pt Arial");
            estimateText2.setPosition(10,y/2+40);
            estimateText2.setColor(Color.black);
            add(estimateText2);
        }
    }
}

function America(){
    var americanFlagWeb = new WebImage("http://flaglane.com/download/"+
    "american-flag/american-flag-large.jpg");
    americanFlagWeb.setSize(x,y/2);
    add(americanFlagWeb);
}

function Greece(){
    var greekFlagWeb = new WebImage("http://vintagepostcards.org/postcard-history"+
    "/flags/greece-greek-flag.jpg");
    greekFlagWeb.setSize(x,y/2);
    greekFlagWeb.setPosition(0,y/2);
    add(greekFlagWeb);
}

function headerText(){
    var txt1 = new Text("Bond Options: American or Greek", "20pt Arial");
    txt1.setPosition(0,y/2);
    txt1.setColor(Color.black);
    add(txt1);
}

function coverAmerica(){
        var no1 = new WebImage("https://upload.wikimedia.org/wikipedia/commons"+
        "/0/0d/One_US_dollar_note_0127_22.jpg");
        no1.setSize(x,y/2);
        no1.setPosition(0,y/2);
        add(no1);
    }
    function coverGreece(){
        var no2 = new WebImage("https://www.leftovercurrency.com/wp-content/up"+
        "loads/2016/11/1000-greek-drachmas-banknote-apollo-obverse-1.jpg");
        no2.setSize(x,y/2);
        add(no2);
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
