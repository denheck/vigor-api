FROM node:4-onbuild
EXPOSE 5000
ENTRYPOINT ["node", "index.js"]