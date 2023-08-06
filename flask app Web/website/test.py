
import requests

r = requests.get("https://api.apispreadsheets.com/data/CPJcxir7lZelZTsd/")

if r.status_code == 200:
    # SUCCESS
    data = r.json()
    print(data)
else:
    # ERROR
    data=None