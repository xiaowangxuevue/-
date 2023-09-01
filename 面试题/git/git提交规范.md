# 规范 

## Commit message 格式
```Commit message 格式```
feat:新功能 feature
fix:修复 bug
docs:文档注释
style:代码格式（不影响代码运行的变动）
refactor：重构，优化
perf：性能优化
test：添加测试
chore： 构建过程或辅助工具的变动
revert: 回退
build： 打包

## 项目配置搭建
安装必要的工具： 首先，您需要在项目中安装必要的工具，以便执行规范的提交。通常，这些工具包括 CommitLint、Husky 和 Commitizen。

配置 CommitLint： 配置 CommitLint 来定义项目的提交规范。这包括指定提交消息的格式、允许的提交类型和其他规则。通常，这些配置存储在 .commitlintrc.js 或 .commitlintrc.json 文件中。

配置 Husky： 使用 Husky 来设置 Git 钩子，特别是 commit-msg 钩子。这将在每次提交时运行 CommitLint 来验证提交消息的规范性。在 package.json 文件中的 "husky" 部分配置 Husky 钩子。

配置 Commitizen： 使用 Commitizen 来规范提交消息的创建过程。您可以通过运行 commitizen init cz-customizable --save --save-exact 命令来配置 Commitizen，并在 .cz-config.js 文件中定义提交信息的格式。

提交代码： 现在，您可以使用 git cz 命令来提交代码。这将启动 Commitizen 的交互式界面，引导您填写提交信息，包括类型、作用范围和描述。

提交验证： 在提交时，Husky 和 CommitLint 将在 commit-msg 钩子中验证提交消息是否符合规范。如果提交消息不符合规范，提交将被拒绝，并您将需要重新编写提交消息。

推送到远程仓库： 一旦提交成功通过验证，您可以使用 git push 命令将更改推送到远程仓库。这将确保您的规范提交流程应用于整个项目。

变更日志生成（可选）： 如果您的项目需要生成变更日志，提交消息的规范性可以用于自动生成日志，以便用户了解每个版本的更新。

这些步骤将确保您的提交流程规范，并有助于提高代码质量、协作和项目管理
