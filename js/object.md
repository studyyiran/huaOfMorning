js中，对象的持有，有点像指针。

const a = {}
实际上他有两个事情。找到一个obj。将他的地址付给a

func(a)

也是两个事情。找到一个obj。将他的地址付给临时变量a

const string = '123'
func(string)

这也是一样的。找到一个'123'。将他的值付给临时变量a

只不过obj给的是一个地址 作为值。而'123'就是把值创给值

而且这段分析，js和java没有任何区别
https://www.zhihu.com/question/31203609