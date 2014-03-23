#pragma strict

function OnTriggerEnter2D(hitInfo : Collider2D){
	if(hitInfo.name == "Ball"){
		var wallName : String = transform.name;
		audio.Play();
		gameManager.score(wallName);
		hitInfo.gameObject.SendMessage("ResetBall");
	}
}