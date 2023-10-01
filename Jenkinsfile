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
    options{
        timestamps()
        // ansiColor('xterm')
    }
     agent any
    // agent {
    //     Built-In Node {
            
    //         image 'node:6-alpine'
            
    //     }
    // }
    stages {
        // stage('init') {
        //     checkout scm
        //     script {
        //         gitInfo = getGitInfo()
        //         echo "Owner ${gitInfo.git_author} (${gitInfo.git_email})"
        //     }
        // }
        // stage('Vault') {
        //     steps{
        //         secrets = vaultGetSecrets()
        //         // json = vaultGetSecrets(secrets.token,"github","${vaultPath}/login_key")
        //         // writeFile file: '.env', text:"${json.value}"
        //     }
        // }
        stage('Install Modules'){
            steps{
                // sh '''
                //     wget https://deb.nodesource.com/setup_7.x
                //     chmod +x setup_7.x
                //     sudo ./setup_7.x
                //     apt-get update 
                //     apk search openssh
                //     apk add openssh
                //     apk add --update --no-cache openssh sshpass
                //     cd 
                //     mkdir .ssh
                //     touch config
                //     echo "StrictHostKeyChecking no" > config
                //     echo "UserKnownHostsFile /dev/null" >> config
                //     touch authorized_keys
                //     touch known_host
                //     cat /dev/null > known_hosts
                //     ssh-keygen -t rsa -N '' -f id_rsa
                //     chmod 600 id_rsa.pub
                //     chmod 600 id_rsa
                //     chmod 600 known_host
                //     chmod 600 authorized_keys
                //     chmod 600 config
                //     cat known_hosts
                //     cat config 
                    
                    
                // '''
               sh '''
                sshpass -p Deepak@26 ssh-copy-id -i ~/.ssh/id_rsa/pub root@143.244.142.123 /bin/bash << EOT
                // scp -r .env root@143.244.142.123:/var/www
                // ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null root@143.244.142.123 /bin/bash << EOT
                // yes | cp -r build/* /var/www/html
                cat pwd
               '''
            }
        }
        stage('Connection') {
            steps{
                 
                sh 'netstat -antpe'
            }
        }
        stage('Code Clone') {
            steps {
               sh 'ls'  
            } 
        }
    }
}

post{
    success {
        logstashPush('Success')
    }
    failure {
        logstashPush('Failure')
    }
}
