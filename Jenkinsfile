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

    stages {
        stage('Checkout') {
            steps {
                // Check out your source code from your version control system (e.g., Git)
                git 'https://github.com/deepaksharma26/MeritMission.git'
            }
        }
        stage('Checkout') {
            steps {
                // Checkout your source code from version control
                // For example, if using Git:
                git branch: ${env.BRANCH_NAME}, url: 'https://github.com/deepaksharma26/MeritMission.git'
            }
        }

      
            stage('Build') {
            steps {
                // Use Node.js and npm to build the React app
                sh "npm install"
                sh "npm run build"
                sh "ls"
            }
        } 
        // stage('Build and Deploy') {
        //     steps {
        //         script {
        //           sh """ 
        //               scp -r build/* root@143.244.142.123:/var/www/html
        //           """
        //         }
        //     }
        // }
    }
}
