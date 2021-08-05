import json
from datetime import datetime
import boto3

client = boto3.resource('dynamodb')
table = client.Table("contactForm")

def lambda_handler(event, context):
    body = json.loads(event["body"])
    email, message = body["email"], body["message"]
    
    now = datetime.now()
    time_stamp = now.strftime("%m/%d/%Y %H:%M:%S")
    
    data = {
        "email": email,
        "message": message,
        "time": time_stamp
    }

    print("Saved email " + email + " to DB.")

    table.put_item(Item=data)

    return {
        'statusCode': 200,
        'body': json.dumps(data)
    }
