pipeline {
    agent any  
    stages {
        stage('Install Modules'){
            steps{
                sh 'apt-get update'
                sh 'apt-get upgrade'
                sh 'apt-get install openssh-client'
            }
        }
        stage('Connection') {
            steps{
                
                sh 'sshpass -p Deepak@26 ssh -o StrictHostKeyChecking=no root@143.244.142.123'
                sh '/var/www/html'
                sh 'ls'
            }
        }
        stage('Code Clone') {
            steps {
               sh 'ls'  
            } 
        }
    }
}
