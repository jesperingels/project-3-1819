# Project 3 @cmda-minor-web · 2018-2019

## Onderzoek
### GraphQL
Wat gebeurt er zodra een intermediair inlogt? 
De volgende GraphQL POST requests worden gedaan: 
* #### meData
Output:
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
* #### getChats 
output:
```javascript
{
  "data": {
    "chats": {
      "nodes": [
        {
          "id": 13,
          "candidate": {
            "id": 13,
            "person": {
              "id": 24,
              "fullName": "Avery Candidate",
              "user": {
                "id": 27,
                "userConnectedAt": null,
                "__typename": "User"
              },
              "__typename": "PersonType"
            },
            "__typename": "CandidateType"
          },
          "lastMessage": {
            "id": 665,
            "text": "hi",
            "createdAt": "2019-05-06T12:40:11.714Z",
            "__typename": "MessageType"
          },
          "hasUnreads": false,
          "__typename": "ChatType"
        },
        {
          "id": 29,
          "candidate": {
            "id": 29,
            "person": {
              "id": 40,
              "fullName": "Afton Candidate",
              "user": {
                "id": 41,
                "userConnectedAt": null,
                "__typename": "User"
              },
              "__typename": "PersonType"
            },
            "__typename": "CandidateType"
          },
          "lastMessage": {
            "id": 647,
            "text": "🎪",
            "createdAt": "2019-05-06T09:18:08.816Z",
            "__typename": "MessageType"
          },
          "hasUnreads": false,
          "__typename": "ChatType"
        },
        {
          "id": 23,
          "candidate": {
            "id": 23,
            "person": {
              "id": 34,
              "fullName": "Armani Candidate",
              "user": {
                "id": 33,
                "userConnectedAt": null,
                "__typename": "User"
              },
              "__typename": "PersonType"
            },
            "__typename": "CandidateType"
          },
          "lastMessage": {
            "id": 460,
            "text": "nisi aut ut ex commodi nisi est porro",
            "createdAt": "2019-05-03T08:35:07.473Z",
            "__typename": "MessageType"
          },
          "hasUnreads": false,
          "__typename": "ChatType"
        },
        {
          "id": 21,
          "candidate": {
            "id": 21,
            "person": {
              "id": 32,
              "fullName": "Rosendo Candidate",
              "user": {
                "id": 34,
                "userConnectedAt": null,
                "__typename": "User"
              },
              "__typename": "PersonType"
            },
            "__typename": "CandidateType"
          },
          "lastMessage": {
            "id": 420,
            "text": "provident enim ipsum aperiam nemo praesentium eius accusamus",
            "createdAt": "2019-05-03T08:35:07.358Z",
            "__typename": "MessageType"
          },
          "hasUnreads": false,
          "__typename": "ChatType"
        },
        {
          "id": 16,
          "candidate": {
            "id": 16,
            "person": {
              "id": 27,
              "fullName": "Guillermo Candidate",
              "user": {
                "id": 26,
                "userConnectedAt": null,
                "__typename": "User"
              },
              "__typename": "PersonType"
            },
            "__typename": "CandidateType"
          },
          "lastMessage": {
            "id": 320,
            "text": "fugiat molestiae voluptas quae ea totam id vel",
            "createdAt": "2019-05-03T08:35:07.037Z",
            "__typename": "MessageType"
          },
          "hasUnreads": false,
          "__typename": "ChatType"
        }
      ],
      "count": 5,
      "totalCount": 5,
      "page": 1,
      "totalPages": 1,
      "hasNextPage": false,
      "__typename": "PaginatedChatType"
    }
  }
}
```
* #### getCurrentChat
output:
```javascript
{
  "data": {
    "chats": {
      "nodes": [
        {
          "id": 13,
          "candidate": {
            "id": 13,
            "person": {
              "id": 24,
              "fullName": "Avery Candidate",
              "firstName": "Avery",
              "insertion": null,
              "lastName": "Candidate",
              "phone": null,
              "region": "Flevoland",
              "email": "12@candidate.lifely.nl",
              "user": {
                "id": 27,
                "userConnectedAt": null,
                "__typename": "User"
              },
              "__typename": "PersonType"
            },
            "functions": [],
            "interestingCompanies": [],
            "notes": null,
            "qualifiedLead": false,
            "embedderUrl": null,
            "__typename": "CandidateType"
          },
          "__typename": "ChatType"
        }
      ],
      "__typename": "PaginatedChatType"
    }
  }
}
```
* #### getMessages
output:
```javascript
{
  "data": {
    "messages": {
      "nodes": [
        {
          "id": 665,
          "text": "hi",
          "senderRole": "moderator",
          "type": "Message",
          "companiesAnswered": false,
          "acceptedCompanies": null,
          "attachments": null,
          "companies": null,
          "senderPerson": {
            "id": 8,
            "fullName": "Lacey Moderator",
            "email": "9@moderator.lifely.nl",
            "picture": null,
            "__typename": "PersonType"
          },
          "createdAt": "2019-05-06T12:40:11.714Z",
          "__typename": "MessageType"
        },
        {
          "id": 664,
          "text": "test",
          "senderRole": "moderator",
          "type": "Message",
          "companiesAnswered": false,
          "acceptedCompanies": null,
          "attachments": null,
          "companies": null,
          "senderPerson": {
            "id": 2,
            "fullName": "Tyson Moderator",
            "email": "0@moderator.lifely.nl",
            "picture": null,
            "__typename": "PersonType"
          },
          "createdAt": "2019-05-06T12:21:14.359Z",
          "__typename": "MessageType"
        },
        {
          "id": 260,
          "text": "architecto sapiente nulla veritatis facere dicta laboriosam fugiat",
          "senderRole": "candidate",
          "type": "Message",
          "companiesAnswered": false,
          "acceptedCompanies": null,
          "attachments": null,
          "companies": null,
          "senderPerson": {
            "id": 24,
            "fullName": "Avery Candidate",
            "email": "12@candidate.lifely.nl",
            "picture": null,
            "__typename": "PersonType"
          },
          "createdAt": "2019-05-03T08:35:06.849Z",
          "__typename": "MessageType"
        },
        {
          "id": 259,
          "text": "ipsum vero cupiditate et fugiat quam molestiae laudantium",
          "senderRole": "moderator",
          "type": "Message",
          "companiesAnswered": false,
          "acceptedCompanies": null,
          "attachments": null,
          "companies": null,
          "senderPerson": {
            "id": 43,
            "fullName": "Teqoia AgencyAdmin",
            "email": "teqoia@agencyadmin.lifely.nl",
            "picture": null,
            "__typename": "PersonType"
          },
          "createdAt": "2019-05-03T08:35:06.844Z",
          "__typename": "MessageType"
        },
        {
          "id": 258,
          "text": "et et commodi quae blanditiis optio omnis ut",
          "senderRole": "moderator",
          "type": "Message",
          "companiesAnswered": false,
          "acceptedCompanies": null,
          "attachments": null,
          "companies": null,
          "senderPerson": {
            "id": 43,
            "fullName": "Teqoia AgencyAdmin",
            "email": "teqoia@agencyadmin.lifely.nl",
            "picture": null,
            "__typename": "PersonType"
          },
          "createdAt": "2019-05-03T08:35:06.841Z",
          "__typename": "MessageType"
        },
        {
          "id": 257,
          "text": "numquam eum in consequuntur sit iure cum nobis",
          "senderRole": "moderator",
          "type": "Message",
          "companiesAnswered": false,
          "acceptedCompanies": null,
          "attachments": null,
          "companies": null,
          "senderPerson": {
            "id": 43,
            "fullName": "Teqoia AgencyAdmin",
            "email": "teqoia@agencyadmin.lifely.nl",
            "picture": null,
            "__typename": "PersonType"
          },
          "createdAt": "2019-05-03T08:35:06.837Z",
          "__typename": "MessageType"
        },
        {
          "id": 256,
          "text": "ratione sed aut dolor quia nemo et veritatis",
          "senderRole": "moderator",
          "type": "Message",
          "companiesAnswered": false,
          "acceptedCompanies": null,
          "attachments": null,
          "companies": null,
          "senderPerson": {
            "id": 43,
            "fullName": "Teqoia AgencyAdmin",
            "email": "teqoia@agencyadmin.lifely.nl",
            "picture": null,
            "__typename": "PersonType"
          },
          "createdAt": "2019-05-03T08:35:06.834Z",
          "__typename": "MessageType"
        },
        {
          "id": 255,
          "text": "maiores et doloremque tempora dolorem similique qui incidunt",
          "senderRole": "moderator",
          "type": "Message",
          "companiesAnswered": false,
          "acceptedCompanies": null,
          "attachments": null,
          "companies": null,
          "senderPerson": {
            "id": 43,
            "fullName": "Teqoia AgencyAdmin",
            "email": "teqoia@agencyadmin.lifely.nl",
            "picture": null,
            "__typename": "PersonType"
          },
          "createdAt": "2019-05-03T08:35:06.823Z",
          "__typename": "MessageType"
        },
        {
          "id": 254,
          "text": "aspernatur enim odio incidunt repellat aut laudantium et",
          "senderRole": "moderator",
          "type": "Message",
          "companiesAnswered": false,
          "acceptedCompanies": null,
          "attachments": null,
          "companies": null,
          "senderPerson": {
            "id": 43,
            "fullName": "Teqoia AgencyAdmin",
            "email": "teqoia@agencyadmin.lifely.nl",
            "picture": null,
            "__typename": "PersonType"
          },
          "createdAt": "2019-05-03T08:35:06.819Z",
          "__typename": "MessageType"
        },
        {
          "id": 253,
          "text": "enim sint ipsa aliquid aut architecto omnis quidem",
          "senderRole": "moderator",
          "type": "Message",
          "companiesAnswered": false,
          "acceptedCompanies": null,
          "attachments": null,
          "companies": null,
          "senderPerson": {
            "id": 43,
            "fullName": "Teqoia AgencyAdmin",
            "email": "teqoia@agencyadmin.lifely.nl",
            "picture": null,
            "__typename": "PersonType"
          },
          "createdAt": "2019-05-03T08:35:06.816Z",
          "__typename": "MessageType"
        },
        {
          "id": 252,
          "text": "quasi aut reiciendis repellat temporibus sed qui temporibus",
          "senderRole": "moderator",
          "type": "Message",
          "companiesAnswered": false,
          "acceptedCompanies": null,
          "attachments": null,
          "companies": null,
          "senderPerson": {
            "id": 43,
            "fullName": "Teqoia AgencyAdmin",
            "email": "teqoia@agencyadmin.lifely.nl",
            "picture": null,
            "__typename": "PersonType"
          },
          "createdAt": "2019-05-03T08:35:06.813Z",
          "__typename": "MessageType"
        },
        {
          "id": 251,
          "text": "quo esse at quia rem debitis aut eius",
          "senderRole": "candidate",
          "type": "Message",
          "companiesAnswered": false,
          "acceptedCompanies": null,
          "attachments": null,
          "companies": null,
          "senderPerson": {
            "id": 24,
            "fullName": "Avery Candidate",
            "email": "12@candidate.lifely.nl",
            "picture": null,
            "__typename": "PersonType"
          },
          "createdAt": "2019-05-03T08:35:06.805Z",
          "__typename": "MessageType"
        },
        {
          "id": 250,
          "text": "vel distinctio nostrum quia ratione qui sunt dicta",
          "senderRole": "moderator",
          "type": "Message",
          "companiesAnswered": false,
          "acceptedCompanies": null,
          "attachments": null,
          "companies": null,
          "senderPerson": {
            "id": 43,
            "fullName": "Teqoia AgencyAdmin",
            "email": "teqoia@agencyadmin.lifely.nl",
            "picture": null,
            "__typename": "PersonType"
          },
          "createdAt": "2019-05-03T08:35:06.803Z",
          "__typename": "MessageType"
        },
        {
          "id": 249,
          "text": "culpa eveniet ipsam ipsa quae autem facere ut",
          "senderRole": "moderator",
          "type": "Message",
          "companiesAnswered": false,
          "acceptedCompanies": null,
          "attachments": null,
          "companies": null,
          "senderPerson": {
            "id": 43,
            "fullName": "Teqoia AgencyAdmin",
            "email": "teqoia@agencyadmin.lifely.nl",
            "picture": null,
            "__typename": "PersonType"
          },
          "createdAt": "2019-05-03T08:35:06.801Z",
          "__typename": "MessageType"
        },
        {
          "id": 248,
          "text": "voluptas dolore cumque dolores occaecati sapiente omnis qui",
          "senderRole": "candidate",
          "type": "Message",
          "companiesAnswered": false,
          "acceptedCompanies": null,
          "attachments": null,
          "companies": null,
          "senderPerson": {
            "id": 24,
            "fullName": "Avery Candidate",
            "email": "12@candidate.lifely.nl",
            "picture": null,
            "__typename": "PersonType"
          },
          "createdAt": "2019-05-03T08:35:06.798Z",
          "__typename": "MessageType"
        },
        {
          "id": 247,
          "text": "rerum sed omnis et ut nobis quos dolores",
          "senderRole": "moderator",
          "type": "Message",
          "companiesAnswered": false,
          "acceptedCompanies": null,
          "attachments": null,
          "companies": null,
          "senderPerson": {
            "id": 43,
            "fullName": "Teqoia AgencyAdmin",
            "email": "teqoia@agencyadmin.lifely.nl",
            "picture": null,
            "__typename": "PersonType"
          },
          "createdAt": "2019-05-03T08:35:06.796Z",
          "__typename": "MessageType"
        },
        {
          "id": 246,
          "text": "dolorum est quo veritatis soluta consequatur nihil est",
          "senderRole": "candidate",
          "type": "Message",
          "companiesAnswered": false,
          "acceptedCompanies": null,
          "attachments": null,
          "companies": null,
          "senderPerson": {
            "id": 24,
            "fullName": "Avery Candidate",
            "email": "12@candidate.lifely.nl",
            "picture": null,
            "__typename": "PersonType"
          },
          "createdAt": "2019-05-03T08:35:06.792Z",
          "__typename": "MessageType"
        },
        {
          "id": 245,
          "text": "et quia porro et cupiditate ut eos dolores",
          "senderRole": "moderator",
          "type": "Message",
          "companiesAnswered": false,
          "acceptedCompanies": null,
          "attachments": null,
          "companies": null,
          "senderPerson": {
            "id": 43,
            "fullName": "Teqoia AgencyAdmin",
            "email": "teqoia@agencyadmin.lifely.nl",
            "picture": null,
            "__typename": "PersonType"
          },
          "createdAt": "2019-05-03T08:35:06.790Z",
          "__typename": "MessageType"
        },
        {
          "id": 244,
          "text": "perspiciatis eum optio velit aut accusantium aut eius",
          "senderRole": "moderator",
          "type": "Message",
          "companiesAnswered": false,
          "acceptedCompanies": null,
          "attachments": null,
          "companies": null,
          "senderPerson": {
            "id": 43,
            "fullName": "Teqoia AgencyAdmin",
            "email": "teqoia@agencyadmin.lifely.nl",
            "picture": null,
            "__typename": "PersonType"
          },
          "createdAt": "2019-05-03T08:35:06.787Z",
          "__typename": "MessageType"
        },
        {
          "id": 243,
          "text": "itaque ea ipsum rem rerum omnis et excepturi",
          "senderRole": "candidate",
          "type": "Message",
          "companiesAnswered": false,
          "acceptedCompanies": null,
          "attachments": null,
          "companies": null,
          "senderPerson": {
            "id": 24,
            "fullName": "Avery Candidate",
            "email": "12@candidate.lifely.nl",
            "picture": null,
            "__typename": "PersonType"
          },
          "createdAt": "2019-05-03T08:35:06.784Z",
          "__typename": "MessageType"
        }
      ],
      "count": 20,
      "totalCount": 22,
      "page": 1,
      "totalPages": 2,
      "hasNextPage": true,
      "__typename": "PaginatedMessageType"
    }
  }
}
```

* #### getJobs
* #### getCompanies





