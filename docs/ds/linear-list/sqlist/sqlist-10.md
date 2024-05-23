### :page_with_curl:10：【2010统考真题】设将n(n>1)个整数存放到一维数组R中，设计一个在时间和空间两方面都尽可能高效的算法。将R中保存的序列循环左移p(0<p<n)个位置，即将R中的数据由(X0,X1,…,Xn-1)变换为(Xp,Xp+1,…,Xn-1,X0,X1…,Xp-1)。
---

#### :writing_hand: 算法思想：
> 可将问题视为把数组ab转换成ba(a代表数组的前p个元素，b代表数组余下的n-p个元素),先将a逆置得到(a逆b)，再将b逆置得到(a逆b逆),最后将整个(a逆b逆)逆置，得到(ba)。定义Reverse函数指向数组逆置操作，对abcdefgh向左循环移动3(p=3)个位置的过程如下：
> - Reverse(0, p-1)得到cbadefgh；
> - Reverse(p, n-1)得到cbahgfed; 
> - Reverse(0, n-1)得到defghabc; 

::: info  查看代码 :cup_with_straw:
```C 
void Reverse(int R[], int from, int to){
    int i, temp;

    for(i=0; i<(to-from+1)/2; i++){
        temp = R[from+i];
        R[from+i] = R[to-i];
        R[to-i]=temp;
    }
}

void Converse(int R[], int n, int p){
    Reverse(R, 0, p-1);
    Reverse(R, p, n-1);
    Reverse(R, 0, n-1);
}
```
---
**时间复杂度、空间复杂度分析**
> 上述算法中三个Reverse函数的时间复杂度分别为O(p/2), O((n-p)/2), O(n/2),故所设计的算法的时间复杂度为O(n),空间复杂度为O(1)。
:::

