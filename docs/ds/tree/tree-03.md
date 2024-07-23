### :page_with_curl:03：编写中序遍历二叉树的非递归算法

---

#### :writing_hand: 算法思想：
![image tree](/img/tree-01.png)
> 借助栈的思路，分析中序遍历的访问过程：LNR
- ① 沿着根的左孩子，依次入栈，直到左孩子为空，说明已找到可以输出的结点，此时栈内元素依次为ABD。
- ② 栈顶元素出栈并访问：若其右孩子为空，继续执行②；若其右孩子不空，将右子树转执行①
    - 栈顶D出栈并访问，它是中序序列的第一个结点；
    - D右孩子为空，栈顶B出栈并访问；
    - B右孩子不空，将其右孩子E入栈，E左孩子为空，栈顶E出栈并访问；
    - E右孩子为空，栈顶A出栈并访问；A右孩子不空，将其右孩子C入栈，C左孩子为空，栈顶C出栈并访问。
- ③ 由此得到后序序列DBEAC

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

void InOrder2(BiTree T){
    InitStack(S); // 初始化栈S
    BiTNode *p=T; // p是遍历指针
  
    while(p || !IsEmpty(S)){ // 栈不空或p不空时循环
      if(p) {   // 一路向左
          Push(S, p);  // 当前结点入栈
          p=p->lchild;  // 左孩子不空，一直向左走
      } else { // 出栈，并转向出栈结点的右子树
          Pop(S, p); // 栈顶元素出栈
          visit(p); // 访问出栈结点
          p=p->rchild; // 向右子树走，p赋值为当前结点的右孩子
      } // 返回while循环继续进入if-else语句
    }
}

```
注意：结点出栈后访问
:::

