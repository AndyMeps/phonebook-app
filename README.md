# Phonebook App

## Running

### Hosted on Azure
Go to [http://phonebook-app-mepham.azurewebsites.net/](http://phonebook-app-mepham.azurewebsites.net/).

## API Interface

| Endpoint        | Method | Description                 | Request Example                                                               | Response Example                                                                      |
|-----------------|--------|-----------------------------|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| /api/contacts   | GET    | Returns all contacts.       | N/A                                                                           | `[{"id":1,"firstName":"John","lastName":"Smith"}]`                                    |
| /api/contacts   | POST   | Create a new contact.       | `{"firstName": "Emma","lastName": "Reeves","email": "emma.reeves@email.com"}` | `{"id": 2,"firstName": "Emma","lastName": "Reeves","email": "emma.reeves@email.com"}` |
| /api/contacts/1 | GET    | Returns a specific contact. | N/A                                                                           | `{"id": 2,"firstName": "Emma","lastName": "Reeves","email": "emma.reeves@email.com"}` |
| /api/contacts/1 | PUT    | Updates a specific contact. | `{"firstName":"James"}`                                                       | `{"id":1,"firstName":"James","lastName":"Smith"}`                                     |
| /api/contacts/1 | DELETE | Deletes a specific contact. | N/A                                                                           | N/A                                                                                   |

### Locally
* Go to the root directory of the project with terminal.
* Run `npm i` to install NodeJS and .NET dependencies.
* Run `npm start` to run webpack and start up the .NET project, the website should open in your browser. If it doesn't:
  * Ctrl + C to terminate the running process.
  * Run `webpack` (requires webpack installed globally)
  * Open the .NET solution (starter-kit.sln) and hit F5.
  * The website should open in your browser.

## Happy With:
* Ability to use Singleton dependencies to create an in-memory data store.
* JavaScript serialization is as I'd like out of the box.
* Component based architecture, styling is done at component level.
* React side is speedy!
* Well structured projects.
* Included Delete functionality, not in spec.

## Compromises

* Use of starter kit for solution to hit the ground running, https://github.com/kriasoft/aspnet-starter-kit, LICENSE.txt left intact to show credit.
* Not enough time to implement Redux, state managed with standard React.
* No time to implement image upload, but the bones are there.
* Namespacing of projects - would prefer for example `PhoneBook.Server.Interfaces` rather than `Server.Interfaces`.
* Still a lot of irrelevant code.
* Styling of react, could do with a stronger design but not enough time.
* No validation on forms regarding data format.
* No confirmation on delete contact.
* Probably some layout issues with longer strings.
* Minimal error handling, no feedback to the user if something goes wrong.
* React markup could be neater, could have broken down components further / made more reusable than they are.
* No time to implement Redux.
* Search functionality is done client side, really this should be done on the server when pulling data from the API.
* No testing on older browsers / mobile, only tested in Safari and Chrome on a MacBook Pro.

## Time Spent
* Wed 20/09/2017 - 1 hour at lunch, making a start on the project, 2 hours in the evening.
* Thur 21/09/2017 - 1 hour at lunch, fleshing out API and added some unit tests, playing catch up.
* Fri 22/09/2017 - 1 hour at lunch.
* Sat 23/09/2017 - 6 hours in the evening.
* Sun 24/09/2017 - 6 hours in the evening.
* **Total: 17 hours.**
