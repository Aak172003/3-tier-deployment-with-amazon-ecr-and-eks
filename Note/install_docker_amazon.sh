#!/bin/bash

echo "Updating system packages..."
sudo apt update -y

echo "Installing required dependencies..."
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

echo "Adding Docker GPG key..."
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

echo "Adding Docker repository..."
sudo add-apt-repository \
   "deb [arch=$(dpkg --print-architecture)] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) stable"

echo "Updating package index..."
sudo apt update -y

echo "Installing Docker..."
sudo apt install -y docker-ce

echo "Starting and enabling Docker..."
sudo systemctl enable --now docker

echo "Adding current user to docker group..."
sudo usermod -aG docker ubuntu

echo "Verifying Docker installation..."
docker --version

echo ""
echo "Docker installed successfully!"
echo "Run 'newgrp docker' or logout/login to use Docker without sudo"