/*
 * @lc app=leetcode id=1672 lang=typescript
 *
 * [1672] Richest Customer Wealth
 */

// @lc code=start
function maximumWealth(accounts: number[][]): number {
  const wealthScore = accounts.map((account) => {
    return account.reduce((prev, acc) => prev + acc);
  });
  return Math.max(...wealthScore);
}
// @lc code=end
