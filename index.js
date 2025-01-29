let count= 0;

document.getElementById("btn1").onclick = function(){
	count+= 1;
	document.getElementById("h11").textContent= `${count}`;
}