#!/bin/bash
cd /home/ubuntu/JISIK-SPONSOR/server

export PORT_NUMVER=$(aws ssm get-parameters --region ap-northeast-2 --names PORT_NUMVER --query Parameters[0].Value | sed 's/"//g')

export DATABASE_HOST=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_HOST --query Parameters[0].Value | sed 's/"//g')
export DATABASE_USER=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_USER --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PASS=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PASS --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PORT=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PORT --query Parameters[0].Value | sed 's/"//g')
export DATABASE_NAME=$(aws ssm get-parameters --region ap-northeast-2 --names JISIK_DATABASE_NAME --query Parameters[0].Value | sed 's/"//g')

export ADMIN_USER_EMAIL=$(aws ssm get-parameters --region ap-northeast-2 --names JISIK_ADMIN_USER_EMAIL --query Parameters[0].Value | sed 's/"//g')
export ADMIN_UESRS_PASS=$(aws ssm get-parameters --region ap-northeast-2 --names JISIK_ADMIN_UESRS_PASS --query Parameters[0].Value | sed 's/"//g')

export ACCESS_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names JISIK_ACCESS_SECRET --query Parameters[0].Value | sed 's/"//g')

export NODEMAILER_SERVICE=$(aws ssm get-parameters --region ap-northeast-2 --names NODEMAILER_SERVICE --query Parameters[0].Value | sed 's/"//g')
export NODEMAILER_USER=$(aws ssm get-parameters --region ap-northeast-2 --names NODEMAILER_USER --query Parameters[0].Value | sed 's/"//g')
export NODEMAILER_PASSWD=$(aws ssm get-parameters --region ap-northeast-2 --names NODEMAILER_PASSWD --query Parameters[0].Value | sed 's/"//g')

export CLIENT_ORIGIN=$(aws ssm get-parameters --region ap-northeast-2 --names JISIK_CLIENT_ORIGIN --query Parameters[0].Value | sed 's/"//g')
export CLIENT_ORIGIN_SUB=$(aws ssm get-parameters --region ap-northeast-2 --names JISIK_CLIENT_ORIGIN_SUB --query Parameters[0].Value | sed 's/"//g')

cd bin
authbind --deep pm2 start www.js
