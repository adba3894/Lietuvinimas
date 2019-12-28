//Gim: 1 - vyr, 2 - mot, 3 - taikyti ir vyr ir mot gimines zodziui
var TaisyklDE = [];


function addEntryDE(KKont2, KKont1, ES, DKont1, DKont2, DKont3, Gim, FonV, PoslR, PoslT) {
  TaisyklDE.push({KKont2, KKont1, ES, DKont1, DKont2, DKont3, Gim, FonV, PoslR, PoslT});
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
//http://www.namenforschung.net/dfd/woerterbuch/liste/

function transkribavimoTaisyklesDE() {
//L raide
addEntryDE( "","",'E',"Y","EAEIOUÖÜ","",3,"EJ",2,1 );//(15 taisykle)
addEntryDE( "","",'L',"L","U","",3,"LI",2,1 );//(26 taisykle)
addEntryDE( "L","L",'_',"","","",1,"AS",2,1 );//(26 taisykle)
addEntryDE( "","",'L',"L","","",3,"L",2,1 );//(26 taisykle)
addEntryDE( "","",'L',"U","","",3,"LI",1,1 );//(26 taisykle)
addEntryDE( "","L",'_',"","","",2,"Ė",1,1 );////(26 taisykle)
addEntryDE( "","",'L',"","","",3,"L",1,1 );////(26 taisykle)
addEntryDE("","",'T',"Z","S","C",3,"Č",5,1 );//(46 taisykle)
addEntryDE("","",'T',"S","C","H",3,"Č",4,1 );//(46 taisykle)
addEntryDE("","",'T',"I","O","N",3,"CION",4,1 );//(44 taisykle)
addEntryDE( "","",'Z',"S","C","H",3,"Č",4,1 );//54 taisykle
addEntryDE( "","Z",'S',"C","H","",3,"Č",3,1 ); //idejau
addEntryDE( "","",'S',"C","H","",3,"Š",3,1 );//(39 taisykle)
addEntryDE( "","_",'S',"P","","",3,"ŠP",2,1 );//(40 taisykle)
addEntryDE( "","_",'S',"T","","",3,"ŠT",2,1 );//(42 taisykle)
addEntryDE( "","_",'Ü',"H","","",3,"Y",2,1 );//50 taisykle
addEntryDE( "","",'Ä',"H","","",3,"Ė",2,1 );//(3 taisykle)
addEntryDE( "","",'A',"E","H","",3,"Ė",3,1 );//(3 taisykle) - paprastas keitimas
addEntryDE( "","",'C',"K","","",3,"K",2,1 );//(8 taisykle)
addEntryDE( "","",'C',"H","S","",3,"CHS",3,1 );//(10 ciu ̨ kalboje arba visiškai nekinta, ı ̨ jas ı ̨einataisykle)
addEntryDE( "","",'D',"T","","",3,"T",2,1 );//(12 taisykle)
addEntryDE( "","",'E',"H","","",3,"Ė",2,1 );//(14 taisykle)
addEntryDE( "","",'G',"G","","",3,"G",2,1 );//(18 taisykle)
addEntryDE( "","",'G',"H","","",3,"G",2,1 );//(18 taisykle)
addEntryDE( "","",'G',"K","","",3,"K",2,1 );//(19 taisykle)
addEntryDE( "","",'G',"","","",3,"G",1,1 );//(18 taisykle)
addEntryDE( "","",'I',"E","_","",2,"IJA",2,1 );//(13 taisykle)- E ilgas kai pries ji eina I
addEntryDE( "","",'I',"E","","",3,"Y",2,1 );//(22 taisykle)
addEntryDE( "","",'I',"H","","",3,"Y",2,1 );//(21 taisykle)- kai I ilgas
addEntryDE( "","_",'J',"H","E","",3,"JĖ",3,1 );//(20 taisykle)
addEntryDE( "","",'J',"H","","",3,"J",2,1 );//(24 taisykle)
addEntryDE( "","",'O',"H","AEIO","",3,"O",1,1 );//(31 taisykle) // idejau reik pasitikrinti
addEntryDE( "","",'O',"H","","_",3,"O",2,1 );//(31 taisykle) // idejau reik pasitikrinti
addEntryDE( "","",'O',"H","","",3,"Ė",2,1 );//(31 taisykle) // cj blogai kazkas
addEntryDE( "","",'Ö',"H","","",3,"Ė",2,1 );//(31 taisykle)
addEntryDE( "","",'P',"F","","",3,"PF",2,1 );//(34 taisykle)
addEntryDE( "","",'P',"H","","",3,"F",2,1 );//(35 taisykle)
addEntryDE( "","",'Q',"U","","",3,"KV",2,1 );//(36 taisykle)
addEntryDE( "","",'R',"H","","",3,"R",2,1 );//(37 taisykle)
addEntryDE( "T","H",'_',"","","",1,"A",2,1 );
addEntryDE("","",'T',"H","","",3,"T",2,1 );//(43 taisykle)
addEntryDE("","",'T',"Z","","",3,"C",2,1 );//(43 taisykle)
addEntryDE( "","",'U',"H","","",3,"Ū",2,1 );//(47 taisykle)- kai UE TRUMPAS
addEntryDE( "","J",'Ü',"H","","",3,"Ū",2,1 );//50 taisykle
addEntryDE( "","J",'Ü',"E","H","",3,"Ū",3,1 );//50 taisykle
addEntryDE( "","_",'Ü',"H","","",3,"Y",2,1 );//50 taisykle
addEntryDE( "","_",'Ü',"E","H","",3,"Y",3,1 );//50 taisykle
addEntryDE( "","",'Ü',"H","","",3,"IŪ",2,1 );//50 taisykle
addEntryDE( "","",'Ü',"E","H","",3,"IŪ",3,1 );//50 taisykle
addEntryDE( "","",'O',"E","H","",3,"Ė",3,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","BCDFGHJKLMNPRTVZS","",3,"Ė",2,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","B","B",3,"E",2,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","C","K",3,"E",2,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","D","D",3,"E",2,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","F","F",3,"E",2,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","L","L",3,"E",2,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","M","M",3,"E",2,1 );//(31 taisykle)
addEntryDE( "","",'O',"E","N","N",3,"E",2,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","P","P",3,"E",2,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","R","R",3,"E",2,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","S","S",3,"E",2,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","T","T",3,"E",2,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","T","Z",3,"E",2,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","P","F",3,"E",2,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","X","",3,"E",2,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","H","LMNRAEIOUÖÜ",3,"Ė",3,1 );//(30 taisykle)
addEntryDE( "","BCDFGHJKLMNPQRSTVWXYZ",'O',"E","BCDFGHJKLMNPQRSTVWXYZ","",3,"Ė",2,1 );//(30 taisykle)
addEntryDE( "L","L",'_',"","","",1,"Ė",1,2 );	

//A raide
addEntryDE( "","",'A',"E","BCDFGHJKLMNPQRSTVWXYZ","BCDFGHJKLMNPQRSTVWXYZ",3,"E",2,1 );//(2 taisykle) - balsis trumpas kai po jo eina dvi priebalses priklausancios tom paciom morfemom
addEntryDE( "","",'A',"E","H","LMNRAEIOUÄÖÜ",3,"Ė",3,1 );//(2 taisykle) - balsis ilgas, jei po jo eina netariamoji h, esanti pries l,m,n,r arba balse
addEntryDE( "","BCDFGHJKLMNPQRSTVWXYZ",'A',"E","BCDFGHJKLMNPQRSTVWXYZ","",3,"Ė",2,1 );//(2 taisykle) - balsis ilgas, kai jis yra kirciuoto skiemens gale - kai is kaires ir desines yra po priebalse
addEntryDE( "","",'Ä',"BCDFGJKLMNPQRSTVWXYZ","BCDFGHJKLMNPQRSTVWXYZ","",3,"E",1,1 );//(2 taisykle) - balsis trumpas kai po jo eina dvi priebalses priklausancios tom paciom morfemom
addEntryDE( "","",'Ä',"B","B","",3,"E",1,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"C","K","",3,"E",1,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"D","D","",3,"E",1,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"F","F","",3,"E",1,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"L","L","",3,"E",1,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"M","M","",3,"E",1,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"N","N","",3,"E",1,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"P","P","",3,"E",1,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"R","R","",3,"E",1,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"S","S","",3,"E",1,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"T","T","",3,"E",1,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"T","Z","",3,"E",1,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"P","F","",3,"E",1,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"X","","",3,"E",1,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"U","RN","",3,"OI",2,1 );//samplaika skyla i skirtingus skiemenis (5 taisykle) // idejau gali but kad oi tada kai po au eina priebalse
addEntryDE( "","",'Ä',"U","","",3,"OJ",2,1 );//samplaika skyla i skirtingus skiemenis (5 taisykle)
addEntryDE( "","",'Ä',"LMNRAEIOUÖÜ","","",3,"Ė",1,1 );//(2 taisykle) - balsis ilgas, jei po jo eina netariamoji h, esanti pries l,m,n,r arba balse
addEntryDE( "","BCDFGHJKLMNPQRSTVWXYZ",'Ä',"BCDFGJKLMNPQRSTVWXYZ","","",3,"Ė",1,1 );//(2 taisykle) - balsis ilgas, kai jis yra kirciuoto skiemens gale - kai is kaires ir desines yra po priebalse
addEntryDE( "","",'A',"E","B","B",3,"E",2,1 );//(2 taisykle) - balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","C","K",3,"E",2,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","D","D",3,"E",2,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","F","F",3,"E",2,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","L","L",3,"E",2,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","M","M",3,"E",2,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","N","N",3,"E",2,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","P","P",3,"E",2,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","R","R",3,"E",2,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","S","S",3,"E",2,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","T","T",3,"E",2,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","T","Z",3,"E",2,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","P","F",3,"E",2,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","X","",3,"E",2,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"Y","BCDFGHJKLMNPRTVZ","",3,"AI",2,1 );// samplaika lieka viename skiemenyje (4 taisykle)
addEntryDE( "","",'A',"I","BCDFGHJKLMNPRTVZ","",3,"AI",2,1 );// samplaika lieka viename skiemenyje (4 taisykle)
addEntryDE( "","",'A',"I","S","S",3,"AIS",4,1 );
addEntryDE( "","",'A',"Y","","",3,"AJ",2,1 );// samplaika skyla i skirtingus skiemenis (4 taisykle)
addEntryDE( "","",'A',"I","","",3,"AJ",2,1 );// samplaika skyla i skirtingus skiemenis (4 taisykle)
addEntryDE( "","",'Ä',"U","BCDFGHJKLMNPRTVZ","",3,"OI",2,1 );//samplaika lieka viename skiemenyje (5 taisykle)
addEntryDE( "","",'A',"H","","",3,"A",2,1 );//(1 taisykle)
addEntryDE( "","",'A',"A","","",3,"A",2,1 );//(1 taisykle)
addEntryDE( "","",'A',"","","",3,"A",1,1 );////(1 taisykle)

//B raide
addEntryDE( "","",'E',"BCDFGJKLMNPQRSTVWXYZ","BCDFGHJKLMNPQRSTVWXYZ","",3,"E",1,1 );//(2 taisykle) - balsis trumpas kai po jo eina dvi priebalses priklausancios tom paciom morfemom
addEntryDE( "","",'E',"B","B","",3,"E",1,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"C","K","",3,"E",1,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"D","D","",3,"E",1,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"F","F","",3,"E",1,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"L","L","",3,"E",1,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"M","M","",3,"E",1,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"N","N","",3,"E",1,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"P","P","",3,"E",1,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"R","R","",3,"E",1,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"S","S","",3,"E",1,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"T","T","",3,"E",1,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"T","Z","",3,"E",1,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"P","F","",3,"E",1,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"X","","",3,"E",1,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'I',"H","","",3,"Y",1,1 );//(23 taisykle)- kai E ilgas
addEntryDE( "","",'I',"BCDFGHJKLMNPQRSTVWXYZ","BCDFGHJKLMNPQRSTVWXYZ","",3,"I",1,1 );//(21 taisykle) - balsis trumpas kai po jo eina dvi
addEntryDE( "","",'I',"B","B","",3,"I",1,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"C","K","",3,"I",1,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"D","D","",3,"I",1,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"F","F","",3,"I",1,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"L","L","",3,"I",1,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"M","M","",3,"I",1,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"N","N","",3,"I",1,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"P","P","",3,"I",1,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"R","R","",3,"I",1,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"S","S","",3,"I",1,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"T","T","",3,"I",1,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"T","Z","",3,"I",1,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"P","F","",3,"I",1,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"X","","",3,"I",1,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'B',"B","","",3,"B",2,1 );//(6 taisykle)
addEntryDE( "","",'B',"","","",3,"B",1,1 );//(6 taisykle)

//C raide
addEntryDE("","",'C',"H","","",3,"CH",2,1 );//(9 taisykle)
addEntryDE("","",'C',"AOUPBTDGFVSZJXLMNR","","",3,"K",1,1 );//(7 taisykle)
addEntryDE("","AOUPBTDKGFVSZJXLMNR",'C',"_","","",3,"K",1,1 );//(7 taisykle)
addEntryDE( "","",'C',"H","","",3,"C",1,1 );//(9 taisykle)
addEntryDE("","",'C',"E","","",3,"C",1,1 );//(7 taisykle)
addEntryDE("","",'C',"I","","",3,"C",1,1 );//(7 taisykle)
addEntryDE("","",'C',"Y","","",3,"C",1,1 );//(7 taisykle)
addEntryDE( "","",'C',"","","",3,"C",1,1 );//(7 taisykle)

//D raide
addEntryDE( "","",'D',"D","","",3,"D",2,1 );//(11 taisykle)
addEntryDE( "","",'D',"T","","",3,"T",2,1 );//(12 taisykle)
addEntryDE( "","D",'_',"","","",2,"Ė",1,1 );//(11 taisykle)
addEntryDE( "","",'D',"","","",3,"D",1,1 );//(11 taisykle)

//E raide
addEntryDE( "","",'E',"R","_","",3,"ER",2,1 );// idejau
addEntryDE( "","",'E',"LN","","",3,"E",1,1 ); // idejau
addEntryDE( "","",'E',"H","","",3,"Ė",2,1 );//(14 taisykle)
addEntryDE( "","BCDFGJKLMNPQRSTVWXYZ",'E',"BCDFGJKLMNPQRSTVWXYZ","","",3,"Ė",1,1 );//(13 tais.)- kai E kirciuoto skiemens gale-REIKA KAZKAIP SUGALVOT-JEI SIA TAISYKLE PRITAIKE 1 KARTA,KAD DAUGIAU NEBETAIKYTU
addEntryDE( "","",'E',"I","BCDFGHJKLMNPRTVZ","",3,"EI",2,1 );//(15 taisykle)
addEntryDE( "","",'E',"Y","BCDFGHJKLMNPRTVZ","",3,"EI",2,1 );//(15 taisykle)
addEntryDE( "","",'E',"I","EAEIOUÖÜ","",3,"EJ",2,1 );//(15 taisykle)
addEntryDE( "","",'E',"Y","EAEIOUÖÜ","",3,"EJ",2,1 );//(15 taisykle)
addEntryDE( "","",'E',"U","BCDFGHJKLMNPRTVZ","",3,"OI",2,1 );//(16 taisykle)
addEntryDE( "","",'E',"U","","",3,"OJ",2,1 );//(16 taisykle)
addEntryDE( "","",'E',"E","","",3,"E",2,1 );//(16 taisykle)
addEntryDE( "","",'E',"R","_","",3,"ER",2,1 );// idejau
addEntryDE( "","",'E',"A","_","",2,"ĖJ",1,1 );
addEntryDE( "","",'E',"_","","",3,"Ė",1,1 );
addEntryDE( "","",'E',"","","",3,"E",1,1 );//(14 taisykle)

//F raide
addEntryDE( "","",'F',"F","","",3,"F",2,1 );//(17 taisykle)
addEntryDE( "","",'F',"","","",3,"F",1,1 );//(17 taisykle)

//H raide
addEntryDE( "","_",'H',"IEAUOÄÖÜ","","",3,"H",1,1 );//(20 taisykle) SKIEMENS PRADYIOJE
addEntryDE( "","IEAUOÄÖÜ",'H',"IEAUOÄÖÜ","","",3,"H",1,1 );//(20 taisykle) SKIEMENS PRADYIOJE
addEntryDE( "","",'H',"L","","",3,"L",2,1 );//(20 taisykle) SKIEMENS PRADYIOJE
addEntryDE( "","",'O',"H","","",3,"O",2,1 );//(29 taisykle)
addEntryDE( "","J",'H',"","","",3,"J",2,1 );//(20 taisykle)
addEntryDE( "","R",'H',"","","",3,"R",2,1 );//(20 taisykle)
addEntryDE( "","T",'H',"","","",3,"T",1,1 );//(20 taisykle) // pataisiau
addEntryDE( "","",'H',"","","",3,"H",1,1 );//(20 taisykle)

//I raide
addEntryDE( "","",'I',"I","","",3,"Y",2,1 );//(21 taisykle) I Ilgas, pazymetas dviguba balse
addEntryDE( "","BCDFGHJKLMNPRTVZ",'I',"BCDFGHJKLMNPRTVZ","","",3,"Y",1,1 );//(21 taisykle) I Ilgas, pazymetas dviguba balse
addEntryDE( "","",'I',"BCDFGHJKLMNPRTVZ","","",3,"Y",1,1 );//(21 taisykle)
addEntryDE( "","",'I',"","","",3,"I",1,1 );//(21 taisykle)

//J raide
addEntryDE( "","",'J',"","","",3,"J",1,1 );//(24 taisykle)

//K raide
addEntryDE( "","",'K',"K","","",3,"K",2,1 );//(25 taisykle)
addEntryDE( "","",'K',"","","",3,"K",1,1 );//(25 taisykle)

//M raide
addEntryDE( "","",'M',"M","","",3,"M",2,1 );//(27 taisykle)
addEntryDE( "","",'M',"","","",3,"M",1,1 );//(27 taisykle)

//N raide
addEntryDE( "","",'N',"N","","",3,"N",2,1 );//(28 taisykle)
addEntryDE( "","",'N',"","","",3,"N",1,1 );//(28Faißt taisykle)

//OI, OY
addEntryDE( "","",'O',"Y","_","",3,"OJ",2,2 );//(32 taisykle)
addEntryDE( "","",'O',"I","BCDFGHJKLMNPRTVZ","",3,"OI",2,1 );//(32 taisykle)
addEntryDE( "","",'O',"Y","BCDFGHJKLMNPRTVZ","",3,"OI",2,1 );//(32 taisykle)
addEntryDE( "","",'O',"I","EAEIOUÖÜ","",3,"OJ",2,1 );//(32 taisykle)
addEntryDE( "","",'O',"Y","EAEIOUÖÜ","",3,"OJ",2,1 );//(32 taisykle)

//O raide
addEntryDE( "","",'O',"_","","",1,"AS",1,2 );
addEntryDE( "","",'O',"O","","",3,"O",2,1 );//(29 taisykle)
addEntryDE( "","",'O',"","","",3,"O",1,1 );//(29 taisykle)

//Ö raide
addEntryDE( "","",'Ö',"B","B","",3,"E",1,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"C","K","",3,"E",1,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"D","D","",3,"E",1,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"F","F","",3,"E",1,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"L","L","",3,"E",1,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"M","M","",3,"E",1,1 );//(31 taisykle)
addEntryDE( "","",'Ö',"N","N","",3,"E",1,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"P","P","",3,"E",1,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"R","R","",3,"E",1,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"S","S","",3,"E",1,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"T","T","",3,"E",1,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"T","Z","",3,"E",1,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"P","F","",3,"E",1,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"X","","",3,"E",1,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"H","LMNRAEIOUÖÜ","",3,"Ė",2,1 );//(30 taisykle)
addEntryDE( "","BCDFHJKLMNPQRSTVWXYZ",'Ö',"BCDFHJKLMNPQRSTVWXYZ","","",3,"Ė",1,1 );/// taisyta
addEntryDE( "","G",'Ö',"GR","","",3,"E",1,1 );////
addEntryDE( "","",'Ö',"BCDFGHJKLMNPRTVZ","","",3,"Ė",1,1 );//(30 taisykle)

//P raide
addEntryDE( "","",'P',"P","","",3,"P",2,1 );//(33 taisykle)
addEntryDE( "","",'P',"","","",3,"P",1,1 );//(33 taisykle)

//Q raide
addEntryDE( "","",'Q',"","","",3,"KV",1,1 );//(36 taisykle)

//R Raide
addEntryDE( "","",'R',"R","","",3,"R",2,1 );//(37 taisykle)
addEntryDE( "","",'R',"","","",3,"R",1,1 );//(37 taisykle)

//S Raide
addEntryDE( "","BCDFGHJKLMNPQRSTVWXZ",'S',"P","","",3,"ŠP",2,1 );//(40 taisykle)// kaip pritaikyti taisykle tik zodzio pradziai?
addEntryDE( "","",'S',"_","","",3,"S",1,1 );//(41 taisykle)
addEntryDE( "","",'S',"S","","",3,"S",2,1 );//(41 taisykle)
addEntryDE( "","BCDFGHJKLMNPQRSTVWXZ",'S',"T","","",3,"ŠT",2,1 );//(42 taisykle)// kaip pritaikyti taisykle tik zodzio pradziai?
addEntryDE( "","AOUIEÄÖÜY",'S',"BCDFGHJKLMNPQRSTVWXZ","","",3,"S",1,1 );//(38 taisykle)
addEntryDE( "","",'S',"AOUIEÄÖÜY","","",3,"Z",1,1 );//(38 taisykle)
addEntryDE( "","",'ß',"","","",3,"S",1,1 );//(41 taisykle)
addEntryDE( "","",'S',"","","",3,"S",1,1 );//(42 taisykle)// kaip pritaikyti taisykle tik zodzio pradziai?

//T raide
addEntryDE("","",'T',"T","","",3,"T",2,1 );//(43 taisykle)
addEntryDE("","",'T',"","","",3,"T",1,1 );//(43 taisykle)

//U,Ü,UE raides
//po J kai Ü trumpas
addEntryDE("_","J",'Ü',"B","B","",3,"U",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("_","J",'Ü',"C","K","",3,"U",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("_","",'Ü',"D","D","",3,"U",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("_","J",'Ü',"F","F","",3,"U",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("_","J",'Ü',"L","L","",3,"U",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("_","J",'Ü',"M","M","",3,"U",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("_","J",'Ü',"N","N","",3,"U",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("_","J",'Ü',"P","P","",3,"U",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("_","J",'Ü',"R","R","",3,"U",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("_","J",'Ü',"S","S","",3,"U",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("_","J",'Ü',"T","T","",3,"U",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("_","J",'Ü',"T","Z","",3,"U",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("_","J",'Ü',"P","F","",3,"U",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("_","J",'Ü',"X","","",3,"U",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("_","J",'Ü',"BCDFGHJKLMNPQRSTVWXYZ","BCDFGHJKLMNPQRSTVWXYZ","",3,"U",1,1 );
//po J kai UE trumpas
addEntryDE("_","J",'U',"E","B","B",3,"U",2,1 );//(48 taisykle)
addEntryDE("_","J",'U',"E","C","K",3,"U",2,1 );//(48 taisykle)
addEntryDE("_","J",'U',"E","D","D",3,"U",2,1 );//(48 taisykle)
addEntryDE("_","J",'U',"E","F","F",3,"U",2,1 );//(48 taisykle)
addEntryDE("_","J",'U',"E","L","L",3,"U",2,1 );//(48 taisykle)
addEntryDE("_","J",'U',"E","M","M",3,"U",2,1 );//(48 taisykle)
addEntryDE("_","J",'U',"E","N","N",3,"U",2,1 );//(48 taisykle)
addEntryDE("_","J",'U',"E","P","P",3,"U",2,1 );//(48 taisykle)
addEntryDE("_","J",'U',"E","R","R",3,"U",2,1 );//(48 taisykle)
addEntryDE("_","J",'U',"E","S","S",3,"U",2,1 );//(48 taisykle)
addEntryDE("_","J",'U',"E","T","T",3,"U",2,1 );//(48 taisykle)
addEntryDE("_","J",'U',"E","T","Z",3,"U",2,1 );//(48 taisykle)
addEntryDE("_","J",'U',"E","P","F",3,"U",2,1 );//(48 taisykle)
addEntryDE("_","J",'U',"E","X","",3,"U",2,1 );//(48 taisykle)
addEntryDE("_","J",'U',"E","BCDFGHJKLMNPQRSTVWXYZ","BCDFGHJKLMNPQRSTVWXYZ",3,"U",1,1 );//(2 taisykle) - balsis trumpas kai po jo eina dvi priebalses priklausancios tom paciom morfemom
//po J kai Ü  ilgas
addEntryDE("_","J",'Ü',"H","LMNRAEIOUÄÖÜ","",3,"Ū",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("_","J",'Ü',"BCDFGHJKLMNPQRSTVWXYZ","IEAUOÄÖÜ","",3,"Ū",1,1 );//(48 balsis ilgas 4 taisykle 151psl)
//po J kai UE ilgas
addEntryDE("_","J",'U',"E","H","LMNRAEIOUÄÖÜ",3,"Ū",2,1 );//(48 taisykle)
addEntryDE("_","J",'U',"E","BCDFGHJKLMNPQRSTVWXYZ","IEAUOÄÖÜ",3,"Ū",2,1 );//(48 taisykle)
//kai Ü ir UE trumpas
addEntryDE("","_",'Ü',"B","B","",3,"I",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","_",'Ü',"C","K","",3,"I",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","_",'Ü',"D","D","",3,"I",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","_",'Ü',"F","F","",3,"I",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","_",'Ü',"L","L","",3,"I",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","_",'Ü',"M","M","",3,"I",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","_",'Ü',"N","N","",3,"I",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","_",'Ü',"P","P","",3,"I",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","_",'Ü',"R","R","",3,"I",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","_",'Ü',"S","S","",3,"I",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","_",'Ü',"T","T","",3,"I",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","_",'Ü',"T","Z","",3,"I",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","_",'Ü',"P","F","",3,"I",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","_",'Ü',"X","","",3,"I",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE( "","_",'Ü',"BCDFGHJKLMNPQRSTVWXYZ","BCDFGHJKLMNPQRSTVWXYZ","",3,"I",1,1 );
//kai UE trumpas
addEntryDE("","_",'U',"E","B","B",3,"I",2,1 );//(48 taisykle)
addEntryDE("","_",'U',"E","C","K",3,"I",2,1 );//(48 taisykle)
addEntryDE("","_",'U',"E","D","D",3,"I",2,1 );//(48 taisykle)
addEntryDE("","_",'U',"E","F","F",3,"I",2,1 );//(48 taisykle)
addEntryDE("","_",'U',"E","L","L",3,"I",2,1 );//(48 taisykle)
addEntryDE("","_",'U',"E","M","M",3,"I",2,1 );//(48 taisykle)
addEntryDE("","_",'U',"E","N","N",3,"I",2,1 );//(48 taisykle)
addEntryDE("","_",'U',"E","P","P",3,"I",2,1 );//(48 taisykle)
addEntryDE("","_",'U',"E","R","R",3,"I",2,1 );//(48 taisykle)
addEntryDE("","_",'U',"E","S","S",3,"I",2,1 );//(48 taisykle)
addEntryDE("","_",'U',"E","T","T",3,"I",2,1 );//(48 taisykle)
addEntryDE("","_",'U',"E","T","Z",3,"I",2,1 );//(48 taisykle)
addEntryDE("","_",'U',"E","P","F",3,"I",2,1 );//(48 taisykle)
addEntryDE("","_",'U',"E","X","",3,"I",2,1 );//(48 taisykle)
addEntryDE( "","_",'U',"E","BCDFGHJKLMNPQRSTVWXYZ","BCDFGHJKLMNPQRSTVWXYZ",3,"I",1,1 );
//kai Ü ir UE ilgas
addEntryDE("","_",'Ü',"H","LMNRAEIOUÄÖÜ","",3,"Y",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","_",'Ü',"BCDFGHJKLMNPQRSTVWXYZ","IEAUOÄÖÜ","",3,"Y",1,1 );//(48 balsis ilgas 4 taisykle 151psl)
addEntryDE("","_",'U',"E","H","LMNRAEIOUÄÖÜ",3,"Y",2,1 );//(48 taisykle)
addEntryDE("","_",'U',"E","BCDFGHJKLMNPQRSTVWXYZ","IEAUOÄÖÜ",3,"Y",2,1 );//(48 taisykle)
//kai Ü ir UE trumpas
addEntryDE("","",'Ü',"B","B","",3,"IU",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","",'Ü',"C","K","",3,"IU",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","",'Ü',"D","D","",3,"IU",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","",'Ü',"F","F","",3,"IU",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","",'Ü',"L","L","",3,"IU",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","",'Ü',"M","M","",3,"IU",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","",'Ü',"N","N","",3,"IU",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","",'Ü',"P","P","",3,"IU",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","",'Ü',"R","R","",3,"IU",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","",'Ü',"S","S","",3,"IU",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","",'Ü',"T","T","",3,"IU",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","",'Ü',"T","Z","",3,"IU",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","",'Ü',"P","F","",3,"IU",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","",'Ü',"X","","",3,"IU",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","",'Ü',"BCDFGHJKLMNPQRSTVWXYZ","BCDFGHJKLMNPQRSTVWXYZ","",3,"IU",1,1 );
//kai UE trumpas
addEntryDE("","",'U',"E","B","B",3,"IU",2,1 );//(48 taisykle)
addEntryDE("","",'U',"E","C","K",3,"IU",2,1 );//(48 taisykle)
addEntryDE("","",'U',"E","D","D",3,"IU",2,1 );//(48 taisykle)
addEntryDE("","",'U',"E","F","F",3,"IU",2,1 );//(48 taisykle)
addEntryDE("","",'U',"E","L","L",3,"IU",2,1 );//(48 taisykle)
addEntryDE("","",'U',"E","M","M",3,"IU",2,1 );//(48 taisykle)
addEntryDE("","",'U',"E","N","N",3,"IU",2,1 );//(48 taisykle)
addEntryDE("","",'U',"E","P","P",3,"IU",2,1 );//(48 taisykle)
addEntryDE("","",'U',"E","R","R",3,"IU",2,1 );//(48 taisykle)
addEntryDE("","",'U',"E","S","S",3,"IU",2,1 );//(48 taisykle)
addEntryDE("","",'U',"E","T","T",3,"IU",2,1 );//(48 taisykle)
addEntryDE("","",'U',"E","T","Z",3,"IU",2,1 );//(48 taisykle)
addEntryDE("","",'U',"E","P","F",3,"IU",2,1 );//(48 taisykle)
addEntryDE("","",'U',"E","X","",3,"IU",2,1 );//(48 taisykle)
addEntryDE( "","",'U',"E","BCDFGHJKLMNPQRSTVWXYZ","BCDFGHJKLMNPQRSTVWXYZ",3,"IU",1,1 );
//kai Ü ir UE ilgas
addEntryDE("","",'Ü',"H","LMNRAEIOUÄÖÜ","",3,"IŪ",1,1 );//(48 balsis ilgas 1 taisykle 151psl)
addEntryDE("","",'Ü',"BCDFGHJKLMNPQRSTVWXYZ","IEAUOÄÖÜ","",3,"IŪ",1,1 );//(48 balsis ilgas 4 taisykle 151psl)
addEntryDE("","",'U',"E","H","LMNRAEIOUÄÖÜ",3,"IŪ",2,1 );//(48 taisykle)
addEntryDE("","",'U',"E","BCDFGHJKLMNPQRSTVWXYZ","IEAUOÄÖÜ",3,"IŪ",2,1 );//(48 taisykle)
//U raides taisykles
addEntryDE( "","",'U',"U","","",3,"Ū",2,1 );//(47 taisykle)- kai U ilgas
addEntryDE( "","",'U',"B","B","",3,"U",1,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"C","K","",3,"U",1,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"D","D","",3,"U",1,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"F","F","",3,"U",1,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"L","L","",3,"U",1,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"M","M","",3,"U",1,1 );//(47 taisykle)- kai U trumpas 
addEntryDE( "","",'U',"N","N","",3,"U",1,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"P","P","",3,"U",1,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"R","R","",3,"U",1,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"S","S","",3,"U",1,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"T","T","",3,"U",1,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"T","Z","",3,"U",1,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"P","F","",3,"U",1,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"X","","",3,"U",1,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"BCDFGJKLMNPQRSTVWXYZ","BCDFGHJKLMNPQRSTVWXYZ","",3,"U",1,1 );
addEntryDE( "","",'U',"H","LMNRAEIOÄÖÜ","",3,"Ū",2,1 );//(47 taisykle)- kai U ilgas // prekeliau is virsaus
addEntryDE( "","BCDFGHJKLMNPQRSTVWXYZ",'U',"BCDFGHJKLMNPQRSTVWXYZ","","",3,"Ū",1,1 );
addEntryDE( "","",'U',"","","",3,"U",1,1 );//(47 taisykle) kai U trumpas

//V raide
addEntryDE( "","_",'V',"IOE","","",3,"F",1,1 );//idejau
addEntryDE( "","A",'V',"E","","",3,"F",1,1 );//idejau
addEntryDE( "","",'V',"","","",3,"V",1,1 );//51 taisykle

//W raide
addEntryDE( "","",'W',"","","",3,"V",1,1 );//52 taisykle

//X raide
addEntryDE( "","",'X',"","","",3,"KS",1,1 );//53 taisykle

//Y raide
addEntryDE( "","",'Y',"H","LMNRAEIOUÄÖÜ","",3,"Y",2,1 );//(21 taisykle)- kai I ilgas
addEntryDE( "","",'Y',"Y","","",3,"Y",2,1 );//(21 taisykle)- kai I ilgas
addEntryDE( "","BCDFGHJKMNPRTVZ",'Y',"BCDLFGHJKMPNRTVZ","","",3,"Y",1,1 );//(21 taisykle)- kai I ilgas
addEntryDE( "","EAEIOUÖÜ",'Y',"EAEIOUÖÜ","","",3,"J",2,1 );//(21 taisykle)- kai I ilgas
addEntryDE( "","",'Y',"_","","",3,"J",1,1 );/////// idejau
addEntryDE( "","",'Y',"","","",3,"I",1,1 );//(21 taisykle)- kai I ilgas

//Z raide
addEntryDE( "","",'Z',"Z","","",3,"C",2,1 );//54 taisykle
addEntryDE( "","",'Z',"","","",3,"C",1,1 );//54 taisykle

//Galunes

addEntryDE( "A","S",'_',"","","",1,"",1,2 );
addEntryDE( "","KWTFBNZHDSGVPMCX",'_',"","","",1,"AS",1,2 );
addEntryDE( "AE","Y",'_',"","","",1,"US",1,2 ); // idejau
addEntryDE( "AUYH","R",'_',"","","",1,"AS",1,2 ); //pataisiau
addEntryDE( "R","L",'_',"","","",1,"AS",1,2 ); //pataisiau
addEntryDE( "","LR",'_',"","","",1,"IS",1,2 ); //pataisiau
addEntryDE( "","I",'_',"","","",1,"S",1,2 );
addEntryDE( "","Y",'_',"","","",1,"US",1,2 ); // idejau
addEntryDE( "","",'_',"","","",3,"",1,1 );
addEntryDE( "","",' ',"","","",3," ",1,1 );
}


window.onload = function(e){ 
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
//jeigu iteruojamoji raide yra kazkokia balse tarkim (e,ae,ue,u,oe,i) ir po jos eina priebalse, tada ta balse praprocesinam per taisykles, o sekanciom balsem nebetaikom tam tikru taisykliu
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
		if (TaisyklDE[j].ES != eil[i]) //jeigu deklaruotos taisykle kuri taikoma tam tikrai einamajai raidei - tai jei jos ta einamoji raide lygi iteruojamo zodzio raidziu einamajai raidei
			j += TaisyklDE[j].PoslT;// pasislenkame per taisykle
		else if(  
				((TaisyklDE[j].KKont2!="") ? (TaisyklDE[j].KKont2).indexOf(eil[i-2])+1 : 1)  //+1 nes indexOf grazina -1, o kad veiktu operacija && reikia, kad indexOf grazintu 0, jei nerado.
				&&((TaisyklDE[j].KKont1!="") ? (TaisyklDE[j].KKont1).indexOf(eil[i-1])+1 : 1)
				&&((TaisyklDE[j].DKont1!="") ? (TaisyklDE[j].DKont1).indexOf(eil[i+1])+1 : 1)
				&&((TaisyklDE[j].DKont2!="") ? (TaisyklDE[j].DKont2).indexOf(eil[i+2])+1 : 1)
				&&((TaisyklDE[j].DKont3!="") ? (TaisyklDE[j].DKont3).indexOf(eil[i+3])+1 : 1)
				&&(TaisyklDE[j].Gim & Gim))
		{


		console.log("Kkont2=" + TaisyklDE[j].KKont2 + " Kkont1=" + TaisyklDE[j].KKont1 + " Es=" + TaisyklDE[j].ES + " Dkont1=" +TaisyklDE[j].DKont1 +" Dkont2=" + TaisyklDE[j].DKont2 +" Dkont3=" + 			TaisyklDE[j].DKont3 +" Gim=" + TaisyklDE[j].Gim +" Fonv=" + TaisyklDE[j].FonV +" Poslr=" + TaisyklDE[j].PoslR +" Poslt=" + TaisyklDE[j].PoslT);

			i += TaisyklDE[j].PoslR;
			TrEil = TrEil.concat(TaisyklDE[j].FonV);
			j = 0; //new 2018 11 22
		}
		else j++;
		if (j > TaisyklDE.length - 1) { j = 0; i++; }
	}
	return setLetterCaseType(letterCaseType, TrEil);
}

function transformDE() {
	var textOut = "";
	var textIn = document.getElementById("tekstasInput").value;
	var syllOfTextIn = syllableToStress(document.getElementById("tekstasInput").value);

	var input = document.getElementById("tekstasInput").value;
	console.log("input=" + input);
	if(pavardesDE.has(textIn)) {
		textOut = pavardesDE.get(textIn);
	} else {
		textOut = transkrDE(input, document.getElementById("gimine").value);
	}


	document.getElementById("tekstasOutput").value = textOut;
	console.log(syllOfTextIn);

}


function syllableToStress(word) {
  word = word.toLowerCase();
  if(word.length <= 3) { return 1; }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    var firstSyll = word.split(word.match(/[aeiouy]{1,2}/g)[0])[0] + word.match(/[aeiouy]{1,2}/g)[0];  
    return firstSyll;
}


function loadFileAsText(){
  	var fileToLoad = document.getElementById("fileToLoad").files[0];
  	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent){      	
	var textFromFileLoaded = fileLoadedEvent.target.result;  
	var outputContent = "";
	var arr = textFromFileLoaded.split(';');
	var passedNo = 0;
	var failedNo = 0;
	var exceptionNo = 0;
	
	for(i = 0; i < arr.length-1; i++){
	var foreignName = arr[i].substr(0, arr[i].indexOf(',')).trim();
	var lithName = (arr[i].split(',').pop().split(';')[0]).trim();
	var lithuanizedName = (transkrDE(foreignName, document.getElementById("gimine").value)).trim();
	var percentPasssed=0;


	lithuanizedName = lithuanizedName.charAt(0).toUpperCase() + lithuanizedName.slice(1);

	if(pavardesDE.has(foreignName.trim())){
		lithName = pavardesDE.get(foreignName.trim()) + "; EXCEPTION";
		exceptionNo = exceptionNo + 1;
	}

	else if(lithName != lithuanizedName){
		lithName = lithName + "; FAILED, Algorithms output is: " + lithuanizedName;
		failedNo = failedNo + 1;
	}

	else {
		lithName = lithName + "; PASSED";
		passedNo = passedNo + 1;
	}

	percentPassed = Math.round(passedNo/(passedNo+failedNo)*100);

	arr[i] = "\n" + foreignName + "; " + lithName;
	outputContent = outputContent + arr[i] + "\n"+"___________________________________________________________________";

	}
	outputContent = outputContent + "\n" + "________________________________________________________________________"+ "\n"+ "PASSED: " +passedNo+ "\n" +"FAILED: " +failedNo+ "\n" +"EXCEPTIONS: " +exceptionNo+ "\n" +"PERCENTAGE PASSED: " +percentPassed+"%";
      	document.getElementById("inputList").value = outputContent;
  };

  fileReader.readAsText(fileToLoad, "UTF-8");
}
