### :page_with_curl:07：已知在一维数组A[m+n]中依次存放两个顺序(a1,a2,a3,…,am)和(b1,b2,b3,…,bn)。编写一个函数，将数组中两个顺序表的位置互换，即将(b1,b2,b3,…,bn)放在(a1,a2,a3,…,am)的前面。
---

#### :writing_hand: 算法思想：
> 首先将数组A[m+n]中的全部元素(a1,a2,a3,…,am,b1,b2,b3,…,bn)原地地址为(bn,bn-1,bn-2,…am,am-1,am-2,…a1)，然后对前n个元素和后m个元素分别使用逆置算法，即可得到(b1,b2,b3,…,bn,a1,a2,a3,…,am)，从而实现顺序表位置互换。

::: info  查看代码 :cup_with_straw:
```C 
void Reverse(int A[], int left, int right, int arraySize){
    // 逆转(aleft, aleft+1, aleft+2…,aright)为(aright,aright-1,…,alfet)
    if(left>=right || right>=arraySize)
        return;

    int mid=(left+right)/2;
    for(i=0; i<=mid-left;i++){
        int temp = A[left+i];
        A[left+i]=A[right-i];
        A[right-i]=temp;
    }
}

void Exchange(int A[], int m, int n, int arraySize){
    // 在数组A[m+n]中，从0~m-1存放(a1,a2,a3,…,am)，从m~m+n-1存放顺序表(b1,b2,b3,…,bn)
    Reverse(A, 0, m+n-1, arraySize);
    Reverse(A, 0, n-1, n);
    Reverse(A, n, m+n-1, m+n);
}

int main(){
    Exchange(A[], m, n, arraySize);
}
```
:::

