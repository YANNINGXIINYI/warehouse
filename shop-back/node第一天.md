## vue开发项目规范

###### 高内聚，低耦合

**1：views 与  api 文件名相对应，为了更好的管理。因为真实的大型管理系统可能有上百个接口；api模块要分好几十个.***

**2:不要为了使用vuex而使用vuex, vuex 中数据源建议在 actions中发送请求跟新state.组件中数据。建议还是在组件data数据。这样更佳符合低耦合**

**3：要有一套数据自己的开发规范习惯。每个公司开发规范都不同，有的公司都没有规范，作为个人建议有一个属于自己的规范；这里esline 写开发规范的配置文件**

**4：建议刚开始出去，还弄清楚真实接口，接下来要学会如何模拟接口；mockap 模拟接口.正常开发；是由 前端后端产品一开开会讨论需求，确定业务后，前端和后端是需要对接口的。一般优秀的后端会使用mock模拟接口 返回数据；让前端进行调试。也有差劲的，这个时候；不会的自己想想；会的；就可以自己模拟接口了**

**5：前后交互中跨域拦截是一定有的问题；不论前端还是后端都需要学会解决；后但可以使用cors中间件解决，vue中前端解决方式  vue.config.js proxy 做代理，或者学习nigux 做反响代理。总之；用dialing服务器解决**

### svg

**符合的svg经过代码配置的；webpack  svg的 loader 配置svg文件  单独创建icon表示图标文件；**

**新增**

- 1：阿里图标库下载svg 源码；下载的时候；就要注意位置
- 2:  新建   .svg 文件； 注意 **width  heigth**  xml 路径`http://www.w3.org/2000/svg`
- 3：为什么源代码的位置；都保持在100-150左右？>>> 阿里图标svg文件有原代码；复制

## 跨域拦截
**谁才会跨域拦截**

1:浏览器  2：服务器  3：数据库 哪一个会拦截

- **浏览器**    

**为什么浏览器会拦截， 为什么服务器不会拦截**

- 因为浏览器中有。同源策略。当url运行项目，在浏览器中请求非url地址匹配的服务；而是其他服务；就会违背了同源策略。导致跨域拦截。
- 因为服务器，没有同源测路访问限制；所以没有跨域拦截

**在什么情况下会有跨域拦截**

- 协议不同
- 域名不同
- 端口不同
- 子域名

**为什么会跨域拦截么？跨域指的是什么？ 拦截拦的是什么？**

- 因为浏览器有同源策略

- 跨域：在当前运行服务中；向另一个服务发送请求 
- 拦截：网络请求

**什么是同源策略**

网络与浏览器；协议域名端口号相同，

浏览器：  url 

网络：指的是请求的服务。



**注意：只要面试跨域拦截几个字？**

~~~
1：什么是跨域拦截
2：为什么会有跨域拦截，
3：分析跨域拦截产生情况。
4：提出你的解决方案
~~~

