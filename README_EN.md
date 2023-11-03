<div align="right"><strong><a href="./README.md">🇨🇳中文</a></strong>  | <strong>🇬🇧English</strong></div>

# SuperTest-Jest-demo
a SuperTest API automation testing demo project with Jest

## Environment preparation
- Nodejs, I'm using v21.1.0.
- SuperTest, I'm using version 6.3.3.
- Jest, I'm using the latest version 29.7.0.

## Tech stack
- SuperTest
- Jest
- jest-html-reporters
- GitHub action

## Project structure

```Text
SuperTest-Jest-demo
├── README.md
├── package.json
├── package-lock.json
├── Config // TEST configuration file
│   └── config.js
├── Specs // TEST case file
│   └── test.spec.js
├── Utils // TEST tool file
│   └── utils.js
├── Report // TEST report file
│   └── report.html
├── .gitignore
└── node_modules // Project dependencies
```

## HOW TO RUN

```bash
node run test
```
## Test report screenshot

![12ZreT](https://cdn.jsdelivr.net/gh/naodeng/blogimg@master/uPic/12ZreT.png)

## Add API test cases

- Just add a new test case in the Specs directory.

## More info

- [Project Tutorial](https://github.com/Automation-Test-Starter/SuperTest-API-Test-Starter)

