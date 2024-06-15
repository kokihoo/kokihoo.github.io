### :page_with_curl:03：利用两个栈S1和S2来模拟一个队列，已知栈的4个运算定义如下：
> - Push(S, x)；// 元素x入栈S
> - Pop(S, x)；// S出栈并将出栈的值赋给x
> - StackEmpty(S)；// 判断栈是否为空
> - StackOverflow(S)；// 判断栈是否满
> - **如何利用栈的运算来实现该队列的3个运算(形参由读者根据要求自己设计)？**
> - Enqueue；// 将元素x入队
> - Dequeue；// 出队，并将出队元素存储在x中
> - QueueEmpty；// 判断队列是否为空
---

#### :writing_hand: 算法思想：
> 利用两个栈S1和S2来模拟一个队列，当需要从队列中插入一个元素时，用S1存放已输入的元素，即S1执行入栈操作。当需要出队时，则对S2执行出栈操作。因为从栈中取出元素的顺序是原顺序的逆序，所以必须先将S1中的所有元素全部出栈并入栈到S2中，再在S2中执行出栈操作，即可实现出队操作，而在执行此操作前必须判断S2是否为空，否则会导致顺序混乱。当栈S1和S2都为空时队列为空。
- ① 对S2的出栈操作用做出队，若S2为空，则先将S1中的所有元素送入S2
- ② 对S1的入栈操作用做入队，若S1满，必须先保证S2为空，才能将S1中的元素全部插入S2中。


<!-- ::: details 查看代码  -->
::: info  查看代码 :cup_with_straw:
```C
// 入队算法
int EnQueue(Stack &S1, Stack &S2, ELemType e){
    if(!StackOverflow(S1)){
        Push(S1, e);
        return 1;
    }
    if(StackOverflow(S1) && !StackEmpty(S2)){
        printf("队列满");
        return 0;
    }
    if(StackOverflow(S1) && StackEmpty(S2)){
        while(!StackEmpty(S1)){
            Pop(S1, x);
            Push(S2, x);
        }
    }
    Push(S1, e);
    return 1;
}

// 出队算法
void DeQueue(Stack &S1, Stack &S2, ElemType &x){
    if(!StackEmpty(S2)){
        Pop(S2, x);
    } else if(StackEmpty(S1)){
        printf("队列为空");
    } else {
        while(!StackEmpty(S1)){
            Pop(S1, x);
            Push(S2, x);
        }
        Pop(S2, x)
    }
}

// 判断队列为空的算法
int QueueEmpty(Stack S1, Stack S2){
    if(StackEmpty(S1)&&Stack(Empty(S2))){
        return 1;
    } else {
        return 0;
    }
}

```
:::

