function permutationSort(a) {
    
    var count = 0;

    //helper function to generate the permutations 
    function* generatePermutations(arr, n = arr.length) {
        if (n === 1) {
            yield arr.slice();
        } else {
            for (var i = 0; i < n; i++) {
                yield* generatePermutations(arr, n - 1);
                // swap element based on even or odd
                if (n % 2 === 0) {//if even
                    [arr[i], arr[n - 1]] = [arr[n - 1], arr[i]];
                } else {//if odd
                    [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];  
                }
            }
        }
    }
    //check if array is sorted 
    function isSorted(arr) {
        for (var i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) 
                return false;
        }
        return true;
    }
    //iterate each permutation to check if it's sorted
    for (var perm of generatePermutations(a)) {
        
        count++;
        
        if (isSorted(perm)) {
            break;
        }
    }
    return count;
}
