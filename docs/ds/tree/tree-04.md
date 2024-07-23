### :page_with_curl:04：编写先序遍历二叉树的非递归算法

---
#### :writing_hand: 算法思想：
![image tree](/img/tree-01.png)
> 借助栈的思路，分析先序遍历的访问过程：NLR
- ① 沿着根的左孩子，依次访问并入栈，直到左孩子为空，此时栈内元素依次为ABD。依次访问了ABD
- ② 栈顶元素出栈：若其右孩子为空，继续执行②；若其右孩子不空，将右子树转执行①
    - 栈顶D右孩子为空，出栈
    - 栈顶B右孩子非空，依次访问并入栈，执行①，访问结点E，E入栈；
    - 栈顶E右孩子为空，出栈；
    - 栈顶B出栈
    - 栈顶A右孩子非空，依次访问并入栈，执行①，访问结点C，C入栈
    - 栈顶元素C右孩子为空，出栈
    - 栈顶A出栈
- ③ 由此得到后序序列ABDEC
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

// 初始化栈
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

void PreOrder2(BiTree T){
    InitStack(S); // 初始化栈S
    BiTNode *p=T; // p时遍历指针
  
    while(p || !IsEmpty(S)){ // 栈不空或p不空时循环
      if(p) {   // 走到最左边; 左孩子依次入栈
          visit(p); // 访问当前结点
          Push(S, p); // 并入栈
          p=p->lchild; // 左孩子不空，一直向左走
      } else { // 出栈，并转向出栈结点的右子树
          Pop(S, p); // 栈顶元素出栈
          p=p->rchild; // 向右子树走，p赋值为当前结点的右孩子        
      } 
    } // 返回while循环继续进入if-else语句
}

```
注意：先序：结点入栈前访问
:::

