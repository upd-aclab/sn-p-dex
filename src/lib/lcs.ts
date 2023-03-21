// Given strings a and b, finds the indices of the longest common
// subsequence of a and b in a.

export function lcs(a: string, b: string): number[] {
  const indices = [];
  const c = [...a],
    n = c.length,
    d = [...b],
    m = d.length;
  const dp = new Array(n + 1)
    .fill(0)
    .map(() => new Array<number>(m + 1).fill(0));
  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= m; ++j) {
      if (c[i - 1] === d[j - 1]) {
        dp[i]![j] = Math.max(dp[i]![j]!, 1 + dp[i - 1]![j - 1]!);
      } else {
        dp[i]![j] = Math.max(dp[i - 1]![j]!, dp[i]![j - 1]!);
      }
    }
  }
  let i = n,
    j = m;
  while (i > 0 && j > 0) {
    if (dp[i]![j] === dp[i - 1]![j]!) {
      i -= 1;
    } else if (dp[i]![j] === dp[i]![j - 1]) {
      j -= 1;
    } else {
      indices.push(i - 1);
      (i -= 1), (j -= 1);
    }
  }
  return indices;
}
