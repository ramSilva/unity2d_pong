#pragma strict

function Start () {
	var randomNr = Random.Range(0f, 1f);
	if(randomNr <= 0.5f){
		rigidbody2D.AddForce(new Vector2(80f, 10f));
	}
	else{
		rigidbody2D.AddForce(new Vector2(-80f, -10f));
	}
}

function OnCollisionEnter2D (colInfo : Collision2D) {
	if(colInfo.collider.tag == "Player"){
		var velocityY = rigidbody2D.velocity.y;
		velocityY = velocityY/2 + colInfo.collider.rigidbody2D.velocity.y/3;
		rigidbody2D.velocity.y = velocityY;
	}
}