"""This is the primary app module for the Dexx back end.

"""
from flask import Flask, render_template, request, Response, send_file, jsonify

from flask_cors import CORS

from datetime import datetime

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Sample data for demonstration
users = [
	{
		"name": "Jesse Shaw",
		"email": "Jdshaw1987@gmail.com"
	}
]

@app.route("/generate_csv")
def generate_csv():
    if len(users) == 0:
        return "No data to generate CSV."

	# Create a CSV string from the user data
    csv_data = "Name,Email\n"
    for user in users:
        csv_data += f"{user['name']},{user['email']}\n"

    return render_template("index.html", csv_data=csv_data)

@app.route("/download_csv")
def download_csv():
    if len(users) == 0:
        return "No data to download."

	# Create a CSV string from the user data
    csv_data = "Name,Email\n"
    for user in users:
        csv_data += f"{user['name']},{user['email']}\n"

    csv_data += f"File Generated {datetime.today().strftime('%c')}"

	# Create a temporary CSV file and serve it for download
    with open("users.csv", "w") as csv_file:
        csv_file.write(csv_data)
    print("Sending file...")
    return send_file("users.csv", as_attachment=True, download_name="users.csv")

@app.route("/download_csv_direct")
def download_csv_direct():
    if len(users) == 0:
        return "No data to download."

	# Create a CSV string from the user data
    csv_data = "Name,Email\n"
    for user in users:
        csv_data += f"{user['name']},{user['email']}\n"

    # Create a direct download response with the CSV data and appropriate headers
    response = Response(csv_data, content_type="text/csv")
    response.headers["Content-Disposition"] = "attachment; filename=users.csv"

    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
