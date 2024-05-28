### :page_with_curl:07：在一个递增有序的单链表中，存在重复元素。设计算法删除重复的元素，例如{7，10，10，21，30，42，42，42，51，70} 将变为 {7，10，21，30，42，51，70}。
---

#### :writing_hand: 算法思想：
>  由于是有序表，因此所有相同值域的结点都是相邻的。用p扫描递增单链表L,若*p结点的值域等于其后继结点的值域，则删除后者，否则p移向下一个结点。 

::: info  查看代码 :cup_with_straw:
```C 
void Del_Same(LinkList &L){
    LNode *p=L->next,*q; // p为扫描工作指针
    if(p==NULL)
        return;
    while(p->next!=NULL){
        q=p->next; // q指向*p的后继结点
        if(p->data=q->data){// 找到重复值的结点
            p->next=q->next; // 释放*q结点
            free(q);
        } else {
            p=p->next;
        }
    }
}
```
---
**时间复杂度、空间复杂度分析**
> 时间复杂度为O(n), 空间复杂度为O(1)。
:::

