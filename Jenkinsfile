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

        stage('Connection') { 
            steps {
                script {
                  sh """    
                    cd 
                    rm -rf .ssh
                    rm id_rsa
                    rm id_rsa.pub
                    mkdir .ssh
                    touch config
                    echo "StrictHostKeyChecking no" > config
                    echo "UserKnownHostsFile /dev/null" >> config
                    touch authorized_keys
                    touch known_host
                    cat /dev/null > known_hosts
                    ssh-keygen -t rsa -N '' -f id_rsa
                    chmod 600 id_rsa.pub
                    chmod 600 id_rsa
                    chmod 600 known_host
                    chmod 600 authorized_keys
                    chmod 600 config
                    cat known_hosts
                    cat config 
                    """ 
                }
            }
        }
        stage('Clone') {
            steps {
                script {
                  sh """ 
                  cd /var/www/ 
                  mkdir codeBase
                  cd codeBase
                  git init
                  git clone --branch ${env.BRANCH_NAME} https://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@github.com/deepaksharma26/MeritMission.git
                  
                  """
                }
            }
        }
        stage('Build and Deploy') {
            steps {
                script {
                  sh """ 
                      node -v
                      npm install
                      npm run build
                      yes | cp -p build/* /var/www/html 
                  """
                }
            }
        }
        stage('Clean') {
            steps {
                script {
                  sh """ 
                     cd ..
                     rm -rf codeBase
                  """
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
