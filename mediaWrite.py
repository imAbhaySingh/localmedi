# import pywhatkit
# import datetime
# from flask import Flask, request
# from flask_cors import CORS, cross_origin

# # Function to send message instantly
# def sendMessage(__aadhNr, __cause):
#     print(f"Received Aadhaar: {__aadhNr}")
    
#     pywhatkit.sendwhatmsg_instantly(
#         "+919711883995", 
#         f"Your relative has been admitted to the hospital due to {__cause}"
#     )
#     print("Message sent instantly")

# app = Flask(__name__)
# cors = CORS(app)

# @app.route('/post', methods=['POST'])
# @cross_origin()
# def post():
#     try:
#         data = request.get_json()
#         aadharNr = str(data['aadhaar'])  # Using string Aadhaar
#         cause = data['cause']
        
#         # Debugging logs to verify data
#         print(f"Received Aadhaar: {aadharNr}")
#         print(f"Received Cause: {cause}")
        
#         sendMessage(aadharNr, cause)
#         return f"Message sent for Aadhaar: {aadharNr}"
#     except Exception as e:
#         print(f"Error: {e}")
#         return f"Error: {e}", 400

# @app.route('/test', methods=['GET'])
# def test():
    
#     return "API is working!"

# if __name__ == '__main__':

#     print("API Running at: http://localhost:5000/test")
#     app.run(port=5000, debug=True)


import pywhatkit

pywhatkit.sendwhatmsg_instantly("+919711883995", "Test message")
