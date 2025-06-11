export const mergeAlternately = (word1: string, word2: string): string => {
    let result = '', p1 = 0, p2 = 0;
    while (p1 < word1.length && p2 < word2.length) {
        result += `${word1[p1]}${word2[p2]}`
        p1 ++;
        p2 ++;
    }
    if (p1 < word1.length) {
        result += word1.slice(p1)
    } else if (p2 < word2.length) {
        result += word2.slice(p2)
    }
    return result;
}