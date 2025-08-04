pipeline {
    agent any

    tools {
        nodejs 'node-18' // same as in Global Tool Config
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Shantha-K/jenkin-repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Server') {
            steps {
                sh 'node server.js &'
            }
        }
    }
}
