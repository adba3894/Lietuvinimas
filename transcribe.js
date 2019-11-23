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


//A raide 
addEntryDE( "","",'A',"E","BCDFGHJKLMNPQRSTVWXYZ","BCDFGHJKLMNPQRSTVWXYZ",3,"E",2,1 );//(2 taisykle) - balsis trumpas kai po jo eina dvi priebalses priklausancios tom paciom morfemom
addEntryDE( "","",'A',"E","H","LMNRAEIOUÄÖÜ",3,"Ė",3,1 );//(2 taisykle) - balsis ilgas, jei po jo eina netariamoji h, esanti pries l,m,n,r arba balse
addEntryDE( "","BCDFGHJKLMNPQRSTVWXYZ",'A',"E","BCDFGHJKLMNPQRSTVWXYZ","",3,"Ė",2,1 );//(2 taisykle) - balsis ilgas, kai jis yra kirciuoto skiemens gale - kai is kaires ir desines yra po priebalse
addEntryDE( "","",'Ä',"BCDFGJKLMNPQRSTVWXYZ","BCDFGHJKLMNPQRSTVWXYZ","",3,"E",2,1 );//(2 taisykle) - balsis trumpas kai po jo eina dvi priebalses priklausancios tom paciom morfemom
addEntryDE( "","",'Ä',"B","B","",3,"EB",3,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"C","K","",3,"EK",3,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"D","D","",3,"ED",3,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"F","F","",3,"EF",3,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"L","L","",3,"EL",3,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"M","M","",3,"EM",3,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"N","N","",3,"EN",3,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"P","P","",3,"EP",3,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"R","R","",3,"ER",3,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"S","S","",3,"ES",3,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"T","T","",3,"ET",3,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"T","Z","",3,"EC",3,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"P","F","",3,"EPF",3,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"X","","",3,"EKS",3,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'Ä',"U","","",3,"OJ",2,1 );//samplaika skyla i skirtingus skiemenis (5 taisykle)
addEntryDE( "","",'Ä',"LMNRAEIOUÖÜ","","",3,"Ė",1,1 );//(2 taisykle) - balsis ilgas, jei po jo eina netariamoji h, esanti pries l,m,n,r arba balse
addEntryDE( "","BCDFGHJKLMNPQRSTVWXYZ",'Ä',"BCDFGJKLMNPQRSTVWXYZ","","",3,"Ė",1,1 );//(2 taisykle) - balsis ilgas, kai jis yra kirciuoto skiemens gale - kai is kaires ir desines yra po priebalse
addEntryDE( "","",'A',"E","B","B",3,"EB",4,1 );//(2 taisykle) - balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","C","K",3,"EK",4,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","D","D",3,"ED",4,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","F","F",3,"EF",4,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","L","L",3,"EL",4,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","M","M",3,"EM",4,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","N","N",3,"EN",4,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","P","P",3,"EP",4,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","R","R",3,"ER",4,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","S","S",3,"ES",4,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","T","T",3,"ET",4,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","T","Z",3,"EC",4,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","P","F",3,"EPF",4,1 );//(2 taisykle)- balsis trumpas kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"E","X","",3,"EKS",3,1 );//(2 taisykle)- balsis trumpas  kai po jo eina bb ck dd ff ll mm nn pp rr ss tt ty pf x
addEntryDE( "","",'A',"Y","BCDFGHJKLMNPRTVZß","",3,"AI",2,1 );// samplaika lieka viename skiemenyje (4 taisykle)
addEntryDE( "","",'A',"I","BCDFGHJKLMNPRTVZß","",3,"AI",2,1 );// samplaika lieka viename skiemenyje (4 taisykle)
addEntryDE( "","",'A',"Y","","",3,"AJ",2,1 );// samplaika skyla i skirtingus skiemenis (4 taisykle)
addEntryDE( "","",'A',"I","","",3,"AJ",2,1 );// samplaika skyla i skirtingus skiemenis (4 taisykle)
addEntryDE( "","",'Ä',"U","BCDFGHJKLMNPRTVZ","",3,"OI",2,1 );//samplaika lieka viename skiemenyje (5 taisykle)
addEntryDE( "","",'A',"H","","",3,"A",2,1 );//(1 taisykle)
addEntryDE( "","",'Ä',"H","","",3,"Ė",2,1 );//(3 taisykle)
addEntryDE( "","",'A',"E","H","",3,"Ė",3,1 );//(3 taisykle) - paprastas keitimas
addEntryDE( "","",'A',"A","","",3,"A",2,1 );//(1 taisykle)
addEntryDE( "","",'A',"","","",3,"A",1,1 );////(1 taisykle)

//B raide
addEntryDE( "","",'E',"BCDFGJKLMNPQRSTVWXYZ","BCDFGHJKLMNPQRSTVWXYZ","",3,"E",1,1 );//(2 taisykle) - balsis trumpas kai po jo eina dvi priebalses priklausancios tom paciom morfemom
addEntryDE( "","",'E',"B","B","",3,"EB",3,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"C","K","",3,"EK",3,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"D","D","",3,"ED",3,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"F","F","",3,"EF",3,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"L","L","",3,"EL",3,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"M","M","",3,"EM",3,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"N","N","",3,"EN",3,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"P","P","",3,"EP",3,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"R","R","",3,"ER",3,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"S","S","",3,"ES",3,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"T","T","",3,"ET",3,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"T","Z","",3,"EC",3,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"P","F","",3,"EPF",3,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'E',"X","","",3,"EKS",2,1 );//(13 taisykle)- kai E ilgas atviras skiemuo
addEntryDE( "","",'I',"H","","",3,"Y",2,1 );//(23 taisykle)- kai E ilgas
addEntryDE( "","",'I',"BCDFGHJKLMNPQRSTVWXYZ","BCDFGHJKLMNPQRSTVWXYZ","",3,"I",1,1 );//(21 taisykle) - balsis trumpas kai po jo eina dvi
addEntryDE( "","",'I',"B","B","",3,"IB",3,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"C","K","",3,"IK",3,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"D","D","",3,"ID",3,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"F","F","",3,"IF",3,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"L","L","",3,"IL",3,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"M","M","",3,"IM",3,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"N","N","",3,"IN",3,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"P","P","",3,"IP",3,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"R","R","",3,"IR",3,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"S","S","",3,"IS",3,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"T","T","",3,"IT",3,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"T","Z","",3,"IC",3,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"P","F","",3,"IPF",3,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'I',"X","","",3,"IKS",2,1 );//(21 taisykle)- kai I trumpas atviras skiemuo
addEntryDE( "","",'B',"B","","",3,"B",2,1 );//(6 taisykle)
addEntryDE( "","",'B',"","","",3,"B",1,1 );//(6 taisykle)

//C raide
addEntryDE( "","",'C',"H","S","",3,"CHS",3,1 );//(10 taisykle)
addEntryDE("","",'C',"AOUPBTDGFVSZJXLMNR","","",3,"K",1,1 );//(7 taisykle)
addEntryDE("","AOUPBTDKGFVSZJXLMNR",'C',"_","","",3,"K",1,1 );//(7 taisykle)
addEntryDE( "","",'C',"H","","",3,"CH",2,1 );//(9 taisykle)
addEntryDE("","",'C',"E","","",3,"C",2,1 );//(7 taisykle)
addEntryDE("","",'C',"I","","",3,"C",2,1 );//(7 taisykle)
addEntryDE("","",'C',"Y","","",3,"C",2,1 );//(7 taisykle)
addEntryDE( "","",'C',"K","","",3,"K",2,1 );//(8 taisykle)
addEntryDE( "","",'C',"","","",3,"C",1,1 );//(7 taisykle)

//D raide
addEntryDE( "","",'D',"D","","",3,"D",2,1 );//(11 taisykle)
addEntryDE( "","",'D',"T","","",3,"T",2,1 );//(12 taisykle)
addEntryDE( "","",'D',"","","",3,"D",1,1 );//(11 taisykle)

//E raide
addEntryDE( "","",'E',"H","LMNRAEIOUÄÖÜ","",3,"Ė",2,1 );//(13 taisykle)- kai po e eina netariamoji h esanti pries ...
addEntryDE( "","",'E',"H","","",3,"Ė",2,1 );//(14 taisykle)
addEntryDE( "","I",'E',"","","",3,"Y",2,1 );//(13 taisykle)- E ilgas kai pries ji eina I
addEntryDE( "","BCDFGJKLMNPQRSTVWXYZ",'E',"BCDFGJKLMNPQRSTVWXYZ","","",3,"Ė",1,1 );//(13 tais.)- kai E kirciuoto skiemens gale-REIKA KAZKAIP SUGALVOT-JEI SIA TAISYKLE PRITAIKE 1 KARTA,KAD DAUGIAU NEBETAIKYTU
addEntryDE( "","",'E',"E","","",3,"Ė",2,1 );//(14 taisykle)- kai E ilgas, jis pazymetas dviguba balse
addEntryDE( "","",'E',"I","BCDFGHJKLMNPRTVZ","",3,"EI",2,1 );//(15 taisykle)
addEntryDE( "","",'E',"Y","BCDFGHJKLMNPRTVZ","",3,"EI",2,1 );//(15 taisykle)
addEntryDE( "","",'E',"I","EAEIOUÖÜ","",3,"EJ",2,1 );//(15 taisykle)
addEntryDE( "","",'E',"Y","EAEIOUÖÜ","",3,"EJ",2,1 );//(15 taisykle)
addEntryDE( "","",'E',"U","BCDFGHJKLMNPRTVZ","",3,"OI",2,1 );//(16 taisykle)
addEntryDE( "","",'E',"U","","",3,"OJ",2,1 );//(16 taisykle)
addEntryDE( "","",'E',"","","",3,"E",1,1 );//(14 taisykle)

//F raide
addEntryDE( "","",'F',"F","","",3,"F",2,1 );//(17 taisykle)
addEntryDE( "","",'F',"","","",3,"F",1,1 );//(17 taisykle)

//G raide
addEntryDE( "","",'G',"G","","",3,"G",2,1 );//(18 taisykle)
addEntryDE( "","",'G',"H","","",3,"G",3,1 );//(18 taisykle)
addEntryDE( "","",'G',"K","","",3,"K",2,1 );//(19 taisykle)
addEntryDE( "","",'G',"","","",3,"G",1,1 );//(18 taisykle)

//H raide
addEntryDE( "","_",'H',"IEAUOÄÖÜ","","",3,"H",1,1 );//(20 taisykle) SKIEMENS PRADYIOJE
addEntryDE( "","IEAUOÄÖÜ",'H',"IEAUOÄÖÜ","","",3,"H",1,1 );//(20 taisykle) SKIEMENS PRADYIOJE
addEntryDE( "","",'O',"H","","",3,"O",2,1 );//(29 taisykle)
addEntryDE( "","J",'H',"","","",3,"J",2,1 );//(20 taisykle)
addEntryDE( "","R",'H',"","","",3,"R",2,1 );//(20 taisykle)
addEntryDE( "","T",'H',"","","",3,"T",2,1 );//(20 taisykle)
addEntryDE( "","",'H',"","","",3,"H",1,1 );//(20 taisykle)

//I raide
addEntryDE( "","",'I',"H","LMNRAEIOUÄÖÜ","",3,"Y",2,1 );//(21 taisykle)- kai I ilgas
addEntryDE( "","",'I',"I","","",3,"Y",2,1 );//(21 taisykle) I Ilgas, pazymetas dviguba balse
addEntryDE( "","BCDFGHJKLMNPRTVZ",'I',"BCDFGHJKLMNPRTVZ","","",3,"Y",1,1 );//(21 taisykle) I Ilgas, pazymetas dviguba balse
addEntryDE( "","",'I',"E","","",3,"Y",2,1 );//(22 taisykle)
addEntryDE( "","",'I',"BCDFGHJKLMNPRTVZ","","",3,"Y",1,1 );//(21 taisykle)
addEntryDE( "","",'I',"","","",3,"I",1,1 );//(21 taisykle)

//J raide
addEntryDE( "","",'J',"H","","",3,"J",2,1 );//(24 taisykle)
addEntryDE( "","",'J',"","","",3,"J",1,1 );//(24 taisykle)

//K raide
addEntryDE( "","",'K',"K","","",3,"K",2,1 );//(25 taisykle)
addEntryDE( "","",'K',"","","",3,"K",1,1 );//(25 taisykle)

//L raide
addEntryDE( "","",'L',"L","MNRAEIOÄÖÜBCDFGHJKPTVZ","",3,"L",2,1 );//(26 taisykle)
addEntryDE( "","",'L',"MNRAEIOÄÖÜBCDFGHJKPTVYZ","","",3,"L",1,1 );//(26 taisykle)
addEntryDE( "","",'L',"L","U","",3,"LI",3,1 );//(26 taisykle)
addEntryDE( "","",'L',"U","","",3,"LI",2,1 );//(26 taisykle)


//M raide
addEntryDE( "","",'M',"M","","",3,"M",2,1 );//(27 taisykle)
addEntryDE( "","",'M',"","","",3,"M",1,1 );//(27 taisykle)

//N raide
addEntryDE( "","",'N',"N","","",3,"N",2,1 );//(28 taisykle)
addEntryDE( "","",'N',"","","",3,"N",1,1 );//(28 taisykle)


//OI, OY
addEntryDE( "","",'O',"Y","_","",3,"OJ",2,2 );//(32 taisykle)
addEntryDE( "","",'O',"I","BCDFGHJKLMNPRTVZ","",3,"OI",2,1 );//(32 taisykle)
addEntryDE( "","",'O',"Y","BCDFGHJKLMNPRTVZ","",3,"OI",2,1 );//(32 taisykle)
addEntryDE( "","",'O',"I","EAEIOUÖÜ","",3,"OJ",2,1 );//(32 taisykle)
addEntryDE( "","",'O',"Y","EAEIOUÖÜ","",3,"OJ",2,1 );//(32 taisykle)

//O raide
addEntryDE( "","",'Ö',"H","","",3,"Ė",2,1 );//(31 taisykle)
addEntryDE( "","",'O',"E","H","",3,"Ė",3,1 );//(31 taisykle)
addEntryDE( "","",'O',"O","","",3,"O",2,1 );//(29 taisykle)
addEntryDE( "","",'O',"","","",3,"O",1,1 );//(29 taisykle)

//Ö raide
addEntryDE( "","",'Ö',"B","B","",3,"EB",3,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"C","K","",3,"EK",3,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"D","D","",3,"ED",3,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"F","F","",3,"EF",3,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"L","L","",3,"EL",3,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"M","M","",3,"EM",3,1 );//(31 taisykle)
addEntryDE( "","",'Ö',"N","N","",3,"EN",3,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"P","P","",3,"EP",3,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"R","R","",3,"ER",3,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"S","S","",3,"ES",3,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"T","T","",3,"ET",3,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"T","Z","",3,"ETS",3,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"P","F","",3,"EPF",3,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"X","","",3,"EKS",2,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","BCDFGHJKLMNPRTVZS","",3,"Ė",2,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","B","B",3,"EB",4,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","C","K",3,"EK",4,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","D","D",3,"ED",4,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","F","F",3,"EF",4,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","L","L",3,"EL",4,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","M","M",3,"EM",4,1 );//(31 taisykle)
addEntryDE( "","",'O',"E","N","N",3,"EN",4,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","P","P",3,"EP",4,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","R","R",3,"ER",4,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","S","S",3,"ES",4,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","T","T",3,"ET",4,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","T","Z",3,"ETS",4,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","P","F",3,"EPF",4,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","X","",3,"EKS",3,1 );//(30 taisykle)
addEntryDE( "","",'Ö',"H","LMNRAEIOUÖÜ","",3,"Ė",2,1 );//(30 taisykle)
addEntryDE( "","BCDFGHJKLMNPQRSTVWXYZ",'Ö',"BCDFGHJKLMNPQRSTVWXYZ","","",3,"Ė",1,1 );
addEntryDE( "","",'Ö',"BCDFGHJKLMNPRTVZ","","",3,"Ė",1,1 );//(30 taisykle)
addEntryDE( "","",'O',"E","H","LMNRAEIOUÖÜ",3,"Ė",3,1 );//(30 taisykle)
addEntryDE( "","BCDFGHJKLMNPQRSTVWXYZ",'O',"E","BCDFGHJKLMNPQRSTVWXYZ","",3,"Ė",2,1 );//(30 taisykle)

//P raide
addEntryDE( "","",'P',"P","","",3,"P",2,1 );//(33 taisykle)
addEntryDE( "","",'P',"F","","",3,"PF",2,1 );//(34 taisykle)
addEntryDE( "","",'P',"H","","",3,"F",2,1 );//(35 taisykle)
addEntryDE( "","",'P',"","","",3,"P",1,1 );//(33 taisykle)

//Q raide
addEntryDE( "","",'Q',"U","","",3,"KV",2,1 );//(36 taisykle)
addEntryDE( "","",'Q',"","","",3,"KV",1,1 );//(36 taisykle)

//R Raide
addEntryDE( "","",'R',"H","","",3,"R",2,1 );//(37 taisykle)
addEntryDE( "","",'R',"R","","",3,"R",2,1 );//(37 taisykle)
addEntryDE( "","",'R',"","","",3,"R",1,1 );//(37 taisykle)

//S Raide
addEntryDE("","T",'Z',"S","C","H",3,"Č",4,1 );//(46 taisykle)
addEntryDE( "","",'S',"C","H","",3,"Š",3,1 );//(39 taisykle)
addEntryDE( "","_",'S',"P","","",3,"ŠP",2,1 );//(40 taisykle)// kaip pritaikyti taisykle tik zodzio pradziai?
addEntryDE( "","BCDFGHJKLMNPQRSTVWXZ",'S',"P","","",3,"ŠP",2,1 );//(40 taisykle)// kaip pritaikyti taisykle tik zodzio pradziai?
addEntryDE( "","",'S',"_","","",3,"S",1,1 );//(41 taisykle)
addEntryDE( "","",'S',"S","","",3,"S",2,1 );//(41 taisykle)
addEntryDE( "","_",'S',"T","","",3,"ŠT",2,1 );//(42 taisykle)// kaip pritaikyti taisykle tik zodzio pradziai?
addEntryDE( "","BCDFGHJKLMNPQRSTVWXZ",'S',"T","","",3,"ŠT",2,1 );//(42 taisykle)// kaip pritaikyti taisykle tik zodzio pradziai?
addEntryDE( "","AOUIEÄÖÜY",'S',"BCDFGHJKLMNPQRSTVWXZ","","",3,"S",1,1 );//(38 taisykle)
addEntryDE( "","",'S',"AOUIEÄÖÜY","","",3,"Z",1,1 );//(38 taisykle)
addEntryDE( "","",'ß',"","","",3,"S",1,1 );//(41 taisykle)
addEntryDE( "","",'S',"","","",3,"S",1,1 );//(42 taisykle)// kaip pritaikyti taisykle tik zodzio pradziai?

//T raide
addEntryDE("","",'T',"S","C","H",3,"Č",4,1 );//(46 taisykle)
addEntryDE("","",'T',"Z","","",3,"C",2,1 );//(45 taisykle)
addEntryDE("","",'T',"I","O","N",3,"CION",4,1 );//(44 taisykle)
addEntryDE("","",'T',"T","","",3,"T",2,1 );//(43 taisykle)
addEntryDE("","",'T',"H","","",3,"T",2,1 );//(43 taisykle)

addEntryDE("","",'T',"","","",3,"T",1,1 );//(43 taisykle)

//U,Ü,UE raides
//TRUMPAS 2 SKILTIS
addEntryDE( "","",'U',"H","","",3,"",2,1 );//(47 taisykle)- kai UE TRUMPAS
addEntryDE( "","_",'U',"E","B","B",3,"IB",4,1 );//48 taisykle,
addEntryDE( "","_",'U',"E","C","K",3,"IKS",4,1 );//48 taisykle,
addEntryDE( "","_",'U',"E","D","D",3,"ID",4,1 );//48 taisykle,
addEntryDE( "","_",'U',"E","F","F",3,"IF",4,1 );//48 taisykle,
addEntryDE( "","_",'U',"E","L","L",3,"IL",4,1 );//48 taisykle,
addEntryDE( "","_",'U',"E","M","M",3,"IM",4,1 );//48 taisykle,
addEntryDE( "","_",'U',"E","N","N",3,"IN",4,1 );//48 taisykle,
addEntryDE( "","_",'U',"E","P","P",3,"IP",4,1 );//48 taisykle,
addEntryDE( "","_",'U',"E","R","R",3,"IR",4,1 );//48 taisykle,
addEntryDE( "","_",'U',"E","S","S",3,"IS",4,1 );//48 taisykle,
addEntryDE( "","_",'U',"E","T","T",3,"IT",4,1 );//48 taisykle,
addEntryDE( "","_",'U',"E","T","Z",3,"ITS",4,1 );//48 taisykle,
addEntryDE( "","_",'U',"E","P","F",3,"IPF",4,1 );//48 taisykle,
addEntryDE( "","_",'U',"E","X","",3,"IKS",3,1 );//48 taisykle,
addEntryDE( "","_",'Ü',"B","B","",3,"IB",3,1 );//48 taisykle,
addEntryDE( "","_",'Ü',"C","K","",3,"IKS",3,1 );//48 taisykle,
addEntryDE( "","_",'Ü',"D","D","",3,"ID",3,1 );//48 taisykle,
addEntryDE( "","_",'Ü',"F","F","",3,"IF",3,1 );//48 taisykle,
addEntryDE( "","_",'Ü',"L","L","",3,"IL",3,1 );//48 taisykle,
addEntryDE( "","_",'Ü',"M","M","",3,"IM",3,1 );//48 taisykle,
addEntryDE( "","_",'Ü',"N","N","",3,"IN",3,1 );//48 taisykle,
addEntryDE( "","_",'Ü',"P","P","",3,"IP",3,1 );//48 taisykle,
addEntryDE( "","_",'Ü',"R","R","",3,"IR",3,1 );//48 taisykle,
addEntryDE( "","_",'Ü',"S","S","",3,"IS",3,1 );//48 taisykle,
addEntryDE( "","_",'Ü',"T","T","",3,"IT",3,1 );//48 taisykle,
addEntryDE( "","_",'Ü',"T","Z","",3,"ITS",3,1 );//48 taisykle,
addEntryDE( "","_",'Ü',"P","F","",3,"IPF",3,1 );//48 taisykle,
addEntryDE( "","_",'Ü',"X","","",3,"IKS",2,1 );//48 taisykle,
//ILGAS 1 SKILTIS
addEntryDE( "","_",'U',"E","H","",3,"Y",3,1 );//48 taisykle
addEntryDE( "","_",'U',"E","H","LMNRAEIOUÄÖÜ",3,"Y",3,1 );//48 taisykle,
addEntryDE( "","_",'U',"E","BCDFGHJKLMNPQRSTVWXYZ","",3,"Y",2,1 );//48 taisykle,
addEntryDE( "","_",'Ü',"H","LMNRAEIOUÄÖÜ","",3,"Y",2,1 );//48 taisykle,
addEntryDE( "","_",'Ü',"BCDFGHJKLMNPQRSTVWXYZ","","",3,"Y",1,1 );//48 taisykle,
//4 skiltis po J kai jis trumpas
addEntryDE( "","J",'Ü',"B","B","",3,"UB",3,1 );//48 taisykle,
addEntryDE( "","J",'Ü',"C","K","",3,"UKS",3,1 );//48 taisykle,
addEntryDE( "","J",'Ü',"D","D","",3,"UD",3,1 );//48 taisykle,
addEntryDE( "","J",'Ü',"F","F","",3,"UF",3,1 );//48 taisykle,
addEntryDE( "","J",'Ü',"L","L","",3,"UL",3,1 );//48 taisykle,
addEntryDE( "","J",'Ü',"M","M","",3,"UM",3,1 );//48 taisykle,
addEntryDE( "","J",'Ü',"N","N","",3,"UN",3,1 );//48 taisykle,
addEntryDE( "","J",'Ü',"P","P","",3,"UP",3,1 );//48 taisykle,
addEntryDE( "","J",'Ü',"R","R","",3,"UR",3,1 );//48 taisykle,
addEntryDE( "","J",'Ü',"S","S","",3,"US",3,1 );//48 taisykle,
addEntryDE( "","J",'Ü',"T","T","",3,"UT",3,1 );//48 taisykle,
addEntryDE( "","J",'Ü',"T","Z","",3,"UTS",3,1 );//48 taisykle,
addEntryDE( "","J",'Ü',"P","F","",3,"UPF",3,1 );//48 taisykle,
addEntryDE( "","J",'Ü',"X","","",3,"UKS",2,1 );//48 taisykle,
addEntryDE( "","J",'Ü',"BCDFGHJKLMNPQRSTVWXYZ","","",3,"U",1,1 );//48 trumpas
addEntryDE( "","J",'U',"E","B","B",3,"UB",4,1 );//48 taisykle,
addEntryDE( "","J",'U',"E","C","K",3,"UKS",4,1 );//48 taisykle,
addEntryDE( "","J",'U',"E","D","D",3,"UD",4,1 );//48 taisykle,
addEntryDE( "","J",'U',"E","F","F",3,"UF",4,1 );//48 taisykle,
addEntryDE( "","J",'U',"E","L","L",3,"UL",4,1 );//48 taisykle,
addEntryDE( "","J",'U',"E","M","M",3,"UM",4,1 );//48 taisykle,
addEntryDE( "","J",'U',"E","N","N",3,"UN",4,1 );//48 taisykle,
addEntryDE( "","J",'U',"E","P","P",3,"UP",4,1 );//48 taisykle,
addEntryDE( "","J",'U',"E","R","R",3,"UR",4,1 );//48 taisykle,
addEntryDE( "","J",'U',"E","S","S",3,"US",4,1 );//48 taisykle,
addEntryDE( "","J",'U',"E","T","T",3,"UT",4,1 );//48 taisykle,
addEntryDE( "","J",'U',"E","T","Z",3,"UTS",4,1 );//48 taisykle,
addEntryDE( "","J",'U',"E","P","F",3,"UPF",4,1 );//48 taisykle,
addEntryDE( "","J",'U',"E","X","",3,"UKS",3,1 );//48 taisykle,
addEntryDE( "","J",'U',"E","BCDFGHJKLMNPQRSTVWXYZ","",3,"U",2,1 );//48 trumpas
//3 skiltis po J kai jis ilgas
addEntryDE( "","J",'Ü',"H","LMNRAEIOUÄÖÜ","",3,"Ū",2,1 );//48 J Ü Ilgas
addEntryDE( "","J",'U',"E","H","LMNRAEIOUÄÖÜ",3,"Ū",3,1 );//48 J U E Ilgas
//6 skiltis zodzio vidurys kai TRUMPAS
addEntryDE( "","",'Ü',"B","B","",3,"IUB",3,1 );//48 taisykle,
addEntryDE( "","",'Ü',"C","K","",3,"IUKS",3,1 );//48 taisykle,
addEntryDE( "","",'Ü',"D","D","",3,"IUD",3,1 );//48 taisykle,
addEntryDE( "","",'Ü',"F","F","",3,"IUF",3,1 );//48 taisykle,
addEntryDE( "","",'Ü',"L","L","",3,"IUL",3,1 );//48 taisykle,
addEntryDE( "","",'Ü',"M","M","",3,"IUM",3,1 );//48 taisykle,
addEntryDE( "","",'Ü',"N","N","",3,"IUN",3,1 );//48 taisykle,
addEntryDE( "","",'Ü',"P","P","",3,"IUP",3,1 );//48 taisykle,
addEntryDE( "","",'Ü',"R","R","",3,"IUR",3,1 );//48 taisykle,
addEntryDE( "","",'Ü',"S","S","",3,"IUS",3,1 );//48 taisykle,
addEntryDE( "","",'Ü',"T","T","",3,"IUT",3,1 );//48 taisykle,
addEntryDE( "","",'Ü',"T","Z","",3,"IUTS",3,1 );//48 taisykle,
addEntryDE( "","",'Ü',"P","F","",3,"IUPF",3,1 );//48 taisykle,
addEntryDE( "","",'Ü',"X","","",3,"IUKS",2,1 );//48 taisykle,
addEntryDE( "","BCDFGHKLMNPQRSTVWXYZ",'Ü',"BCDFGHJKLMNPQRSTVWXYZ","","",3,"U",1,1 );//48 trumpas
addEntryDE( "","",'U',"E","B","B",3,"IUB",4,1 );//48 taisykle,
addEntryDE( "","",'U',"E","C","K",3,"IUKS",4,1 );//48 taisykle,
addEntryDE( "","",'U',"E","D","D",3,"IUD",4,1 );//48 taisykle,
addEntryDE( "","",'U',"E","F","F",3,"IUF",4,1 );//48 taisykle,
addEntryDE( "","",'U',"E","L","L",3,"IUL",4,1 );//48 taisykle,
addEntryDE( "","",'U',"E","M","M",3,"IUM",4,1 );//48 taisykle,
addEntryDE( "","",'U',"E","N","N",3,"IUN",4,1 );//48 taisykle,
addEntryDE( "","",'U',"E","P","P",3,"IUP",4,1 );//48 taisykle,
addEntryDE( "","",'U',"E","R","R",3,"IUR",4,1 );//48 taisykle,
addEntryDE( "","",'U',"E","S","S",3,"IUS",4,1 );//48 taisykle,
addEntryDE( "","",'U',"E","T","T",3,"IUT",4,1 );//48 taisykle,
addEntryDE( "","",'U',"E","T","Z",3,"IUTS",4,1 );//48 taisykle,
addEntryDE( "","",'U',"E","P","F",3,"IUPF",4,1 );//48 taisykle,
addEntryDE( "","",'U',"E","X","",3,"IUKS",3,1 );//48 taisykle,
addEntryDE( "","BCDFGHKLMNPQRSTVWXYZ",'U',"E","BCDFGHJKLMNPQRSTVWXYZ","",3,"U",2,1 );//48 trumpas
//5 skiltis zodzio vidurys kai ilgas
addEntryDE( "","",'Ü',"H","LMNRAEIOUÄÖÜ","",3,"IŪ",2,1 );//48 taisykle,
addEntryDE( "","BCDFGHJKLMNPQRSTVWXYZ",'Ü',"BCDFGHJKLMNPQRSTVWXYZ","","",3,"IŪ",1,1 );//48 taisykle,
addEntryDE( "","",'U',"E","H","LMNRAEIOUÄÖÜ",3,"IŪ",3,1 );//48 taisykle,
addEntryDE( "","BCDFGHJKLMNPQRSTVWXYZ",'U',"E","H","BCDFGHJKLMNPQRSTVWXYZ",3,"IŪ",3,1 );//48 taisykle,
// KAI U ILGAS
addEntryDE( "","",'U',"LMNRAEIOÄÖÜ","","",3,"Ū",1,1 );//(47 taisykle)- kai U ilgas
addEntryDE( "","BCDFGHJKLMNPQRSTVWXYZ",'U',"BCDFGHJKLMNPQRSTVWXYZ","","",3,"Ū",1,1 );//(47 taisykle)- kai U ilgas
addEntryDE( "","",'U',"U","","",3,"Ū",2,1 );//(47 taisykle)- kai U ilgas
addEntryDE( "","",'U',"B","B","",3,"UB",3,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"C","K","",3,"UK",3,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"D","D","",3,"UD",3,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"F","F","",3,"UF",3,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"L","L","",3,"UL",3,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"M","M","",3,"UM",3,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"N","N","",3,"UN",3,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"P","P","",3,"UP",3,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"R","R","",3,"UR",3,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"S","S","",3,"US",3,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"T","T","",3,"UT",3,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"T","Z","",3,"UTS",3,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"P","F","",3,"UPF",3,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"X","","",3,"UKS",2,1 );//(47 taisykle)- kai U trumpas
addEntryDE( "","",'U',"BCDFGJKLMNPQRSTVWXYZ","BCDFGHJKLMNPQRSTVWXYZ","",3,"U",2,1 );//(47 taisykle)- kai U MORFEMAI
addEntryDE( "","",'U',"","","",3,"U",1,1 );//(47 taisykle) kai U trumpas
addEntryDE( "","",'U',"B","","",3,"ŪB",2,1 );//(47 taisykle)- kai U ilgas
addEntryDE( "","",'U',"C","","",3,"ŪC",2,1 );//(47 taisykle)- kai U ilgas
addEntryDE( "","",'U',"D","","",3,"ŪD",2,1 );//(47 taisykle)- kai U ilgas
addEntryDE( "","",'U',"F","","",3,"ŪF",2,1 );//(47 taisykle)- kai U ilgas
addEntryDE( "","",'U',"G","","",3,"ŪG",2,1 );//(47 taisykle)- kai U ilgas
addEntryDE( "","",'U',"H","","",3,"Ū",2,1 );//(49 taisykle)- kai U ilgas
addEntryDE( "","",'U',"J","","",3,"ŪJ",2,1 );//(47 taisykle)- kai U ilgas
addEntryDE( "","",'U',"K","","",3,"ŪK",2,1 );//(47 taisykle)- kai U ilgas
addEntryDE( "","",'U',"L","","",3,"ŪL",2,1 );//(47 taisykle)- kai U ilgas
addEntryDE( "","",'U',"M","","",3,"ŪM",2,1 );//(47 taisykle)- kai U ilgas
addEntryDE( "","",'U',"N","","",3,"ŪN",2,1 );//(47 taisykle)- kai U ilgas
//addEntryDE( "","",'U',"P","","",3,"ŪP",2,1 );//(47 taisykle)- kai U ilgas
addEntryDE( "","",'U',"R","","",3,"ŪR",2,1 );//(47 taisykle)- kai U ilgas
addEntryDE( "","",'U',"T","","",3,"ŪT",2,1 );//(47 taisykle)- kai U ilgas
addEntryDE( "","",'U',"V","","",3,"ŪV",2,1 );//(47 taisykle)- kai U ilgas
addEntryDE( "","",'U',"Z","","",3,"ŪZ",2,1 );//(47 taisykle)- kai U ilgas
addEntryDE( "","",'U',"","","",3,"U",1,1 );//(43 taisykle) kai U trumpas
addEntryDE( "","_",'U',"E","H","LMNRAEIOUÄÖÜ",3,"Y",4,1 );//48 taisykle,
addEntryDE( "","_",'U',"E","BCDFGHJKLMNRTVZ","",3,"Y",3,1 );//48 taisykle,
addEntryDE( "","_",'U',"E","H","",3,"I",3,1 );//48 taisykle
addEntryDE( "","J",'Ü',"LMNRAEIOUÄÖÜ","","",3,"Ū",3,1 );//48 
addEntryDE( "","J",'Ü',"BCDFGHJKLMNRTVZ","","",3,"Ū",3,1 );//48 
addEntryDE( "","J",'Ü',"","","",3,"U",2,1 );//48 taisykle
addEntryDE( "","J",'Ü',"","","",3,"U",2,1 );//48 taisykle
addEntryDE( "","J",'U',"E","H","LMNRAEIOUÄÖÜ",3,"Ū",5,1 );//48 
addEntryDE( "","J",'U',"E","BCDFGHJKLMNRTVZ","",3,"Ū",4,1 );//48 
addEntryDE( "","J",'U',"E","","",3,"U",3,1 );//48 taisykle
addEntryDE( "","J",'U',"E","","",3,"U",3,1 );//48 taisykle
addEntryDE( "","_",'Ü',"H","LMNRAEIOUÄÖÜ","",3,"Y",3,1 );//48 taisykle,
addEntryDE( "","_",'Ü',"BCDFGHJKLMNRTVZ","","",3,"Y",2,1 );//48 taisykle,
addEntryDE( "","_",'Ü',"H","","",3,"Y",2,1 );//50 taisykle
addEntryDE( "","",'U',"E","H","LMNRAEIOUÄÖÜ",3,"IŪ",4,1 );//48 
addEntryDE( "","",'U',"E","BCDFGHJKLMNRTVZ","",3,"IŪ",3,1 );//48 
addEntryDE( "","",'Ü',"BCDFGHJKLMNRTVZ","","",3,"IŪ",2,1 );//48 
addEntryDE( "","",'Ü',"H","LMNRAEIOUÄÖÜ","",3,"IŪ",3,1 );//48 
addEntryDE( "","",'Ü',"","","",3,"IU",1,1 );//48 taisykle
addEntryDE( "","",'U',"E","","",3,"IU",2,1 );//48 taisykle
addEntryDE( "","",'Ü',"","","",3,"IU",1,1 );//48 taisykle
addEntryDE( "","_",'U',"E","H","",3,"Y",3,1 );//50 taisykle
addEntryDE( "","",'U',"E","H","",3,"IU",3,1 );//48 taisykle

//V raide
addEntryDE( "","",'V',"","","",3,"F",1,1 );//51 taisykle

//W raide
addEntryDE( "","",'W',"","","",3,"V",1,1 );//52 taisykle

//X raide
addEntryDE( "","",'X',"","","",3,"KS",2,1 );//53 taisykle

//Y raide
//addEntryDE( "","",'Y',"BCDFGHJKLMNRTVZ","","",3,"Y",2,1 );//54 taisykle
addEntryDE( "","AOUIEÄÖÜ",'Y',"AOUIEÄÖÜ_","","",3,"Y",1,1 );//54 taisykle
addEntryDE( "","",'Y',"","","",3,"I",1,1 );//54 taisykle

//Z raide
addEntryDE( "","",'Z',"S","C","H",3,"Č",4,1 );//54 taisykle
addEntryDE( "","",'Z',"Z","","",3,"C",2,1 );//54 taisykle
addEntryDE( "","",'Z',"","","",3,"C",1,1 );//54 taisykle

//Galunes
addEntryDE( "","KWTFNZHDSGPM",'_',"","","",1,"AS",1,2 );
addEntryDE( "","RL",'_',"","","",1,"IS",1,2 );
addEntryDE( "","I",'_',"","","",1,"S",1,2 );
addEntryDE( "","",'_',"","","",3,"",1,1 );
addEntryDE( "","",' ',"","","",3," ",1,1 );

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

