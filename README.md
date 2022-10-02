# Choice
Learning pixel art game dev

This project utilizes typescript, be sure to familiarize yourself with its syntax. If you need links to any tutorials on it ping @Latridell on discord. 

This project utilizes node&npm, be sure to install node on your computer. 
To ensure that node&npm are added to your system path run the commands:

npm --version

node --version

You should get version numbers back. You are ready to install the dependencies. 

# How to run the project in development mode

1. run `npm i`
2. run `npm start`

# Problem You Might Run Into

For those facing the error below,
[23:35:33] [snowpack] ENOENT: no such file or directory, open '/Users/nova/Files/choice_pixijs/Choice/node_modules/.cache/snowpack/build/eventemitter3@4.0.7/eventemitter3.js'

Solution: 
    - Delete node_modules folder
    - Run "npm i"