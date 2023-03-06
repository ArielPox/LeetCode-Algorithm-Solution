/* 【题目描述】给你两个 非空 的链表， 表示两个非负的整数。 它们每位数字都是按照 逆序 的方式存储的， 并且每个节点只能存储 一位 数字。

请你将两个数相加， 并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外， 这两个数都不会以 0 开头。
 */


/* 【题解】 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 1.addOne是在产生进位的时候为1 反之为0
    let addOne = 0;
    // 创建一个sum的链表保存结果 
    let sum = new ListNode('0');
    // 3.head 是sum的头指针 
    let head = sum;
    // 4.此处的addOne在判断的循环里 是为了防止在最后的时候l1与l2加完之后漏掉最后的一个进位
    while (addOne || l1 || l2) {
        // 5.判断年链表是不是到了末尾，没有到加数为链表中的值 到末尾加数就是0
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;
        let t = addOne + val1 + val2;
        addOne = t >= 10 ? 1 : 0;
        sum.next = new ListNode(t % 10);
        sum = sum.next;
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    return head.next;

};