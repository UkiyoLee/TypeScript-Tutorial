---
sidebar: false
editLink: false
---

# 参与贡献

如果您愿意为本文档提供帮助，首先表示感谢，请您按照以下步骤操作，并遵守下面的代码规范

## 拉取代码

前往文档的[源码仓库](https://github.com/UkiyoLee/TypeScript-Tutorial)，并点击 `fork` 将项目加入您的仓库中，然后在本地拉取您仓库中的文档项目，以便您进行修改和测试

## 通过 npm 下载依赖

使用 IDE 或 VS Code 打开您拉取的项目，并在项目根目录打开控制台或终端，输入以下命令

```bash
npm install
```

## 运行项目

在控制台输入以下命令启动项目

```bash
npm run dev
```

## 修改项目

本文档与其它以 VitePress 搭建的文档项目不同，文档直接存放在根目录而不是 `docs` 文件夹中，也就是说，除非新增一个名为 `docs` 的路由，否则本文档将没有 `docs` 文件夹

## 代码规范

严格意义说来， Markdown 文件不算代码，但请容许我将 Markdown 文件的相关规范放在此处


### 文件结构

本文档并不是以 `docs` 文件夹为文档根目录而是直接存放在根目录中，因此文档的文件结构与其它文档项目不同，请尽量保持文件结构

### Markdown 文件

Markdown 文件请尽量使用单个单词命名，且保持**全小写**，如 `introduction.md`, 如果需要使用两个及以上的单词命名，请在保持全小写的同时在两个单词之间使用减号 `-` 作为连接符，如 `get-started.md`

### Vue 组件

如果您要为本文档新增 Vue 组件，请使用大驼峰命名，如 `VueComponent.vue`，在使用组件时，请同样使用大驼峰的形式使用 Vue 组件，如 `<VueComponent />`