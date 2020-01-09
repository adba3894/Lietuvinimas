var TaisyklDE = [];
var exceptionEndings = [
  ["ĖJUS", "EJUS"]
];
const syllableRegex = /[^aäėūeioöuüy]*[aäėūeioöuüy]+(?:[^aäėūeioöuüy]*$|[^aäėūeioöuüy](?=[^aäėūeioöuüy]))?/gi;

function addEntryDE(KKont2, KKont1, ES, DKont1, DKont2, DKont3, Gim, FonV, PoslR, PoslT) {
    TaisyklDE.push({
        KKont2,
        KKont1,
        ES,
        DKont1,
        DKont2,
        DKont3,
        Gim,
        FonV,
        PoslR,
        PoslT
    });
}

function lietuvinimoTaisyklesDE() {
    addEntryDE("", "", 'E', "Y", "EAEIOUÖÜ", "", 3, "EJ", 2, 1); 
    addEntryDE("", "", 'L', "L", "U", "", 3, "LI", 2, 1); 
    addEntryDE("L", "L", '_', "", "", "", 1, "AS", 2, 1); 
    addEntryDE("", "", 'L', "L", "", "", 3, "L", 2, 1); 
    addEntryDE("", "", 'L', "U", "", "", 3, "LI", 1, 1); 
    addEntryDE("", "L", '_', "", "", "", 2, "Ė", 1, 1); 
    addEntryDE("", "", 'L', "", "", "", 3, "L", 1, 1); 
    addEntryDE("", "", 'T', "Z", "S", "C", 3, "Č", 5, 1); 
    addEntryDE("", "", 'T', "S", "C", "H", 3, "Č", 4, 1); 
    addEntryDE("", "", 'T', "I", "O", "N", 3, "CION", 4, 1); 
    addEntryDE("", "", 'Z', "S", "C", "H", 3, "Č", 4, 1); 
    addEntryDE("", "Z", 'S', "C", "H", "", 3, "Č", 3, 1); 
    addEntryDE("", "", 'S', "C", "H", "", 3, "Š", 3, 1); 
    addEntryDE("", "_", 'S', "P", "", "", 3, "ŠP", 2, 1); 
    addEntryDE("", "_", 'S', "T", "", "", 3, "ŠT", 2, 1); 
    addEntryDE("", "", 'S', "T", "_", "", 3, "ST", 2, 1); 
    addEntryDE("", "_", 'Ü', "H", "", "", 3, "Y", 2, 1); 
    addEntryDE("", "", 'H', "Ä", "", "", 3, "Ė", 2, 1); 
    addEntryDE("", "", 'Ä', "H", "", "", 3, "Ė", 1, 1); 
    addEntryDE("", "", 'A', "E", "H", "", 3, "Ė", 3, 1); 
    addEntryDE("", "", 'C', "K", "", "", 3, "K", 2, 1); 
    addEntryDE("", "", 'C', "H", "H", "", 3, "CH", 3, 1); 
    addEntryDE("", "", 'C', "H", "S", "", 3, "CHS", 3, 1); 
    addEntryDE("", "", 'D', "T", "", "", 3, "T", 2, 1); 
    addEntryDE("", "", 'E', "H", "", "", 3, "Ė", 2, 1); 
    addEntryDE("", "", 'E', "", "E", "_", 3, "Ė", 1, 1); 
    addEntryDE("", "", 'G', "G", "", "", 3, "G", 2, 1); 
    addEntryDE("", "", 'G', "H", "", "", 3, "G", 2, 1); 
    addEntryDE("", "", 'G', "K", "", "", 3, "K", 2, 1); 
    addEntryDE("", "", 'G', "", "", "", 3, "G", 1, 1); 
    addEntryDE("", "", 'I', "E", "_", "", 2, "IJA", 2, 1); 
    addEntryDE("", "", 'I', "E", "", "", 3, "Y", 2, 1); 
    addEntryDE("", "", 'I', "H", "", "", 3, "Y", 2, 1); 
    addEntryDE("", "_", 'J', "H", "E", "", 3, "JĖ", 3, 1); 
    addEntryDE("", "", 'J', "H", "", "", 3, "J", 2, 1); 
    addEntryDE("", "", 'O', "H", "AEIO", "", 3, "O", 1, 1); 
    addEntryDE("", "", 'O', "H", "", "_", 3, "O", 2, 1); 
    addEntryDE("", "", 'O', "H", "", "", 3, "Ė", 2, 1); 
    addEntryDE("", "", 'Ö', "H", "", "", 3, "Ė", 2, 1); 
    addEntryDE("", "", 'P', "F", "", "", 3, "PF", 2, 1); 
    addEntryDE("", "", 'P', "H", "", "", 3, "F", 2, 1); 
    addEntryDE("", "", 'Q', "U", "", "", 3, "KV", 2, 1); 
    addEntryDE("", "", 'R', "H", "", "", 3, "R", 2, 1); 
    addEntryDE("T", "H", '_', "", "", "", 1, "AS", 2, 1);
    addEntryDE("", "", 'T', "T", "H", "", 3, "T", 3, 1); 
    addEntryDE("", "", 'T', "H", "Ä", "", 3, "TĖ", 3, 1); 
    addEntryDE("", "", 'T', "H", "", "", 3, "T", 2, 1); 
    addEntryDE("", "", 'T', "Z", "", "", 3, "C", 2, 1); 
    addEntryDE("", "", 'U', "H", "", "", 3, "Ū", 1, 1); 
    addEntryDE("", "J", 'Ü', "H", "", "", 3, "Ū", 2, 1); 
    addEntryDE("", "J", 'Ü', "E", "H", "", 3, "Ū", 3, 1); 
    addEntryDE("", "_", 'Ü', "H", "", "", 3, "Y", 2, 1); 
    addEntryDE("", "_", 'Ü', "E", "H", "", 3, "Y", 3, 1); 
    addEntryDE("", "", 'Ü', "H", "", "", 3, "IŪ", 2, 1); 
    addEntryDE("", "", 'Ü', "E", "H", "", 3, "IŪ", 3, 1); 
    addEntryDE("", "", 'O', "E", "H", "", 3, "Ė", 3, 1); 
    addEntryDE("", "", 'O', "E", "BCDFGHJKLMNPRTVZS", "", 3, "Ė", 2, 1); 
    addEntryDE("", "", 'O', "E", "B", "B", 3, "E", 2, 1); 
    addEntryDE("", "", 'O', "E", "C", "K", 3, "E", 2, 1); 
    addEntryDE("", "", 'O', "E", "D", "D", 3, "E", 2, 1); 
    addEntryDE("", "", 'O', "E", "F", "F", 3, "E", 2, 1); 
    addEntryDE("", "", 'O', "E", "L", "L", 3, "E", 2, 1); 
    addEntryDE("", "", 'O', "E", "M", "M", 3, "E", 2, 1); 
    addEntryDE("", "", 'O', "E", "N", "N", 3, "E", 2, 1); 
    addEntryDE("", "", 'O', "E", "P", "P", 3, "E", 2, 1); 
    addEntryDE("", "", 'O', "E", "R", "R", 3, "E", 2, 1); 
    addEntryDE("", "", 'O', "E", "S", "S", 3, "E", 2, 1); 
    addEntryDE("", "", 'O', "E", "T", "T", 3, "E", 2, 1); 
    addEntryDE("", "", 'O', "E", "T", "Z", 3, "E", 2, 1); 
    addEntryDE("", "", 'O', "E", "P", "F", 3, "E", 2, 1); 
    addEntryDE("", "", 'O', "E", "X", "", 3, "E", 2, 1); 
    addEntryDE("", "", 'O', "E", "H", "LMNRAEIOUÖÜ", 3, "Ė", 3, 1); 
    addEntryDE("", "BCDFGHJKLMNPQRSTVWXYZ", 'O', "E", "BCDFGHJKLMNPQRSTVWXYZ", "", 3, "Ė", 2, 1); 
    addEntryDE("L", "L", '_', "", "", "", 1, "Ė", 1, 1);
    addEntryDE("", "", 'A', "E", "BCDFGHJKLMNPQRSTVWXYZ", "BCDFGHJKLMNPQRSTVWXYZ", 3, "E", 2, 2); 
    addEntryDE("", "", 'A', "E", "H", "LMNRAEIOUÄÖÜ", 3, "Ė", 3, 1); 
    addEntryDE("", "BCDFGHJKLMNPQRSTVWXYZ", 'A', "E", "BCDFGHJKLMNPQRSTVWXYZ", "", 3, "Ė", 2, 1); 
    addEntryDE("", "", 'Ä', "BCDFGJKLMNPQRSTVWXYZ", "BCDFGHJKLMNPQRSTVWXYZ", "", 3, "E", 1, 18); 
    addEntryDE("", "", 'Ä', "B", "B", "", 3, "E", 1, 17); 
    addEntryDE("", "", 'Ä', "C", "K", "", 3, "E", 1, 16); 
    addEntryDE("", "", 'Ä', "D", "D", "", 3, "E", 1, 15); 
    addEntryDE("", "", 'Ä', "F", "F", "", 3, "E", 1, 14); 
    addEntryDE("", "", 'Ä', "L", "L", "", 3, "E", 1, 13); 
    addEntryDE("", "", 'Ä', "M", "M", "", 3, "E", 1, 12); 
    addEntryDE("", "", 'Ä', "N", "N", "", 3, "E", 1, 11); 
    addEntryDE("", "", 'Ä', "P", "P", "", 3, "E", 1, 10); 
    addEntryDE("", "", 'Ä', "R", "R", "", 3, "E", 1, 9); 
    addEntryDE("", "", 'Ä', "S", "S", "", 3, "E", 1, 8); 
    addEntryDE("", "", 'Ä', "T", "T", "", 3, "E", 1, 7); 
    addEntryDE("", "", 'Ä', "T", "Z", "", 3, "E", 1, 6); 
    addEntryDE("", "", 'Ä', "P", "F", "", 3, "E", 1, 5); 
    addEntryDE("", "", 'Ä', "X", "", "", 3, "E", 1, 4); 
    addEntryDE("", "", 'Ä', "U", "RN", "", 3, "OI", 2, 3); 
    addEntryDE("", "", 'Ä', "U", "", "", 3, "OJ", 2, 2); 
    addEntryDE("", "", 'Ä', "LMNRAEIOUÖÜ", "", "", 3, "Ė", 1, 1); 
    addEntryDE("", "BCDFGHJKLMNPQRSTVWXYZ", 'Ä', "BCDFGJKLMNPQRSTVWXYZ", "", "", 3, "Ė", 1, 1); 
    addEntryDE("", "", 'A', "E", "B", "B", 3, "E", 2, 13); 
    addEntryDE("", "", 'A', "E", "C", "K", 3, "E", 2, 12); 
    addEntryDE("", "", 'A', "E", "D", "D", 3, "E", 2, 11); 
    addEntryDE("", "", 'A', "E", "F", "F", 3, "E", 2, 10); 
    addEntryDE("", "", 'A', "E", "L", "L", 3, "E", 2, 9); 
    addEntryDE("", "", 'A', "E", "M", "M", 3, "E", 2, 8); 
    addEntryDE("", "", 'A', "E", "N", "N", 3, "E", 2, 7); 
    addEntryDE("", "", 'A', "E", "P", "P", 3, "E", 2, 6); 
    addEntryDE("", "", 'A', "E", "R", "R", 3, "E", 2, 5); 
    addEntryDE("", "", 'A', "E", "S", "S", 3, "E", 2, 4); 
    addEntryDE("", "", 'A', "E", "T", "T", 3, "E", 2, 3); 
    addEntryDE("", "", 'A', "E", "T", "Z", 3, "E", 2, 2); 
    addEntryDE("", "", 'A', "E", "P", "F", 3, "E", 2, 1); 
    addEntryDE("", "", 'A', "E", "X", "", 3, "E", 2, 1);
    addEntryDE("", "", 'A', "Y", "BCDFGHJKLMNPRTVZ", "", 3, "AI", 2, 1); 
    addEntryDE("", "", 'A', "I", "BCDFGHJKLMNPRTVZ", "", 3, "AI", 2, 1); 
    addEntryDE("", "", 'A', "I", "S", "S", 3, "AIS", 4, 1);
    addEntryDE("", "", 'A', "Y", "", "", 3, "AJ", 2, 1); 
    addEntryDE("", "", 'A', "I", "", "", 3, "AJ", 2, 1); 
    addEntryDE("", "", 'Ä', "U", "BCDFGHJKLMNPRTVZ", "", 3, "OI", 2, 1); 
    addEntryDE("", "", 'A', "H", "_", "", 3, "AH", 2, 1);
    addEntryDE("", "", 'A', "H", "", "", 3, "A", 2, 1); 
    addEntryDE("", "", 'A', "A", "", "", 3, "A", 2, 1); 
    addEntryDE("", "", 'A', "", "", "", 3, "A", 1, 1); 

    addEntryDE("", "", 'E', "BCDFGJKLMNPQRSTVWXYZ", "BCDFGHJKLMNPQRSTVWXYZ", "", 3, "E", 1, 14); 
    addEntryDE("", "", 'E', "B", "B", "", 3, "E", 1, 13); 
    addEntryDE("", "", 'E', "C", "K", "", 3, "E", 1, 12); 
    addEntryDE("", "", 'E', "D", "D", "", 3, "E", 1, 11); 
    addEntryDE("", "", 'E', "F", "F", "", 3, "E", 1, 10); 
    addEntryDE("", "", 'E', "L", "L", "", 3, "E", 1, 9); 
    addEntryDE("", "", 'E', "M", "M", "", 3, "E", 1, 8); 
    addEntryDE("", "", 'E', "N", "N", "", 3, "E", 1, 7); 
    addEntryDE("", "", 'E', "P", "P", "", 3, "E", 1, 6); 
    addEntryDE("", "", 'E', "R", "R", "", 3, "E", 1, 5); 
    addEntryDE("", "", 'E', "S", "S", "", 3, "E", 1, 4); 
    addEntryDE("", "", 'E', "T", "T", "", 3, "E", 1, 3); 
    addEntryDE("", "", 'E', "T", "Z", "", 3, "E", 1, 2); 
    addEntryDE("", "", 'E', "P", "F", "", 3, "E", 1, 1); 
    addEntryDE("", "", 'E', "X", "", "", 3, "E", 1, 1); 
    addEntryDE("", "", 'I', "H", "", "", 3, "Y", 1, 15); 
    addEntryDE("", "", 'I', "BCDFGHJKLMNPQRSTVWXYZ", "BCDFGHJKLMNPQRSTVWXYZ", "", 3, "I", 1, 14); 
    addEntryDE("", "", 'I', "B", "B", "", 3, "I", 1, 13); 
    addEntryDE("", "", 'I', "C", "K", "", 3, "I", 1, 12); 
    addEntryDE("", "", 'I', "D", "D", "", 3, "I", 1, 11); 
    addEntryDE("", "", 'I', "F", "F", "", 3, "I", 1, 10); 
    addEntryDE("", "", 'I', "L", "L", "", 3, "I", 1, 9); 
    addEntryDE("", "", 'I', "M", "M", "", 3, "I", 1, 8); 
    addEntryDE("", "", 'I', "N", "N", "", 3, "I", 1, 7); 
    addEntryDE("", "", 'I', "P", "P", "", 3, "I", 1, 6); 
    addEntryDE("", "", 'I', "R", "R", "", 3, "I", 1, 5); 
    addEntryDE("", "", 'I', "S", "S", "", 3, "I", 1, 4); 
    addEntryDE("", "", 'I', "T", "T", "", 3, "I", 1, 3); 
    addEntryDE("", "", 'I', "T", "Z", "", 3, "I", 1, 2); 
    addEntryDE("", "", 'I', "P", "F", "", 3, "I", 1, 1); 
    addEntryDE("", "", 'I', "X", "", "", 3, "I", 1, 1); 
    addEntryDE("", "", 'B', "B", "", "", 3, "B", 2, 1); 
    addEntryDE("", "", 'B', "", "", "", 3, "B", 1, 1); 
    addEntryDE("", "AOUPBTDKGFVSZJXLMNR", 'C', "_", "", "", 3, "K", 1, 7); 
    addEntryDE("", "", 'C', "AOUPBTDGFVSZJXLMNR", "", "", 3, "K", 1, 6); 
    addEntryDE("", "", 'C', "H", "", "", 3, "CH", 2, 5); 
    addEntryDE("", "", 'C', "H", "", "", 3, "C", 1, 4); 
    addEntryDE("", "", 'C', "EIY", "", "", 3, "C", 1, 3);
    addEntryDE("", "", 'C', "", "", "", 3, "C", 1, 1); 
    addEntryDE("", "D", '_', "", "", "", 2, "Ė", 1, 1); 
    addEntryDE("", "", 'D', "D", "", "", 3, "D", 2, 1); 
    addEntryDE("", "", 'D', "T", "", "", 3, "T", 2, 1); 
    addEntryDE("", "", 'D', "", "", "", 3, "D", 1, 1); 
    addEntryDE("", "", 'E', "R", "_", "", 3, "ER", 2, 13); 
    addEntryDE("", "", 'E', "A", "_", "", 2, "ĖJ", 1, 12);
    addEntryDE("", "", 'E', "_", "", "", 3, "Ė", 1, 11);
    addEntryDE("", "", 'E', "LN", "", "", 3, "E", 1, 10); 
    addEntryDE("", "", 'E', "H", "", "", 3, "Ė", 2, 9); 
    addEntryDE("", "BCDFGJKLMNPQRSTVWXYZ", 'E', "BCDFGJKLMNPQRSTVWXYZ", "", "", 3, "Ė", 1, 8); 
    addEntryDE("", "", 'E', "I", "BCDFGHJKLMNPRTVZ", "", 3, "EI", 2, 7); 
    addEntryDE("", "", 'E', "Y", "BCDFGHJKLMNPRTVZ", "", 3, "EI", 2, 6); 
    addEntryDE("", "", 'E', "I", "EAEIOUÖÜ", "", 3, "EJ", 2, 5); 
    addEntryDE("", "", 'E', "Y", "EAEIOUÖÜ", "", 3, "EJ", 2, 4); 
    addEntryDE("", "", 'E', "U", "BCDFGHJKLMNPRTVZ", "", 3, "OI", 2, 3); 
    addEntryDE("", "", 'E', "U", "", "", 3, "OJ", 2, 2); 
    addEntryDE("", "", 'E', "E", "", "", 3, "Ė", 2, 1); 
    addEntryDE("", "", 'E', "", "", "", 3, "E", 1, 1); 
    addEntryDE("", "", 'F', "F", "", "", 3, "F", 2, 1); 
    addEntryDE("", "", 'F', "", "", "", 3, "F", 1, 1); 
    addEntryDE("", "_", 'H', "IEAUOÄÖÜ", "", "", 3, "H", 1, 1); 
    addEntryDE("", "", 'H', "N", "", "", 3, "N", 2, 1); 
    addEntryDE("", "IEAUOÄÖÜ", 'H', "IEAUOÄÖÜ", "", "", 3, "H", 1, 1); 
    addEntryDE("", "", 'H', "L", "", "", 3, "L", 2, 1); 
    addEntryDE("", "", 'O', "H", "", "", 3, "O", 2, 1); 
    addEntryDE("", "J", 'H', "", "", "", 3, "J", 2, 1); 
    addEntryDE("", "R", 'H', "", "", "", 3, "R", 2, 1); 
    addEntryDE("", "T", 'H', "", "", "", 3, "T", 1, 1); 
    addEntryDE("", "", 'H', "", "", "", 3, "H", 1, 1);  
    addEntryDE("", "", 'I', "I", "", "", 3, "Y", 2, 3); 
    addEntryDE("", "BCDFGHJKLMNPRTVZ", 'I', "BCDFGHJKLMNPRTVZ", "", "", 3, "Y", 1, 2); 
    addEntryDE("", "", 'I', "BCDFGHJKLMNPRTVZ", "", "", 3, "Y", 1, 1); 
    addEntryDE("", "", 'I', "", "", "", 3, "I", 1, 1); 
    addEntryDE("", "", 'J', "", "", "", 3, "J", 1, 1); 
    addEntryDE("", "", 'K', "K", "", "", 3, "K", 2, 1); 
    addEntryDE("", "", 'K', "", "", "", 3, "K", 1, 1); 
    addEntryDE("", "", 'M', "M", "", "", 3, "M", 2, 1); 
    addEntryDE("", "", 'M', "", "", "", 3, "M", 1, 1); 
    addEntryDE("", "", 'N', "N", "", "", 3, "N", 2, 1); 
    addEntryDE("", "", 'N', "", "", "", 3, "N", 1, 1); 
    addEntryDE("", "", 'O', "Y", "_", "", 3, "OJ", 2, 7); 
    addEntryDE("", "", 'O', "_", "", "", 1, "AS", 1, 6);
    addEntryDE("", "", 'O', "I", "BCDFGHJKLMNPRTVZ", "", 3, "OI", 2, 5); 
    addEntryDE("", "", 'O', "Y", "BCDFGHJKLMNPRTVZ", "", 3, "OI", 2, 4); 
    addEntryDE("", "", 'O', "I", "EAEIOUÖÜ", "", 3, "OJ", 2, 3); 
    addEntryDE("", "", 'O', "Y", "EAEIOUÖÜ", "", 3, "OJ", 2, 2); 
    addEntryDE("", "", 'O', "O", "", "", 3, "O", 2, 1); 
    addEntryDE("", "", 'O', "", "", "", 3, "O", 1, 1); 
    addEntryDE("", "", 'Ö', "B", "B", "", 3, "E", 1, 17); 
    addEntryDE("", "", 'Ö', "C", "K", "", 3, "E", 1, 16); 
    addEntryDE("", "", 'Ö', "D", "D", "", 3, "E", 1, 15); 
    addEntryDE("", "", 'Ö', "F", "F", "", 3, "E", 1, 14); 
    addEntryDE("", "", 'Ö', "L", "L", "", 3, "E", 1, 13); 
    addEntryDE("", "", 'Ö', "M", "M", "", 3, "E", 1, 12); 
    addEntryDE("", "", 'Ö', "N", "N", "", 3, "E", 1, 11); 
    addEntryDE("", "", 'Ö', "P", "P", "", 3, "E", 1, 10); 
    addEntryDE("", "", 'Ö', "R", "R", "", 3, "E", 1, 9); 
    addEntryDE("", "", 'Ö', "S", "S", "", 3, "E", 1, 8); 
    addEntryDE("", "", 'Ö', "T", "T", "", 3, "E", 1, 7); 
    addEntryDE("", "", 'Ö', "T", "Z", "", 3, "E", 1, 6); 
    addEntryDE("", "", 'Ö', "P", "F", "", 3, "E", 1, 5); 
    addEntryDE("", "", 'Ö', "X", "", "", 3, "E", 1, 4); 
    addEntryDE("", "", 'Ö', "H", "LMNRAEIOUÖÜ", "", 3, "Ė", 2, 3); 
    addEntryDE("", "BCDFHJKLMNPQRSTVWXYZ", 'Ö', "BCDFHJKLMNPQRSTVWXYZ", "", "", 3, "Ė", 1, 2); 
    addEntryDE("", "G", 'Ö', "GR", "", "", 3, "E", 1, 1); 
    addEntryDE("", "", 'Ö', "BCDFGHJKLMNPRTVZ", "", "", 3, "Ė", 1, 1); 
    addEntryDE("", "", 'P', "P", "", "", 3, "P", 2, 1); 
    addEntryDE("", "", 'P', "", "", "", 3, "P", 1, 1); 
    addEntryDE("", "", 'Q', "", "", "", 3, "KV", 1, 1); 
    addEntryDE("", "", 'R', "R", "", "", 3, "R", 2, 1); 
    addEntryDE("", "", 'R', "", "", "", 3, "R", 1, 1); 
    addEntryDE("", "", 'S', "_", "", "", 3, "S", 1, 7); 
    addEntryDE("", "BCDFGHJKLMNPQRSTVWXZ", 'S', "P", "", "", 3, "ŠP", 2, 6); 
    addEntryDE("", "", 'S', "S", "", "", 3, "S", 2, 5); 
    addEntryDE("", "BCDFGHJKLMNPQRSTVWXZ", 'S', "T", "", "", 3, "ŠT", 2, 4); 
    addEntryDE("", "AOUIEÄÖÜY", 'S', "BCDFGHJKLMNPQRSTVWXZ", "", "", 3, "S", 1, 3); 
    addEntryDE("", "", 'S', "AOUIEÄÖÜY", "", "", 3, "Z", 1, 2); 
    addEntryDE("", "", 'S', "", "", "", 3, "S", 1, 1); 
    addEntryDE("", "", 'ß', "", "", "", 3, "S", 1, 1); 
    addEntryDE("", "", 'T', "T", "", "", 3, "T", 2, 1); 
    addEntryDE("", "", 'T', "", "", "", 3, "T", 1, 1); 
    addEntryDE("_", "", 'Ü', "D", "D", "", 3, "U", 1, 1); 
    addEntryDE("_", "J", 'Ü', "B", "B", "", 3, "U", 1, 13); 
    addEntryDE("_", "J", 'Ü', "C", "K", "", 3, "U", 1, 12); 
    addEntryDE("_", "J", 'Ü', "F", "F", "", 3, "U", 1, 11); 
    addEntryDE("_", "J", 'Ü', "L", "L", "", 3, "U", 1, 10); 
    addEntryDE("_", "J", 'Ü', "M", "M", "", 3, "U", 1, 9); 
    addEntryDE("_", "J", 'Ü', "N", "N", "", 3, "U", 1, 8); 
    addEntryDE("_", "J", 'Ü', "P", "P", "", 3, "U", 1, 7); 
    addEntryDE("_", "J", 'Ü', "R", "R", "", 3, "U", 1, 6); 
    addEntryDE("_", "J", 'Ü', "S", "S", "", 3, "U", 1, 5); 
    addEntryDE("_", "J", 'Ü', "T", "T", "", 3, "U", 1, 4); 
    addEntryDE("_", "J", 'Ü', "T", "Z", "", 3, "U", 1, 3); 
    addEntryDE("_", "J", 'Ü', "P", "F", "", 3, "U", 1, 2); 
    addEntryDE("_", "J", 'Ü', "X", "", "", 3, "U", 1, 1); 
    addEntryDE("_", "J", 'Ü', "BCDFGHJKLMNPQRSTVWXYZ", "BCDFGHJKLMNPQRSTVWXYZ", "", 3, "U", 1, 1);
    addEntryDE("_", "J", 'U', "E", "B", "B", 3, "U", 2, 14); 
    addEntryDE("_", "J", 'U', "E", "C", "K", 3, "U", 2, 13); 
    addEntryDE("_", "J", 'U', "E", "D", "D", 3, "U", 2, 12); 
    addEntryDE("_", "J", 'U', "E", "F", "F", 3, "U", 2, 11); 
    addEntryDE("_", "J", 'U', "E", "L", "L", 3, "U", 2, 10); 
    addEntryDE("_", "J", 'U', "E", "M", "M", 3, "U", 2, 9); 
    addEntryDE("_", "J", 'U', "E", "N", "N", 3, "U", 2, 8); 
    addEntryDE("_", "J", 'U', "E", "P", "P", 3, "U", 2, 7); 
    addEntryDE("_", "J", 'U', "E", "R", "R", 3, "U", 2, 6); 
    addEntryDE("_", "J", 'U', "E", "S", "S", 3, "U", 2, 5); 
    addEntryDE("_", "J", 'U', "E", "T", "T", 3, "U", 2, 4); 
    addEntryDE("_", "J", 'U', "E", "T", "Z", 3, "U", 2, 3); 
    addEntryDE("_", "J", 'U', "E", "P", "F", 3, "U", 2, 2); 
    addEntryDE("_", "J", 'U', "E", "X", "", 3, "U", 2, 1); 
    addEntryDE("_", "J", 'U', "E", "BCDFGHJKLMNPQRSTVWXYZ", "BCDFGHJKLMNPQRSTVWXYZ", 3, "U", 1, 1); 
    addEntryDE("_", "J", 'Ü', "H", "LMNRAEIOUÄÖÜ", "", 3, "Ū", 1, 1); 
    addEntryDE("_", "J", 'Ü', "BCDFGHJKLMNPQRSTVWXYZ", "IEAUOÄÖÜ", "", 3, "Ū", 1, 1); 
    addEntryDE("_", "J", 'U', "E", "H", "LMNRAEIOUÄÖÜ", 3, "Ū", 2, 1); 
    addEntryDE("_", "J", 'U', "E", "BCDFGHJKLMNPQRSTVWXYZ", "IEAUOÄÖÜ", 3, "Ū", 2, 1); 
    addEntryDE("", "_", 'Ü', "B", "B", "", 3, "I", 1, 14); 
    addEntryDE("", "_", 'Ü', "C", "K", "", 3, "I", 1, 13); 
    addEntryDE("", "_", 'Ü', "D", "D", "", 3, "I", 1, 12); 
    addEntryDE("", "_", 'Ü', "F", "F", "", 3, "I", 1, 11); 
    addEntryDE("", "_", 'Ü', "L", "L", "", 3, "I", 1, 10); 
    addEntryDE("", "_", 'Ü', "M", "M", "", 3, "I", 1, 9); 
    addEntryDE("", "_", 'Ü', "N", "N", "", 3, "I", 1, 8); 
    addEntryDE("", "_", 'Ü', "P", "P", "", 3, "I", 1, 7); 
    addEntryDE("", "_", 'Ü', "R", "R", "", 3, "I", 1, 6); 
    addEntryDE("", "_", 'Ü', "S", "S", "", 3, "I", 1, 5); 
    addEntryDE("", "_", 'Ü', "T", "T", "", 3, "I", 1, 4); 
    addEntryDE("", "_", 'Ü', "T", "Z", "", 3, "I", 1, 3); 
    addEntryDE("", "_", 'Ü', "P", "F", "", 3, "I", 1, 2); 
    addEntryDE("", "_", 'Ü', "X", "", "", 3, "I", 1, 1); 
    addEntryDE("", "_", 'Ü', "BCDFGHJKLMNPQRSTVWXYZ", "BCDFGHJKLMNPQRSTVWXYZ", "", 3, "I", 1, 1);
    addEntryDE("", "_", 'U', "E", "B", "B", 3, "I", 2, 14); 
    addEntryDE("", "_", 'U', "E", "C", "K", 3, "I", 2, 13); 
    addEntryDE("", "_", 'U', "E", "D", "D", 3, "I", 2, 12); 
    addEntryDE("", "_", 'U', "E", "F", "F", 3, "I", 2, 11); 
    addEntryDE("", "_", 'U', "E", "L", "L", 3, "I", 2, 10); 
    addEntryDE("", "_", 'U', "E", "M", "M", 3, "I", 2, 9); 
    addEntryDE("", "_", 'U', "E", "N", "N", 3, "I", 2, 8); 
    addEntryDE("", "_", 'U', "E", "P", "P", 3, "I", 2, 7); 
    addEntryDE("", "_", 'U', "E", "R", "R", 3, "I", 2, 6); 
    addEntryDE("", "_", 'U', "E", "S", "S", 3, "I", 2, 5); 
    addEntryDE("", "_", 'U', "E", "T", "T", 3, "I", 2, 4); 
    addEntryDE("", "_", 'U', "E", "T", "Z", 3, "I", 2, 3); 
    addEntryDE("", "_", 'U', "E", "P", "F", 3, "I", 2, 1); 
    addEntryDE("", "_", 'U', "E", "X", "", 3, "I", 2, 1); 
    addEntryDE("", "_", 'U', "E", "BCDFGHJKLMNPQRSTVWXYZ", "BCDFGHJKLMNPQRSTVWXYZ", 3, "I", 1, 1);
    addEntryDE("", "_", 'Ü', "H", "LMNRAEIOUÄÖÜ", "", 3, "Y", 1, 1); 
    addEntryDE("", "_", 'Ü', "BCDFGHJKLMNPQRSTVWXYZ", "IEAUOÄÖÜ", "", 3, "Y", 1, 1); 
    addEntryDE("", "_", 'U', "E", "H", "LMNRAEIOUÄÖÜ", 3, "Y", 2, 1); 
    addEntryDE("", "_", 'U', "E", "BCDFGHJKLMNPQRSTVWXYZ", "IEAUOÄÖÜ", 3, "Y", 2, 1); 
    addEntryDE("", "", 'Ü', "B", "B", "", 3, "IU", 1, 14); 
    addEntryDE("", "", 'Ü', "C", "K", "", 3, "IU", 1, 13); 
    addEntryDE("", "", 'Ü', "D", "D", "", 3, "IU", 1, 12); 
    addEntryDE("", "", 'Ü', "F", "F", "", 3, "IU", 1, 11); 
    addEntryDE("", "", 'Ü', "L", "L", "", 3, "IU", 1, 10); 
    addEntryDE("", "", 'Ü', "M", "M", "", 3, "IU", 1, 9); 
    addEntryDE("", "", 'Ü', "N", "N", "", 3, "IU", 1, 8); 
    addEntryDE("", "", 'Ü', "P", "P", "", 3, "IU", 1, 7); 
    addEntryDE("", "", 'Ü', "R", "R", "", 3, "IU", 1, 6); 
    addEntryDE("", "", 'Ü', "S", "S", "", 3, "IU", 1, 5); 
    addEntryDE("", "", 'Ü', "T", "T", "", 3, "IU", 1, 4); 
    addEntryDE("", "", 'Ü', "T", "Z", "", 3, "IU", 1, 3); 
    addEntryDE("", "", 'Ü', "P", "F", "", 3, "IU", 1, 2); 
    addEntryDE("", "", 'Ü', "X", "", "", 3, "IU", 1, 1); 
    addEntryDE("", "", 'Ü', "BCDFGHJKLMNPQRSTVWXYZ", "BCDFGHJKLMNPQRSTVWXYZ", "", 3, "IU", 1, 1);
    addEntryDE("", "", 'U', "E", "B", "B", 3, "IU", 2, 14); 
    addEntryDE("", "", 'U', "E", "C", "K", 3, "IU", 2, 13); 
    addEntryDE("", "", 'U', "E", "D", "D", 3, "IU", 2, 12); 
    addEntryDE("", "", 'U', "E", "F", "F", 3, "IU", 2, 11); 
    addEntryDE("", "", 'U', "E", "L", "L", 3, "IU", 2, 10); 
    addEntryDE("", "", 'U', "E", "M", "M", 3, "IU", 2, 9); 
    addEntryDE("", "", 'U', "E", "N", "N", 3, "IU", 2, 8); 
    addEntryDE("", "", 'U', "E", "P", "P", 3, "IU", 2, 7); 
    addEntryDE("", "", 'U', "E", "R", "R", 3, "IU", 2, 6); 
    addEntryDE("", "", 'U', "E", "S", "S", 3, "IU", 2, 5); 
    addEntryDE("", "", 'U', "E", "T", "T", 3, "IU", 2, 4); 
    addEntryDE("", "", 'U', "E", "T", "Z", 3, "IU", 2, 3); 
    addEntryDE("", "", 'U', "E", "P", "F", 3, "IU", 2, 2); 
    addEntryDE("", "", 'U', "E", "X", "", 3, "IU", 2, 1); 
    addEntryDE("", "", 'U', "E", "BCDFGHJKLMNPQRSTVWXYZ", "BCDFGHJKLMNPQRSTVWXYZ", 3, "IU", 1, 1);
    addEntryDE("", "", 'Ü', "H", "LMNRAEIOUÄÖÜ", "", 3, "IŪ", 1, 1); 
    addEntryDE("", "", 'Ü', "BCDFGHJKLMNPQRSTVWXYZ", "IEAUOÄÖÜ", "", 3, "IŪ", 1, 1); 
    addEntryDE("", "", 'U', "E", "H", "LMNRAEIOUÄÖÜ", 3, "IŪ", 2, 1); 
    addEntryDE("", "", 'U', "E", "BCDFGHJKLMNPQRSTVWXYZ", "IEAUOÄÖÜ", 3, "IŪ", 2, 1); 
    addEntryDE("", "", 'U', "U", "", "", 3, "Ū", 2, 1); 
    addEntryDE("", "", 'U', "B", "B", "", 3, "U", 1, 13); 
    addEntryDE("", "", 'U', "C", "K", "", 3, "U", 1, 12); 
    addEntryDE("", "", 'U', "D", "D", "", 3, "U", 1, 11); 
    addEntryDE("", "", 'U', "F", "F", "", 3, "U", 1, 10); 
    addEntryDE("", "", 'U', "L", "L", "", 3, "U", 1, 9); 
    addEntryDE("", "", 'U', "M", "M", "", 3, "U", 1, 8); 
    addEntryDE("", "", 'U', "N", "N", "", 3, "U", 1, 7); 
    addEntryDE("", "", 'U', "P", "P", "", 3, "U", 1, 6); 
    addEntryDE("", "", 'U', "R", "R", "", 3, "U", 1, 5); 
    addEntryDE("", "", 'U', "S", "S", "", 3, "U", 1, 4); 
    addEntryDE("", "", 'U', "T", "T", "", 3, "U", 1, 3); 
    addEntryDE("", "", 'U', "T", "Z", "", 3, "U", 1, 2); 
    addEntryDE("", "", 'U', "P", "F", "", 3, "U", 1, 1); 
    addEntryDE("", "", 'U', "X", "", "", 3, "U", 1, 1); 
    addEntryDE( "","",'U',"BCDFGJKLMNPQRSTVWXYZ","BCDFGHJKLMNPQRSTVWXYZ","",3,"U",1,1 );
    addEntryDE( "","",'U',"H","LMNRAEIOÄÖÜ","",3,"Ū",2,1 );
    addEntryDE( "","BCDFGHJKLMNPQRSTVWXYZ",'U',"BCDFGHJKLMNPQRSTVWXYZ","","",3,"Ū",1,1 );
    addEntryDE( "","",'U',"","","",3,"U",1,1 );
    addEntryDE("", "_", 'V', "IOE", "", "", 3, "F", 1, 2); 
    addEntryDE("", "A", 'V', "E", "", "", 3, "F", 1, 1); 
    addEntryDE("", "", 'V', "", "", "", 3, "V", 1, 1); 
    addEntryDE("", "", 'W', "", "", "", 3, "V", 1, 1); 
    addEntryDE("", "", 'X', "", "", "", 3, "KS", 1, 1); 
    addEntryDE("", "", 'Y', "H", "LMNRAEIOUÄÖÜ", "", 3, "Y", 2, 5); 
    addEntryDE("", "", 'Y', "Y", "", "", 3, "Y", 2, 4); 
    addEntryDE("", "BCDFGHJKMNPRTVZ", 'Y', "BCDLFGHJKMPNRTVZ", "", "", 3, "Y", 1, 3); 
    addEntryDE("", "EAEIOUÖÜ", 'Y', "EAEIOUÖÜ", "", "", 3, "J", 2, 2); 
    addEntryDE("", "", 'Y', "_", "", "", 3, "J", 1, 1); 
    addEntryDE("", "", 'Y', "Ü", "", "", 3, "JŪ", 2, 1);
    addEntryDE("", "", 'Y', "", "", "", 3, "I", 1, 1); 
    addEntryDE("", "", 'Z', "Z", "", "", 3, "C", 2, 1); 
    addEntryDE("", "", 'Z', "", "", "", 3, "C", 1, 1); 
    addEntryDE("T", "H", '_', "", "", "", 2, "A", 1, 9);   
    addEntryDE("A", "S", '_', "", "", "", 1, "", 1, 8);
    addEntryDE("E", "I", '_', "", "", "", 3, "", 1, 8);
    addEntryDE("", "KWTFBNZHDSGVPMCX", '_', "", "", "", 1, "AS", 1, 7);
    addEntryDE("AE", "Y", '_', "", "", "", 1, "US", 1, 6); 
    addEntryDE("AUYH", "R", '_', "", "", "", 1, "AS", 1, 5); 
    addEntryDE("R", "L", '_', "", "", "", 1, "AS", 1, 4); 
    addEntryDE("", "LR", '_', "", "", "", 1, "IS", 1, 3); 
    addEntryDE("", "I", '_', "", "", "", 1, "S", 1, 2);
    addEntryDE("", "Y", '_', "", "", "", 1, "US", 1, 1); 
}

window.onload = function(e) {
    lietuvinimoTaisyklesDE();
    console.log("TaisyklDE.length=" + TaisyklDE.length);
    document.getElementById("tekstasInput")
        .addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById("myButton").click();
            }
        });
}

function getLetterCaseType(word) {
    if (word[0] == word[0].toLowerCase())
        return 0;
    else if (word[1] == word[1].toLowerCase())
        return 1;
    else return 2;
}

function setLetterCaseType(caseType, word) {
    if (caseType == 2)
        return word;
    else if (caseType == 1)
        return word.charAt(0) + word.slice(1).toLowerCase();
    else return word.toLowerCase();
}

function syllabify(words) {
    return words.match(syllableRegex);
}

function lithuanizeDE(inputLithName, Gim) {
    var output = "";
    var i = 0,
        j = 0,
        ilg = 0;
    var lithNameCharArr = "";
    var letterCaseType = 0; 
    var lithuanizedName = "";
    letterCaseType = getLetterCaseType(inputLithName);
    lithNameCharArr = "__" + inputLithName.toUpperCase(); 
    ilg = lithNameCharArr.length;
    lithNameCharArr = lithNameCharArr + "____0";
    i = 2;
    j = 0;

    while (i < ilg + 1) 
    {
        if (TaisyklDE[j].ES != lithNameCharArr[i]){
            j += TaisyklDE[j].PoslT; 
}
        else if (
            ((TaisyklDE[j].KKont2 != "") ? (TaisyklDE[j].KKont2).indexOf(lithNameCharArr[i - 2]) + 1 : 1) &&
            ((TaisyklDE[j].KKont1 != "") ? (TaisyklDE[j].KKont1).indexOf(lithNameCharArr[i - 1]) + 1 : 1) &&
            ((TaisyklDE[j].DKont1 != "") ? (TaisyklDE[j].DKont1).indexOf(lithNameCharArr[i + 1]) + 1 : 1) &&
            ((TaisyklDE[j].DKont2 != "") ? (TaisyklDE[j].DKont2).indexOf(lithNameCharArr[i + 2]) + 1 : 1) &&
            ((TaisyklDE[j].DKont3 != "") ? (TaisyklDE[j].DKont3).indexOf(lithNameCharArr[i + 3]) + 1 : 1) &&
            (TaisyklDE[j].Gim & Gim)) {

            console.log("Kkont2=" + TaisyklDE[j].KKont2 + " Kkont1=" + TaisyklDE[j].KKont1 + " Es=" + TaisyklDE[j].ES + " Dkont1=" + TaisyklDE[j].DKont1 + " Dkont2=" + TaisyklDE[j].DKont2 + " Dkont3=" + TaisyklDE[j].DKont3 + " Gim=" + TaisyklDE[j].Gim + " Fonv=" + TaisyklDE[j].FonV + " Poslr=" + TaisyklDE[j].PoslR + " Poslt=" + TaisyklDE[j].PoslT);
	    

            i += TaisyklDE[j].PoslR;
            output = output.concat(TaisyklDE[j].FonV);
            j = 0;


        } else j++;
        if (j > TaisyklDE.length - 1) {
            j = 0;
            i++;
        }
    }

    output = stressName1(output);
    return setLetterCaseType(letterCaseType, output);
}

function delithuanizeName(namePart) {
    namePart = namePart.replace(/Ū/g, "U");
    namePart = namePart.replace(/Ė/g, "E");
    namePart = namePart.replace(/ū/g, "u");
    namePart = namePart.replace(/ė/g, "e");
    return namePart;
}




function stressName1(output){
firstSyll = (syllabify(output)[0]).toUpperCase();
lastSyll = (syllabify(output)[syllabify(output).length - 1]).toUpperCase();
betweenFirstAndLast = (delithuanizeName((output.replace(firstSyll,"").replace(lastSyll,"")).toUpperCase()));
console.log("pirmas skiemuo : "+firstSyll);
console.log("vidurys : "+betweenFirstAndLast);
console.log("paskutinis skiemuo : "+lastSyll);
return firstSyll + betweenFirstAndLast + lastSyll;
}


function transformDE() {
    var textOut = "";
    var textIn = (document.getElementById("tekstasInput").value).trimRight();
    var sex = document.getElementById("gimine").value;
    var names = textIn.split(" ");

    var input = document.getElementById("tekstasInput").value;
    if (pavardesDE.has(textIn)) {
        textOut = pavardesDE.get(textIn);
    } else {


        textOut = transcribeSeparateNames(names, sex, textOut);
    }


    document.getElementById("tekstasOutput").value = textOut;
}

function optimizeInput(textIn){
textIn = textIn.replace(/ae/g,"ä");
textIn = textIn.replace(/ue/g,"ü");
textIn = textIn.replace(/oe/g,"ö");
textIn = textIn.replace(/AE/g,"Ä");
textIn = textIn.replace(/UE/g,"Ü");
textIn = textIn.replace(/OE/g,"Ö");
return textIn;
}


function transcribeSeparateNames(names, sex, textOut) {
    for (i = 0; i < names.length; i++) {
        textOut = textOut + " " + lithuanizeDE(names[i], sex);
    }
    return textOut;
}

function syllableToStress(word) {
    word = word.toLowerCase();
    var firstSyll = word.split(word.match(/[aeiouyėū]{1,2}/g)[0])[0] + word.match(/[aeiouyėū]{1,2}/g)[0];
    return firstSyll;
}


function loadFileAsText() {
    var startTime = performance.now();
    var fileToLoad = document.getElementById("fileToLoad").files[0];
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        var outputContent = "";
        var arr = textFromFileLoaded.split(';');
        var passedNo = 0;
        var failedNo = 0;
        var exceptionNo = 0;

        for (i = 0; i < arr.length - 1; i++) {
            var foreignName = arr[i].substr(0, arr[i].indexOf(',')).trim();
            var lithName = (arr[i].split(',').pop().split(';')[0]).trim();
            var lithuanizedName = (lithuanizeDE(foreignName, document.getElementById("gimine").value)).trim();
            var percentPasssed = 0;


            lithuanizedName = lithuanizedName.charAt(0).toUpperCase() + lithuanizedName.slice(1);

            if (pavardesDE.has(foreignName.trim())) {
                lithName = pavardesDE.get(foreignName.trim()) + "; EXCEPTION";
                exceptionNo = exceptionNo + 1;
            } else if (lithName != lithuanizedName) {
                lithName = lithName + "; FAILED, Algorithms output is: " + lithuanizedName;
                failedNo = failedNo + 1;
            } else {
                lithName = lithName + "; PASSED";
                passedNo = passedNo + 1;
            }

            percentPassed = Math.round(passedNo / (passedNo + failedNo) * 100);

            arr[i] = "\n" + foreignName + "; " + lithName;
            outputContent = outputContent + arr[i] + "\n" + "___________________________________________________________________";

        }
	var endTime = performance.now();
        outputContent = outputContent + "\n" + "________________________________________________________________________" + "\n" + "PASSED: " + passedNo + "\n" + "FAILED: " + failedNo + "\n" + "EXCEPTIONS: " + exceptionNo + "\n" + "PERCENTAGE PASSED: " + percentPassed + "%" + "\n" + "PROCESSING TIME: " + (endTime - startTime) + "ms";
        document.getElementById("inputList").value = outputContent;
    };

    fileReader.readAsText(fileToLoad, "UTF-8");
}
