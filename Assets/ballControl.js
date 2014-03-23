#pragma strict

var ballSpeed : float = 20f;

function Start () {
	yield WaitForSeconds(2);
	SpawnBall();
}

function Update(){
	var xVelocity = rigidbody2D.velocity.x;
	if((xVelocity < ballSpeed || xVelocity > ballSpeed) && xVelocity != 0){
		if(xVelocity > 0){
			rigidbody2D.velocity.x = ballSpeed;
		}
		else if(xVelocity < 0){
			rigidbody2D.velocity.x = -ballSpeed;
		}
	}
}

function OnCollisionEnter2D (colInfo : Collision2D) {
	if(colInfo.collider.tag == "Player"){
		rigidbody2D.velocity.y = rigidbody2D.velocity.y/2 + colInfo.collider.rigidbody2D.velocity.y/3;
		audio.pitch = Random.Range(0.9f, 1.2f);
		audio.Play();
	}
}

function ResetBall(){
	rigidbody2D.velocity = new Vector2(0f, 0f);
	transform.position = new Vector2(0.0f, 0.0f);
	
	yield WaitForSeconds(0.5f);
	SpawnBall();
}

function SpawnBall(){
	var randomNr = Random.Range(0f, 1f);
	if(randomNr <= 0.5f){
		rigidbody2D.velocity = (new Vector2(ballSpeed, 2f));
	}
	else{
		rigidbody2D.velocity = (new Vector2(-ballSpeed, -2f));
	}
}