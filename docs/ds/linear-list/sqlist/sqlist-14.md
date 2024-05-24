### :page_with_curl:14：【2020统考真题】定义三元组(a,b,c)(a,b,c均为整数)的距离D=|a-b|+|b-c|+|c-a|。给定3个非空整数集合S<sub>1</sub>、S<sub>2</sub>和S<sub>3</sub>，按升序分别存储在3个数组中。请设计一个尽可能高效的算法，计算并输出所有可能的三元组(a,b,c)(a∈S1，b∈S2，c∈S3)中的最小距离。例如S<sub>1</sub>={-1，0，9}，S<sub>2</sub>={-25, -10, 10, 11}，S<sub>3</sub>={2，9，17，30，41}，则最小距离为2，相应的三元组为(9，10，9)
---

#### :writing_hand: 算法思想：
>   ![image test](/img/01-14.png) D=|a-b|+|b-c|+|c-a|>=0 = L<sub>1</sub> + L<sub>2</sub> + L<sub>3</sub>;由图示可知，决定D大小的关键是a和c之间的距离，于是问题就可以简化为每次固定c找到一个a，使得L<sub>3</sub> = |c-a|最小。
> - ①使用D<sub>min</sub>记录所有已处理的三元组的最小距离，初值为一个足够大的整数
> - ②集合S<sub>1</sub>、S<sub>2</sub>和S<sub>3</sub>分别保存在数组A、B、C中。数组的下标变量i=j=k=0，当i<|S<sub>1</sub>|、
j<|S<sub>2</sub>|且k<|S<sub>3</sub>|时（|S|表示集合S中的元素个数）, 循环执行下面的 a）~c）
> > - a) 计算A[i]、B[j]、C[k]的距离D；
> > - b) 若D<D<sub>min</sub>，则D<sub>min</sub>=D；
> > - c) 将A[i]、B[j]、C[k]中的最小值下标+1；（分析：最小值为a，最大值为c，则c不变而更新a，试图寻找更小的距离D）
> - ③输出D<sub>min</sub>，结束。

::: info  查看代码 :cup_with_straw:
```C 
#define INT_MAX 0x7fffffff
int abs_(int a) { // 计算绝对值
    if(a<0) return -a;
    else return a;
}

bool xls_min(int a, int b, int c) { // a是否是三个数中的最小值
    if(a<=b && a<=c) return true;
    return false;

}

int findMinofTrip(int A[], int n, int B[], int m, int C[], int p) {
    // D_min用于记录三元组的最小距离，初值为INT_MAX
    int i=0,j=0,k=0,D_min=INT_MAX,D;
    while(i<n && j<m && k<p && D_min>0) {
        D=abs_(A[i]-B[j])+abs_(B[j]-C[k])+abs_(C[k]-A[i]); // 计算D
        if(D<D_min) D_min=D; // 更新D
        if(xls_min(A[i], B[j], C[k])) i++; // 更新a
        else if(xls_min(B[j], C[k], A[i]))  j++; // 更新b
        else k++; // 更新c
    }

    return D_min;
}
```
---
**时间复杂度、空间复杂度分析**
> 设n = (|S<sub>1</sub>|+|S<sub>2</sub>|+|S<sub>3</sub>|)，时间复杂度为O(n)，空间复杂度为O(1)。
:::

