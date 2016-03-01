Array.prototype.shuffle = function() {
	var input = this;
	for (var i = input.length-1; i >=0; i--) {
		var randomIndex = Math.floor(Math.random()*(i+1));
		var itemAtIndex = input[randomIndex];
		input[randomIndex] = input[i];
		input[i] = itemAtIndex;
	}
	return input;
}
var sp = ['coop.jpg','guntar.png','markoc.png','ozgun.jpg','isezero.jpg','abbox.jpg'];
var g = [
	"DSC05735",
	"DSC05743",
	"DSC05744",
	"DSC05765",
	"DSC05766",
	"DSC05778",
	"DSC05781",
	"DSCN1361",
	"DSCN1362",
	"DSCN1365",
	"DSCN1383",
	"DSCN1390",
	"DSCN1402",
	"DSCN1416",
	"DSCN1727",
	"DSCN1749",
];
var vids = [
	"<iframe class='vid' src='//youtube.com/embed/pnDDU16JXQA' frameborder=0 allowfullscreen ></iframe>",
	"<iframe class='vid' src='//youtube.com/embed/1PBkHmb5VlE' frameborder=0 allowfullscreen ></iframe>",
	"<iframe class='vid' src='//youtube.com/embed/BgsIWMdGpQA' frameborder=0 allowfullscreen ></iframe>",
	"<iframe class='vid' src='//youtube.com/embed/QpxCpjmcPgg' frameborder=0 allowfullscreen ></iframe>",
	"<iframe class='vid' src='//youtube.com/embed/WVJMeOc2MCw' frameborder=0 allowfullscreen ></iframe>",
	"<iframe class='vid' src='//youtube.com/embed/GVfxI4othCg' frameborder=0 allowfullscreen ></iframe>",
	"<iframe class='vid' src='//youtube.com/embed/Tskvrwsa_Qo' frameborder=0 allowfullscreen ></iframe>",
	"<iframe class='vid' src='//youtube.com/embed/xNVrCumNnAI' frameborder=0 allowfullscreen ></iframe>",
	"<iframe class='vid' src='//youtube.com/embed/i519o64tj5w' frameborder=0 allowfullscreen ></iframe>",
	"<iframe class='vid' src='//youtube.com/embed/hX_BykD4cVQ' frameborder=0 allowfullscreen ></iframe>",
	"<iframe class='vid' src='//youtube.com/embed/tXSqx5ZOAF4' frameborder=0 allowfullscreen ></iframe>",
	"<iframe class='vid' src='//youtube.com/embed/-ejVR8xqkfs' frameborder=0 allowfullscreen ></iframe>",
];
//document.getElementsByTagName("body")[0].style.webkitFilter = "blur(0.2em)";
window.onload = function() {
	$(document).ready(function() {
		for(i=0;i<vids.length/4;i++)
			document.getElementById("vidz").innerHTML = vids[i]+"\n"+document.getElementById("vidz").innerHTML;
		return;
	});
	sp.shuffle();
	g.shuffle();
	vids.shuffle();
	for(i=0;i<sp.length;i++)
		document.getElementById('sps').innerHTML = "<div class='img pic contain' data-img='sp/"+sp[i]+"''>.</div>\n"+document.getElementById('sps').innerHTML;
	for(i=0;i<g.length/2;i++)
		document.getElementById('pics').innerHTML = "<div class='img pic' data-img='g/"+g[i]+".lite.jpg'>.</div>\n"+document.getElementById('pics').innerHTML;
	fix_links();
	fix_images();
	document.getElementsByTagName("body")[0].style.animation = "lite 3s ease-in-out 0s 1 normal";
	document.getElementsByTagName("body")[0].style.opacity = "1";
	document.getElementById('map').src = "https://google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.2347980040045!2d29.006860315569625!3d41.041994179297376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a2a2c3b963%3A0x7671d1b9817b8519!2zQmFow6dlxZ9laGlyIMOcbml2ZXJzaXRlc2k!5e0!3m2!1str!2str!4v1452865206865";
	$('#sps').owlCarousel({loop:true,center:true,nav:false,autoplay:true,autoplayTimeout:2500,autoplayHoverPause:true,navText:["&lt;","&gt;"],lazyLoad:true,items:Math.round(window.screen.width/420)});
	$('#pics').owlCarousel({loop:true,center:true,nav:false,autoplay:true,autoplayTimeout:2500,autoplayHoverPause:true,navText:["&lt;","&gt;"],lazyLoad:true,items:Math.round(window.screen.width/480)});
	/*
	pics = document.getElementsByClassName('pic');
	for(i=0;i<pics.length;i++)
		pics[i].onclick = function(e) {
			$(this).toggleClass('fs');
		};
	*/
	return;
};
