module.exports = {
  apps: [{
    name: 'MonChat',
    script: '../server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-34-213-238-156.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/aws-eb',
      ref: 'origin/master',
      repo: 'git@github.com:jasepellerin/Mon-Chat.git',
      path: '/home/ubuntu/Mon-Chat',
      'post-deploy': 'npm install && pm2 startOrRestart /home/ubuntu/Mon-Chat/ecosystem.config.js'
    }
  }
}