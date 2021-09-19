import requests

url = "https://cloud.lightspeedapp.com/oauth/access_token.php"

payload = {
    "client_id": "7a85ab9c1ada1eac35a394d8c578b3d78e70d38291b6f8e004627b58ad46401c",
    "client_secret": "7637cc5910c8220492f76d219d7a4f6be35d5c417f0b67352e18be5cce66c7d9",
    "code": "d8f0a3a8340f2ab0dfacee2877521ff0f6346d0c",
    "grant_type": "authorization_code"}

response = requests.request("POST", url, data=payload)

print(response.text)