const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	// Resulting array of subarrays
    const result = [];
    // Temporary subarray for accumulating elements
    let currentSubarray = [];
    // Sum of the current subarray
    let currentSum = 0;

    for (let num of arr) {
        // If adding the current number exceeds n, push the current subarray to result
        if (currentSum + num > n) {
            result.push(currentSubarray);
            // Start a new subarray with the current number
            currentSubarray = [num];
            currentSum = num;
        } else {
            // Add the current number to the current subarray
            currentSubarray.push(num);
            currentSum += num;
        }
    }

    // Push the last subarray if it's not empty
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

	
    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
