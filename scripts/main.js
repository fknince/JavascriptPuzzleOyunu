// JavaScript Document
var w;
rastgeleResimAtama();
function  _(id)
{
	return document.getElementById(id);
}

var droppedIn=false;
var takedObject;
var targetObject;
var takedSource;
var targetSource;
var targetId;
var takedId;
function drag_start(event)
{

	event.dataTransfer.dropEffect="move";

	takedId=event.target.getAttribute("id");
	takedObject=_(takedId);
	takedSource=takedObject.style.backgroundImage;
	
	
	
	alanlariCiz();
	
	
}
function drag_enter(event)
{
	
		targetId=event.target.getAttribute("id");
		targetObject=_(targetId);
		targetSource=targetObject.style.backgroundImage;
		moveCheck(takedId);
		
		
		
				
		
		
		
		
		
}

function drag_leave(event)
{
	
	
}

function drag_drop(event)
{
	event.preventDefault();
	var isMove=false;
	var gelenDizi=moveCheck(takedId);
	for(var i=0;i<gelenDizi.length;i++)
	{
		if(gelenDizi[i] == targetId)
			isMove=true;	
	}
	if(isMove)
	{
		targetObject.style.backgroundImage=takedSource;
		takedObject.style.backgroundImage=targetSource;
		isMove=false;
		
	}
	gameCheck();
	
	
	
	
	
	
			
	
	
	
	
	
	
}

function drag_end(event)
{
	if(droppedIn == false)
	{
		defaultBorders();
		setFullOpacity();
		
	}
	droppedIn=false;
}

function alanlariCiz()
{
	
	
	//parçaları borderları kırmızı yapma
	_("parca00").style.border="1px solid red";
	
	
	_("parca01").style.border="1px solid red";

	
	_("parca02").style.border="1px solid red";

	
	_("parca10").style.border="1px solid red";
	
	
	_("parca11").style.border="1px solid red";

	
	_("parca12").style.border="1px solid red";

	
	_("parca20").style.border="1px solid red";

	
	_("parca21").style.border="1px solid red";

	
	_("parca22").style.border="1px solid red";
	
	_(takedObject.getAttribute("id")).style.border="1px solid white";

	
	
	
	
}

function defaultBorders()
{
	_("parca00").style.border=null;
	
	
	_("parca01").style.border=null;

	
	_("parca02").style.border=null;

	
	_("parca10").style.border=null;
	
	
	_("parca11").style.border=null;

	
	_("parca12").style.border=null;

	
	_("parca20").style.border=null;

	
	_("parca21").style.border=null;

	
	_("parca22").style.border=null;
}

function setHalfOpacity()
{
	_("parca00").style.opacity="0.5";
	
	_("parca01").style.opacity="0.5";
	
	_("parca02").style.opacity="0.5";
	
	_("parca10").style.opacity="0.5";
	
	_("parca11").style.opacity="0.5";
	
	_("parca12").style.opacity="0.5";
	
	_("parca20").style.opacity="0.5";
	
	_("parca21").style.opacity="0.5";
	
	_("parca22").style.opacity="0.5";
	
	
	
}
function setFullOpacity()
{
	_("parca00").style.opacity="1";
	
	_("parca01").style.opacity="1";
	
	_("parca02").style.opacity="1";
	
	_("parca10").style.opacity="1";
	
	_("parca11").style.opacity="1";
	
	_("parca12").style.opacity="1";
	
	_("parca20").style.opacity="1";
	
	_("parca21").style.opacity="1";
	
	_("parca22").style.opacity="1";
	
	
	
}

function rastgeleResimAtama()
{
	var array=["00","01","02","10","11","12","20","21","22"];
	var shuffledArray=shuffle(array);
	var sayac=0;
	for(var i=0;i<3;i++)
	{
		for(var j=0;j<3;j++)
		{
			var metin="url(images/col"+shuffledArray[sayac]+".png";
			_(new String("parca"+i+j)).style.backgroundImage=metin;
			sayac++;
		}
	}
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var satirlar;
var sutunlar;
var opsiyonlar=new Array();

function moveCheck(taked)
{
	var satir=parseInt(taked[5]);
	var sutun=parseInt(taked[6]);
	
	
	
	if(satir == 0)
		satirlar=[1];
	else if(satir == 1)
		satirlar=[0,2];
	else if(satir == 2)
		satirlar=[1]
	
	if(sutun == 0)
		sutunlar=[1];
	else if(sutun == 1)
		sutunlar=[0,2];
	else if(sutun == 2)
		sutunlar=[1]
	
	
	
	
	var donecek=[];
	
	for(var i=0;i<satirlar.length;i++)
	{
		donecek.push("parca"+satirlar[i]+sutun);
	}
	for(var i=0;i<sutunlar.length;i++)
	{
		donecek.push("parca"+satir+sutunlar[i]);
	}
	
	//opacity değiştirme
	setHalfOpacity();
	for(var i=0;i<donecek.length;i++)
	{
		_(donecek[i]).style.opacity="1";
	}
	
	return donecek;
	
	
	
	
	
}

function gameCheck()
{
	var isWin=true;
	if(_("parca00").style.backgroundImage != 'url("images/col00.png")')
		isWin=false;
	
	if(_("parca01").style.backgroundImage != 'url("images/col01.png")')
		isWin=false
	
	if(_("parca02").style.backgroundImage != 'url("images/col02.png")')
		isWin=false
	
	if(_("parca10").style.backgroundImage != 'url("images/col10.png")')
		isWin=false
		
	if(_("parca11").style.backgroundImage != 'url("images/col11.png")')
		isWin=false
		
	if(_("parca12").style.backgroundImage != 'url("images/col12.png")')
		isWin=false
		
	if(_("parca20").style.backgroundImage != 'url("images/col20.png")')
		isWin=false
		
	if(_("parca21").style.backgroundImage != 'url("images/col21.png")')
		isWin=false
	
	if(_("parca22").style.backgroundImage != 'url("images/col22.png")')
		isWin=false
	
		

	if(isWin)
	{
		var replay=confirm("Tebrikler.\nTekrar oynamak için tamam'a bas.");
		if(replay)
			rastgeleResimAtama();
	}
		
		
	
}


