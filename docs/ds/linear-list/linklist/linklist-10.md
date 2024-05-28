### :page_with_curl:10：两个整数序列A=a<sub>1</sub>,a<sub>2</sub>,a<sub>3</sub>,…a<sub>m</sub>和B=b<sub>1</sub>,b<sub>2</sub>,b<sub>3</sub>…b<sub>n</sub>已经存入两个单链表中，设计一个算法，判断序列B是否是序列A的连续子序列。
---

#### :writing_hand: 算法思想：
>   因为两个整数序列已存入两个链表中，操作从两个链表的第一个结点开始，若对应数据相等，则后移指针；若对应数据不等，则A从上次开始比较的结点的后继开始，B链表仍从第一个结点开始比较，直到B链表到尾表匹配成功。A链表到尾而B链表未到尾表示失败。操作中应记住A链表每次的开始结点，以便下次匹配时好从其后继开始。

::: info  查看代码 :cup_with_straw:
```C 
int Pattern(LinkList A, LinkList B){
    LNode *p=A; // p为A链表的工作指针，本题假定A和B均无表头结点
    LNode *pre=p; // pre记住每趟比较中A链表的开始结点
    LNode *q=B; // q是B链表的工作指针
    while(p && q){
        if(p->data == q->data){ // 结点值相同
            p=p->next;
            q=q->next;
        } else {
            pre = pre->next;
            p=pre; // A链表新的开始比较结点
            q=B; // q从B链表的第一个结点开始
        }
    }

    if(q==NULL) // B已经比较结束
        return 1; // B是A的子序列
    else
        return 0; // B不是A的子序列
}
```
---
**时间复杂度、空间复杂度分析**
> 此题为字符串匹配的链式表示形式。时间复杂度为O(lenA+lenB), 空间复杂度为O(1)。
:::

