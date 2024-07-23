### :page_with_curl:10：二叉树按二叉链表形式存储，试编写一个判别给定二叉树是否是完全二叉树的算法

---
根据完全二叉树的定义，具有n个结点的完全二叉树与满二叉树中编号从1~n的结点一一对应。
#### :writing_hand: 算法思想：
> 采用层次遍历算法，将所有结点加入队列(包括空结点)。遇到空结点时，查看其后是否有非空结点。若有，则二叉树不是完全二叉树。

<!-- ::: details 查看代码  -->
::: info  查看代码 :cup_with_straw:
```C
// 二叉树的链式存储结构的描述
typedef struct BiTNode {
    ElemType data; // 数据域
    struct BiTNode *lchild, *rchild; // 左、右孩子指针
}BiTNode, *BiTree;

bool IsComplete(BiTree T) {
    // 本算法判断给定二叉树是否为完全二叉树
    InitQueue(Q);
    if(!T)
        return true; // 空树为满二叉树
    EnQueue(Q, T);
    while(!IsEmpty(Q)) {
        DeQueue(Q, p);
        if(p) { // 结点非空，将其左、右子树入队列
            EnQueue(Q, p->lchild);
            EnQueue(Q, p->rchild);
        } else { // 结点为空，检查其后是否有非空结点
            while(!IsEmpty(Q)) {
                DeQueue(Q, p);
                if(p) // 结点非空,则二叉树为非完全二叉树
                    return false;
            }
        }
    }
    return true;
}

```
:::

