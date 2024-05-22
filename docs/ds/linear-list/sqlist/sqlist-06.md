### :page_with_curl:06：将两个有序顺序表合并为新的有序顺序表，并由函数返回结果顺序表
---

#### :writing_hand: 算法思想：
> 首先，按顺序不断取下两个顺序表表头较小的结点存入新的顺序表中。然后，看哪个表还有剩余，将剩余部分直接添加到新的顺序表后面。

::: info  查看代码 :cup_with_straw:
```C 
bool Merge(SeqList A, SeqList B, SeqList &C) {
    // 将有序表A与B合并为一个新的有序顺序表C
    if(A.length+B.length>C.maxSize) // 顺序表C的长度装不下 A、B
        return false;

    int i=0, j=0, k=0; // i j k分别为顺序表A、B、C的工作指针
    while (i<A.length && j<B.length) {
        if(A.data[i]<=B.data[j])
            C.data[k++]=A.data[i++];
        else
            C.data[k++]=B.data[j++];
    }

    // 将剩余顺序元素添加在新的顺序表后面
    while(i<A.length) 
        C.data[k++]=A.data[i++];
    while(j<B.length)
        C.data[k++]=B.data[j++];

    C.length=k;
    return true;
}
```
:::

