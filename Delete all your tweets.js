setInterval(Delete,8000);
document.querySelectorAll( 'ul[aria-labelledby="menu-0"]' )[0].appendChild(newLi);

function Delete(){
document.getElementsByClassName("ProfileTweet-actionButton")[0].click();	
setTimeout(ClickUdalyt, 500);
}


function ClickUdalyt(){
document.getElementsByClassName("js-actionDelete")[0].children[0].click();	
setTimeout(Podtverdit, 500);
}

function Podtverdit(){
document.getElementsByClassName("delete-action")[0].click();
inform();
Vniz();
}
function Vniz(){
window.scrollTo(0, vniz);
//vniz=vniz+200;	
}

function inform(){
	console.log("действие выполнено над "+countdel+"постами")
}

