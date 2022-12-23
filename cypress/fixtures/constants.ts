export class Constants {
    public static readonly samplesPath = {
        AdvancedApiAutomaticVendorSharing: 'advanced-api/automatic-vendor-sharing/',
        vue3DemoFederationWithVite: 'vue3-demo-federation-with-vite/',
        i18nextNextjsReact: 'i18next-nextjs-react',
        vue3CliDemo: 'vue3-cli-demo/',
        nested: 'nested',
        nextjsReact: 'nextjs-react',
        typeScriptMonoRepoPackageJsonPath: 'typescript-monorepo/package.json',
        selfHealingApp1WebpackConfigPath: 'self-healing/app1/webpack.config.js',
        selfHealingApp2WebpackConfigPath: 'self-healing/app2/webpack.config.js',
        nextjsSsr: 'nextjs-ssr',
    }

    public static readonly vueAppButtonTypes = {
        viteType: 'vite',
        webpackType: 'webpack'
    }

    public static readonly elementsText = {
        viteContent: 'Vite Content',
        webpackContent: 'Webpack Content',
        automaticVendorContent: 'Bi-Directional',
        automaticVendorFirstAppName: 'App 1',
        automaticVendorSecondAppName: 'App 2',
        dynamicRemotesHeader: 'Dynamic System Host',
        dynamicRemotesFirstAppName: 'App 1',
        dynamicRemotesSecondAppName: 'App 2',
        dynamicRemotesThirdAppName: 'App 3',
        dynamicRemotesButtonsText: [
            'Load App 2 Widget',
            'Load App 3 Widget',
        ],
        dynamicRemotesWidgetName: [
            'App 2 Widget',
            'App 3 Widget'
        ],
        dynamicRemotesSynchronousImportWidgetName: [
            'App 1 Widget',
            'App 2 Widget'
        ],
        basicHostRemoteFirstAppName: 'App 1',
        basicHostRemoteSecondAppName: 'App 2',
        basicHostRemoteHeader: 'Basic Host-Remote',
        basicHostRemoteButton: 'App 2 Button',
        nestedApp3Button: 'App 3 Button',
        nestedApp2Container: 'App 2 Container',
        nesterApp1Text: 'app 1 body',
        vue2AppButtonText: 'vue2 button click',
        mdmfShell: { name: 'MDMF SHELL', path: 'home' },
        mdmfProfile: { name: 'MDMF PROFILE', path: 'profile' },
        mdmfNavigationItemLogo: { link: 'http://mellondev.net', targetBlank: '_blank', index: 1 },
        mdfmShellHeader: 'Microfrontend Shell',
        mdfmProfileHeader: 'Profile (Microfrontend)',
        mdmfSharedHeader: 'Component from shared module',
        mdmfAppTableHeader: 'List users from the shared application state',
        mdmfTableRowName: { name: 'Name', index: 0 },
        mdmfTableRowEmail: { name: 'Email', index: 1},
        mdmfTableRowAction: { name: 'Action', index: 2},
        selfHealingAppButtonText: '💅 Button',
        commonExposedButtonText: 'App 2 Button',
        diferentReactVersionsHeader: 'Basic Host-Remote',
        diferentReactVersionsApp1Subheader: 'App 1, Uses react version not compatible with hooks',
        diferentReactVersionsApp2Subheader: 'App2',
        diferentReactVersionsApp1ReactBlockParagraph: 'This Component uses hooks, if loaded on localhost:3001, it should work, even though that host does not support React Hooks',
        diferentReactVersionsApp1ReactBlockHeader: 'Text form legacy React app:',
        diferentReactVersionsApp1ReactBlockSubheader: 'And these are children passed into it from the legacy app',
        diferentReactVersionsParagraph: 'More react components from App2 using non-legacy React to render',
        diferentReactVersionsButtonName: 'App 2 Button',
        angularReactShellHeader: 'Profile (Angular Shell)',
        angularReactShellSubHeader: 'User List (React Microfrontend)',
        angularReactShellParagraph: 'This user list component is being remotely loaded into the application from React App using Webpack Module Federation',
        angularReactShellEmptyTable: '----- Create user to see data here -----',
        angularReactShellCreateUserButton: 'Create User',
        angularReactShellRemoveUserButton: 'Remove User',
        craHeader: 'Basic Host-Remote',
        craHostParagraph: 'Host',
        craRemoteParagraph: 'Remote',
        craButtontext: 'Hello from remote',
        biDirectionalHeader: 'Bi-Directional',
        biDirectionalButton1: 'App 1 Button',
        biDirectionalButton2: 'App 2 Button',
        competeReactCaseHeader: 'Open Dev Tool And Focus On Network,checkout resources details',
        competeReactCaseFirstParagraph: 'lib-app',
        competeReactCaseSecondParagraph: 'component-app',
        primaryButton: 'primary',
        warningButton: 'warning',
        clickToOpenDialogButton: 'click me to open Dialog',
        h4Buttons: 'Buttons:',
        h4Dialog: 'Dialog:',
        h4HoverMePlease: 'hover me please',
        compeateReactCaseWhatIsYourName: 'What is your name ?',
        closeItButton: 'close It!',
        differentReactIsolatedHeaderApp1: 'Host Application - React Version 17.0.2',
        differentReactIsolatedApp1Name: 'App 1',
        differentReactIsolatedHeaderApp2: 'Remote Application - React Version 16.14.0',
        differentReactIsolatedApp2Name: 'App 2',
        differentReactIsolatedApp2ButtonName: 'App 2 Button',
        serverSideRenderOnlyHeaderHost: 'Host Server',
        serverSideRenderOnlyHeaderRemote: 'Remote Server',
        serverSideRenderOnlySharedComponent: 'Shared Component2222',
        serverSideRenderOnlyUpdatedSharedComponent: 'Updated Shared conponent in test',
        nextjsSsrHome: 'Home',
        nextjsSsrShop: 'Shop',
        nextjsSsrCheckout: 'Checkout',
        nextjsSsrZeitText: 'ZEIT',
        nextjsSsrGiHubText: 'GitHub',
        nextjsSsrCheckoutPage: 'checkout page',
        helloWorldMessage: 'Hello World',
        nextjsSsrMainWelcome: 'Welcome to Next.js on Webpack 5! ',
        nextjsSsrMainCheckoutText: 'This is a federated page owned by localhost:3000',
        nextjsSsrText1: 'Data from federated ',
        nextjsSsrText2: 'getInitalProps',
        nextjsSsrText3: 'This came fom checkout !!!',
        nextjsSsrText4: 'And it works like a charm v2',
        nextjsSsrText5: 'To get started, edit pages/index.js and save to reload.',
        nextjsSsrShopPage: 'Shop Page',
        nextjsSsrMainShopText: 'This is a federated page owned by localhost:3002',
        nextjsSsrDocumentationTile: 'Documentation →',
        nextjsSsrLearnTile: 'Next.js Learn →',
        nextjsSsrExamplesTile: 'Examples →',
        nextjsSsrJSON: '{\n  "userId": 1,\n  "id": 1,\n  "title": "delectus aut autem",\n  "completed": false\n}',
        sharedStoreCrossFrameworkShellPageMark: 'Shell',
        sharedRoutingAppEditProfileBlockInfo: {
            editProfile: 'Edit Profile',
            completeProfile: 'Complete your profile',
        },
        sharedRoutingAppChartInfo: {
            today: 'Today',
            sales: 'Sales ($)'
        },
        sharedRoutingAppHorizontalChartMarks: [
            '00:00',
            '03:00',
            '06:00',
            '09:00',
            '12:00',
            '15:00',
            '18:00',
            '21:00',
            '24:00',
        ],
        sharedRoutingAppVerticalChartMarks: [
            '0',
            '600',
            '1200',
            '1800',
            '2400',
        ],
        sharedRoutingAppSelectorsParts: {
            chart: 'Chart',
            recentDeposits: 'Recent_deposits',
            recentOrders: 'Recent_orders',
            editProfile: 'Edit_profile',
            userInfo: 'User_info',
            cardProfile: 'Card_profile',
        },
        sharedRoutingAppButtonTexts: {
            viewBalance: 'View balance',
            updateProfile: 'Update Profile',
            follow: 'Follow',
            seeMoreOrders: 'See more orders',
        },
        sharedRoutingAppPageHeaders: {
            dashboard: 'Dashboard',
            orders: 'Orders',
            profile: 'Profile'
        },
        sharedRoutingAppRecentDepositsInfo: {
            recentDeposits: 'Recent Deposits',
            sum: '$3,024.00',
            date: 'on 15 March, 2019',
        },
        sharedRoutingAppRecentOrdersHeader: 'Recent Orders',
        sharedRoutingAppRecentOrdersTableColumnsHeaders: [
            'Date',
            'Name',
            'Ship To',
            'Payment Method',
            'Sale Amount',
        ],
        sharedRoutingAppRecentOrderInfo: [
            '16 Mar, 2019',
            'Elvis Presley',
            'Tupelo, MS',
            'VISA ⠀•••• 3719',
            '312.44',
        ],
        sharedRoutingAppSideMenuButtonsTypes: [
            'Dashboard',
            'Orders',
            'Profile',
        ],
        sharedRoutingAppEditProfileBlockLabels: [
            'Company (disabled)',
            'Username',
            'First Name',
            'Last Name',
            'City',
            'Country',
            'Postal Code',
            'Lamborghini Mercy, Your chick she so thirsty, I\'m in that two seat Lambo.',
            'About me',
        ],
        sharedRoutingAppAboutUser: {
            shortProfession: 'PRINCIPAL ENGINEER',
            name: 'Zack Jackson',
            longProfession: 'Principal Engineer at lululemon Distributed JavaScript Orchestration at scale. Maintainer of Webpack, inventor of Module Federation.',
        },
        dynamicSystemHostHeader: 'Dynamic System Host',
        dynamicSystemHostHeaderH2: 'Host',
        dynamicSystemRemoteHeaderH2: 'Remote',
        dynamicSystemHostHeaderH3: 'my env is https://host.api.com',
        dynamicSystemHostParagraph: 'The Dynamic System will take advantage Module Federation remotes and exposes. It will no load components that have been loaded already.',
        dynamicSystemHostButton: 'Load Remote Widget',
        dynamicSystemHostButtonH2: 'Remote Widget',
        dynamicSystemHostButtonH2Second: 'My env is ',
        dynamicSystemHostButtonParagraph: 'Using momentjs for format the date',
        dynamicSystemHostLoading: 'Loading',
        sharedContextApp1H1: 'Context Provider',
        sharedContextApp1H2: 'App 1',
        sharedContextApp2H2: 'App 2',
        sharedContextApp1Paragraph: 'Welcome, Billy',
        sharedContextApp2Paragraph: 'Welcome, Susan',
        sharedRoutes2HomeButtonH1: 'Home Page',
        sharedRoutes2AboutButtonH1: 'About Page',
        sharedRoutes2HomeButtonH2: 'Welcome to the future!',
        sharedRoutes2HomeButtonEM: 'a page being provided by App 1',
        sharedRoutes2AboutButtonEM: 'a page being provided by App 2',
        reactNestedRoutersPage1App1: 'Page 1 from App1',
        reactNestedRoutersPage1App2: 'Page 1 from App2',
        reactNestedRoutersPage2App1: 'Page 2 from App1',
        reactNestedRoutersPage2App2: 'Page 2 from App2',
        reactNestedRoutersGoToPage: 'Go to Page',
        reactNestedRoutersApp1: 'App 1',
        reactNestedRoutersApp2: 'App 2',
        reactNestedRoutersNav: [
            {
                name: 'App1 Page1',
                link: '/app-1/page-1',
                index: 0,
                text: 'Page 1 from App1',
                linkText: 'Go to Page 2',
                linkRouting: '/page-2'
            },
            {
                name: 'App1 Page2',
                link: '/app-1/page-2',
                index: 1,
                text: 'Page 2 from App1',
                linkText: 'Go to Page 1',
                linkRouting: '/page-1'
            },
            {
                name: 'App2 Page1',
                link: '/app-2/page-1',
                index: 2,
                text: 'Page 1 from App2',
                linkText: 'Go to Page 2',
                linkRouting: '/page-2'
            },
            {
                name: 'App2 Page2',
                link: '/app-2/page-2',
                index: 3,
                text: 'Page 2 from App2',
                linkText: 'Go to Page 1',
                linkRouting: '/page-1'
            }
        ],
        nativeFederationReactConsoleMessages: {
            dateMessage: '2023-01-01 is a Sun.',
            weekendMessage: 'No long weekend ☹',
            loadingModuleMessage: 'loading remote module ...',
            remoteModuleMessage: 'got remote module: '
        },
        nativeFederationReactComponentsHeaders: {
            host: 'Host',
            remote: 'Remote'
        },
        nativeFederationReactPageMessages: {
            checkConsoleMessage: 'Have a look into your JavaScript console ...',
            remoteComponentGreeting: 'I\'m the remote\'s React Component!',
            changeComponentMessage: 'Edit src/App.tsx and save to reload.',
        },
        nativeFederationElementsTexts: {
            linkName: 'Learn React',
            buttonText: 'click me 0',
        },
        nativeFederationReactButtonsNames: {
            host: 'Host button: ',
            remote: 'Remote button: '
        },

        reactHostRemoteContainerHeader: 'This is the container App hosted at localhost:8080',
        reactHostRemoteContainerDiv: 'This component is from the Host React App hosted at localhost:8081',
        reactHostRemoteHostedDiv: 'This is the Remote App hosted at localhost:8081)',
        reactHostRemoteHostedButtonNames: {
            invoices: 'Invoices',
            expenses: 'Expenses'
        },

    }

    public static readonly tabsNames = {
        aboutTab: 'About',
        homeTab: 'Home',
        mdmfNavigationItemHome: { name: 'Home', index: 1 },
        mdmfNavigationItemProfile: { name: 'Profile', index: 2 },
    }

    public static readonly commonPhrases = {
        viteGreeting: 'im from Vite',
        webpackGreeting: 'im from Webpack',
        button: 'Button',
        paragraphText: 'The Dynamic System will take advantage Module Federation remotes and exposes. It will no load components that have been loaded already.',
        dynamicRemotesWidgetParagraphText: [
            'Moment shouldn\'t download twice, the host has no moment.js',
            'Using momentjs for format the date'
        ],
        vueCliAppWelcomeMessage: 'Welcome to Your Vue.js + TypeScript App',
        vueCliAppConfigurationMessage: 'For a guide and recipes on how to configure / customize this project, check out the vue-cli documentation.',
        vueCliAppInstalledCliPluginsMessage: 'Installed CLI Plugins',
        vueCliAppEssentialLinksMessage: 'Essential Links',
        vueCliAppEcosystemLinksMessage: 'Ecosystem',
        vueCliAppAboutTabMessage: 'This is an about page',
        mdmfShellWelcome: 'Welcome to the Angular 11 Microfrontend demo using Webpack 5 Module Federation',
        mdmfShellParagraph: 'This component is part of the shell application, the Profile component that is linked from the `Profile` link at the top is a Microfrontend that is remotely loaded into the application. Check the network settings to see the remote being loaded.',
        mdmfProfileParagraph: 'This profile component is being remotely loaded into the application using Module Federation, angular is shared so the download is minimal for the frontend',
        mdmfSharedParagraph: 'mdmf-shared works!',
        name: { text: 'Test Name', index: 0 },
        email: { text: 'test@test.com', index: 1 },
        secondName: { text: 'Test Name Second', index: 3 },
        secondEmail: { text: 'testSecond@test.com', index: 4 },
        nameIsRequired: 'Name is required.',
        emailIsRequired: 'Email is required.',
        vue2AppName: 'Vue2 App',
        vue3AppName: 'Vue3 App',
        vueAppsDefaultCounterText: 'count: 0',
        vue2AppComponentState: 'Component in Action..',
        dynamicSytemHostParagraph: 'The Dynamic System will take advantage Module Federation ',
        dynamicSystemHostParagraphText: [
            'App2 Moment Dep',
            'for format the date'
        ],
        commonVueAppComponentState: 'Remote Component in Action..',
        selfHealingAppHeaderName: 'Self-Healing',
        app1Name: 'App 1',
        app2Name: 'App 2',
        selfHealingWebpackConfigSeparator: 'shared:',
        selfHealingWebpackConfigSearchedString: 'styled-components',
        typescriptProjectReferencesAppsHeader: 'Typescript',
        typescriptProjectReferencesAppsApp1Name: 'App 1',
        typescriptProjectReferencesAppsApp2Name: 'App 2',
        versionDiscrepancyApp1Name: 'App 1 Host',
        versionDiscrepancyApp2Name: 'App 2: Remote',
        versionDiscrepancyApp1LodashVersion: 'Lodash v4.10.0',
        versionDiscrepancyApp2LodashVersion: 'Lodash v4.17.21',
        lodashVersionNotAvailableMessage: '(lodash.nth not available until lodash@4.11)',
        lodashVersionUndefinedVersionMessage: 'typeof lodash.nth// => undefined',
        lodashVersionDefinedVersionMessage: 'typeof lodash.nth// => function',
        ntxCode: 'nth([\'a\', \'b\'], -1)// => "b"',
        lodashRemoteComponentHeader: 'Remote Component',
        compleateReactCaseInput: 'Test Input',
        randomSymbolsString: '@#$%^&*()_+',
        startupCodeAppsHeader: 'Basic Host-Remote',
        startupCodeAppsNames : {
            app1: 'App 1',
            app2: 'App 2'
        },
        vue3DemoLayoutAppHeaders : {
            host: '# Hosting App [HOST]',
            remote: '#remote-component [REMOTE]'
        },
        vue3DemoLayoutAppNames : {
            layout: 'Layout App 1',
            remote: 'Main App'
        },
    }

    public static readonly commonText = {
        button: 'Button',
        background: 'background',
        widget: 'Widget',
        attr: 'attr',
        href: 'href',
        target: 'target',
        remoteButton: 'Remote Button',
        nextJSButton: 'Next JS Button',
        typeScriptMonoRepoYarnWorkspaceDependency: 'app1/*,app2/*',
        style: 'style',
        border: 'border',
        standartText: 'May The Force Be With You',
        sharedRoutingAppReplaceSelectorPart: 'RECENT_',
        sharedStoreCrossFrameworkAppComponentsTypes: {
            reactType: 'React',
            vueType: 'Vue',
        },
        sharedStoreCrossFrameworkAppButtonsBlocksNames:  {
            reactModule: 'Remote React module',
            vueModule: 'Remote Vue module'
        },
        commonMathSigns: {
            plusSign: '+',
            minusSign: '-'
        },
        sharedStoreCrossFrameworkCounterValues: {
            zero: '0',
            two: '2'
        }
    }

    public static readonly color = {
        red: 'rgb(136, 0, 0)',
        blue: 'rgb(0, 0, 204)',
        dynamicRemotesWidgetColor: [
            'rgb(255, 0, 0)',
            'rgb(128, 0, 128)'
        ],
        nonRgbRed: 'color: red;',
        aquamarine: 'rgb(127, 255, 212)',
        chineseSilver: 'rgb(204, 204, 204)',
        darkMutedBlue: 'rgb(75, 75, 232)',
        lightSaturatedYellow: 'rgb(255, 198, 0)',
        nonRgbBorderBlack: 'border: 1px solid black; padding: 12px;',
        lightWashedAzure: 'rgb(64, 158, 255)',
        lightWashedOrange: 'rgb(230, 162, 60)',
        pink: 'rgb(219, 112, 147)',
        lightBlue: 'rgb(188, 225, 255)',
        lightGreen: 'rgb(136, 218, 153)',
        purple: 'rgb(63, 81, 181)',
        deepPink: 'rgb(156, 39, 176)',
        borderColorRed1px: '1px solid rgb(255, 0, 0)'
    }

    public static readonly translation = {
        reactRemoteTitleEn: 'React Remote : Title',
        reactRemoteButtonEn: 'React Remote : change language',
        reactRemoteTextEn: 'React Remote : I\'m the remote child !',
        reactRemoteTitleFr: 'React Remote : Titre',
        reactRemoteButtonFr: 'React Remote : changer la langue',
        reactRemoteTextFr: 'React Remote : Je suis le remote child',
        reactHostButtonEn: 'React Host : change language',
        reactHostTextEn: 'React Host : This is the main text',
        reactHostTitleEn: 'React Host : Here\'s my micro frontend remote child :',
        reactHostButtonFr: 'React Host : changer la langue',
        reactHostTextFr: 'React Host : Ceci est le texte principal',
        reactHostTitleFr: 'React Host : Voici mon micro frontend remote child :',
        nextHostButtonEn: 'change language from Next Host',
        nextHostTextEn: 'This is the main text of Next Host',
        nextHostTitleEn: 'Here\'s my micro frontend remote child :',
        nextHostButtonFr: 'changer la langue depuis from Next Host',
        nextHostTextFr: 'Ceci est le texte principal de Next Host',
        nextHostTitleFr: 'Voici mon micro frontend remote child :',
    }

    public static readonly hrefs = {
        vueCliAppDocumentationLink: 'https://cli.vuejs.org',
        vueCliAppBabelLink: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel',
        vueCliAppRouterLink: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router',
        vueCliAppVuexLink: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex',
        vueCliAppEsLintLink: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint',
        vueCliAppTypeScriptLink: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript',
        vueCliAppCoreDocsLink: 'https://vuejs.org',
        vueCliAppForumLink: 'https://forum.vuejs.org',
        vueCliAppCommunityChatLink: 'https://chat.vuejs.org',
        vueCliAppTwitterLink: 'https://twitter.com/vuejs',
        vueCliAppNewsLink: 'https://news.vuejs.org',
        vueCliAppVueRouterLink: 'https://router.vuejs.org',
        vueCliAppEcosystemVuexLink: 'https://vuex.vuejs.org',
        vueCliAppVueDevToolsLink: 'https://github.com/vuejs/vue-devtools#vue-devtools',
        vueCliAppVueLoaderLink: 'https://vue-loader.vuejs.org',
        vueCliAppAwesomeVueLink: 'https://github.com/vuejs/awesome-vue',
        vueCliAppAboutTabLink: '#/about',
        vueCliAppHomeTabLink: '#/',
        nextjsSsrHomeLink: '/',
        nextjsSsrShopLink: '/shop',
        nextjsSsrCheckoutLink: '/checkout',
        nextjsSsrGitHubLink: 'https://github.com/zeit/next.js',
        nextjsSsrZeitLink: 'https://zeit.co/now',
        nextjsSsrDocumentationLink: 'https://nextjs.org/docs',
        nextjsSsrLearnLink: 'https://nextjs.org/learn',
        nextjsSsrExamplesLink: 'https://github.com/zeit/next.js/tree/master/examples',
        nextjsSsrGitHubUrl: 'https://github.com/vercel/next.js',
        nextjsSsrZeitUrl: 'https://vercel.com/home',
        nextjsSsrDocumentationUrl: 'https://nextjs.org/docs',
        nextjsSsrLearnUrl: 'https://nextjs.org/learn/foundations/about-nextjs',
        nextjsSsrExamplesUrl: 'https://github.com/vercel/next.js/tree/deprecated-main/examples',
        nativeFederationReactUrl: 'https://reactjs.org',
        reactNestedRoutersPage2: '/page-2'
    }
    public static readonly linksNames = {
        vueCliAppDocumentationLinkName: 'vue-cli documentation',
        vueCliAppBabelLinkName: 'babel',
        vueCliAppRouterLinkName: 'router',
        vueCliAppVuexLinkName: 'vuex',
        vueCliAppEsLintLinkName: 'eslint',
        vueCliAppTypeScriptLinkName: 'typescript',
        vueCliAppCoreDocsLinkName: 'Core Docs',
        vueCliAppForumLinkName: 'Forum',
        vueCliAppCommunityChatLinkName: 'Community Chat',
        vueCliAppTwitterLinkName: 'Twitter',
        vueCliAppNewsLinkName: 'News',
        vueCliAppVueRouterLinkName: 'vue-router',
        vueCliAppVueDevtoolsLinkName: 'vue-devtools',
        vueCliAppVueLoaderLinkName: 'vue-loader',
        vueCliAppAwesomeVueLinkName: 'awesome-vue',
    }

    public static readonly commands = {
        cpSharedComponentFile: 'cp server-side-render-only/e2e/fixtures/SharedComponent.js server-side-render-only/remoteServer',
        cpOriginalSharedComponentFile: 'cp server-side-render-only/e2e/fixtures/originalFile/SharedComponent.js server-side-render-only/remoteServer'
    }

    public static readonly fieldsNames = {
        nameField: 'NAME',
        emailField: 'EMAIL'
    }
}