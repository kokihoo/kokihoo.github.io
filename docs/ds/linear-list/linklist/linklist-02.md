### :page_with_curl:02：试编写在带头结点的单链表L中删除一个最小值结点的高效算法(假设该结点唯一)。
---

#### :writing_hand: 算法思想：
>用p从头至尾扫描单链表，pre指向\*p结点的前驱，用minp保存值最小的结点指针(初值为p)，minpre指向*minp结点的前驱(初值为pre)。一边扫描，一边比较，若p->data < minp->data, 则将p、pre分别赋值给minp、minpre，如下图所示。当p扫描完毕时，minp指向最小值结点，minpre指向最小值结点的前驱结点，再将minp所指结点删除即可。

::: info  查看代码 :cup_with_straw:
```C 
LinkList Delete_Min(LinkList &L){
    LNode *pre=L, *p-pre->next; // p为工作指针、pre指向其前驱
    LNode *minpre=pre, *minp=p; // 保存最小值结点及其前驱
    while(p!=NULL){
        if(p->data < min->data){ // 找到比之间找到的最小值结点更小的结点
            minp=p;
            minpre=pre;
        }
        pre=p; // 继续扫描下一个结点
        p=p->next;
    }
    minpre->next=minp->next; // 删除最小值结点
    free(minp);
    return L;
}
```
---
**时间复杂度、空间复杂度分析**
> 算法需要从头至尾扫描链表, 时间复杂度为O(n), 空间复杂度为O(1)。
:::

