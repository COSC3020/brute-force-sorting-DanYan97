# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

For this implementation, the helper function that generates all the permutations of the input array, the base case take $O(1)$, the for loop iteration takes $O(n)$, inside the for loop, the recursive call takes $O(n!)$, the swap operation takes $O(1)$, therefore, the function takes overall $O(n*n!)$ runtime complexity. Another helper function check if the array is sorted takes $O(n)$ becuase of the for loop iteration.

In the main for loop, it first iterate each permutation from the generated permutations, which takes $O(n!)$, check if array is sorted call the helper function, which takes $O(n)$, therefore, the overall time complexity is $O(n*n!)$

Therefore, the time complexity of the worst case is $O(nn!)+O(nn!)\in\Theta(n*n!)$; the best case occur, when the array is already sorted in the first permutation, in which the time complexity is $O(1)+O(n)\in\Theta(n)$, where $O(1)$ stands for the generated permutation, $O(n)$ stands for the array checking.

Generating the permutations randomly can be risky, becuase it could generate the same permutation mutiple times, thus increase the time to find the sorted permutation. The worst case is unbounded becuase without the memory, it could keep generating the same permutations over and over again, the time complexity can then not be defined. However, in the other hand, if lucky enough, the sorted permutation can be found very quick since the permutations is generated ramdomly, which may lead to the best case time complexity $O(n)$

“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.” --Doris Yan
