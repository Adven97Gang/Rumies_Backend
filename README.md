# Rumies Endpoints

IMPORTANT - CURRENT GROUP ID IS: 5dc6ba9c2585a92b30b3fb81

PLEASE US THIS ID WHILE TESTING

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

### get methods
Get all notes in group: http://https://rumies.herokuapp.com/groups/notes/5dc485e4f7482e10b04af091

#### patch methodes
Add new note to group (with id 5dc485e4f7482e10b04af091) : http://https://rumies.herokuapp.com/groups/notes/5dc485e4f7482e10b04af091

example:
```
{
	"notes": {"author": "Adam", "content": "test test teset"}
}
```
#### delete methodes
delete note by its content (with id 5dc485e4f7482e10b04af091) : http://https://rumies.herokuapp.com/groups/notes/5dc485e4f7482e10b04af091

example: 
```
{
   "content": "test test teset"
}
```

### Shopping List

### get methods
Get all shopping lists in group: http://https://rumies.herokuapp.com/groups/shopping/5dc485e4f7482e10b04af091

#### patch methotes

Add new shopping list in group: http://https://rumies.herokuapp.com/groups/shopping/5dc485e4f7482e10b04af091
example: 
```
{
"shopping_lists": 
        {   
            "name": "Zakupy na sylwester",
            "list": []     (when creating, this list is obviously empty)
        }
}
```

Add new item to shopping list: http://https://rumies.herokuapp.com/groups/shopping/item/5dc485e4f7482e10b04af091

example: 
```
{ 
	"name": "Zakupy na melo inferno 2k19",
	"item": "harnas z puchy",
	"checked": false,
	"comments": []
}

delete 

{ 
	"name": "Zakupy na melo inferno 2k19",
	"item": "harnas z puchy"
}

```

Add comment to item: http://https://rumies.herokuapp.com/groups/shopping/com/5dc485e4f7482e10b04af091 

example: 
```
{ 
	"name": "Zakupy na melo inferno 2k19",
	"item": "harnas z puchy",
	"nick": "Adven97",
	"content": "bo po dobre trzeba sie schylic i uwazac by z tatra nie pomylic!"
}
```

Mark item on list as checked (true or false): http://https://rumies.herokuapp.com/groups/shopping/check/5dc485e4f7482e10b04af091 

example: 
```
{ 
	"name": "Zakupy na melo inferno 2k19",
	"item": "harnas z puchy",
	"checked": true
}
```

