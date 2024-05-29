function twoSum(nums: number[], target: number): number[] {
    const valueIndex: {[key:number] : number} = {};
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        if(diff in valueIndex){
            return [valueIndex[diff],i];
        }
        valueIndex[nums[i]] = i;
    }
    return [];
};

console.log(twoSum([2,7,11,15], 9));