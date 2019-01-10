- xss类型： 存储型XSS， 反射型， dom型
- xss防御：输入过滤转义，http-only, 输入内容长度控制

- CSRF：黄色网站的一些按钮或者链接，盗用cookie发送一些请求
- CSRF防御： 根据 HTTP 协议，在 HTTP 头中有一个字段叫 Referer，请求头加cookie, 请求地址中添加 token 并验证
