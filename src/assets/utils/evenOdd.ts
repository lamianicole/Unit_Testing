export function evenOdd(n: number) {
    const result: string[] = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
        result.push('Even');
        } else {
        result.push('Odd');
        }
    }
    return result;
}

// Was macht die Funktion?
// result gibt leeres array zurück
// Schleife mit Wert 1 läuft, solang i <= n, und erhöht um 1 
// Modulo-Operator gibt den Rest der Division von i durch 2 zurück. Wenn Rest 0 ist, ist Zahl gerade, fügt dem array Even hinzu
// Wenn ungerade, fügt es array Odd hinzu
