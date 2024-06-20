### :page_with_curl:04：【括号匹配】假设一个算术表达式中包含圆括号、方括号和花括号3中类型的括号，编写一个算法来判别表达式中的括号是否配对，以字符“\0”作为算术表达式的结束符。

---

#### :writing_hand: 算法思想：
> 括号匹配是栈的一个典型应用。
> - 扫描每个字符，遇到花、中、圆的**左括号进栈**
> - 遇到花、中、圆的**右括号时检查**栈顶元素是否为相应的左括号，若是，退栈，否则配对错误。
> - 最后栈若不为空也为错误。


<!-- ::: details 查看代码  -->
::: info  查看代码 :cup_with_straw:
```C
bool BracketsCheck(char *str){
    InitStack(S); // 初始化栈
    int i=0;
    char e;
    while(str[i]!='\0'){
        switch(str[i]){
            // 左括号入栈
            case '(': Push(S, '('); break;
            case '[': Push(S, '['); break;
            case '{': Push(S, '{'); break;
            // 遇到右括号，检测栈顶
            case ')': 
                Pop(S, e);
                if(e!='(') return false;
                break;
            case ']': 
                Pop(S, e);
                if(e!='[') return false;
                break;
            case '}': 
                Pop(S, e);
                if(e!='{') return false;
                break;
            default:
                break;
        } // end switch
        i++;
    } // end while

    // 最后检查栈是否为空
    if(!isEmpty(S)){
        printf("括号不匹配\n");
        return false;
    } else {
        printf("括号匹配\n");
        return true;
    }
}

```
:::

