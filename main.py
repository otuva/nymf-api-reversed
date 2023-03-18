import requests
import json
import hashlib


# def generate_token_from_uuid(uuid: str) -> str:
#
#     print(hashlib.md5(uuid.encode()).hexdigest())

# 8a7ebb2b2e2fe7e7805ff2b8d8fece4a
secret = "K0Z1255t2$r2rdq1312!o"

my_uuid = "0ef048f5-a2e0-4ae8-a2a2-8d6329af0313"
my_token = "8a7ebb2b2e2fe7e7805ff2b8d8fece4a"

gen_token = "4dd5117d468bc6a6d7a88c079a70076b"
device_token = "b2cf3a26-cb9d-45c4-8dd5-5781eb8e777c"

testing_gen_token = "887f873b825591c4d649d3f21836b969"
testing_device_token = "8b028d9a-475a-4cab-852f-fe2a981bd734"

new_token = "6435f8a9dba253484caf6fe129752154"
new_device_token = "29f0ffdf-a49b-468b-ae7f-92219f95a047"

headers = {
    'Accept-Language': 'en',
    'App-OS': 'android',
    'App-Version': '21',
    'App-Version-Name': '1.4.3',
    'App-Gen-Token': my_token,
    'App-Device-Token': my_uuid,
    'User-Agent': 'nymf-android-Android SDK built for x86QSR1.210802.001',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Connection': 'Keep-Alive',
}

params = {
    'expanded': '0',
    'page': '1',
    'per-page': '2000',
}

# generate_token_from_uuid(my_uuid)
# print()

response = requests.get('https://dubnitskiy.com/api/photos', params=params, headers=headers)
# dump json
print(json.dumps(response.json(), indent=4)[0:1000])
