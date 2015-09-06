#!/bin/bash

#
# Script to deploy the wbr site into a staging location
#
# Requires unzip utility (sudo apt-get install unzip)
#

# Configuration paramters
dir=/tmp/wbr-site-temp


#
# Main Routine
#
cd ${dir}
git checkout staging
git pull origin staging
echo "`basename ${0}`: `date` Deployed wbr site to staging dir"
