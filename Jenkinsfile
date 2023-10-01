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
        // Define your environment variables here
        // SSH_USER = credentials('root').username
        // SSH_KEY = credentials('Deepak@26').password
        HOST = '143.244.142.123'
        REMOTE_DIR = '/var/www/'
        NODE_ENV = 'production'
        NPM_COMMAND = 'npm run build'
    }

    stages {
        stage('Checkout') {
            steps {
                // Check out your source code from your version control system (e.g., Git)
                git 'https://github.com/deepaksharma26/MeritMission.git'
            }
        }

        stage('Build and Test') {
            steps {
                echo "Build Stage"
                // Install dependencies and run tests (if applicable)
                // sh 'npm install' 
                // Add additional build and test steps here
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Use SSH Agent to securely connect to the remote server
                    sshagent(credentials: ['your_ssh_credentials_id']) {
                        // Copy the build to the remote server
                        sh "sshpass -p Deepak@26 ssh-copy-id -i ~/.ssh/id_rsa/pub root@143.244.142.123"
                        sh "scp -o StrictHostKeyChecking=no -r ./* root@143.244.142.123:${REMOTE_DIR}"
                        sh "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null root@143.244.142.123 /bin/bash << EOT"
                        echo hostname -i
                        echo pwd
                        // // SSH into the remote server and perform deployment steps
                        // sshPut remote: "ssh://${SSH_USER}@${HOST}", from: 'path/to/your/remote/deployment/script.sh', into: 'path/on/remote/server'
                        // sshScript remote: "ssh://${SSH_USER}@${HOST}", script: """
                        //     cd ${REMOTE_DIR}
                        //     NODE_ENV=${NODE_ENV} npm ${NPM_COMMAND}
                        //     # Add additional deployment steps here
                        // """
                    }
                }
            }
        }
    }

    // post {
    //     always {
    //         // Clean up or perform additional steps after deployment
    //     }
    // }
}
