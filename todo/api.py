from urllib import response

import requests
DOMAIN='http://127.0.0.1:8000/'
def get_url(url):
    return f"{DOMAIN}{url}"
TOKEN='c036c59bf2ea0200415a233d1e03322b136195aa'
headers={'Authorization':f'Token{TOKEN}'}
response=requests.get(get_url('/api/users'),headers=headers)
assert response.status_code==200
response = requests.post('http://127.0.0.1:8000/api-token-auth/', data={'username':
'admin', 'password': '19681966pm'})
print(response.status_code) # {'token': '2efa08beed5727856319740df3747df4e0a3655e'}
print(response.json()) #
print('jdcndjncjd')