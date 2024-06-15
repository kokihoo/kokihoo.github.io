### :page_with_curl:02：Q是一个队列，S是一个空栈。实现将队列中的元素逆置的算法。
---

#### :writing_hand: 算法思想：
> 让队列中的元素逐个地出队列，入栈；全部入栈后再逐个出栈，入队。


<!-- ::: details 查看代码  -->
::: info  查看代码 :cup_with_straw:
```C
void Inverser(Stack &S， Queue &Q){
    while(!QueueEmpty(Q)){
        x=DeQueue(Q); // 队列中的元素依次出队
        EnStack(x); // 元素依次入栈
    }
    while(!StackEmpty(S)){
        x=DeStack(S); // 元素依次出栈
        EnQueue(x); // 再依次入队
    }
}
// 完成队列元素逆置
```
:::

