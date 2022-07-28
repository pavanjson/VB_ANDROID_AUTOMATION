exports.config = {
    path: '/wd/hub',
    services: ['appium'],
    port: 4723,
    runner: 'local',
    specs: [
        './__tests__/logintest.js'
    ],
    appium: { command: 'appium' },
    capabilities: [{
        browserName: '',
        acceptInsecureCerts: true,
        browserName: '',
        appiumVersion: '1.22.3',
        platformName: 'Android',
        platformVersion: '9',
        deviceName: '4855c4cb',
        app: 'C:\\Users\\DELL\\Desktop\\VBANDROIDAUTOMATION\\app-arm64-v8a-release.apk',
        automationName: 'UiAutomator2',
        // If outputDir is provided WebdriverIO can capture driver session logs
        // it is possible to configure which logTypes to include/exclude.
        // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
        // excludeDriverLogs: ['bugreport', 'server'],
    }],
    logLevel: 'trace',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 100000
    }
}