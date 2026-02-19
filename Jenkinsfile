// Your new, more powerful Jenkinsfile
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                // Use 'bat' because you are on Windows
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                // This runs the "test": "jest" command from your package.json
                bat 'npm test'
            }
        }
    }
}