#!groovy
properties([disableConcurrentBuilds(), gitLabConnection(''), pipelineTriggers([])])
env.DEFAULT_CONFIG_PATH_BACK_END='pipeline/Jenkinsfile-WC'
def Jenkinsfile = fileLoader.fromGit(env.DEFAULT_CONFIG_PATH_BACK_END,env.DEFAULT_CONFIG_REPO, env.DEFAULT_CONFIG_BRANCH, 'Jenkins-Gitlab', '')
Jenkinsfile.start_pipeline()