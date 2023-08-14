import requests

print('enter admission number: ')
i = input()
print(i)  # for checking

url = "https://api.apispreadsheets.com/data/tqDVavbc09WjAg9o/"
headers = {
    "Content-Type": "application/json"
}

data = {
    "data": {
        "fee": "12889212",
        "loan": "",
        "Book1": "name,0,9,Woodlands",
        "Book2": "",
        "Book3": "",
        "Book4": "",
        "Book5": "",
        "Book6": "",
        "Book7": "",
        "Book8": "",
        "Book9": "",
        "Book10": "",
        "admin_no": 2224248,
        "password": "YYLOSER",
        "reserved": "",
        "total_books": 9
    },
    "query": f"select * from tqDVavbc09WjAg9o where admin_no={i}"
}

response = requests.post(url, headers=headers, json=data)

if response.status_code == 201:
    # SUCCESS
    print("Passed")
else:
    # ERROR
    print("Failed")