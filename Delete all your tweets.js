let countdel=0;
let vniz=200;
function main(){
	if(document.querySelector("section[aria-labelledby=accessible-list-1] > div >div").childElementCount!=0){
		setTimeout(deletee,8000);
	}else{
		console.log("END");	
	}
}

function deletee(){
	document.querySelector("div[data-testid=caret]").click();
	setTimeout(ClickUdalyt, 500);
}
function ClickUdalyt(){
	document.querySelector("div[role=menu] div[role=menuitem]").click();	
	setTimeout(podtverdit, 500);
}
function podtverdit(){
	document.querySelectorAll("div[role=button]")[1].click();
	countdel++
	inform();
	vniz();
	main();
}
function vniz(){
	window.scrollTo(0, vniz);
vniz=vniz+200;	
}

function inform(){
	console.log("действие выполнено над "+countdel+" постами")
}
main();
