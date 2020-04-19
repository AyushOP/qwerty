onload  = start;

function start(){
var i = 1;
function Move(){
	i = (i%4)+1;
	document.getElementById('i'+i).checked = true;
}
setInterval(Move,4000);
}
