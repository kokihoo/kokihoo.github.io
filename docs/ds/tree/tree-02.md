### :page_with_curl:02：编写后序遍历二叉树的非递归算法

---
后序遍历的非递归实现是三种遍历方法中最难的。因为再后序遍历中，要保证左孩子和右孩子都已被访问并且左孩子再右孩子前访问才能访问根结点，这就为流程的控制带来了难题。

**后序非递归遍历算法的思路分析：** LRN
> 从根结点开始，将其入栈，然后沿其左子树一直往下搜索，直到搜索到没有左孩子的结点，但是此时不能出栈并访问，因为若其有右子树，则还需按相同的规则对右子树进行处理。直至上述操作进行不下去，若栈顶元素想要出栈被访问，要么右子树为空，要么右子树刚被访问完(此时左子树早已访问完)，这样就保证了正确的访问顺序
#### :writing_hand: 算法思想：
![image tree](/img/tree-01.png)
> 后序非递归遍历二叉树先访问左子树，再访问右子树，最后访问根结点。结合上图来分析
- ① 沿着根的左孩子依次入栈，直到左孩子为空。此时栈内元素依次为ABD。
- ② 读栈顶元素：若其右孩子不空且未被访问过，将右子树转执行①，否则栈顶元素出栈并访问。
    - 栈顶D的右孩子为空，出栈并访问，它是后序序列的第一个结点
    - 栈顶B的右孩子非空且未被访问过，E入栈
    - 栈顶元素E的左右孩子均为空，出栈并访问
    - 栈顶元素B的右孩子非空但已被访问过，B出栈并访问
    - 栈顶元素A的右孩子元素非空且未被访问过，C入栈
    - 栈顶元素C的左右孩子均为空，出栈并访问
    - 栈顶元素A的右孩子非空但已被访问，A出栈并访问
- ③ 由此得到后序序列DEBCA
> 在上述思想中的第②步中，必须分清返回时时从左子树返回的还是从右子树返回的，因此设定一个辅助指针r，用于指向最近访问过的结点。也可在结点中增加一个标志域，记录是否已被访问。

<!-- ::: details 查看代码  -->
::: info  查看代码 :cup_with_straw:
```C
// 二叉树的链式存储结构描述：
typedef struct BiTNode {
    ElemType data; // 数据域
    struct BiTNode *lchild, *rchild; // 左、右孩子指针
}BiTNode, *BiTree;

// 栈的顺序存储结构描述：
#define MaxSize 50 // 定义栈中元素的最大个数
typedef struct {
    Elemtype data[MaxSize]; // 存放栈中元素
    int top; // 栈顶指针
} SqStack;

// 栈初始化
void InitStack(SqStack &S){
  S.top = -1; // 初始化栈顶指针
}

// 进栈
bool Push(SqStack &S, ElemType x) {
    if(S.top == MaxSize-1) // 栈满；报错
        return false;
    S.data[++S.top]=x; // 指针先加1，再入栈
        return true;
}

// 出栈
bool Pop(SqStack &S, ElemType &x) {
    if(S.top == -1) // 栈空，报错
        return false;
    x=S.data[S.top--]; // 先出栈，指针再减1
    return true;
}

// 读栈顶元素: 仅为读取栈顶元素，并没有出栈操作，因此原栈顶元素依然保留在栈中
bool GetTop(SqStack S, ElemType &x) {
    if(S.top == -1) // 栈空报错
        return false;
    x=S.data[S.top]; // x记录栈顶元素
    return true;
}

void PostOrder2(BiTree T){
    InitStack(S);
    BiTNode *p=T;
    BiTNode *r=NULL;
  
    while(p || !IsEmpty(S)){
      if(p) {   // 走到最左边; 左孩子依次入栈
          Push(S, p);
          p=p->lchild;
      } else { // 向右
          GetTop(S, p); // 读栈顶结点(非出栈)
          if(p->rchild && p->rchild!=r) { // 若右子树存在，且未被访问过
            p=p->rchild; // 转向右
          } else { // 否则弹出结点并访问
            Pop(S, p); // 弹出结点
            visit(p->data); // 访问该结点
            r=p; // r记录最近访问过的结点
            p=NULL; // 结点访问完后，重置p指针
          }
      } // else end
    } // while end
}

```
注意：后序，左右结点都出栈后访问，每次出栈访问完一个结点就相当于遍历完以该结点为根的子树，需将p置为NULL。
:::

