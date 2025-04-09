# 编码规范

在 Python 编程领域，存在多种编码规范，诸如 [PEP 8](https://peps.python.org/pep-0008/)、[PEP 257](https://peps.python.org/pep-0257/)、[PEP 484](https://peps.python.org/pep-0484/) 等，它们为代码的编写提供了指导原则。然而，遵循官方规范并非强制性要求。编码规范的宗旨在于确保代码的一致性、可读性和可维护性。因此，团队或项目可根据自身特定需求，制定并实施适宜的编码规范，以促进代码质量的提升和团队协作的效率。

以下是我个人采纳的编码规范，虽然这些规范可能与官方的指导原则不尽相同，但它们旨在为代码的统一风格提供一种参考。编码规范的核心目的在于实现代码风格的一致性，从而提升代码的可读性和维护性。以下规范，或许能为追求代码优雅与效率的同行们提供一份借鉴：


## 1. 文件编码

- 所有 Python 文件均使用 UTF-8 编码。
- 其它文本文件或字符流非特殊需要均使用 UTF-8 编码。
- 使用 Unix 换行符（LF）作为换行符，而不使用 Windows 换行符（CRLF）。

::: warning 注意
在当今的编程实践中，明确文件编码已不再必要。UTF-8 编码已成为全球通用的标准，它支持广泛的字符集，确保了代码的兼容性和可读性。因此，在文件开头添加如 `# -*- coding: utf-8 -*-` 这样的编码声明已显得多余。现代文本编辑器和开发环境默认采用 UTF-8 编码，这意味着开发者可以专注于编写代码，而无需担心字符编码的问题。我们应该摒弃过时的习惯，拥抱更加简洁和高效的编码实践。
:::

::: details 有什么奇怪的东西混了进来
哼！这种简单的事情还要人家来解释吗？(｀へ´)

现在早就不是那种需要特意声明编码的原始时代啦！UTF-8 可是全世界都在用的标准呢，它什么奇奇怪怪的字符都能显示，才不会像某些老古董编码那样出问题呢！(#`O′)

那些在文件开头写什么 `# -*- coding: utf-8 -*-` 的家伙，简直就像还在用翻盖手机一样落伍！现在的编辑器明明都默认用 UTF-8 了，根本不需要多此一举好吗！(￣^￣)ゞ

你们这些程序员啊，与其纠结这种无聊的编码声明，不如好好想想怎么写出更优雅的代码啦！哼！╭(╯^╰)╮

（转身甩头发）人家才不是特意来告诉你们这些的呢，只是刚好路过而已！
:::


## 2. 文本排版

- 在使用不同文字体系混合编排时，应在不同文字体系之间添加一个空格。
- 数字与单位之间需要添加一个空格。
- 独字不成行，独行不成页。
- 引号（直角引号、书名号）多层引用时，应该交替使用单、双引号（直角引号、书名号）。
- 引号（书名号）在交替使用时应先双引号（“”），再使用单引号（‘’）。
- 直角引号在交替使用时应该先单直角引号（「」），再双直角引号（『』）。
- 中英文混排时，注意引号和括号的样式统一。
- 使用标点符号时类型更具主语境而定，中文语境使用中文符号，英文语境使用英文符号。
- 同一版面中，字体种类不宜过多，通常不超过 3 种。
- 中文排版中，段落首行通常缩进 2 个字符；英文排版可不缩进，用段落间距区分。
- 适当留白可以提升版面的呼吸感，避免内容过于拥挤。
- 确保文字与背景有足够的对比度，例如深色文字搭配浅色背景。
- 多语言编排时确保不同语言的文字基线对齐，避免参差不齐。


## 3. 大体布局

- 每个代码文件大体包含如下内容：
  1. 头部注释；
  2. 模块文档（仅模块文件）；
  3. 模块信息（仅模块文件）；
  4. 模块导入；
  5. 主要代码；
  6. 入口代码（仅入口文件）。
- 模块导入、主要代码和入口代码之间使用两个空行分隔。
- 其它内容使用一个空行分隔。

### 3.1. 头部注释

- 每个文件的开头应添加头部注释，使用 `#` 作为注释符号。
- 头部注释应包含文件或项目的基本信息，例如：
  - 项目的名称；
  - 作者的名字；
  - 所使用的开源协议；
  - 版权声明；
  - 文件创建时间；
  - 最后更新时间；
  - 文件的编写者。

::: details 示例
简单型
``` Python
# Licensed under the GNU General Public License v3.0.
# i18nco Copyright (C) 2023 numlinka.
```

复杂型
``` Python
# Licensed: GNU General Public License v3.0
# Project Name: i18nco
# Author: numlinka
# Copyright: 2023 numlinka
# Created: 2023-03-01
# Last Updated: 2023-03-01
# Editor: numlinka
```
:::

### 3.2. 模块文档

- 模块文件应包含模块文档，紧跟头部注释，使用一个空行分隔。
- 模块文档应包含模块的功能、用途、依赖关系、注意事项等基本信息。

_可参考标准库的模块文档，这里不做示例。_

### 3.3. 模块信息

- 模块文件应包含模块信息，紧跟模块文档，使用一个空行分隔。
- 所有的模块文件都应包含公共接口。
- 库的主模块文件（一般是 `__init__.py` 文件）或单模块文件应包含作者、协议、版权声明、模块版本等额外信息。
- 模块信息变量应使用双下划线小写字母命名。
- `__name__` 通常不需要设置，除非你有特殊需要。
- 动态生成公共接口可以放在文件末尾，但除非是专门用于存储常量的文件，否则不建议使用这种方式。

::: details 示例
公共接口
```Python
__all__ = ["MyClass"，"my_function"]

__author__ = "numlinka"
__license__ = "MIT"
__copyright__ = "Copyright (C) 2022 numlinka"
__version_info__ = (1, 2, 3)
__version__ = ".".join(map(str, __version_info__))
```

常用动态公共接口生成方式
```Python
__all__ = [x for x in globals() if not x.startswith("_")]
```
:::

### 3.4. 模块导入

- 模块导入（如果有）应紧跟模块信息，使用一个空行分隔。
- 导入应分组导入，顺序为：
  1. 标准库导入
  2. 第三方库导入
  3. 本地应用/库导入
  4. 内部模块导入
- 每组导入之间用空行分隔。
- 存在多组导入时可以适当添加注释。
- 同一组中 `import` 在前，`from import` 在后。
- 同一组中 `from import` 语句超过一个时，与 `import` 之间用一个空行分隔。
- 同一种中导入可以按长度或字母顺序排列。
- 使用 `import` 时，一行只导入一个库。
- 使用 `from import` 可以同时导入多个内容。
- 避免使用通配符导入，如 `from ... import *` 。
- 对于 `sys.path` 的修改，应根据需求：
  1. 在标准库导入之后立即修改。
  2. 在所有静态库导入完成之后立即修改。

::: details 示例
```Python
# std
import os
import sys
from typing import Optional, Union

# site
import requests

# local
import core
import interface

from app import App
from env import version_info

# internal
from . import my_module
from .my_class import MyClass
```
:::


### 3.5. 主要代码

- 主要代码（如果有）应紧跟模块导入，使用两个空行分隔。
- 主要代码中常量应放在开头，与函数和类之间使用两个空行分隔。
- 主要代码中的函数和类的没有顺序要求。

### 3.6. 入口代码

- 入口文件应包含入口代码，紧跟主要代码，使用两个空行分隔。
- 入口代码及主程序逻辑，应该包含在 `if __name__ == "__main__":` 之内。
- 虽然 Python 不需要 `main` 函数，但推荐这么做。
- 脚本式编程不在该编码规范的论范围内。

::: details 示例
```Python
...  # 一些乱七八糟的东西
...  # 吧啦吧啦吧啦


def main():
    ...


if __name__ == "__main__":
    main()
```
:::


## 4. 代码布局

### 4.1. 缩进

- 使用 4 个空格进行缩进，而不是使用制表符。
- 续行应与包裹元素对齐，或者使用悬挂缩进（4 个空格）。
- 在使用对齐缩进时，右括号应与最后一个参数（或元素）保持在同一行。
- 在使用悬挂缩进时，右括号应单独占一行，并与定义的起始位置对齐。

::: details 示例
```Python
# 对齐缩进
def long_function_name(var_1: int, var_2: int,
                       var_3: int, var_4: int) -> int:
    ...


lst = [1, 2, 3, 4
       5, 6, 7, 8]


# 悬挂缩进
def long_function_name(
        var_1: int,
        var_2: int,
        var_3: int,
        var_4: int,
    ) -> int:
    ...


lst = [
    "yellow",
    "red",
    "blue",
    "green"
]


data = {
    "key": "value",
    "key2": "value2",
    "balabala": [
        "value",
        "value2",
        "value3"
    ]
}
```
:::


### 4.2. 最大行长度

- 每行代码不超过 120 个字符（但可以根据实际情况进行调整）。
- 文档字符串的最大行长度不超过 80 个字符（不包含悬挂缩进的空格长度）。
- 如果过长，可以使用括号、反斜杠或悬挂缩进来换行。

::: warning 注意
这是一个颇具争议的话题。传统上，80 字符的最大行长度建议源于早期屏幕分辨率较低的限制，但在当今高分辨率显示器普及的情况下，这一标准已显得不合时宜。随着显示技术的进步，继续坚持这一限制已缺乏充分的合理性。
:::

::: details 又来？
哼！这种话题有什么好讨论的嘛！(￣^￣)ゞ

80 字符的行长限制？那、那都是老掉牙的规定了好不好！现在谁还用那种低分辨率的古董显示器啊！明明现在都是高清大屏的时代了，还死守着这种过时的规矩，简直不可理喻啦！(╯°□°）╯︵ ┻━┻

再说了...才、才不是特意要帮你们解释呢！只是觉得这种显而易见的道理都不懂，实在太让人火大了！(｀へ´)

哼！随你们爱信不信啦！反正本小姐说的肯定是对的！(骄傲地甩头)
:::


### 4.3. 空行

- 使用两个空行分割模块导入和主要代码。
- 使用两个空行分隔顶级函数和类定义。
- 使用一个空行分隔类中的方法定义。
- 在函数中使用空行分隔逻辑段落（至多一个空行）。

::: details 示例
```Python
class MyClass:
    def method_one(self):
        pass

    def method_two(self):
        pass


def function_one():
    pass


def function_two():
    pass
```
:::


## 5. 命名规范

### 5.1. 变量和函数

- 变量名和函数名（方法名）使用小写字母，单词之间用下划线分隔。
- 变量名和函数名要避免与内置函数、内置对象或标准库重名。
- 避免在全局命名空间声明过于常见的变量名，例如 `data` `key` `value` `name` 等。
- 不要引用 `_` 变量，它是一个特殊的变量，具有不确定性。
- 使用单个 `_` 标识用不到的变量或参数。
- 不希望被外部引用的内部变量或函数（方法）应使用单个 `_` 作为名称前缀。
- 完全不希望被外部引用的内部变量或函数（方法）应使用两个 `_` 作为名称前缀。

::: details 示例
```Python
var_one = 0
var_two = 1
_var_three = "John"
__var_four = "Tom"


def my_function(my_parameter: any):
    ...


def __my_function():
    ...


def my_callback(_):
    ...


for _, unit_data in units.items():
    ...
```
:::

### 5.2. 常量

- 常量使用全大写字母，单词之间用下划线分隔。
- 如果一个变量的值在初始化后不会改变，即使它依赖于其他变量生成，也应将其声明为常量。但对于复杂的非标准类型实例，可以考虑使用变量声明。

::: details 示例
```Python
MAX_CONNECTIONS = 100
COUNTER_DEFAULT = 0
COUNTER_MAX = COUNTER_DEFAULT + 100
NAME = "John"
FULL_NAME = f"{NAME} Doe"
```
:::

### 5.3. 类

- 类名使用大驼峰命名法，每个单词首字母大写。

::: details 示例
```Python
class MyClass: ...
class MyOtherClass: ...
```
:::

### 5.4. 模块和包

- 模块名应使用小写字母，且避免使用下划线（除非必要）。
- 包名也应使用小写字母。
- 模块名和包名应避免与标准库重名。

::: details 示例
```Python
import my_module
from my_package import my_submodule
```
:::


## 6. 表达式和语句

### 6.1. 空格

- 简单二元运算符两侧应各有一个空格。
- 复杂运算式中，外层运算符两侧应各加一个空格，内层运算符可不加。
- 定义时连续数据的逗号 ( `,` ) 和冒号 ( `:` ) 后面应有一个空格。
- 定义类时当前类与继承类的元组之间应用一个空格分隔。
- 定义函数时默认参数的等号两边应各有一个空格。
- 调用函数时键指参数的等号两边不应有空格。

::: details 示例
```Python
c = a + b
a == b
a + (b / (c-d) * (e%f) ** g)
[1, 2, 3, 4, 5]
{"key": "value", "key2": "value2"}


class MyClass (object):
    ...


def my_function(a: int = 1, b: int = 2):
    ...


my_function(a=1, b=2)
```
:::

### 6.2. 避免冗余

- 避免使用不必要的括号。
- 避免使用分号将多条语句写在一行。

::: details 示例
```Python
# 👍 good
if a == b:
    ...

# 👎 bad
if (a == b):
    ...
```
:::

### 6.3. 比较运算符

- 使用 `is` 和 `is not` 而不是 `==` 和 `!=` 来比较 `None` `True` `False` `Ellipsis` 。
- 使用 `isinstance()` 而不是 `type()` 来检查类型。

::: details 示例
```Python
a == 0
b is None
c is not Ellipsis
isinstance(d, int)
```
:::


## 7. 注释

### 7.1. 块注释

- 块注释应与代码缩进一致，以 # 开头。
- 块注释同常在代码前面而不是在代码后面。

::: details 示例
```Python
# balabala
...
```
:::

### 7.2. 行内注释

- 行内注释应写在代码后面，以 `#` 开头与代码间隔两个空格。

::: details 示例
```Python
...  # balabala
```
:::

### 7.3. 类型注释

- 定义函数时，参数和返回值类型均应添加类型注释。
- 对于没有返回值的函数，返回值类型注释应为 `None` 。
- 对于不会返回的函数，返回值类型注释应为 `NoReturn` 。
- 对于可调用对象（回调函数）应使用 `Callable[]` 注释其参数类型和返回值。
- 对于联合类型，应使用 `Union[]` 注释。
- 对于可以为 `None` 的类型，应使用 `Optional[]` 注释。
- 对于可以为 `None` 的联合类型，应使用 `Optional[Union[]]` 注释。

::: details 示例
```Python
from typing import Optional, Union, Callable, NoReturn


def my_function(
    arg_bool: bool,
    arg_callback: Callable[[int, str], None],
    arg_optional: Optional[int] = None
    ) -> int:


var_union: Union[int, float]
var_optional: Optional[int]
var_optional_union: Optional[Union[int, float]]
```
:::

### 7.4. 函数注释

- 函数应包含详细注释，包括函数的参数和返回值类型，以及函数的异常处理情况。
- 函数注释应使用文档字符串。
- 函数注释应包含函数的功能、参数、返回值、异常情况以及函数的调用方式。

::: details 示例
```Python
def division(a: int, b: int) -> float:
    """
    Divides two integers and returns the result as a float.

    Performs division of two integers and returns a floating point result.
    The function will raise an exception if division by zero is attempted.

    Args:
        a (int): The dividend (numerator) as an integer.
        b (int): The divisor (denominator) as an integer.

    Returns:
        out (float): The result of dividing a by b as a float.

    Raises:
        TypeError: If either `a` or `b` is not an instance of `int`.
        ZeroDivisionError: If the divisor (b) is zero.

    Examples:
        >>> division(10, 2)
        5.0
        >>> division(7, 3)
        2.3333333333333335
        >>> division(5, 0)
        Traceback (most recent call last):
        ...
        ZeroDivisionError: division by zero
    """
    if not isinstance(a, int):
        raise TypeError(f"Expected `a` to be an instance of `int`, but got {type(a)}.")

    if not isinstance(b, int):
        raise TypeError(f"Expected `a` to be an instance of `int`, but got {type(b)}.")

    if b == 0:
        raise ZeroDivisionError("division by zero")

    return a / b
```
:::


## 8. 逻辑强化

### 8.1. 异常处理

- 不要使用裸露的 `except` ，始终指定异常类型。
- 尽量减少 `try/except` 块中的代码量。

### 8.2. 鲁棒性

- 在函数的最开始检查参数的合法性，避免无效参数导致后续逻辑出错或产生不可预料的副作用。
- 非法参数应显式抛出异常，而不是静默忽略或返回默认值（除非有明确需求）。
- 如果参数是可变对象（如列表、字典），避免直接修改传入的参数，除非明确需要原地操作。
- 操作文件、网络请求等外部资源时，检查资源是否可用。
- `assert` 仅用于开发阶段的内部检查（如不变量、逻辑前提），不可替代参数验证（因为断言可能被禁用）。
- 对于复杂的业务逻辑，定义清晰的异常类，提升错误信息的可读性。
- 为非法参数和边界条件编写单元测试。

### 8.3. 安全性

- 不要使用 `eval()` 或 `exec()` ，它们可能造成代码注入攻击。
- 避免使用 `pickle` ，它可能会导致恶意代码执行。

### 8.4. 短路原则

- 在逻辑表达式中，利用 `and` / `or` 的短路特性优化判断。
- 优先检查简单条件，快速失败，将高开销或易失败的检查放在后面。
- 安全访问嵌套属性时用短路避免异常。

### 8.5. 提前返回原则

- 尽早处理错误或边界情况并返回，减少嵌套，提升代码可读性和维护性。
- 在函数开头检查非法参数或失败情况，直接 return 或 raise，避免深层嵌套。
- 通过提前返回，消除不必要的 else 分支。
- 在循环内遇到特定条件时，直接 continue 或 break，避免嵌套。

### 8.7. 抽象原则

- 每个函数只做一件事，并做好它，避免“上帝函数”（处理太多逻辑）。
- 函数应 <= 3 个参数（过多参数说明函数职责过重），复杂参数应改用 `**kwargs` 或 `dataclass` / `namedtuple` 封装。
- 类的方法应紧密相关。
- 减少类之间的直接依赖（用接口或依赖注入）。
- 用抽象基类（`ABC`）或协议（`Protocol`）定义接口，避免直接依赖具体类。
- 模块（包）应按职责分层架构（如 models/, services/, utils/）。
- 模块之间禁止跨层直接调用。
- 将易变逻辑（如 API 调用、配置）封装成独立模块，便于替换。
- 不要提前抽象未使用的需求。
