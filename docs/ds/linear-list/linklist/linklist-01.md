### :page_with_curl:01：在带头结点的单链表L中，删除所有值为x的结点，并释放其空间，假设值为x的结点不唯一，试编写算法以实现上述操作。
---

#### :writing_hand: 算法思想：
>-  解法1：用p从头至尾扫描单链表，pre指向*p结点的前驱。若p所指结点的值为x，则删除，并让p移向下一个结点，否则让pre、p指针同步后移一个结点。
>-  解法2：采用尾插法建立单链表。用p指针扫描L的所有结点，当其值不为x时，将其链接到L之后，否则将其释放。

::: info  查看代码 :cup_with_straw:
::: code-group
```C [解法1]
 void Del_X_1(LinkList &L, ElemType x){
    // *pre记录p结点的前驱结点，用于p结点的删除
    LNode *p = L->next, *pre=L, *q; // 置p和pre的初始值
    while(p!=NULL){
        if(p->data==x){
            q=p; // q指向被删结点
            p=p->next;
            pre->next=p; // 将*q结点从链表中断开
            free(q); // 释放*q结点的空间
        } else {
            pre=p;
            p=p->next
        }
    }
}
```
```C [解法2]
 void Del_X_2(LinkList &L, ElemType x){
    LNode *p = L->next, *r=L, *q; // r指向尾结点，其初值为头结点
    while(p!=NULL){
        if(p->data!=x){ // *p结点值不为x时将其链接到L尾部
            r->next=p;
            r=p;
            p=p->next; // 继续扫描
        } else {
            q=p;
            p=p->next; // 继续扫描
            free(q); // 释放*q结点的空间
        }
    }
    r->next=NULL; // 插入结束后置尾结点指针为NULL
}
```
---
**时间复杂度、空间复杂度分析**
> 上述两个算法扫描单链表，时间复杂度O(n), 空间复杂度O(1)。
:::


