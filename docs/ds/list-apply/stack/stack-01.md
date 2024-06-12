### :page_with_curl:01：栈的初态和终态都为空，以I和O分别表示入栈和出栈，则出入栈的操作序列可表示为由I和O组成的序列，可以操作的序列称为合法序列，否则称为非法序列。写出一个算法，判定所给的序列是否合法。若合法，返回true，否则返回false(假定被判定的操作序列已存入一位数组中)。

---

#### :writing_hand: 算法思想：
> - eg：IOIIOIOO合法；IOOIOIIO非法。
> - 依次逐一扫描入栈出栈序列(即由"I"和"O"组成的字符串)，每扫描至任意一个位置均需检查出栈次数(即"O"的个数)是否小于入栈次数("I"的个数)，若大于则为非法序列。扫描结束后，再判断入栈和出栈次数是否相等，若不相等则不合题意，为非法序列。


<!-- ::: details 查看代码  -->
::: info  查看代码 :cup_with_straw:
```C
bool Judge(char A[]){
    int i=0;
    int j=k=0; // i为下标，j和k分别为字母I和O的个数
    while(A[i]!='\0'){
        switch(A[i]){
            case 'I': 
                j++; 
                break; // 入栈次数增1
            case 'O': 
                k++;
                if(k>j) { printf("序列非法\n"); exit(0); }
        }
        i++; // 不论A[i]是I还是O，指针i均后移
    }

    if(j!=k){
        printf("序列非法\n");
        return false;
    } else {
        printf("序列合法\n");
        return true;
    }
}
```
:::

