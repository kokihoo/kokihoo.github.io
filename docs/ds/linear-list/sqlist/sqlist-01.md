### :page_with_curl:01：从顺序表中删除具有最小值的元素(假设唯一)，并由函数返回被删元素的值。空出的位置由最后一个元素填补，若顺序表位空，则显示出错误信息并退出程序

---

#### :writing_hand: 算法思想：
> 搜索整个顺序表，查找最小值元素并记住其位置，搜索结束后用最后一个元素填补空出的原最小值元素的位置。


<!-- ::: details 查看代码  -->
::: info  查看代码 :cup_with_straw:
```C
bool Del_Min(Sqlist &L, int &value){
    // 删除顺序表L中最小值元素结点，并通过引用型参数value返回其值
    // 若删除成功，则返回true；否则返回false 

    if(L.length == 0) // 表空，中止操作返回
        return false; 

    value = L.data[0]; // 记录最小值
    int pos = 0; // 记录最小值数组下标

    for(int i=0; i<L.length; i++){ // 循环找最小元素，value记录最小值，pos记录数组下标
        if(L.data[i]<value){
            value = L.data[i];
            pos = i;
        }
    }

    L.data[pos] = L.data[L.length -1];// 空出的位置由最后一个元素填补
    L.length--; // 更新顺序表长度

    return true;
}
```
:::

