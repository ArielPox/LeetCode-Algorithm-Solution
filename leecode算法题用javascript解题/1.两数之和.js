/* 【题目描述】给定一个整数数组 nums 和一个整数目标值 target， 请你在该数组中找出 和为目标值 target 的那 两个 整数， 并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。 但是， 数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

示例 1：

输入： nums = [2, 7, 11, 15], target = 9
输出：[0, 1]
解释： 因为 nums[0] + nums[1] == 9， 返回[0, 1]。
示例 2：

输入： nums = [3, 2, 4], target = 6
输出：[1, 2]
示例 3：

输入： nums = [3, 3], target = 6
输出：[0, 1]


提示：

2 <= nums.length <= 104 -
    109 <= nums[i] <= 109 -
    109 <= target <= 109
只会存在一个有效答案


进阶： 你可以想出一个时间复杂度小于 O(n2) 的算法吗？
 */


//【题解】
/**
 * @param {number[]} nums 给定的查找的数组
 * @param {number} target 和的目标值
 * @return {number[]} 返回两个加数的在数组中的下标
 */
var twoSum = function(nums, target) {
    // 1.使用HashMap的时候使用key值定位到nums[i]，用value值定义的是下标值i 
    const map = new Map();
    for (let i = 0, len = nums.length; i < len; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        // 2.在进行数据还有下标添加的同时判断，为了不出现重复的下标值，
        // 所以在判断一次之后再进行添加操作
        map.set(nums[i], i);
    }
    // 3.假如没有找到目标的值就会返回空
    return [];
};