export function greatestCommonDivisor(str1: string, str2: string): string {
    let divisor = "", tempDivisor = "";
    for(let i = 0; i < str2.length && i < str1.length - 1; i++) {
        tempDivisor += str2[i]
        if(str1.includes(tempDivisor, 0)) {
            let test = tempDivisor;
            while(test.length <= str1.length) {
                if(str1 === test) {
                    divisor = tempDivisor;
                    break;
                }
                test += tempDivisor;
            }
        }
    }
    return divisor;
}

greatestCommonDivisor("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX")