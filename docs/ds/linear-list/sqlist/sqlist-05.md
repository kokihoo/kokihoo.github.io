### :page_with_curl:05：从有序顺序表中删除所有其值重复的元素，使表中所有元素的值均不同。
---

#### :writing_hand: 算法思想：
> 有序顺序表，值相同的元素一直在连续的位置上，用类似于直接插入排序的思想，初始时将第一个元素视为非重复的有序表。之后依次判断后面的元素是否与前面非重复有序表的最后一个元素相同，若相同，则继续向后判断，若不同，则插入前面的非重复有序表的最后，直至判断到表尾为止

::: info  查看代码 :cup_with_straw:
```C 
bool Delete_Same(SeqList &L){
    if(L.length==0)
        return false;

    int i, j; // i存储第一个不同的元素，j为工作指针
    
    for(i=0, j=1; j<L.length;j++){ // j=1 从第二个元素开始循环判断
        if(L.data[i]!=L.data[j]) // 查找下一个与上一个元素值不同的元素
            L.data[++i]=L.data[j]; // 找到后，将元素前移
    }

    L.length=i+1; // 更新线性表长度
    return true;
}
```
:::

