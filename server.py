import http.server
import socketserver
import json

PORT = 8000

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/userdata/users.json':
            # Serve user data
            with open('userdata/users.json', 'r') as f:
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(f.read().encode())
                print("console.output")
        else:
            # Serve the HTML file
            return http.server.SimpleHTTPRequestHandler.do_GET(self)

    def do_POST(self):
        if self.path == '/signup':
            # Handle user signup
            content_length = int(self.headers['Content-Length'])
            data = self.rfile.read(content_length).decode()
            user_data = json.loads(data)
            
            # Save user data (in a real application, you'd use a proper database)
            with open('userdata/users.json', 'r+') as f:
                users = json.load(f)
                users.append(user_data)
                f.seek(0)
                json.dump(users, f, indent=4)
                f.truncate()

            self.send_response(200)
            self.end_headers()
            self.wfile.write("Signup successful!".encode())
        else:
            return http.server.SimpleHTTPRequestHandler.do_GET(self)

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Server running at port", PORT)
    httpd.serve_forever()
