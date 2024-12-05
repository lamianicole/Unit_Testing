export function areAnagrams(string1: string, string2: string) {
    const normalize = (str: string) => str.toLowerCase().replace(/\s/g, '').split('').sort().join('');
    return normalize(string1) === normalize(string2);
}

//      Was macht die Funktion?
// vergleicht 2 strings
// wandelt um in Kleinschreibung
// ? entfernt alle Leerzeichen aus dem string, g = global, also alle im string
// wandelt string in array mit einzelnen Zeichen um
// sortiert die Zeichen im array alphabetisch
// bildet wieder einen string aus allen Zeichen
// vergleicht beide strings
// Vergleich -> true/false