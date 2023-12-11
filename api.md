# JavaScript API

::: tip
这里是 JavaSctipt 的 API 文档，不过加入了 TypeScript 类型支持
:::

本章介绍和说明了 JavaScript 中所有的标准内置对象、以及它们的方法和属性。

这里的术语“全局对象”（或标准内置对象）不应与 `global` 对象混淆。这里的“全局对象”指的是处在全局作用域里的多个对象。

global 对象可以在全局作用域里通过使用 `this` 访问到（但只有在 `ECMAScript 5` 的非严格模式下才可以，在严格模式下得到的是 undefined）。其实全局作用域包含全局对象中的属性，包括它可能继承来的属性。