# TypeScript 编程笔记

本网站负责整理 TypeScript 学习笔记，适合学习完 JavaScript 之后，想进一步了解 TypeScript 的人群

## 关于本文档

* [在线文档](/guide.md)
* [GitHub地址](https://github.com/UkiyoLee/TypeScript-Tutorial)
* 在线文档由 [UkiyoLee](https://github.com/UkiyoLee) 搭建
* 本文档使用 [VitePress](https://vitepress.dev) 编写

本文档是由作者受到 TypeScript 官方文档和一些 TypeScript 文档网站启发，结合作者自身的学习经历总结而成的文档笔记 

## 为什么编写此文档

这篇文档如题所示，原本是个人在学习 TypeScript 过程中整理的笔记。随着学习的深入，个人对 TypeScript 的学习过程有了新的理解，为了帮助初学者更好的理解 TypeScript 的相关知识，于是将笔记整理成文档并开源供给大家（尤其是 TypeScript 初学者）参考。

本文档与官方教程不同，希望提供一个低门槛、高上限的 TypeScript 文档，用简洁的语言和生动的例子帮助初学者更快速、高效的学习 TypeScript

有部分知识点可能需要查阅官方文档，请放心，本文档会在需要的时候提供传送地址

## 关于 TypeScript

TypeScript 是一种由微软开发的自由和开源的编程语言，并将其[开源在 GitHub](https://github.com/Microsoft/TypeScript) 上

它的第一个版本发布于 2012 年 10 月，经历了多次更新后，现在已成为前端中大型项目的主流语言，由尤雨溪主导开发的主流前端框架 Vue 在第三个大型版本 Vue 3 中也提供了方便的 TypeScript 支持，Vue 3 本身也使用 TypeScript 重构

详情请阅读[什么是 TypeScript](/guide/introduction)

## 适用人群

本文档适合以下人群：
* 已经系统学习过并熟练掌握 JavaScript 的相关知识，对 JavaScript 有基本的了解，并想了解 TypeScript 的相关知识
* 已经学习过 TypeScript，但还不知道 TypeScript 有哪些特性，本文档将帮助您快速了解 TypeScript 的相关特性，相当于可以把本文档当作是一个 TypeScript 语法字典，需要时进行查询

而本文档**不太适用**以下人群:
* 已经熟悉 TypeScript 相关知识，能熟练使用 TypeScript 编写大型项目
* 没有或不熟悉 JavaScript 相关知识，建议先阅读 JavaScript 相关文档，再阅读本文档
* 对算法、数据结构等相关知识有追求，本文档并不涉及这些知识

## 参与文档

欢迎各位对本文档提供国际化、参与修订、完善文档等贡献，您可以 Fork 项目后进行修改，并提交 Issue 的方式参与贡献，提交 Issue 时，建议给作者发送邮件 `1739902271@qq.com`，这样在作者采用您的 Issue 时便于与您联系和沟通后再合并您的 Issue，合并您的 Issue 后，您的 GitHub 头像和 GitHub 地址将在[贡献者名单](/)中展示（同时也会在[导航](/guide.md)页的**贡献者**中为主要贡献者显示相关信息）

项目地址：[TypeScript 编程笔记](https://github.com/UkiyoLee/TypeScript-Tutorial)

<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/UkiyoLee.png',
    name: 'UkiyoLee',
    title: '创建者',
    links: [
      { icon: 'github', link: 'https://github.com/UkiyoLee' },
    ]
  },
]
</script>

## 贡献者

<VPTeamMembers class="members" size="small" :members="members" />

## 版权许可
* 本书采用 MIT 许可证
* 您可以自由地阅读、分享、修改本文档，不过请在分享、修改、转载本文档时保留版权信息

<style scoped>
.members {
  display: flex;
  justify-content: space-around;
}
</style>