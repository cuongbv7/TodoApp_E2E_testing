FROM mcr.microsoft.com/playwright:v1.34.0-focal
WORKDIR /home/app/
ENTRYPOINT ["npm","run","test"]