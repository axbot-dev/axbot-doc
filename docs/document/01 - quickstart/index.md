# 快速开始

## 前言

在本篇文档中，以三种场景为例，介绍如何使用AXBot

- 如果你是普通的**使用者**，希望使用AXBot的功能，可以查看[如何使用](#如何使用)
- 如果你是**比较硬核的使用者**，不想使用AXBot自行维护的机器人实例，而是想要自行部署，请查看[自行部署](#自行部署)
- 如果你是**具备开发能力的开发者**，希望扩展AXBot的功能或者修复一些错误，可以查看[进阶开发](#进阶开发)

:::info 几个概念的区分

- **AXBot项目**：指的是广泛意义上的AXBot项目
- **AXBot团队**：指的是AXBot的开发和维护团队
- **AXBot机器人/机器人实例**：使用AXBot部署和维护的机器人实例，实例可能位于KOOK，QQ频道上。这些机器人由AXBot团队维护，可直接使用
- **私有AXBot机器人**: 非AXBot团队的个人或团队，使用AXBot的代码或者基于AXBot的代码进行二次开发后部署的机器人，这些机器人不由AXBot团队维护

:::

## 如何使用

AXBot提供了自行维护的机器人实例，方便用户能快速使用功能。这些机器人可以直接使用，无需自行部署。

以KOOK平台的机器人为例，你可以通过以下步骤调用机器人：

1. [点我邀请机器人](https://TBD.com)加入服务器

   :::caution
   你仅可以将机器人邀请至**当前账号具备管理员权限**的服务器中，这是KOOK平台的限制
   :::

2. 机器人加入服务器后，请在一个机器人具备发言权限的文字频道，@机器人来调用机器人的功能
   ```bash
   @AXBot机器人
   ```
   如果一切正常，你将会收到机器人的回复
3. 完整的命令和介绍可以查看 [用户手册](/docs/document/02 - user-manual/index.md)

:::tip 友情提示
AXBot项目的代码是开源的，但是这并不意味着AXBot维护的机器人实例是免费的。

AXBot机器人遵循**”免费则受限，付费而优先“**的原则，这是为了机器人的更好发展

AXBot机器人实行的是”赞助即订阅“的策略，如需了解更多内容，你可以进入 [赞助](/docs/sponsor) 页面查看
:::

## 自行部署

### 准备工作

### 部署AXBot

## 进阶开发

如果你想要更进一步，那么你将在这个栏目花费大概二十分钟*（这包括了安装服务的网络耗时，文档阅读只要五分钟）*
的时间，来了解如何向AXBot项目贡献代码

完整的文档见 [开发文档](/docs/document/04 - development/index.md)

### 启动项目

在正式向AXBot项目发起贡献之前，你可以先在你的开发环境中启动AXBot项目，这将有利于你理解和入门AXBot项目。
在正式拉取代码到本地之前，你需要准备好以下内容：

- 安装 [Git](https://git-scm.com/downloads)。Git用来下载AXBot代码和一些必要的工具
- 安装 [JDK 17](https://adoptium.net/)。JDK用来编译和运行AXBot的App项目。App项目是由Java编写的，且要求JDK版本大于17
- （可选）安装 [Docker](https://www.docker.com/)。Docker用来运行AXBot的一些依赖服务，如MySQL, Redis, RabbitMQ。
  当然这是可选项，如果你不想这么做，你也可以自行安装这些服务
- （可选）安装 [MySQL](https://www.mysql.com/cn/)，[Redis](https://redis.io/)，[RabbitMQ](https://www.rabbitmq.com/)
  。这些服务是AXBot的依赖服务，如果你不想使用Docker，你可以自行安装这些服务
- （可选）可用的机器人应用。KOOK的机器人创建和调试方便，你可以到 [KOOK开发者平台](https://developer.kookapp.cn/app/index)
  新建一个机器人应用。但是，对接机器人平台并非强制性的，AXBot项目本身是个web项目，可以不依赖任何机器人平台启动

在完成了准备工作后，你已经具备了一切可以启动项目的前置条件

接下来，你可以通过以下步骤在本地启动项目

1. 克隆AXBot工程到本地开发环境
    ```bash 
    git clone https://github.com/axbot-dev/axbot
    ```

2. 进入项目根目录
    ```bash
    cd app
    ```

3. 更改配置文件到你的本地配置
    ```bash
   
    vim app/src/main/resources/application.yml
    ```
   然后编辑`application.yml`文件，将其中的配置修改为你的本地配置
4. 启动项目
    ```bash
    ./gradlew bootRun
    ```
   如果一切正常，你将会看到项目启动成功的日志。同时，你可以访问 [http://localhost:9999/api/swagger-ui/index.html](http://localhost:9999/api/swagger-ui/index.html)
   来查看项目的API文档

:::tip 如何对接机器人？
在本地启动项目仅是开发的第一步，但是是最关键的一步。

正常情况下，你还需要配置好机器人相关的配置项，才能体验AXBot在对应平台上带来的服务。AXBot使用 [simpler-robot](https://github.com/simple-robot/simpler-robot)
作为机器人的对接框架。

因此，关于机器人平台的配置项，我们遵循`simpler-robot`的写法，配置文件位于`app/src/main/resources/robot.yml`
，你可以查看[simpler-robot文档](https://simbot.forte.love/docs/spring-boot/)获取更多信息
:::

### 贡献代码

你修复了一个Bug？你增加了一个新功能？你想要向AXBot项目贡献代码？请看这个栏目

首先，当前阶段AXBot对代码的贡献者和贡献的内容没有太多的需求，你可以遵循以下简单的步骤向AXBot项目发起贡献

1. Fork AXBot项目到你的Github账号下，形如 https://github.com/你的Github账号/axbot
2. 在你的本地开发环境中，完成你的开发
3. 在你的本地开发环境中，提交你的代码到 https://github.com/你的Github账号/axbot 中
4. 在Github上，向AXBot项目发起Pull Request
5. 等待AXBo团队审核你的Pull Request，并最终给出修改意见，拒绝或者合并代码