### :page_with_curl:07：编写先序遍历二叉树的递归算法（PreOrder）

---

#### :writing_hand: 算法思想：
> 若二叉树为空，则什么也不做；否则
> - 访问根结点;
> - 先序遍历左子树;
> - 先序遍历右子树;

<!-- ::: details 查看代码  -->
::: info  查看代码 :cup_with_straw:
```C
// 二叉树的链式存储结构描述
typedef struct BiTNode {
    ElemType data; // 数据域
    struct BiTNode *lchild. *rchild; // 左、右孩子指针
}BiTNode, *BiTree;

void PreOrder(BiTree T) {
    if(T!=NULL) {
        visit(T); // 访问根结点
        PreOrder(T->lchild); // 递归访问左子树
        PreOrder(T->rchild); // 递归访问右子树
    }
}

```
:::
#### 时间复杂度与空间复杂度分析：
> 三种遍历算法中，递归遍历左、右子树的顺序是固定的，只是访问根结点的顺序不同。不管采用哪种遍历算法，每个结点都访问一次且仅访问一次，所以时间复杂度都是O(n)。在递归遍历中，递归工作栈的深度恰好为树的深度，所以在最坏情况下，二叉树是有n个结点且深度为n的单支树，遍历算法的空间复杂度为O(n)
