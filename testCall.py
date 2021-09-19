import requests

accountID = 262389

headers = {"Authorization": "Bearer 29d2c44dfd25efc54c2df559dee68747704ab4b6"}
url = 'https://api.lightspeedapp.com/API/Account/262389/Sale.json'

r = requests.get(url=url, headers=headers)

print(r.status_code)
print(r.text)