Instructions to run this code:

FRONTEND PART:
Install Visual Studio
Create a new folder and name it as "ShoppyGlobe"
Open the new terminal which will be top left, beside Run option
After the new terminal opens, install the vite by running this code " npm create vite@latest" This will create a folder named vite-project (generally Vite is a blunder where we can use React.js)
After installing the vite-project, enter this line to change directory to vite-project " cd vite-project"
Now, we have to install packages, so enter this line to install all the node packages into the vite-project " npm install" This will install the packages into the projects
Now, we have to create a folder named "Components" and create all the components in that folder (You can see the code, and it quite easy, just compare the manual code and this code and make the changes accordingly)
After making all the components and copying the code, enter this line to run the project " npm run dev" This will provide a link / server, open it and our project appears. We completed frontend part. Now time to backend.

BACKEND PART:
Create a new folder "NodeJS" in vite-project, change directory to NodeJS.
In terminal, run these lines to install node modules, express, mongoose, bcrypt,jsonwebtoken, nodemon.
First give npm init which installs node modules in NodeJS folder. Then type npm i express which installs express, npm i mongoose, installs mongoose, npm i bcrypt, for security purpose, npm i jsonwebtoken, for tokens.
Here we need mongodb compass. Install mongodb compass from internet. After installing the compass, we can create new connection between NodeJS and mongodb with the help of url.
For auto saving purpose give these line npm i --save--dev nodemon and do some changes in package.json, do changes according to the given in the code.
Create folders and javascript files according to the given code.
After creating folders and files, copy the code.
Install Thunder Client in Visual Studio. In thunder client, we have get, post, put, delete operations. Get operation is used to display the details of document. Post operation is used to create a document. Put operation is used to update document. Delete operation is used to delete document.
First use Post operation for registration and give url, below there will be body, there we have to give username and password. After registration, by using Post operation for login and give url according to it. And in body, give username and password which was used for registration. Now we will be having a token. This token is important for furture operations.
With the help of Get operation and with url which was declare in code, we can get the details of all the products and details of single product too with suitable url.
Now, for cartting the items, we will be using token. To add items to the cart, we will be using Post operition to add the item to the cart. But here we need to do some changes in thunder client. In thunder client, below the url, we will be having Headers. In headers, we have give Authorization and beside type Bearer (token). After this in body, give productid and quantity to add the item into the cart.
We can update the cart by using Put operation by using respective url. Firstly add the authorization in header with the help of token. And in body, update quantity of the items. 
We can delete the item by using delete operation and using respective url.

Thank you and happy coding
NOTE: Use console.log lines when any error occurs
