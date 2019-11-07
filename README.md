# Rumies Endpoints

## Notes (DEPRICATED - DO NOT USE IT!)
#### get methods
Get All notes: https://rumies.herokuapp.com/notes<br/> 
Get note by id: https://rumies.herokuapp.com/notes/5da8e600b5d6e426d4d6ef0b
#### post methods
##### Post new note: https://rumies.herokuapp.com/notes
example:
```
{
    "author": "adven",
    "title": "wifi password",
    "description": "kukle2k19"
}
```

## Users
#### get methods
Get all users: https://rumies.herokuapp.com/users<br/> 
Get user by id: https://rumies.herokuapp.com/users/<br/> 
Get user by nick: https://rumies.herokuapp.com/users/nick/test1
#### post methods
##### Login: https://rumies.herokuapp.com/users/login
example:
```
{
    "nick": "test1",
    "password": "test"
}
```
##### Register: https://rumies.herokuapp.com/users/register
example:
```
{
    "first_name": "Shrek",
    "last_name": "XD",
    "nick": "shrek",
    "email": "test1234@gmail.com",
    "password": "shrek",
    "phone_number": 509922329
}
```

## Groups
#### get methods
Get all users: https://rumies.herokuapp.com/groups<br/> 
#### post methods
Create new group: https://rumies.herokuapp.com/groups<br/> 

example:
```
{ 
    "group_name": "Roomies Dev",
    "user_ids": ["5dc14e8429453a00249f95e1", "5dbf35d43db4a100240b1aa3", "5dbd5f376a26b0212819c131"],

    "shopping_lists": [
        {   
            "name": "Zakupy na melo inferno 2k19",
            "list": 
            [
                { "item": "mleko", "checked": "true" },
                { "item": "browary", "checked": "false", "comments":[{ "nick": "Adven97", "content": "Byle nie za drogie xd"}] }, 
                { "item": "100kg ziemniakow", "checked": "false" },
                { "item":"maslo", "checked": "false", "comments":[{ "nick": "anncisz", "content": "to dobre maslo wez"}] }
            ]    
        }
    ],
    
    "notes": [
        {"author": "Adven97", "content": "haslo do wifi: kukle 2k19"},
        {"author": "MikeW", "content": "telefon do adama 123456765"}
    ],    

    "chat": [
        { "user_nick": "MikeW723", "message": "elo" }, 
        { "user_nick": "anncisz", "message": "siemka"},
        { "user_nick": "StrollingOx", "message": "co jest?"}, 
        { "user_nick": "Adven97", "message": "dawajcie zrobmy baze w MongoDB!"}, 
        { "user_nick": "StrollingOx", "message": "ok" }, 
        { "user_nick": "anncisz", "message": "no i superr"}
    ]
}
```
### Notes
#### patch methodes
Add new note to group (with id 5dc485e4f7482e10b04af091) : http://https://rumies.herokuapp.com/groups/notes/5dc485e4f7482e10b04af091

example:
```
{
	"notes": {"author": "Adam", "content": "test test teset"}
}
```
