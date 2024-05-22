### :page_with_curl:04：从顺序表中删除其值在给定s和t之间（包含s和t，要求s<t）的所有元素，若s或t不合理或顺序表为空，则显示出错信息并退出运行。
---

#### :writing_hand: 算法思想：
> 从前往后扫描顺序表L，用k记录值在s和t之间的元素个数（初始时k=0）。对于当前扫描的元素，若值不在s和t之间，则前移k个位置；否则执行k++。由于每个不再s和t之间的元素仅移动依次，因此算法效率高

::: info  查看代码 :cup_with_straw:
```C 
bool Del_s_t(SqList &L, int s, int t) {
    // 删除顺序表L中值在给定值s和t(要求s<t)之间的所有元素
    if(L.length==0 || s>=t)
        return false; // 线性表为空或s、t不合法，返回
    
    int i, k=0;
    for(i=0; i<L.length; i++){
        if(L.data[i]>=s && L.data[i]<=t){
            k++;
        } else {
            L.data[i-k]=L.data[i]; // 当前元素前移k个位置
        }
    }

    L.length-=k; // 更新线性表长度
    return true;
}
```
:::

