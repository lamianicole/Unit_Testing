export function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Was sagt die Funktion?
//  Ist n gleich 0 oder 1
//  Gibt 1 zurück, wenn Bedingung wahr ist
// Wert von n wird multipliziert mit Ergebnis von factorial(n - 1)