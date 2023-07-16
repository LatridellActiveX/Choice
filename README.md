# Choice
Learning pixel art game dev 

#NOTE: This Project is no longer under active development. 

This project utilizes typescript, be sure to familiarize yourself with its syntax. If you need links to any tutorials on it ping `@Latridell` on discord. 

This project utilizes `node & npm`, be sure to install node on your computer.
This project is run using terminal commands, for any questions on how to use your terminal ping `@latridell`.  
To ensure that node & npm are added to your system path run the commands:

`node --version`

`npm --version`

You should get version numbers back. You are ready to install the dependencies. 

#cloning the repo

1. Ensure that you have git installed on your computer. If not see [This Website](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. Navigate to the directory you would like to install the repository in and use the command `git clone <url>`, with `url` being the url of the repo. You can access the url of the repo via the code tab in the repo and clicking the green code button on the right. 

# How to run the project in development mode

1. Ensure that your terminal is navigated to the root directory of the project, this should be /Choice if you cloned the repo. 
2. run `npm i` - This will install all required dependencies for the project
3. If all of your dependencies have been installed run `npm start` - This will start the local development server, any changes you make to the code, assuming there's no bugs, should show up in real time on your browser.  
4. Once your done running the game and would like to stop the server, click on your terminal and press `cntrl + c`. When prompted enter `y`, this will end the process. 

# Common bugs in VSCode

Often VScode will flag the path of the pixi.js import statements, saying that the path is not found. This doesn't effect your project being able to run
<br> <br>
<strong>Fix:</strong>       Simply cut the path string of the import statement and paste it back in and the error should go away, UPDATE: this doesnt always work so another fix is to delete one of the `"` in the string and putting it back

