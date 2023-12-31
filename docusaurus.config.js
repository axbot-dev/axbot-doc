// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'AXBot',
    tagline: 'AXBot是一个在Kook、QQ频道等社交平台上可用的聊天机器人。她具备丰富的交互功能，并专注于为游戏爱好者提供各种游戏相关的服务',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://axbot-dev.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/axbot-doc/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'axbot-dev', // Usually your GitHub org/user name.
    projectName: 'axbot-doc', // Usually your repo name.
    trailingSlash: false,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/axbot-dev/axbot-doc/tree/master/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            colorMode: {
                respectPrefersColorScheme: true,
            },
            announcementBar: {
                id: 'announcementBar',
                content: `基于v2的文档正在构建中，将在AXBot v2完成后正式启用，敬请期待`,
                isCloseable: false,
            },
            navbar: {
                title: 'AXBot',
                logo: {
                    alt: 'AXBot logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'docsSidebar',
                        position: 'left',
                        label: '文档',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'apiSidebar',
                        position: 'left',
                        label: 'API接口',
                    },
                    // {
                    //     type: 'docSidebar',
                    //     sidebarId: 'caseSidebar',
                    //     position: 'left',
                    //     label: '案例展示',
                    // },
                    {
                        type: 'docSidebar',
                        sidebarId: 'sponsorSidebar',
                        position: 'left',
                        label: '赞助',
                    },
                    {
                        href: 'https://github.com/axbot-dev/axbot',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: '文档',
                        items: [
                            {
                                label: '用户手册',
                                to: '/docs/document/user-manual',
                            },
                            {
                                label:'API 接口',
                                to:'/docs/api-docs'
                            }
                        ],
                    },
                    {
                        title: '社区',
                        items: [
                            {
                                label: 'GitHub 讨论区',
                                href: 'https://github.com/axbot-dev/axbot/discussions',
                            },
                        ],
                    },
                    {
                        title: '更多',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/axbot-dev/axbot',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} AXBot, axiangcoding. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            algolia: {
                appId: 'QS8IJJQO7L',
                apiKey: '249b62d6d6a72802e9f0c9a173a3f553',
                indexName: 'axbot',
            }
        }),
};

module.exports = config;
