pipeline {
    
    agent any
    tools {nodejs "Node"}
    parameters {
        choice(name: 'BROWSER', choices: ['chrome', 'firefox', 'safari','all'], description: 'select browser to run')
        string(name: 'WORKERS',  defaultValue: '2', description: 'Number or process workers to run')

    }

    post {
        always {  
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
            publishHTML target: [
                reportName: 'Playwright',
                reportDir: 'playwright-report',
                reportFiles: 'index.html', 
                reportTitles: 'Playwright demo', 
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: false
            ]  
        }

    }

    stages {
        stage('Dependencies') {
            steps {
                echo 'installing dependencies'
                sh 'npm install'
            }
        }
        stage('e2e Tests on local') {
            when { 
                expression { params.runOn=='local'}
            }
            steps {
                echo "running test on ${params.BROWSER}"
                sh 'npx playwright test --workers=${WORKERS} --project=${BROWSER} --reporter=line,allure-playwright'
            }
        }


    }
}