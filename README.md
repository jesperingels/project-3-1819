# Project 3 @cmda-minor-web · 2018-2019

## Onderzoek
### GraphQL
Wat gebeurt er zodra een intermediair inlogt? 
De volgende GraphQL POST requests worden gedaan: 
* meData
Output Voorbeeld:
```javascript
{
  "data": {
    "me": {
      "id": 8,
      "firstName": "Lacey",
      "email": "9@moderator.lifely.nl",
      "moderator": {
        "id": 10,
        "agency": {
          "id": 2,
          "name": "Teqoia",
          "privacyUrl": null,
          "__typename": "AgencyType"
        },
        "__typename": "ModeratorType"
      },
      "picture": null,
      "__typename": "PersonType"
    }
  }
}
```
* getChats 
* getCurrentChat
* getMessages
* getJobs
* getCompanies

### Interaction diagram 
![interaction diagram](public/img/interaction_diagram.png)
(credits: Lifely)

### sequence diagram
![sequence diagram](public/img/sequence_diagram.png)





