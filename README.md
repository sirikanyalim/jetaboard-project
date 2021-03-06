# Jetabroad Project 

## Requirements

For development, you will only need Node.js installed on your environement.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone https://github.com/sirikanyalim/jetaboard-project.git
    $ cd jetaboard-project
    
    
In the project directory, you can run:

    $ npm install
`npm install` Run to install all the packages that need to be used for this project 
    
    $ npm start
`npm start` Runs the app in the development mode.Open [http://localhost:3000](http://localhost:3000) to view it in the browser.




## For more information
The page will reload if you make edits.You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Background story
A customer come in to our website and search for a trip  Bangkok - Tokyo - Osaka - Honolulu. Being presented with the search result item (screenshot below), the customer is wondering about baggage information for each flight.

## Tasks

**1. Identify the challenges from User Experience and User Interface perspective**

**What are the problems?**

*the problem is baggage information is not clear information as some information is missing. ***User experience*** help to make it more obvious that some flight has checked bag while some flight has not. Meanwhile some flight has checked bag but there is no carry on bag.
 Also the information of weight are missing so we need to inform the passenger that how to get that information. ***User Interface*** help the passenger to get attention on the information by color and icons.* 

**2. Come up with a solution and transform it into a prototype (need to work on desktop ( and Cancel mobile as discuss on the phone) to effectively communicate baggage data to users**

*As you can see on the site.* 

**How did you come up with ideas and how did you solve the problems?**

Repeat flight arrive and departure to emphasize the passenger to realize that each flight have different information.
Blue color text and light blue background represent positiveness and match with the previous theme. Blue background is highlight to saparate the information as baggage section.The carry on icon that easily see as there is handheld and the checked bag is big and come up with the cart help user to realize them. The weight goes along with the bag type so it is clear how weight for each one. So that help to solve the problems of confusing and clearer that what passenger need to do if he/she want to know that information which is not provided by the system. Repeat information as the sentence to summary and confirmation. The icon explanation in the last line is for double confirmation that the symbol is correct as their thought and being save for us is there is in case of any misunderstanding. 

**Pros and Cons**
So that help customer to understand the information even though this may not be the best thing for the customer that we don't give them information but at least they won't get it wrong. I also have some suggestion that in the page should also have more information of contact somewhere in the web page but as the assignment was focused only on the baggage so I didn't include that in the design.

As this User experience I have not much time to do research and I haven't find any research that really match with the baggage so to confirm that usability we may need to make ux testing. However for  initially I have asked some of my friend what information they got in the design and it is quite good they cover all of information so well
