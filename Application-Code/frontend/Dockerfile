
# 🧠 Difference Between CMD and RUN

# RUN = preparing the kitchen (buying ingredients, cooking prep)
# CMD = the dish you serve when the restaurant opens
# A Dockerfile can have multiple RUN instructions, but only the last CMD will take effect.

FROM node:14
WORKDIR /app
# Starting from package and ending with .json will be copied into my app directiory where my app exist
COPY package*.jon ./

RUN npm install

# Copy all folder to app folder (Which is my workdir for image)
COPY . .

CMD [ "npm","start" ]