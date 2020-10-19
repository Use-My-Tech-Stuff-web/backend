# BACKEND ENDPOINTS

Configure the API to handle to the following routes

* LOGIN AND REGISTER;

| Name      | Method | Endpoint     |      Description                  |
| :---        |    :----:   |    :---:  |     :--------------------:    |
| register      | POST       |  usemytech.herokuapp.com/auth/register    |  <li>  username === required(string)  </li> <li>  password === required(string) </li> <li>  phone_number === (integer) </li> <li>  city === (string) </li> <li>  role: renter or owner === required </li> | 
| login   | POST        | usemytech.herokuapp.com/auth/login      | <li>  username === required(string)  </li> <li>  password === required(string) </li> |

                            * TOKEN REQUIRED ENDPOINTS



        * All USERS' routers

| Name      | Method | Endpoint     |      Response / REQUIRED                 |
| :---:        |    :----:   |    :---:  |     :--------------------:    |
| get all users | GET |  usemytech.herokuapp.com/users |  200 OK  |
| user by id | GET |  usemytech.herokuapp.com/users/id |  200 OK  |
| update user | PUT |  usemytech.herokuapp.com/users/id |   200 OK <li> username === required(string) </li> <li> phone_number === (integer) </li> <li> city === (string) </li> <li> role: renter or owner </li>  |
| delete user | GET |  usemytech.herokuapp.com/users/id |  202 OK  |



        * All OWNERS' routers 

| Name      | Method | Endpoint     |      Response / REQUIRED                 |
| :---:        |    :----:   |    :---:  |     :--------------------:    |
| get all owners | GET |  usemytech.herokuapp.com/owners |  200 OK  |
| get by id | GET |  usemytech.herokuapp.com/owners/id |  200 OK  |
| owner's items by owner id  | GET |  usemytech.herokuapp.com/owners/id/items |  200 OK  |
| post new item  | POST |  usemytech.herokuapp.com/owners/id/items |  200 OK  <li> description === required (text) </li> <li> price === required (decimal) </li> <li> picture === (string) </li>      |

        * All RENTERS' routers

| Name      | Method | Endpoint     |      Response / REQUIRED                 |
| :---:        |    :----:   |    :---:  |     :--------------------:    |
| get all renters | GET |  usemytech.herokuapp.com/renters |  200 OK  |
| get renter by id | GET |  usemytech.herokuapp.com/renters/id |  200 OK  |

        * All ITEMS' routers

| Name      | Method | Endpoint     |      Response / REQUIRED                 |
| :---:        |    :----:   |    :---:  |     :--------------------:    |
| get all items | GET |  usemytech.herokuapp.com/items |  200 OK  |
| get item by ID | GET |  usemytech.herokuapp.com/items/id |  200 OK  |
| delete | DELETE |  usemytech.herokuapp.com/items/id |  202 OK  |
| update | PUT |  usemytech.herokuapp.com/items/id |  202 OK  |

