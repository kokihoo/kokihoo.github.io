### :page_with_curl:09：假设二叉树采用二叉链表存储结构，设计一个非递归算法求二叉树的高度

---

#### :writing_hand: 算法思想：
> 采用层次遍历的算法，设置变量level记录当前结点所在的层数，设置变量last指向当前层的最右结点，每次层次遍历出队时与last指针比较，若两者相等，则层数加1，并让last指向下一层的最右结点，直到遍历完成。level的值即为二叉树的高度。

<!-- ::: details 查看代码  -->
::: info  查看代码 :cup_with_straw:
```C
// 二叉树的链式存储结构描述
typedef struct BiTNode {
    ElemType data; // 数据域
    struct BiTNode *lchild, *rchild; // 左、右孩子指针
}BiTNode, *BiTree;


int Btdepth(BiTree T) {
    // 采用层次遍历的非递归算法求解二叉树的高度
    if(!T)
        return 0; // 空树，高度为0
    int front=-1, rear=-1; // 队头 队尾指针
    int last=0, level=0; // last指向当前层的最优结点
    BiTree Q[MaxSize]; // 设置队列Q，元素是二叉树结点指针且容量足够
    Q[++rear]=T; // 将根结点入队

    BiTree p;
    while(front<rear) { // 队不空，则循环
        p=Q[++front]; // 队列元素出队，即正在访问的结点

        if(p->child) {
            Q[++rear]=p->lchild; // 左孩子入队
        }

        if(p->rchild) {
            Q[++rear]=p->rchild; // 右孩子入队
        }

        if(front == last) { //处理该层的最右结点
            level++; // 层数增1
            last = rear
        }
    }

    return level;
}

```
:::


> 求某层的结点个数、每层的结点个数、树的最大宽度等，都可采用与此题类似的思想。当然，此题也可编写递归算法
<!-- ::: details 查看代码  -->
::: info  查看代码 :cup_with_straw:
```C
// 二叉树的链式存储结构描述
typedef struct BiTNode {
    ElemType data; // 数据域
    struct BiTnode *lchild, *rchild; // 左、右孩子指针
}BiTNode, *BiTree;

int Btdepth2(BiTree T) {
    if(T==NULL)
        return 0; // 空树，高度为0
    ldep=Btdepth2(T->lchild); // 左子树高度
    rdep=Btdepth2(T->rchild); // 右子树高度

    if(ldep>rdep)
        return ldep+1; // 树的高度为子树最大高度加根结点
    else
        return rdep+1;

}

```
:::

