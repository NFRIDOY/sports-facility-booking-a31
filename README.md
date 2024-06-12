# e-commerce-mongoose-a2 
It is an api of e-commerce websites
[Live Server](https://e-commerce-mongoose-a2.vercel.app)

## Installation
#### Clone the repository
~~~
git clone https://github.com/NFRIDOY/e-commerce-mongoose-a2.git
cd e-commerce-mongoose-a2
~~~
#### Install the the packages
~~~
npm install
~~~
#### Run the server
~~~
npm run start:dev
~~~
<i>Server will run on port: 5000</i>
Click on this link to open the server: [http://localhost:5000
](http://localhost:5000)

## API Endpoint
#### GET All Products & Create a new Product [GET] & [POST]
~~~
/api/products
~~~
[GET](https://e-commerce-mongoose-a2.vercel.app/api/products)
#### GET product by id [GET]
~~~
/api/products/productId
~~~
#### PUT product by id (Update by id) [PUT]
~~~
/api/products/productId
~~~
#### DELETE product by id (DELETE by id) [DELETE]
~~~
/api/products/productId
~~~
#### Search product by searchTerm [GET]
~~~
/api/products?searchTerm=<YOUR PRODUCT NAME>
~~~
#### GET All Orders & Create a new Order [GET] & [POST]
~~~
/api/orders
~~~
[GET](https://e-commerce-mongoose-a2.vercel.app/api/orders)
#### GET All Orders by email [GET]
~~~
/api/orders?email=<YOUR@email.com>
~~~
