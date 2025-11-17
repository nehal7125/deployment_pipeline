# Quick Start Guide - 5 Minute Setup

## Step 1: Generate SSH Key (2 minutes)

On your local machine or EC2:

```bash
ssh-keygen -t rsa -b 4096 -C "github-actions" -f ~/.ssh/github_actions_deploy
```

**Copy the public key to EC2:**
```bash
# On EC2
cat ~/.ssh/github_actions_deploy.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

**Get the private key:**
```bash
cat ~/.ssh/github_actions_deploy
# Copy everything including -----BEGIN and -----END
```

## Step 2: Get Your EC2 Information (1 minute)

SSH into your EC2 and run:

```bash
# Get project path
cd /path/to/your/project
pwd

# Get PM2 process ID
pm2 list
# Note the ID number or name
```

## Step 3: Add GitHub Secrets (2 minutes)

Go to: **GitHub Repo → Settings → Secrets and variables → Actions → New repository secret**

Add these secrets:

| Secret | Value |
|--------|-------|
| `EC2_HOST` | Your EC2 IP (e.g., `54.123.45.67`) |
| `EC2_USERNAME` | `ubuntu` (or your username) |
| `EC2_SSH_KEY` | The private key you copied |
| `EC2_PROJECT_PATH` | Full path (e.g., `/home/ubuntu/myproject`) |
| `PM2_APP_ID` | PM2 ID or name (e.g., `0` or `myapp`) |

## Step 4: Test It!

```bash
git add .
git commit -m "Test deployment"
git push origin main
```

Check **GitHub → Actions** tab to see it deploy!

## Common Issues

**SSH fails?** → Check EC2 security group allows port 22

**Git pull fails?** → Make sure project folder is a git repo with remote set

**PM2 not found?** → Install: `sudo npm install -g pm2`

**Permission denied?** → Fix ownership: `sudo chown -R ubuntu:ubuntu /path/to/project`

