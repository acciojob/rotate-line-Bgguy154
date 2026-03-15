//your JS code here. If required.
const div=document.querySelector("div");

let angle=0;

setInterval(()=>{
	angle+=2;

	div.style.transform=`translate(-50%,50%) rotate(${angle}deg)`
},20)