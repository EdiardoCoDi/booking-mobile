// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const reporter = require('cucumber-html-reporter');


reporter.generate({
    theme: 'bootstrap',
    jsonDir: './reports/json/',
    output: './reports/report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        'App Version': '0.3.2',
        'Test Environment': 'QA',
        Browser: 'Chrome  54.0.2840.98',
        Platform: 'Windows 10',
        Parallel: 'Scenarios',
        Executed: 'Remote'
    }
});

