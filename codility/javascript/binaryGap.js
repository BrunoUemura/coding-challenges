/**
 * A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
 * For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.
 * Write a function:
 * class Solution { public int solution(int N); }
 * that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
 * For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.
 * Write an efficient algorithm for the following assumptions:
 * N is an integer within the range [1..2,147,483,647].
 */

/**
 *
 * @param {number} num
 * @return {number}
 */

function solution(num) {
  // Integer && range
  // 1 00000 1 000 1
  // Shoul return 5

  if (!Number.isInteger(num) || num < 0 || num >= 2147483647) {
    return 0;
  }

  let list = [];
  let result = 0;
  const bin = num.toString(2);

  for (let i = 0; i < bin.length; i++) {
    if (bin[i] > 0) {
      list.push(result);
      result = 0;
    } else {
      result += 1;
    }
  }

  return Math.max(...list);
}

console.log(solution(1041)); // 5
console.log(solution(9)); // 2
console.log(solution(529)); // 4
console.log(solution(15)); // 0
console.log(solution(20)); // 1
