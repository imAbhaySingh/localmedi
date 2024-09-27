import json
import pywhatkit
import datetime
from flask import Flask, request
from flask_cors import CORS, cross_origin

# Load mock data from JSON file
def load_mock_data():
    with open('mock_data.json', 'r') as file:
        return json.load(file)

mock_data = load_mock_data()

# Function to send message instantly
def sendMessage(mobile_number, cause):
    print(f"Sending message to: {mobile_number}")
    
    # Get the current time and add a minute for scheduling
    now = datetime.datetime.now()
    send_time = now + datetime.timedelta(minutes=1)
    
    pywhatkit.sendwhatmsg(
        f"+91{mobile_number}",
        f"Your relative has been admitted to the hospital due to {cause}",
        
        send_time.hour,
        send_time.minute
    )
    print("Message scheduled to be sent")

app = Flask(__name__)
cors = CORS(app)

@app.route('/post', methods=['POST'])
@cross_origin()
def post():
    try:
        data = request.get_json()
        aadharNr = str(data['aadhaar'])  # Using string Aadhaar
        cause = data['cause']
        
        # Find the person by Aadhaar number
        person = next((item for item in mock_data if item['aadhaar_number'] == aadharNr), None)
        
        if person:
            address = person['address']
            print(f"Received Aadhaar: {aadharNr}")
            print(f"Received Cause: {cause}")
            print(f"Found address: {address}")

            # Find another person living at the same address
            another_person = next((item for item in mock_data if item['address'] == address and item['aadhaar_number'] != aadharNr), None)
            
            if another_person:
                another_mobile_number = another_person['mobile_number']
                print(f"Found another person: {another_person['name']} at the same address. Sending message to: {another_mobile_number}")
                
                sendMessage(another_mobile_number, cause)
                return f"Message sent for Aadhaar: {aadharNr} to another person at the same address."
            else:
                return "No other person found at the same address.", 404
        else:
            return f"Aadhaar number {aadharNr} not found in mock data.", 404
            
    except Exception as e:
        print(f"Error: {e}")
        return f"Error: {e}", 400

@app.route('/test', methods=['GET'])
def test():
    return "API is working!"

if __name__ == '__main__':
    print("API Running at: http://localhost:5000/test")
    app.run(port=5000, debug=True)
