### :page_with_curl:08：线性表(a1,a2,a3,…,an)中的元素递增有序且按顺序存储于计算机内。要求设计一个算法，完成用最少时间在表中查找数值为x的元素，若找到，则将其与后继元素位置相交换，若找不到，则将其插入表中并使表中元素仍递增有序。
---

#### :writing_hand: 算法思想：
> 顺序存储的线性表递增有序，可以顺序查找，也可以折半查找。题目要求"用最少的时间在表中查找数值为x的元素"，这里应使用折半查找法。

::: info  查看代码 :cup_with_straw:
```C 
void SearchExchangeInsert(int A[], int x) {
    int low=0, high=n-1, mid, temp; // low和high指向顺序表下界和上界的下标
    while(low<=high){
        mid=(high+low)/2; // 找中间位置
        if(A[mid]==x) break; // 找到x，退出while循环
        else if(A[mid]<x) low=mid+1; // 到mid的右半部去查
        else high=mid-1; // 到mid的左半部去查
    }
    // 下面两个if语句只会执行一个
    if(A[mid]==x && mid!=n-1) { // 若最后一个元素与x相等，则不存在与其后继交换的操作
        temp=A[mid];
        A[mid]=A[mid+1];
        A[mid+1]=temp;
    }
    // 查找失败，插入数据元素x
    if(low>high){
        for(i=n-1; i>high; i--) A[i+1]=A[i]; // 后移元素
        A[i+1]=x; // 插入x
    }
}
```
:::

