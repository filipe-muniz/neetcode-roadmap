function containsDuplicate(nums: number[]) {
    const set = new Set<number>();
    for(const element of nums){
        if(set.has(element)){
            return true;
        }
        
            set.add(element);
    
    }
    return false;
};

