function longestCommonPrefix(strs: string[]): string {
    
    let prefix: string = ""
    let minimumWord: number = strs[0].length

    for (let i = 1; i < strs.length; i++ ) {
   
        if (minimumWord > strs[i].length) {
            minimumWord = strs[i].length
        }
        
    }

    for (let i = 0; i < minimumWord; i++) {

        let current = strs[0][i]

        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== current) {
                return prefix
            }
        }

        prefix = prefix + current

    }

    return prefix

};



const strs: string[] = ["flower","flow","flight"]
const strs2: string[] = ["dog","racecar","car"]

console.log(longestCommonPrefix(strs))
console.log(longestCommonPrefix(strs2))