# Phonebook App

## Running

### Hosted on Azure
Go to [http://phonebook-app-mepham.azurewebsites.net/](http://phonebook-app-mepham.azurewebsites.net/).

### Locally
* Go to the root directory of the project with terminal.
* Run `npm i` to install NodeJS and .NET dependencies.
* Run `npm start` to run webpack and start up the .NET project, the website should open in your browser. If it doesn't:
  * Ctrl + C to terminate the running process.
  * Run `webpack` (requires webpack installed globally)
  * Open the .NET solution (starter-kit.sln) and hit F5.
  * The website should open in your browser.

## Compromises

* Use of starter kit for solution to hit the ground running, https://github.com/kriasoft/aspnet-starter-kit, LICENSE.txt left intact to show credit.
* Not enough time to implement Redux, state managed with standard React.

## Happy With:
* Ability to use Singleton dependencies to create an in-memory data store.
* JavaScript serialization is as I'd like out of the box.
* Component based architecture, styling is done at component level.

## Not Happy With:
* Use of hyphen in project name
* Namespacing of projects - would prefer for example `PhoneBook.Server.Interfaces` rather than `Server.Interfaces`.
* Still a lot of irrelevant code.
* C# development causes new windows to pop out on save, annoying!

## Time Spent

* Tues 19/09/2017 - 1 hour looking in to my options, no coding.
* Wed 20/09/2017 - 1 hour at lunch, making a start on the project, 2 hours in the evening.
* Thur 21/09/2017 - 1 hour at lunch, fleshing out API and added some unit tests, playing catch up.
* Fri 22/09/2017 - 1 hour at lunch.
* Sat 23/09/2017 - 6 hours in the evening, took 2 hours to get going as I had trouble running the React SPA. :weary:
* Sun 24/09/2017 - TBC
* Mon 25/09/2017 - DONE: Should be sent to Steve!
* Total: TBC
