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
     agent {
        docker { image 'node:18.18.0-alpine3.18' }
    }

     

    stages {
       
        stage('Checkout') {
            steps {
                // Check out your source code from your version control system (e.g., Git)
                git 'https://github.com/deepaksharma26/MeritMission.git'
            }
        }
        stage('Build') {
            steps {
                script {
                  sh """ 
                  node -v 
                  npm install
                  npm run build
                  ls                  
                  """
                }
            }
        }
        stage('Connection') { 
            steps {
                script {
                  sh """ 
                  node -v   
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
        
        stage('Build and Deploy') {
            steps {
                script {
                  sh """ 
                    scp -r build/* root@143.244.142.123:/var/www/html
                  """
                }
            }
        }
        stage('Clean') {
            steps {
                script {
                  sh """ 
                    ls
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
