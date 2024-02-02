def applicationName = "Merit Mission School"
def vaultUrl = ''
def vaultPath = ''
def json 
def secrets
def gitInfo
def getEnvironment() {
    if(env.BRANCH_NAME == 'master'){
        return 'production'
    } else if(env.BRANCH_NAME == 'development'){
        return 'development'
    }

    return env.BRANCH_NAME
}

def getTargets() {
  if(env.BRANCH_NAME == 'master'){
        return [
            server_address : '',
            server_username : '',
            server_password : ''
        ]
    } else if(env.BRANCH_NAME == 'development'){
        return [
            server_address : '',
            server_username : '',
            server_password : ''
        ]
    }
}     
pipeline {
    agent any
    tools {
        nodejs 'node-8.1.3'
    }
    stages {
        stage('Build') {
            steps {
                sh 'nodejs --version'
                sh 'npm install'
                sh 'gulp lint'
            }
        }
        stage('Test') {
            steps {
                sh 'nodejs --version'
                sh 'gulp test'
            }
        }
    }
    post {
        always {
            echo 'One way or another, I have finished'
            deleteDir()  
        }
        success {
            echo 'I succeeeded!'
        }
        unstable {
            echo 'I am unstable :/'
        }
        failure {
            echo 'I failed :('
        }
        changed {
            echo 'Things were different before...'
        }
    }
}
