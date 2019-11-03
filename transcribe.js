//Gim: 1 - vyr, 2 - mot, 3 - taikyti ir vyr ir mot gimines zodziui
var TaisyklDE = [];
var TaisyklPL = [];

function addEntryDE(KKont2, KKont1, ES, DKont1, DKont2, DKont3, Gim, FonV, PoslR, PoslT) {
  TaisyklDE.push({KKont2, KKont1, ES, DKont1, DKont2, DKont3, Gim, FonV, PoslR, PoslT});
}

function addEntryPL(KKont2, KKont1, ES, DKont1, DKont2, DKont3, Gim, FonV, PoslR, PoslT) {
  TaisyklPL.push({KKont2, KKont1, ES, DKont1, DKont2, DKont3, Gim, FonV, PoslR, PoslT});
}


//https://www.mii.lt/informatica/pdf/INFO183.pdf

//Kkont2 - kairysis kontekstas, dvi raides i kaire.
//Kkont1 - viena raide i kaire.
//Es - einamoji raide
//Dkont - 1 2 3 raides i deine
//Gim - gimine vyrika, moterika ar betkuri
//Fonv - raide, i kuria keisti
//Poslr - per kiek raidiu pasislinkti
//Poslt - per kiek taisykliu pasislinkti


function transkribavimoTaisyklesDE() {
//A raide (2  taisykle ziuret)
//addEntryDE( "","",'A',"Y","BCDFGHJKLMNPRTVZ","",3,"AI",3,1 );// samplaika lieka viename skiemenyje (4 taisykle)
//addEntryDE( "","",'A',"I","BCDFGHJKLMNPRTVZ","",3,"AI",3,1 );// samplaika lieka viename skiemenyje (4 taisykle)
//addEntryDE( "","",'Ä',"U","BCDFGHJKLMNPRTVZ","",3,"OI",3,1 );//samplaika lieka viename skiemenyje (5 taisykle)
//addEntryDE( "","",'A',"E","H","",3,"Ė",3,1 );//paprastas keitimas (3 taisykle)
//addEntryDE( "","",'A',"Y","","",3,"AJ",2,1 );// samplaika skyla i skirtingus skiemenis (4 taisykle)
//addEntryDE( "","",'A',"I","","",3,"AJ",2,1 );// samplaika skyla i skirtingus skiemenis (4 taisykle)
//addEntryDE( "","",'A',"H","","",3,"A",2,1 );//paprastas keitimas (1 taisykle)
//addEntryDE( "","",'A',"E","","",3,"E",2,1 );//paprastas keitimas (2 taisykle)
//addEntryDE( "","",'Ä',"H","","",3,"Ė",2,1 );//paprastas keitimas (3 taisykle)
//addEntryDE( "","",'Ä',"U","","",3,"OJ",2,1 );//samplaika skyla i skirtingus skiemenis (5 taisykle)
//addEntryDE( "","",'A',"A","","",3,"A",2,1 );//paprastas keitimas (1 taisykle)
//addEntryDE( "","",'Ä',"","","",3,"E",1,1 );//paprastas keitimas (2 taisykle)
//addEntryDE( "","",'A',"","","",3,"A",1,1 );////paprastas keitimas (1 taisykle)

//B raide
//addEntryDE( "","",'B',"B","","",3,"B",2,1 );//paprastas keitimas (6 taisykle)
//addEntryDE( "","",'B',"","","",3,"B",1,1 );//paprastas keitimas (6 taisykle)

//C raide
//addEntryDE( "","",'C',"H","S","",3,"CHS",3,1 );//paprastas keitimas (10 taisykle)
//addEntryDE( "","",'C',"H","","",3,"CH",2,1 );//paprastas keitimas (9 taisykle)
//addEntryDE("","",'C',"AOUPBTDKGFVSZJXHLMNR","","",3,"K",1,1 );//paprastas keitimas (7 taisykle)
//addEntryDE("","AOUPBTDKGFVSZJXHLMNR",'C',"","","",3,"K",1,1 );//paprastas keitimas (7 taisykle)
//addEntryDE("","",'C',"E","","",3,"C",1,1 );//paprastas keitimas (7 taisykle)
//addEntryDE("","",'C',"I","","",3,"C",1,1 );//paprastas keitimas (7 taisykle)
//addEntryDE("","",'C',"Y","","",3,"C",1,1 );//paprastas keitimas (7 taisykle)
//addEntryDE( "","",'C',"K","","",3,"K",2,1 );//paprastas keitimas (8 taisykle)
//addEntryDE( "","",'C',"","","",3,"C",1,1 );//paprastas keitimas (7 taisykle)

//D raide
//addEntryDE( "","",'D',"D","","",3,"D",1,2 );//paprastas keitimas (11 taisykle)
//addEntryDE( "","",'D',"T","","",3,"T",1,2 );//paprastas keitimas (12 taisykle)
//addEntryDE( "","",'D',"","","",3,"D",1,1 );//paprastas keitimas (11 taisykle)

//E raide
//addEntryDE( "","",'E',"H","LMNRAEIOUÄÖÜ","",3,"Ė",1,1 );//paprastas keitimas (13 taisykle)- kai E ilgas
//addEntryDE( "","",'E',"BCDFGHJKLMNPRTVZ","","",3,"Ė",1,1 );//paprastas keitimas (13 taisykle)- kai E ilgas atviras skiemuo
//addEntryDE( "","",'E',"H","","",3,"Ė",1,1 );//paprastas keitimas (14 taisykle)
//addEntryDE( "","",'E',"E","","",3,"Ė",1,1 );//paprastas keitimas (14 taisykle)
//addEntryDE( "","",'E',"I","BCDFGHJKLMNPRTVZ","",3,"EI",1,1 );//paprastas keitimas (14 taisykle)
//addEntryDE( "","",'E',"I","","",3,"EJ",1,1 );//paprastas keitimas (14 taisykle)
//addEntryDE( "","",'E',"","","",3,"Ė",1,1 );//paprastas keitimas (14 taisykle)

}

function transkribavimoTaisyklesPL() {
addEntryPL( "","I",'A',"_","","",2,"JA",2,2 );
addEntryPL( "","",'A',"","","",3,"A",1,1 );
addEntryPL( "","",'À',"BP","","",3,"OM",1,2 ); // A nosine didzioji \xC0
addEntryPL( "","",'À',"","","",3,"ON",1,1 );
addEntryPL( "","",'B',"","","",3,"B",1,1 );
addEntryPL( "","",'C',"H","","",3,"CH",2,3 );
addEntryPL( "","",'C',"Z","","",3,"È",2,2 ); //=> C su stogeliu didzioji \xC8
addEntryPL( "","",'C',"","","",3,"C",1,1 );
addEntryPL( "","",'Ã',"","","",3,"C",1,1 ); // C su desininiu kirciu didzioji \xC3
addEntryPL( "","",'D',"Z","","",3,"DZ",2,4 );
addEntryPL( "","",'D',"Ê","","",3,"DZ",2,3 ); // Z su desininiu kirciu \xCA
addEntryPL( "","",'D',"Ý","","",3,"DÞ",2,2 ); // Z su tasku \xDD => Z su stogeliu didzioji \xD
addEntryPL( "","",'D',"","","",3,"D",1,1 );
addEntryPL( "","",'E',"","","",3,"E",1,1 );
addEntryPL( "","",'Æ',"BP","","",3,"EM",1,2 ); // E nosine didzioji \xC6
addEntryPL( "","",'Æ',"","","",3,"EN",1,1 );
addEntryPL( "","",'F',"","","",3,"F",1,1 );
addEntryPL( "","",'G',"","","",3,"G",1,1 );
addEntryPL( "","",'H',"","","",3,"H",1,1 );
addEntryPL( "","",'I',"EÆ","","",3,"",1,2 ); // E nosine didzioji \xC6
addEntryPL( "","",'I',"","","",3,"I",1,1 );
addEntryPL( "","AEOÓ",'J',"","","",3,"I",1,2 ); // O su desininiu kirciu didzioji \xD3, U ??? 
addEntryPL( "","",'J',"","","",3,"J",1,1 );
addEntryPL( "","",'K',"","","",3,"K",1,1 );
addEntryPL( "","",'L',"AOUÀÓ_","","",3,"LI",1,2 ); // A su nosine didzioji \xC0, O su desininiu kirciu didzioji \xD3, O ???
addEntryPL( "","",'L',"","","",3,"L",1,1 );
addEntryPL( "","",'Ù',"Ù","","",3,"",1,1 ); // L perbraukta didzioji \xD9
addEntryPL( "","",'Ù',"","","",3,"L",1,1 );
addEntryPL( "","",'M',"","","",3,"M",1,1 );
addEntryPL( "","",'N',"N","","",3,"",1,1 ); // dvi N is eiles
addEntryPL( "","",'N',"","","",3,"N",1,1 );
addEntryPL( "","",'Ñ',"","","",3,"N",1,1 ); // N su desininiu kirciu didzioji \xD1
addEntryPL( "","",'O',"_","","",1,"A",2,2 ); // Domeiko => Domeika (vyr)
addEntryPL( "","",'O',"","","",3,"O",1,1 );
addEntryPL( "","",'Ó',"","","",3,"U",1,1 ); // O su desininiu kirciu didzioji \xD3
addEntryPL( "","",'P',"","","",3,"P",1,1 );
addEntryPL( "C","H",'R',"Z","","",3,"Ð",2,4 ); //=> S su stogeliu didzioji \xD0
addEntryPL( "","KPT",'R',"Z","","",3,"Ð",2,3 );
addEntryPL( "","",'R',"Z","","",3,"Þ",2,2 ); //=> Z su stogeliu didzioji \xDE
addEntryPL( "","",'R',"","","",3,"R",1,1 );
addEntryPL( "","",'S',"Z","","",3,"Ð",2,2 ); //=> S su stogeliu didzioji \xD0
addEntryPL( "","",'S',"","","",3,"S",1,1 );
addEntryPL( "","",'Ú',"","","",3,"S",1,1 ); // S su desininiu kirciu didzioji \xDA
addEntryPL( "","",'T',"T","","",3,"",1,1 ); // dvi T is eiles
addEntryPL( "","",'T',"","","",3,"T",1,1 );
addEntryPL( "","",'U',"","","",3,"U",1,1 );
addEntryPL( "","",'W',"","","",3,"V",1,1 );
addEntryPL( "","",'Y',"_","","",1,"AS",2,2 ); //Wazny => Vaznas, bet Jerzy => Jezis ???
addEntryPL( "","",'Y',"","","",3,"Y",1,1 );
addEntryPL( "","",'Z',"","","",3,"Z",1,1 );
addEntryPL( "","",'Ê',"","","",3,"Z",1,1 ); // Z su desininiu kirciu \xCA
addEntryPL( "","",'Ý',"","","",3,"Þ",1,1 ); // Z su tasku \xDD => Z su stogeliu didzioji \xDE
addEntryPL( "","",'Q',"","","",3,"KU",1,1 );
addEntryPL( "","",'V',"","","",3,"V",1,1 );
addEntryPL( "","",'X',"","","",3,"KS",1,1 );
addEntryPL( "","I",'_',"","","",1,"S",1,4 ); //Lontkovski => Lontkovskis
addEntryPL( "C","Z",'_',"","","",1,"IUS",1,3 ); //Wonsowitcz => Vonsovi?ius
addEntryPL( "","KWTFNZHÙ",'_',"","","",1,"AS",1,2 ); //L perbraukta didzioji \xD9, Wenzyk => Venzykas, Mecyslaw => Mecyslavas, Szymon => Symonas, Pavel => Pavelas, Gregorz => Gregozas, Kaitoch => Kaitochas, 
addEntryPL( "","ÑÚ",'_',"","","",1,"IS",1,1 );  // N su desininiu kirciu didzioji \xD1, S su desininiu kirciu didzioji \xDA Pienkos => Penkosis
addEntryPL( "","Ñ",'_',"","","",2,"Ë",1,1 );  // N su desininiu kirciu didzioji \xD1 => E su tasku didzioji \xCB
addEntryPL( "","",'_',"","","",3,"",1,1 );
addEntryPL( "","",' ',"","","",3,"",1,1 );	
}

window.onload = function(e){ 
    transkribavimoTaisyklesPL();
	console.log("TaisyklPL.length=" + TaisyklPL.length);
	transkribavimoTaisyklesDE();	
	console.log("TaisyklDE.length=" + TaisyklDE.length);
	document.getElementById("tekstasInput")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("myButton").click();
    }
});
}

function getLetterCaseType(word){
	if(word[0] == word[0].toLowerCase()) 
		return 0;
	else if(word[1] == word[1].toLowerCase())
		return 1;
	else return 2;
}

function setLetterCaseType(caseType, word){
	if(caseType == 2) 
		return word;
	else if(caseType == 1)
		return word.charAt(0) + word.slice(1).toLowerCase();
	else return word.toLowerCase();
}

function transkrDE(eil1, Gim) {
	var TrEil = "";
	var i=0, j=0, ilg = 0;
	var eil = "";
	var letterCaseType = 0; // 0 - zodyje visos raides mazosios, 1 - pirma raide didzioji, kitos mazosios, 2 - visos didziosios raides

	letterCaseType = getLetterCaseType(eil1);

	eil = "__" + eil1.toUpperCase(); //eil = eil1_.split("");	// is stringo eil1 padarome masyva eil
	ilg = eil.length;
	eil = eil + "____0"; 
	
	TrEil = ""; //TrEil = "0";
	i = 2;
	j = 0;
	
	// Taisykliu paieska
	while(i < ilg + 1) // buvo eil1.length + 3 //buvo +1
	{
		if (TaisyklDE[j].ES != eil[i]) 
			j += TaisyklDE[j].PoslT;
		else if(  ((TaisyklDE[j].KKont2!="") ? (TaisyklDE[j].KKont2).indexOf(eil[i-2])+1 : 1)  //+1 nes indexOf grazina -1, o kad veiktu operacija && reikia, kad indexOf grazintu 0, jei nerado.
				&&((TaisyklDE[j].KKont1!="") ? (TaisyklDE[j].KKont1).indexOf(eil[i-1])+1 : 1)
				&&((TaisyklDE[j].DKont1!="") ? (TaisyklDE[j].DKont1).indexOf(eil[i+1])+1 : 1)
				&&((TaisyklDE[j].DKont2!="") ? (TaisyklDE[j].DKont2).indexOf(eil[i+2])+1 : 1)
				&&((TaisyklDE[j].DKont3!="") ? (TaisyklDE[j].DKont3).indexOf(eil[i+3])+1 : 1)
				&&(TaisyklDE[j].Gim & Gim))
		{

			i += TaisyklDE[j].PoslR;
			TrEil = TrEil.concat(TaisyklDE[j].FonV);
			j = 0; //new 2018 11 22
		}
		else j++;
		if (j > TaisyklDE.length - 1) { j = 0; i++; }
	}
	return setLetterCaseType(letterCaseType, TrEil);
}


function transkrPL(eil1, Gim) {

	var TrEil = "";
	var i=0, j=0, ilg = 0;
	var eil = "";
	var letterCaseType = 0; // 0 - zodyje visos raides mazosios, 1 - pirma raide didzioji, kitos mazosios, 2 - visos didziosios raides

	letterCaseType = getLetterCaseType(eil1);

	eil = "__" + eil1.toUpperCase(); //eil = eil1_.split("");	// is stringo eil1 padarome masyva eil
	ilg = eil.length;
	eil = eil + "____0"; 
	
	TrEil = ""; //TrEil = "0";
	i = 2;
	j = 0;
	
	// Taisykliu paieska
	while(i < ilg + 1) // buvo eil1.length + 3 //buvo +1
	{
		if (TaisyklPL[j].ES != eil[i]) 
			j += TaisyklPL[j].PoslT;
		else if(  ((TaisyklPL[j].KKont2!="") ? (TaisyklPL[j].KKont2).indexOf(eil[i-2])+1 : 1)  //+1 nes indexOf grazina -1, o kad veiktu operacija && reikia, kad indexOf grazintu 0, jei nerado.
				&&((TaisyklPL[j].KKont1!="") ? (TaisyklPL[j].KKont1).indexOf(eil[i-1])+1 : 1)
				&&((TaisyklPL[j].DKont1!="") ? (TaisyklPL[j].DKont1).indexOf(eil[i+1])+1 : 1)
				&&((TaisyklPL[j].DKont2!="") ? (TaisyklPL[j].DKont2).indexOf(eil[i+2])+1 : 1)
				&&((TaisyklPL[j].DKont3!="") ? (TaisyklPL[j].DKont3).indexOf(eil[i+3])+1 : 1)
				&&(TaisyklPL[j].Gim & Gim))
		{

			i += TaisyklPL[j].PoslR;
			TrEil = TrEil.concat(TaisyklPL[j].FonV);
			j = 0; //new 2018 11 22
		}
		else j++;
		if (j > TaisyklPL.length - 1) { j = 0; i++; }
	}
	return setLetterCaseType(letterCaseType, TrEil);
}

function switchToTransform() {

if(document.getElementById("kalba").value=="pl" || document.getElementById("kalba").value=="en"){
	transform();
}
else{
	transformDE();
}
}

function transform() {
	var textOut = "";
	var textIn = document.getElementById("tekstasInput").value;
	console.log("textIn=" + textIn + " kalba=" + document.getElementById("kalba").value + " gimine=" + document.getElementById("gimine").value);
	
	if(pavardesPL.has(textIn)) {
		textOut = pavardesPL.get(textIn);
	} else {
		textOut = transkrPL(document.getElementById("tekstasInput").value, document.getElementById("gimine").value);
	}
	
	console.log("textOut=" + textOut);
	document.getElementById("tekstasOutput").value = textOut;
	
}

function transformDE() {
	var textOut = "";
	var textIn = document.getElementById("tekstasInput").value;
	console.log("textIn=" + textIn + " kalba=" + document.getElementById("kalba").value + " gimine=" + document.getElementById("gimine").value);

	if(pavardesDE.has(textIn)) {
		textOut = pavardesDE.get(textIn);
	} else {
		textOut = transkrDE(document.getElementById("tekstasInput").value, document.getElementById("gimine").value);
	}
	document.getElementById("tekstasOutput").value = textOut;
}

