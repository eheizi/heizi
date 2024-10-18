### typescript增加了什么

1、类型
2、支持es的新特性
3、添加了es不具备的新特性
4、丰富的配置选项
5、强大的开发工具

### 类型
```ts
number
Array
string
字面量      //该变量只能是字面量 let b:"male"|"female" 变量b只能是male或female
boolean
any         //任意类型 声明变量如果不指定类型则ts解析器会自动判断变量为any
unknown     //类型安全的any
void        //没有值(undefined)
never       //不能是任何值
object  
tuple       //固定长度数组
enum        //枚举
```

### ts语法
**1、类型断言：**
```js
//告诉编译器此变量的类型
变量 as 类型
<类型>变量 
```

**2、设置函数返回值** 
```ts
//用来表示为空
function name():void {}
//永远不会返回结果 一般用来报错
function name():void {}
```

**3、定义对象结构与函数结构的类型声明**
```ts
//在属性名后边加上?,表示属性是可选的
let b:{name:string , age ?:number}
//[propName:string]表示任意字符串的属性名称 :any 表示任意属性
let b:{name:string,[propName:string]:any}

// 定义拥有两个形参为number并且返回值类型为number的值
let c:(a:number,b:number)=>number
```
**4、数组的类型声明**
```ts
// 语义：名称：类型[] 表示number的数组
let a:number[]
let b: Array<number>

//元组：固定长度的数组 不能多不能少
let h:[string,string]
```
**5、枚举(enum)**
```ts
// 字面话意思 使代码更有语义化
enum Gender {
    male,
    female,
}
let i:{name:string ,gender:Gender}
i={
    name:"张三",
    gender:Gender.male
}
```

**6、类型别名**
```ts
type mytype = 1|2|3
let m :mytype
```


### 面对对象
```ts
class 类名 {
    constructor(参数:类型){
        // 构造函数
    }
}
const per = new Person()

```

1、TS中属性具有三种修饰符：
        public（默认值），可以在类、子类和对象中修改
        protected：可以在类、子类中修改
        private：可以在类中修改

2、属性存储器：通过设置get 和set方法

3、静态属性
        static: 静态属性(类属性)可以直接通过类去定义
        readonly:表示一个只读属性无法修改
    
4、继承
    extends
    通过继承可以将其他类中的属性和方法引入到当前类中

5、重写
    当发生继承时，如果子类中的方法与父类中的方法同名了 就会替换掉父类中的同名方法 这就称为方法的重写

6、抽象类 `abstract class`
    专门用来被其他类所继承的类 ，它只能被其他类所继承不能被创建实例
    使用abstract开头的方法叫做抽象方法，抽象方法没有方法体只能被定义在抽象类中，继承抽象类时抽象方法必须要实现

7、接口 `interface`
    接口的作用类似于抽象类，不同点在于接口中所有方法和属性都是没有实值的
    换句话说接口中所有方法都是抽象方法
    接口主要负责定义一个类的结构，接口可以去限制一个对象的接口，对象只有包含接口中定义的所有属性以及方法才能匹配接口
    通过 `implements` 实现
    implements可以用于类与类之间与接口和class之间的实现

8、泛型
    用于不确定要使用的具体类型

  - ```typescript
    function test<T>(arg: T): T{
    	return arg;
    }
    ```
两种方法使用 
- 1、指定类型 `test<string>(10)`
    
- 2、直接使用 `test(10)`
- 除此之外，也可以对泛型的范围进行约束

    - ```typescript
      interface MyInter{
          length: number;
      }
      
      function test<T extends MyInter>(arg: T): number{
          return arg.length;
      }
      ```

    - 使用T extends MyInter表示泛型T必须是MyInter的子类，不一定非要使用接口类和抽象类同样适用。

### 配置文件
> tsconfig.json 文件
```ts
{
    
/*
tsconfig.json ts编译器的配置文件
tsc -w 检测所有文件变化
include：用来指定哪些ts文件需要被编译
    **  ：任意目录
    *   ：任意文件
*/
"include":[],
/*
    "exclude":不需要被编译的目录 默认值：["node_modules","bower_components","jspm_packages"]
*/
"exclude":[]

},
"extends":"",//定义被继承的配置文件
"files":[
    //需要被编译的文件名称  通常用在很小的项目中
    "文件名",
],
"compilerOptions":{
    //target:用来指定ts被编译成什么版本
    "target":"ES6",

    //module:指定要使用的模块化的规范
    "module":"ES6",
    
    //lib：用来指定项目用到的库 默认不设置
    // lib:[],
    
    //outDir:用来指定编译后所在的目录
    outDir:"./dist",

    //outFile:将代码合并为一个文件 一般不使用
    // outFile:"./dist/app.js",

    //allowJs:是否堆js文件进行编译
    "allowJs":true,

    //checkjs：检查js代码是否符合规范 默认为false
    "checkJs":false,

    //removeComments:编译时是否一处注释
    "removeComments":true,

    //noEmit:不生成编译后的文件
    "noEmit":true,
    
    //所有严格严查的总开关
    "strict":false
    
    //noEmitOnError:当有错误的时候不会生成编译后的文件
    "noEmitOnError":true,

    //alwaysStrict:用来设置编译后的文件是否使用严格模式
    "alwaysStrict":false，

    //noImplicitAny：不允许隐式any
    "noImplicitAny":true,

    //noImplicitThis:不允许不明显的this
    "noImplicitThis":true,

    //strictNullChecks:严格的检查空值
    "strictNullChecks":true,

    
}
```



