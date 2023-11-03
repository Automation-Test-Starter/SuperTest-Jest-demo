<div align="right"><strong>🇨🇳中文</a></strong>  | <strong><a href="./README_EN.md">🇬🇧English</strong></div>

# SuperTest-Jest-demo

一个使用 Jest 的 SuperTest API 自动化测试演示项目

## 环境准备
- Nodejs ，我使用的 v21.1.0
- SuperTest 我使用的 6.3.3 版本
- Jest 我使用的是最新的 29.7.0 版本

## 技术栈
- SuperTest
- Jest
- jest-html-reporters
- GitHub action

## 项目结构

```Text
SuperTest-Jest-demo
├── README.md
├── package.json
├── package-lock.json
├── Config // 测试配置文件
│   └── config.js
├── Specs // 测试用例文件
│   └── test.spec.js
├── Utils // 测试工具文件
│   └── utils.js
├── Report // 测试报告文件
│   └── report.html
├── .gitignore
└── node_modules // 项目依赖
```

## 项目运行

```bash
node run test
```
## 测试报告截图

![12ZreT](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/12ZreT.png)

## 添加API测试用例

- 在 Specs目录下新加测试用例即可

## 更多信息

- [项目教程](https://github.com/Automation-Test-Starter/SuperTest-API-Test-Starter)
