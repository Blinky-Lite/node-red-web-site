FROM nodered/node-red:3.0.2-16
COPY flows.json         /data/flows.json
COPY flows_cred.json    /data/flows_cred.json
COPY settings.js        /data/settings.js
USER 0
RUN mkdir -p /usr/src/node-red/ssh
RUN chown node-red /usr/src/node-red/ssh
RUN chgrp node-red /usr/src/node-red/ssh
RUN mkdir -p /data/html-static
RUN chown node-red /data/html-static
RUN chgrp node-red /data/html-static
USER node-red 

WORKDIR /usr/src/node-red
RUN npm install node-red-dashboard@3.4.0
