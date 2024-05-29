function isAnagram(s: string, t: string): boolean {
    if(s.length != t.length){
        return false;
    }
    const map = new Map<string, number>();

    for(let i = 0; i < s.length; i++){
        map.set(s[i], (map.get(s[i])|| 0) + 1 )
        map.set(t[i], (map.get(t[i]) || 0) - 1);

    }
    const values = Array.from((map.values()));
    return values.every(e => e === 0);

};

// With simple javascript objects.
// In some cases simple objects are faster than maps 
// ref: https://stackoverflow.com/questions/44321324/javascript-map-much-slower-than-object-for-random-look-ups
 function isAnagram2(s: string, t: string): boolean {
    if(s.length != t.length){
        return false;   
    }
    const charCount : {[key:string]: number} = {};
        for(let i = 0; i < s.length; i++){
            charCount[s[i]] = (charCount[s[i]] || 0) + 1;
            charCount[t[i]] = (charCount[t[i]] || 0) - 1
        } 
        return Object.values(charCount).every(el => el === 0);
};