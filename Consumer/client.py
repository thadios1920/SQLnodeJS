import requests as req
import json as js


# post = req.post('http://localhost:2020/user',json = {"nom":"admin@gmail.com","prenom":"testlogin"})

# delete = req.delete('http://localhost:2020/user/1')

# put = req.put('http://localhost:2020/user/2',json={"nom":"python"})

allUsers = req.get('http://localhost:2020/user')

users = js.loads(allUsers.text)
for item in range(len(users)):
    print(users[item]['prenom'])