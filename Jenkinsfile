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

    environment {
        NODEJS_HOME = tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        PATH = "$NODEJS_HOME/bin:$PATH"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from your version control system (e.g., Git)
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the React app
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Add your deployment steps here
                // For example, you can use SSH, FTP, or any other deployment method
                // Example: Deploy to a remote server via SSH
                sshagent(['your-ssh-credentials-id']) {
                    sh 'sshpass -p Deepak@26 ssh-copy-id -i ~/.ssh/id_rsa/pub root@143.244.142.123'
                    sh 'scp -r build/* root@143.244.142.123:/var/www/html/
                }
            }
        }
    }

    post {
        always {
            // Clean up or perform any post-deployment actions here
        }
    }
}
