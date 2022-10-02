# Choice
Learning pixel art game dev

This project utilizes typescript, be sure to familiarize yourself with its syntax. If you need links to any tutorials on it ping `@Latridell` on discord. 

This project utilizes `node & npm`, be sure to install node on your computer.
This project is run using terminal commands, for any questions on how to use your terminal ping `@latridell`.  
To ensure that node & npm are added to your system path run the commands:

`node --version`

`npm --version`

You should get version numbers back. You are ready to install the dependencies. 

# How to run the project in development mode

1. Ensure that your terminal is navigated to the root directory of the project, this should be /Choice if you cloned the repo. 
2. run `npm i` - This will install all required dependencies for the project
3. If all of your dependencies have been installed run `npm start` - This will start the local development server, any changes you make to the code, assuming there's no bugs, should show up in real time on your browser.  
4. Once your done running the game and would like to stop the server, click on your terminal and press `cntrl + c`. When prompted enter `y`, this will end the process. 

# Common bugs in VSCode

Often VScode will flag the path of the pixi.js import statements, saying that the path is not found. This doesn't effect your project being able to run 
*Fix*
Simply cut the string and paste it back in and the error should go away

