### :page_with_curl:03：设有两个栈S1、S2都采用顺序栈方式，并共享一个存储区[0，…，maxsize-1],为了尽量利用空间，减少溢出的可能，可采用栈顶相向，迎面增长的存储方式。试设计S1、S2有关入栈和出栈的操作算法。

---

#### :writing_hand: 算法思想：
> - 两个栈共享存储空间,将两个栈的栈底设在存储两端,初始时,S1栈顶指针为-1,S2栈顶指针为maxsize.两个栈顶指针相邻时为栈满.两个栈顶相向,迎面增长,栈顶指针指向栈顶元素.
> - 本题的关键在于,两个栈入栈和退栈时的栈顶指针的计算.S1栈是通常意义下的栈;而S2栈入栈操作时,其栈顶指针左移(减1),退栈时,栈顶指针右移(加1).此外,对于所有栈的操作,都要注意"入栈判满\出栈判空"的检查.


<!-- ::: details 查看代码  -->
::: info  查看代码 :cup_with_straw:
```C
#define maxsize 100 // 两个栈共享顺序存储空间所能达到的最多元素数,初始化为100
#define elemtp int // 假设元素类型为整型

typedef struct {
    elemtp stack[maxsize]; // 栈空间
    int top[2]; // top为两个栈顶指针
}cstk

cstk s; // s是如上定义的结构类型变量,为全局变量

// 入栈操作
int push(int i, elemtp x){
    // 入栈操作,i为栈号,i=0,表示入栈左边S1栈, i=1表示入栈右边S2,x是入栈元素
    // 入栈成功返回1,否则返回0
    if(i<0 || i>1){
        printf("栈号输入不对");
        exit(0);
    }
    if(s.top[1]-s.top[0==1]){ // 判满
        printf("栈已满\n");
        return 0;
    }
    switch(i){
        case 0: 
            s.stack[++s.top[0]] = x;
            return 1;
            break;
        case 1:
            s.stack[--s.top[1]] = x;
            return 1;
    }
}

// 出栈操作
elemtp pop(int i){
    // 出栈,i代表栈号,i=0时为S1栈,i=1时为S2栈;退栈成功返回退栈元素,否则返回-1
    if(i<0 || i>1){
        printf("栈号输入错误\n");
        exit(0);
    }
    switch(i){ // 结合共享栈的存储图示想象记忆
        case 0:
            if(s.top[0]==-1){
                printf("栈空\n");
                return -1;
            } else {
                return s.stack[s.top[0]--];
            }
            break;
        case 1:
            if(s.top[1]==maxsize){
                printf("栈空\n");
                return -1;
            } else {
                return s.stack[s.top[1]++];
            }
            break;
    }
}

```
:::

