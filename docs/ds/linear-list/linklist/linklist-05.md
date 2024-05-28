### :page_with_curl:05：给定两个单链表，试分析找出两个链表的公共结点的思想(不用写代码)。
---

#### :writing_hand: 算法思想：
>- 两个单链表有公共结点，即两个链表从某一结点开始，它们的next都指向同一结点。由于每个单链表结点只有一个next域，因此从第一个公共结点开始，之后的所有结点都是重合的，不可能再出现分叉。所以两个有公共结点而部分重合的单链表，拓扑形状看起来像Y。
>- 若两个链表有一个公共结点，则该公共结点之后的所有结点都是重合的，即它们的最后一个结点必然是重合的。因此，我们判断两个链表是不是有重合的部分的时候，只需要分别遍历到最后一个结点，若两个尾结点是一样的，则说明它们有公共结点，否则两个两个链表没有公共结点。
>- 根据这一思路，我们先要分别遍历两个链表得到它们的长度，并求除两个长度之差，再长的链表上先遍历长度之差个结点之后，再同步遍历两个链表，直到找到相同的结点，或者一直到链表结束。此时，该方法的时间复杂度为O(len1+len2)。
::: info  查看代码 :cup_with_straw:
```C 
int getLen(LinkList L) {
    LNode *p=L, int len=0;
    while(p->next!=null){
        p=p->next;
        len++
    }
    return len;
}

void findCommonNode(LinkList A, LinkList B){
    int alen = getLen(A);
    int blen = getLen(B);
    int count=0;
    LNode *p=A, LNode *q=B;

    if(alen>blen){
        int gap = alen - blen;
        while (gap && p->next!=NULL){
            p=p->next;
            gap--
        }
    } else {
        int gap = blen - alen;
        while (gap && q->next!=NULL){
            q=q->next;
            gap--
        }

    }

    while (p->next!=NULL && q->next!=NULL && p!=q){
        p=p->next;
        q=q->next;
    }

    return p;
}

```
---
**时间复杂度、空间复杂度分析**
> 时间复杂度为遍历两个链表的长度O(lenA + lenB), 时间复杂度为O(1)。
:::

