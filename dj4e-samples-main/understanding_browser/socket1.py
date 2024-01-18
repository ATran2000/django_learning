# simple web browser
# makes a connection to http://data.pr4e.org/page1.htm using a socket and returns the browser content into the terminal

import socket

mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect(('data.pr4e.org', 80))
cmd = 'GET http://data.pr4e.org/page1.htm HTTP/1.0\r\n\r\n'.encode()
mysock.send(cmd)

while True:
    data = mysock.recv(512) # receives upto 512 characters of the browser content
    if len(data) < 1:
        break
    print(data.decode(),end='') # prints out the browser content

mysock.close()