#pragma strict

static var player1score : int = 0;
static var player2score : int = 0;

var layout : GUISkin;
var ball : Transform;
function Start(){
	ball = GameObject.FindGameObjectWithTag("Ball").transform;
}

static function score (wallName : String) {
	if(wallName == "leftWall"){
		player2score++;
	}
	else if(wallName == "rightWall"){
		player1score++;	
	}
}

function OnGUI(){
	GUI.skin = layout;
	GUI.Label(new Rect(Screen.width/2-150-18, 25, 100, 100), "" + player1score);
	GUI.Label(new Rect(Screen.width/2+150-18, 25, 100, 100), "" + player2score);
	
	if(GUI.Button(new Rect((Screen.width/2)-(121/2), 35, 121, 53), "RESET")){
		player1score = 0;
		player2score = 0;
		
		ball.gameObject.SendMessage("ResetBall");
	}
}