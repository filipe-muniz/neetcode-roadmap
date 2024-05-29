function longestConsecutive(nums: number[]): number {
    const numSet = new Set(nums);
    let maxCounter = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let counter = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                counter++;
            }

            maxCounter = Math.max(maxCounter, counter);
        }
    }

    return maxCounter;
}
