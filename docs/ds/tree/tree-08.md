### :page_with_curl:08：试给出二叉树的自下而上，从右到左的层次遍历算法。

---
一般的二叉树层次遍历时自上而下、从左到右，这里的遍历顺序恰好相反。

#### :writing_hand: 算法思想：
>利用原有的层次遍历算法，出队的同时将各结点指针入栈，在所有结点入栈后再从栈顶开始依次访问即为所求的算法。具体实现如下：
> 1) 把根结点入队列
> 2) 把一个元素出队列，遍历这个元素
> 3) 依次把这个元素的左孩子、右孩子入队列
> 4) 若队列不空，则跳到2），否则结束

<!-- ::: details 查看代码  -->
::: info  查看代码 :cup_with_straw:
```C
// 二叉树链式存储描述
typedef struct BiTNode {
    ElemType data; // 数据域
    struct BiTNode *lchild, *rchild; // 左、右孩子指针
}

void InvertLevelOrder(BiTree bt) {
    Stack S;
    Queue Q;
    if(bt!=NULL) {
        InitStack(S); // 栈初始化，栈中存放二叉树结点的指针
        InitQueue(Q); // 队列初始化，队列中存放二叉树结点的指针
        EnQueue(Q, bt);
        while(IsEmpty(Q)==false) { // 队列不为空，从上而下层次遍历
            DeQueue(Q, p); // 出队
            Push(S, p); // 入栈
            if(p->lchild)
                EnQueue(Q, p->lchild); // 若左孩子不空，则入队
            if(p->rchild)
                EnQueue(Q, p->rchild); // 若右孩子不空，则入队
        }

        // 将栈内元素依次出栈 取反
        while(IsEmpty(S)==false){ // 栈不为空
            Pop(S, p);
            visit(p->data);
        }
    }

}


```
:::

