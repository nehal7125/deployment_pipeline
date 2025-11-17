# Deployment Pipeline

Automated deployment pipeline using GitHub Actions to deploy to AWS EC2 Ubuntu instances.

## Quick Start

1. **Set up your EC2 instance** (see [DEPLOYMENT_SETUP.md](./DEPLOYMENT_SETUP.md))
2. **Configure GitHub Secrets** (see [DEPLOYMENT_SETUP.md](./DEPLOYMENT_SETUP.md))
3. **Push to main branch** - deployment happens automatically!

## How It Works

When code is pushed to the `main` branch:
1. GitHub Actions workflow triggers
2. Connects to EC2 via SSH
3. Navigates to project folder
4. Runs `git pull` to get latest code
5. Stops PM2 process
6. Starts PM2 process
7. Saves PM2 configuration

## Files

- `.github/workflows/deploy.yml` - Simple deployment workflow
- `.github/workflows/deploy-advanced.yml` - Advanced workflow with error handling
- `DEPLOYMENT_SETUP.md` - Complete setup guide

## Required GitHub Secrets

- `EC2_HOST` - EC2 instance IP or domain
- `EC2_USERNAME` - SSH username (usually `ubuntu`)
- `EC2_SSH_KEY` - Private SSH key for authentication
- `EC2_PROJECT_PATH` - Full path to project folder on EC2
- `PM2_APP_ID` - PM2 process ID or name
- `EC2_PORT` - SSH port (optional, defaults to 22)

## Documentation

For complete setup instructions, see [DEPLOYMENT_SETUP.md](./DEPLOYMENT_SETUP.md)
