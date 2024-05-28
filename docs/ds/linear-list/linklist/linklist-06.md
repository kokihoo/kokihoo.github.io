### :page_with_curl:06：设C={a<sub>1</sub>, b<sub>1</sub>, a<sub>2</sub>, b<sub>2</sub>,…,a<sub>n</sub>, b<sub>n</sub>}为线性表，采用带头结点的单链表存放，设计一个就地算法，将其差分为两个线性表，使得A={a<sub>1</sub>, a<sub>2</sub>…a<sub>n</sub>}, B={b<sub>n</sub>,… b<sub>2</sub>, b<sub>1</sub>}。
---

#### :writing_hand: 算法思想：
>   循环遍历链表C，采用尾插法将奇数号结点插入A(头插建立的表A与原来的结点顺序相同)，采用头插法将偶数号结点插入B(尾插建立的表B与原本来的结点顺序正好相反)。注意：采用头插法插入结点后，*p的指针域已改变，若不设变量保存其后继结点，则会引起断链，从而导致算法出错。

::: info  查看代码 :cup_with_straw:
```C {11}
LinkList DisCreat_2(LinkList &A){
    LinkList B=(LinkList)malloc(sizeof(LNode)); // 创建B表表头
    B->next=NULL; // B表的初始化
    LNode *p=A->next, *q; // p为工作指针
    LNode *ra=A; // ra始终指向A的尾结点
    while(p!=NULL){
        ra->next=p;
        ra=p; // 将p链到A的表尾
        p=p-next;
        if(p!=NULL){
            q=p->next; //头插后，*p将断链，因为用q暂存*p的后继
            p->next=B->next;
            B->next=p;
            p=q; //p直到原链的下一个位置(q保存的位置),继续扫描操作
        }
    }
    ra->next=NULL; // A尾结点的next域置空
    return B；
}
```
---
**时间复杂度、空间复杂度分析**
> 
:::

