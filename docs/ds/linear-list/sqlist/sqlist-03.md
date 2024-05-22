### :page_with_curl:03：对长度为n的顺序表L，编写时间复杂度为O(n), 空间复杂度为O(1)的算法，该算法删除顺序表中所有值为x的数据元素。
---

#### :writing_hand: 算法思想：
> **Solution 1**：用k记录顺序表L中不等于x的元素个数（即需要保存的元素个数），扫描时将不等于x的元素移动到下标k的位置，并更新k的值。扫描结束后修改L的长度。

> **Solution 2**：用k记录顺序表L中等于x的元素个数，一边扫描L，一边统计k，并将不等于x的元素前移k个位置，。扫描结束后修改L的长度。


::: info  查看代码 :cup_with_straw:
::: code-group
```C [Solution 1]
void del_x_1(SqList &L, int x) {
    // 删除顺序表L中所有值为x的数据元素
    int k=0, i; // 记录值不等于x的元素个数
    for(i=0; i<L.length; i++){
        if(L.data[i]!=x) {
            L.data[k]=L.data[i];
            k++;
        }
    }
    L.length = k; // 更新顺序表L的长度等于k
}
```
```C [Solution 2]
void del_x_2(SqList &L, int x) {
    int k=0, i=0; // k记录值不等于x的元素个数
    while(i<L.length){
        if(L.data[i]==x)
            k++
        else 
            L.data[i-k]=L.data[i]; // 当前元素前移k个位置
        i++
    }

    L.length = L.length-k; //更新顺序表L的长度
}
```
:::

