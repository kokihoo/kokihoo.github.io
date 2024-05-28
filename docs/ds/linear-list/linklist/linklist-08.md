### :page_with_curl:08：设A和B是两个单链表(带头结点), 其中元素递增有序。设计一个算法从A和B中的公共元素产生单链表C，要求不破坏A、B的结点。
---

#### :writing_hand: 算法思想：
>   表A、B都有序，可从第一个元素起依次比较A、B两表的元素，若元素值不等，则值小的指针往后移，若元素值相等，则创建一个值等于两结点的元素值的新结点，使用尾插法插入到新的链表中，并将两个原表指针后移一位，直到其中一个链表遍历到表尾。

::: info  查看代码 :cup_with_straw:
```C 
void Get_Common(LinkList A, LinkList B){
    LNode *p=A->next,*q=B->next,*r,*s;
    LinkList C=(LinkList)malloc(sizeof(LNode)); // 建立表C
    r=C; // r始终指向C的尾结点
    while(p!=NULL&&q!=NULL){ // 循环的中止条件
        if(p->data < q->data){
            p=p->next; // 若A的当前元素较小，后移指针
        } else if(p->data > q->data){
            q=q->next; // 若B的当前元素较小，后移指针
        } else {
            s=(LNode *)malloc(sizeof(LNode));
            s->data=p->data; // 复制产生s结点
            r-next=s; // 将*s链接到C上(尾插法)
            r=s;
            p=p->next; // 表A和B继续向后扫描
            q=q->next;
        }

    }
}
```
---
**时间复杂度、空间复杂度分析**
> 
:::

