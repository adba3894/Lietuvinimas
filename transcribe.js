//Gim: 1 - vyr, 2 - mot, 3 - taikyti ir vyr ir mot gimines zodziui
//transkrPLibavimo taisykles
var Taisykl = [];

function addEntry(KKont2, KKont1, ES, DKont1, DKont2, DKont3, Gim, FonV, PoslR, PoslT) {
  Taisykl.push({KKont2, KKont1, ES, DKont1, DKont2, DKont3, Gim, FonV, PoslR, PoslT});
}

function transkribavimoTaisyklesPL() {
	
addEntry( "","I",'A',"_","","",2,"JA",2,2 );
addEntry( "","",'A',"","","",3,"A",1,1 );

addEntry( "","",'À',"BP","","",3,"OM",1,2 ); // A nosine didzioji \xC0
addEntry( "","",'À',"","","",3,"ON",1,1 );

addEntry( "","",'B',"","","",3,"B",1,1 );

addEntry( "","",'C',"H","","",3,"CH",2,3 );
addEntry( "","",'C',"Z","","",3,"È",2,2 ); //=> C su stogeliu didzioji \xC8
addEntry( "","",'C',"","","",3,"C",1,1 );

addEntry( "","",'Ã',"","","",3,"C",1,1 ); // C su desininiu kirciu didzioji \xC3

addEntry( "","",'D',"Z","","",3,"DZ",2,4 );
addEntry( "","",'D',"Ê","","",3,"DZ",2,3 ); // Z su desininiu kirciu \xCA
addEntry( "","",'D',"Ý","","",3,"DÞ",2,2 ); // Z su tasku \xDD => Z su stogeliu didzioji \xDE
addEntry( "","",'D',"","","",3,"D",1,1 );

addEntry( "","",'E',"","","",3,"E",1,1 );

addEntry( "","",'Æ',"BP","","",3,"EM",1,2 ); // E nosine didzioji \xC6
addEntry( "","",'Æ',"","","",3,"EN",1,1 );

addEntry( "","",'F',"","","",3,"F",1,1 );

addEntry( "","",'G',"","","",3,"G",1,1 );

addEntry( "","",'H',"","","",3,"H",1,1 );

addEntry( "","",'I',"EÆ","","",3,"",1,2 ); // E nosine didzioji \xC6
addEntry( "","",'I',"","","",3,"I",1,1 );

addEntry( "","AEOÓ",'J',"","","",3,"I",1,2 ); // O su desininiu kirciu didzioji \xD3, U ??? 
addEntry( "","",'J',"","","",3,"J",1,1 );

addEntry( "","",'K',"","","",3,"K",1,1 );

addEntry( "","",'L',"AOUÀÓ_","","",3,"LI",1,2 ); // A su nosine didzioji \xC0, O su desininiu kirciu didzioji \xD3, O ???
addEntry( "","",'L',"","","",3,"L",1,1 );

addEntry( "","",'Ù',"Ù","","",3,"",1,1 ); // L perbraukta didzioji \xD9
addEntry( "","",'Ù',"","","",3,"L",1,1 );

addEntry( "","",'M',"","","",3,"M",1,1 );

addEntry( "","",'N',"N","","",3,"",1,1 ); // dvi N is eiles
addEntry( "","",'N',"","","",3,"N",1,1 );

addEntry( "","",'Ñ',"","","",3,"N",1,1 ); // N su desininiu kirciu didzioji \xD1

addEntry( "","",'O',"_","","",1,"A",2,2 ); // Domeiko => Domeika (vyr)
addEntry( "","",'O',"","","",3,"O",1,1 );

addEntry( "","",'Ó',"","","",3,"U",1,1 ); // O su desininiu kirciu didzioji \xD3

addEntry( "","",'P',"","","",3,"P",1,1 );

addEntry( "C","H",'R',"Z","","",3,"Ð",2,4 ); //=> S su stogeliu didzioji \xD0
addEntry( "","KPT",'R',"Z","","",3,"Ð",2,3 );
addEntry( "","",'R',"Z","","",3,"Þ",2,2 ); //=> Z su stogeliu didzioji \xDE
addEntry( "","",'R',"","","",3,"R",1,1 );

addEntry( "","",'S',"Z","","",3,"Ð",2,2 ); //=> S su stogeliu didzioji \xD0
addEntry( "","",'S',"","","",3,"S",1,1 );

addEntry( "","",'Ú',"","","",3,"S",1,1 ); // S su desininiu kirciu didzioji \xDA

addEntry( "","",'T',"T","","",3,"",1,1 ); // dvi T is eiles
addEntry( "","",'T',"","","",3,"T",1,1 );

addEntry( "","",'U',"","","",3,"U",1,1 );
addEntry( "","",'W',"","","",3,"V",1,1 );

addEntry( "","",'Y',"_","","",1,"AS",2,2 ); //Wazny => Vaznas, bet Jerzy => Jezis ???
addEntry( "","",'Y',"","","",3,"Y",1,1 );

addEntry( "","",'Z',"","","",3,"Z",1,1 );

addEntry( "","",'Ê',"","","",3,"Z",1,1 ); // Z su desininiu kirciu \xCA
addEntry( "","",'Ý',"","","",3,"Þ",1,1 ); // Z su tasku \xDD => Z su stogeliu didzioji \xDE

addEntry( "","",'Q',"","","",3,"KU",1,1 );
addEntry( "","",'V',"","","",3,"V",1,1 );
addEntry( "","",'X',"","","",3,"KS",1,1 );

addEntry( "","I",'_',"","","",1,"S",1,4 ); //Lontkovski => Lontkovskis
addEntry( "C","Z",'_',"","","",1,"IUS",1,3 ); //Wonsowitcz => Vonsovi?ius
addEntry( "","KWTFNZHÙ",'_',"","","",1,"AS",1,2 ); //L perbraukta didzioji \xD9, Wenzyk => Venzykas, Mecyslaw => Mecyslavas, Szymon => Symonas, Pavel => Pavelas, Gregorz => Gregozas, Kaitoch => Kaitochas, 
addEntry( "","ÑÚ",'_',"","","",1,"IS",1,1 );  // N su desininiu kirciu didzioji \xD1, S su desininiu kirciu didzioji \xDA Pienkos => Penkosis

addEntry( "","Ñ",'_',"","","",2,"Ë",1,1 );  // N su desininiu kirciu didzioji \xD1 => E su tasku didzioji \xCB

addEntry( "","",'_',"","","",3,"",1,1 );
addEntry( "","",' ',"","","",3,"",1,1 );	
}

window.onload = function(e){ 
    transkribavimoTaisyklesPL(); 
	console.log("Taisykl.length=" + Taisykl.length);
	
	document.getElementById("tekstasInput")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("myButton").click();
    }
});
}
//output: 0 - zodyje visos raides mazosios, 1 - pirma raide didzioji, kitos mazosios, 2 - visos didziosios raides
function getLetterCaseType(word){
	//geriau toLowerCase(), nes ne visos raides gali tureti didiji varianta, zr.:  https://stackoverflow.com/questions/8334606/check-if-first-letter-of-word-is-a-capital-letter/8334645#8334645
	if(word[0] == word[0].toLowerCase()) 
		return 0;
	else if(word[1] == word[1].toLowerCase())
		return 1;
	else return 2;
}
// input: caseType={0-all lowercase,1-first letter uppercase,2-all uppercase}, word - text with all letters uppercase
function setLetterCaseType(caseType, word){
	if(caseType == 2) 
		return word;
	else if(caseType == 1)
		return word.charAt(0) + word.slice(1).toLowerCase();
	else return word.toLowerCase();
}


function transkrPL(eil1, Gim) {

	var TrEil = "";
	var i=0, j=0, ilg = 0;
	var eil = "";
	var letterCaseType = 0;

	letterCaseType = getLetterCaseType(eil1);

	eil = "__" + eil1.toUpperCase(); //eil = eil1_.split("");	// is stringo eil1 padarome masyva eil
	ilg = eil.length;
	eil = eil + "____0"; 
	

	TrEil = "";
	i = 2;
	j = 0;
	
	// Taisykliu paieska
	while(i < ilg + 1) // buvo eil1.length + 3 //buvo +1
	{
		//let entry = Taisykl[j];
		if (Taisykl[j].ES != eil[i]) 
			j += Taisykl[j].PoslT;
		else if(  ((Taisykl[j].KKont2!="") ? (Taisykl[j].KKont2).indexOf(eil[i-2])+1 : 1)  //+1 nes indexOf grazina -1, o kad veiktu operacija && reikia, kad indexOf grazintu 0, jei nerado.
				&&((Taisykl[j].KKont1!="") ? (Taisykl[j].KKont1).indexOf(eil[i-1])+1 : 1)
				&&((Taisykl[j].DKont1!="") ? (Taisykl[j].DKont1).indexOf(eil[i+1])+1 : 1)
				&&((Taisykl[j].DKont2!="") ? (Taisykl[j].DKont2).indexOf(eil[i+2])+1 : 1)
				&&((Taisykl[j].DKont3!="") ? (Taisykl[j].DKont3).indexOf(eil[i+3])+1 : 1)
				&&(Taisykl[j].Gim & Gim))
		{

			i += Taisykl[j].PoslR;
			TrEil = TrEil.concat(Taisykl[j].FonV);
			j = 0; //new 2018 11 22
		}
		else j++;
		if (j > Taisykl.length - 1) { j = 0; i++; }
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
	
	console.log("esame DE");
	
}

