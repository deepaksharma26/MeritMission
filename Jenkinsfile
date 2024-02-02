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
  agent { dockerfile true }

  stages {
    stage('Checkout') {
        steps {
                // Check out your source code from your version control system (e.g., Git)
            git 'https://github.com/deepaksharma26/MeritMission.git'
        }
    }
    stage("install") {
      steps {
        sh 'yarn install'
      }
    }
    stage("styles"){
      steps{
        sh 'yarn styles'
      }
    }
    stage("test"){
      steps {
        sh 'yarn test'
      }
    }
    stage("build"){
      steps{
        sh('yarn build')
      }
    }
    stage("pre-deploy"){
      steps{
        sh('ls -la')
        sh('pwd')
        sh('sshpass -p Deepak@26 ssh-copy-id -i ~/.ssh/id_rsa/pub root@167.71.234.205') 
        sh('sshpass -p Deepak@26 scp -v -r $WORKSPACE/build root@167.71.234.205:"/var/www/html"')
        sh('sshpass -p Deepak@26 ssh -o StrictHostKeyChecking=no root@167.71.234.205 -t "echo $user | sudo -S cp -r path /var/www/html"')
      }
    }
  }
}
