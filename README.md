# Rumies Endpoints

## Notes
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
