module.exports = {
    flowFile: 'flows.json',
    credentialSecret: false,
    flowFilePretty: true,
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "$2a$12$/H4hKVeeGv/yjc0doGDEl.LdD1b6Pxal8uMH6lmfFw.6Q1cOpXYsC",
            permissions: "*"
        }]
    },
    uiPort: process.env.NODEREDPORT,
    httpAdminRoot: '/admin',
    httpStatic: process.env.HTMLSTATICDIR,
     logging: {
         console: {
             level: "info",
             metrics: false,
             audit: false
         }
     },
     exportGlobalContextKeys: false,
     externalModules: {
     },
    disableEditor: (process.env.ENABLE_NODERED_EDITOR === '0'),
    editorTheme: {
//        theme: "dark-scroll",
        tours: false,

        page: {
            title: process.env.NODE_RED_TITLE
        },
        header: {
            title: process.env.NODE_RED_TITLE
        },

        palette: {
            //categories: ['common', 'function', 'network', 'sequence', 'parser', 'storage','subflows'],
        },

        projects: {
            enabled: false,
            workflow: {
                mode: "manual"
            }
        },
        codeEditor: 
        {
            lib: "monaco",
            options: 
            {
//                theme: "vs",
                formatOnType: false,
                formatOnPaste: false,
                useTabStops: true,
                colorDecorators: true,
                fontSize: 14,
                "bracketPairColorization.enabled": true,
                minimap: 
                {
                  enabled: false
                }
            }
        }
    },
    functionExternalModules: true,
    functionGlobalContext: {
        // os:require('os'),
    },
    debugMaxLength: 10000,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
}
