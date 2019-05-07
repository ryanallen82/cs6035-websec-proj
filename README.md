# Web Security Exploits
*This was a project for CS 4235/6035: Introduction to Information Security*
- `exploit-1.html`: Bypass flawed XSRF protection.
- `exploit-2.html`: Steal username and password using XSS.
- `exploit-3.html`: Log in without password using SQL injection.

## How to Run
#### 0. Edit the hosts file
Add the following lines to `/etc/hosts` on Linux.
```
127.0.0.1	payroll.gatech.edu
127.0.0.1	hackmail.org
```
#### 1. Prepare the Web server
First, make sure PHP and Apache2 HTTP server are installed and SQLite3 is enabled. Then, copy PHP files and database files to `/var` directory, change the owner and permissions, and restart Apache.
```bash
cp -r payroll /var
sudo chown -R www-data:www-data /var/db && sudo chown -R www-data:www-data /var/www && sudo chmod -R 755 /var/db && sudo chmod -R 755 /var/www
service apache2 restart
```
#### 2. Start mock email server
```bash
cd hackmail && npm install && npm start
```
#### 3. Open the HTML files in a browser
