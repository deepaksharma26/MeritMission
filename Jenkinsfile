pipeline {
    agent any

    stages {
        stage('Build') {
            steps { 
               npm install
               npm run build
               ls
            }
        }
        stage('Test') {
            steps { 
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
