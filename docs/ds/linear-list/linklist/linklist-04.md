### :page_with_curl:04：设在一个带头结点的单链表中，所有结点的元素值无序，试编写一个函数，删除表中所有介于给定的两个值(作为函数参数给出)之间的元素(若存在)。
---

#### :writing_hand: 算法思想：
>   链表无序，所以只能逐个结点进行检查，执行删除。

::: info  查看代码 :cup_with_straw:
```C 
void RangeDelete(LinkList &L, int min, int max){
    LNode *pre=L, *p=L->next; // p是检查指针，pre是p指针的前驱
    while(p!=NULL){
        if(p->data > min && p->data < max){ // 寻找被删结点，删除
            pre->next=p->next;
            free(p);
            p=pre->next;
        } else { // 继续扫描寻找待删除结点
            pre=p;
            p=p->next;
        }
    }
}
```
---
**时间复杂度、空间复杂度分析**
> 时间复杂度O(n),空间复杂度O(1)。
:::

