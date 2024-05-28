### :page_with_curl:03：试编写算法将带头结点的单链表就地逆置，所谓“就地”是指辅助空间复杂度为O(1)。
---

#### :writing_hand: 算法思想：
> - 解法1：将头结点摘下，然后从第一结点开始，依次插入到头结点的后面(头插法建立单链表)，直到最后一个结点为止，这样就实现了链表的逆置，如下图所示。  
> - 解法2：假设pre、p和r指向三个相邻的结点，如下图所示。假设经过若干操作后，\*pre之前结点的指针都已调整完毕，它们的next都指向其原前驱结点。现在令\*p结点的next域指向、\*pre结点，注意到一旦调整指针的指向，\*p的后继结点的链就会断开，为此需要用r来指向原\*p的后继结点。处理时需要注意两点：一是再处理第一个结点时，应将其next域置为NULL，而不是指向头结点(因为它将作为新表的尾结点)；二是再处理完最后一个结点后，需要将头结点的指针指向它。![image test](/img/02-03.png)

::: info  查看代码 :cup_with_straw:
::: code-group
```C [解法1]
LinkList Reverse_1(LinkList L){
    LNode *p, *r; // p为工作指针，r为p的后继，以防断链
    p=L->next; // 从第一个元素结点开始
    L->next=NULL; // 先将头结点L的next域置为NULL
    while(p!=NULL){ // 依次将元素摘下
        r=p->next; // 暂存p的后继
        p-next=L->next; // 将p结点插入到头结点之后
        L->next=p;
        p=r
    }
    return L;
}
```
```C [解法2]
LinkList Reverse_2(LinkList L){
    LNode *pre, *p=L->next, *r=p->next;
    p->next=NULL; // 处理第一个结点
    while(r!=NULL){ // r为空，说明p为最后一个结点
        pre=p；// 依次继续遍历
        p=r;
        r=r->next
        p->next=pre; //指针反转
    }
    L->next=p; // 处理最后一个结点
    return L;
}
```
---
**时间复杂度、空间复杂度分析**
> 上述两个算法的时间复杂度都是O(n), 空间复杂度为O(1)。
:::

