### :page_with_curl:09：已知两个链表A和B分别表示两个集合，其元素递增排列。编制函数，求A和B的交集，并存放于A链表中
---

#### :writing_hand: 算法思想：
>   

::: info  查看代码 :cup_with_straw:
```C 
LinkList Union(LinkList &la, LinkList &lb){
    LNode *pa=la->next; // 设工作指针分别为pa和pb
    LNode *pb=lb->next; 
    LNode *u,*pc=la; // 结果表中当前合并结点的前驱指针pc
    while(pa && pb){
        if(pa->data == pb->data){ // 交集并入结果表中
            pc->next=pa; // A中结点链接到结果表
            pc=pa;
            pa=pa->next;
            u=pb; // B中结点释放
            pb=pb->next;
            free(u);
        } else if(pa->data < pb->data) { // 若A中当前结点值小于B中当前结点值
            u=pa;
            pa=pa->next; // 后移指针
            free(u); // 释放A中当前结点
        } else {
            u=pb;
            pb=pb->next; // 后移指针
            free(u); // 释放B中当前结点
        }
    }
    // 释放A链表中所有剩余元素
    while(pa){
        u=pa;
        pa=pa->next;
        free(u)
    }
    // 释放B链表中所有剩余元素
    while(pb){
        u=pb;
        pb=pb->next;
        free(u);
    }

    pc->next=NULL; // 置结果链表尾指针尾NULL
    free(lb); // 释放B表的头结点
    return la;
}
```
---
**时间复杂度、空间复杂度分析**
> 算法的时间复杂度为O(lenA+lenB), 空间复杂度为O(1)。
链表归并类型的试题在各学校的历年真题中出现频率很高，故应扎实掌握解决此类问题的思想。
:::

