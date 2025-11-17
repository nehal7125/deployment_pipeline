# Complete Deployment Setup Guide for EC2 with GitHub Actions

This guide will help you set up automated deployment from GitHub to your AWS EC2 Ubuntu instance using GitHub Actions.

## Prerequisites

1. AWS EC2 Ubuntu instance running
2. Git repository on GitHub
3. PM2 installed on EC2 instance
4. Your project code already cloned on EC2

## Step-by-Step Setup

### Step 1: Prepare Your EC2 Instance

#### 1.1 SSH into your EC2 instance
```bash
ssh -i your-key.pem ubuntu@your-ec2-ip
```

#### 1.2 Install Git (if not already installed)
```bash
sudo apt update
sudo apt install git -y
```

#### 1.3 Install PM2 (if not already installed)
```bash
sudo npm install -g pm2
```

#### 1.4 Navigate to your project folder and check the structure
```bash
cd /path/to/your/project
pwd  # Note this path - you'll need it later
ls -la
```

#### 1.5 Check your PM2 process ID
```bash
pm2 list
# Note the ID or name of your PM2 process
```

#### 1.6 Ensure your project folder is a git repository
```bash
cd /path/to/your/project
git remote -v  # Should show your GitHub repository
```

If it's not a git repo, initialize it:
```bash
git init
git remote add origin https://github.com/your-username/your-repo.git
git pull origin main
```

### Step 2: Set Up SSH Key for GitHub Actions

#### 2.1 Generate SSH Key Pair on Your Local Machine (or EC2)

**Option A: Generate on your local machine**
```bash
ssh-keygen -t rsa -b 4096 -C "github-actions-deploy" -f ~/.ssh/github_actions_deploy
```

**Option B: Generate on EC2 instance**
```bash
ssh-keygen -t rsa -b 4096 -C "github-actions-deploy" -f ~/.ssh/github_actions_deploy
```

#### 2.2 Copy Public Key to EC2 Authorized Keys

**If generated locally:**
```bash
# Copy the public key content
cat ~/.ssh/github_actions_deploy.pub

# SSH into EC2 and add it
ssh -i your-key.pem ubuntu@your-ec2-ip
mkdir -p ~/.ssh
echo "PASTE_PUBLIC_KEY_HERE" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh
```

**If generated on EC2:**
```bash
cat ~/.ssh/github_actions_deploy.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

#### 2.3 Get the Private Key Content

**If generated locally:**
```bash
cat ~/.ssh/github_actions_deploy
# Copy the entire output including -----BEGIN and -----END lines
```

**If generated on EC2:**
```bash
cat ~/.ssh/github_actions_deploy
# Copy the entire output including -----BEGIN and -----END lines
```

### Step 3: Configure GitHub Secrets

1. Go to your GitHub repository
2. Click on **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add the following secrets:

#### Required Secrets:

| Secret Name | Description | Example |
|------------|-------------|---------|
| `EC2_HOST` | Your EC2 instance public IP or domain | `54.123.45.67` or `ec2.example.com` |
| `EC2_USERNAME` | SSH username (usually `ubuntu` for Ubuntu instances) | `ubuntu` |
| `EC2_SSH_KEY` | The **private key** content (entire key including BEGIN/END) | `-----BEGIN RSA PRIVATE KEY-----...` |
| `EC2_PROJECT_PATH` | Full path to your project folder on EC2 | `/home/ubuntu/myproject` or `/var/www/myapp` |
| `PM2_APP_ID` | PM2 process ID or name | `0` or `myapp` |
| `EC2_PORT` | SSH port (optional, defaults to 22) | `22` |

### Step 4: Choose Your Workflow File

You have two workflow options:

1. **`deploy.yml`** - Simple and straightforward
2. **`deploy-advanced.yml`** - Includes error handling, dependency installation, and status checks

Both files are in `.github/workflows/` directory. The simple one is active by default.

### Step 5: Test the Deployment

1. Make a small change to your code
2. Commit and push to main branch:
   ```bash
   git add .
   git commit -m "Test deployment"
   git push origin main
   ```
3. Go to your GitHub repository → **Actions** tab
4. Watch the workflow run
5. Check your EC2 instance to verify the deployment

## Troubleshooting

### Issue: SSH Connection Failed

**Solution:**
- Verify EC2 security group allows SSH (port 22) from GitHub Actions IPs
- Check that the SSH key is correctly added to secrets
- Ensure the username is correct (usually `ubuntu` for Ubuntu AMIs)
- Verify the EC2_HOST is correct (use public IP or domain)

### Issue: Git Pull Fails

**Solution:**
- Ensure the project folder is a git repository
- Check that git remote is set correctly
- Verify the branch name matches (main vs master)
- You may need to set up git credentials on EC2:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

### Issue: PM2 Command Not Found

**Solution:**
- Install PM2 globally: `sudo npm install -g pm2`
- Or use full path: `/usr/bin/pm2` or `~/.npm-global/bin/pm2`
- Add PM2 to PATH in the workflow script

### Issue: Permission Denied

**Solution:**
- Ensure the user has permissions to the project folder
- Check file ownership: `sudo chown -R ubuntu:ubuntu /path/to/project`
- Verify PM2 is accessible: `which pm2`

### Issue: PM2 Process ID Not Found

**Solution:**
- List PM2 processes: `pm2 list`
- Use the exact ID (number) or name (string)
- If using name, ensure it matches exactly (case-sensitive)

## Security Best Practices

1. **Never commit SSH keys to the repository**
2. **Use GitHub Secrets for all sensitive information**
3. **Restrict EC2 security group** to only allow SSH from trusted IPs (or use a VPN)
4. **Use IAM roles** instead of access keys when possible
5. **Regularly rotate SSH keys**
6. **Use separate SSH keys** for GitHub Actions (don't reuse personal keys)

## Advanced Configuration

### Using PM2 Ecosystem File

If you're using a PM2 ecosystem file (`ecosystem.config.js`), modify the workflow:

```yaml
script: |
  cd ${{ secrets.EC2_PROJECT_PATH }}
  git pull origin main
  pm2 restart ecosystem.config.js
  pm2 save
```

### Adding Environment Variables

If your app needs environment variables, add them to PM2:

```bash
pm2 start app.js --name myapp --env production
```

Or use an ecosystem file with environment variables.

### Running Build Commands

If your project needs building (e.g., npm run build), add it to the workflow:

```yaml
script: |
  cd ${{ secrets.EC2_PROJECT_PATH }}
  git pull origin main
  npm install
  npm run build
  pm2 restart ${{ secrets.PM2_APP_ID }}
```

## Monitoring Deployments

- Check GitHub Actions logs for detailed output
- Monitor PM2 logs: `pm2 logs` on your EC2 instance
- Set up PM2 monitoring: `pm2 install pm2-logrotate`

## Next Steps

1. Set up notifications (email, Slack) for deployment status
2. Add deployment rollback mechanism
3. Set up staging environment
4. Add health checks after deployment
5. Implement blue-green deployment strategy

