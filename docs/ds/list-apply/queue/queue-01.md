### :page_with_curl:01：若希望循环队列中的元素都能得到利用，则需设置一个标志域tag，并以tag的值为0或1来区分对头指针front和队尾指针rear相同时的队列状态时"空"还是"满"。试编写与此结构相应的入队和出队算法。
---

#### :writing_hand: 算法思想：
> 在循环队列的类型结构中，增设一个tag的整型变量，进队时置1，出队时置0。只有入队操作可能导致队满，也只有出队操作可能导致队空。队列Q初始时，置tag=0、front=rear=0。
> - 对空条件：Q.front == Q.rear && Q.tag = 0
> - 对满条件：Q.front == Q.rear && Q.tag = 1
> - 进队操作：Q.data[Q.rear] = x; Q.rear = (Q.rear + 1) % MaxSize; Q.tag = 1 
> - 出队操作：x = Q.data[Q.front]; Q.front=(Q.front + 1) % MaxSize; Q.tag = 0


<!-- ::: details 查看代码  -->
::: info  查看代码 :cup_with_straw:
```C
// 设"tag"法的循环队列入队算法：
int EnQueue(SqQueue &Q, ElemType x){
    if（Q.front == Q.rear && Q.tag = 1）// 队满
        return 0;
    Q.data[Q.rear] = x;
    Q.rear = (Q.rear+1)%MaxSize;
    Q.tag = 1; // 执行的入队操作
    return 1;
}

// 设"tag"法的循环队列出队算法：
int DeQueue(SqQueue &Q, ElemType &x){
    if（Q.front == Q.rear && Q.tag = 0）// 队空
        return 0;
    x = Q.data[Q.front];
    Q.front = (Q.front+1)%MaxSize;
    Q.tag = 0; // 执行的出队操作
    return 1;
}
```
:::

