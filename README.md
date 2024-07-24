Shopify App

This project is a Node.js application that integrates with the Shopify API to fetch and manage data related to customers, orders, and products. It uses RESTful APIs to interact with a Shopify store, retrieving information about the most valuable customers, best-selling products, and orders.

Features

Fetch Most Valuable Customers: Retrieves and displays the top 5 customers based on total purchase value.
Fetch Best-Selling Products: Retrieves and displays the top 5 best-selling products based on quantity sold.
Fetch Orders: Retrieves and displays orders sorted by total price.

Technology Stack
Backend: Node.js
API Integration: Shopify RESTful API
HTTP Client: Axios
Environment Management: dotenv

Setup
Clone the Repository

bash
Copy code

git clone git@github.com:mracy/shopifyAdminStore.git
cd server
Install Dependencies

bash
Copy code

npm install
Create a .env File

Create a .env file in the root directory and add the following environment variables:

arduino
Copy code

SHOPIFY_API_KEY='your_api_key'
SHOPIFY_API_SECRET='your_secret_key'
SHOPIFY_ACCESS_TOKEN='your_access_token'
SHOPIFY_STORE_URL='your_store_name'
PORT='your_port'

Start the Server

bash
Copy code

npm start

The server will start and listen on the port specified in the .env file (default is your_port).

Endpoints
GET /api/most-valuable-customers

Retrieves the top 5 most valuable customers based on total purchase value.

GET /api/best-selling-products

Retrieves the top 5 best-selling products based on quantity sold.

GET /api/orders

Retrieves all orders sorted by total price.

GET request http://localhost:5001/api/best-selling-products

[
    {
        "id": 41656922996814,
        "product_id": 7412628750414,
        "title": "Sunset",
        "price": "699.95",
        "sku": "",
        "position": 5,
        "inventory_policy": "deny",
        "compare_at_price": null,
        "fulfillment_service": "manual",
        "inventory_management": "shopify",
        "option1": "Sunset",
        "option2": null,
        "option3": null,
        "created_at": "2024-07-19T07:45:37-04:00",
        "updated_at": "2024-07-24T14:47:12-04:00",
        "taxable": true,
        "barcode": null,
        "grams": 4536,
        "weight": 10,
        "weight_unit": "lb",
        "inventory_item_id": 43752965144654,
        "inventory_quantity": 4502,
        "old_inventory_quantity": 4502,
        "requires_shipping": true,
        "admin_graphql_api_id": "gid://shopify/ProductVariant/41656922996814",
        "image_id": null,
        "quantitySold": 5506,
        "productTitle": "The Complete Snowboard"
    },
    {
        "id": 41656922898510,
        "product_id": 7412628750414,
        "title": "Dawn",
        "price": "699.95",
        "sku": "",
        "position": 2,
        "inventory_policy": "deny",
        "compare_at_price": null,
        "fulfillment_service": "manual",
        "inventory_management": "shopify",
        "option1": "Dawn",
        "option2": null,
        "option3": null,
        "created_at": "2024-07-19T07:45:37-04:00",
        "updated_at": "2024-07-24T14:47:11-04:00",
        "taxable": true,
        "barcode": null,
        "grams": 4536,
        "weight": 10,
        "weight_unit": "lb",
        "inventory_item_id": 43752965046350,
        "inventory_quantity": 6686,
        "old_inventory_quantity": 6686,
        "requires_shipping": true,
        "admin_graphql_api_id": "gid://shopify/ProductVariant/41656922898510",
        "image_id": null,
        "quantitySold": 3323,
        "productTitle": "The Complete Snowboard"
    },
    {
        "id": 41656922865742,
        "product_id": 7412628750414,
        "title": "Ice",
        "price": "699.95",
        "sku": "",
        "position": 1,
        "inventory_policy": "deny",
        "compare_at_price": null,
        "fulfillment_service": "manual",
        "inventory_management": "shopify",
        "option1": "Ice",
        "option2": null,
        "option3": null,
        "created_at": "2024-07-19T07:45:37-04:00",
        "updated_at": "2024-07-24T14:47:11-04:00",
        "taxable": true,
        "barcode": null,
        "grams": 4536,
        "weight": 10,
        "weight_unit": "lb",
        "inventory_item_id": 43752965013582,
        "inventory_quantity": 96974,
        "old_inventory_quantity": 96974,
        "requires_shipping": true,
        "admin_graphql_api_id": "gid://shopify/ProductVariant/41656922865742",
        "image_id": null,
        "quantitySold": 3035,
        "productTitle": "The Complete Snowboard"
    },
    {
        "id": 41656922931278,
        "product_id": 7412628750414,
        "title": "Powder",
        "price": "699.95",
        "sku": "",
        "position": 3,
        "inventory_policy": "deny",
        "compare_at_price": null,
        "fulfillment_service": "manual",
        "inventory_management": "shopify",
        "option1": "Powder",
        "option2": null,
        "option3": null,
        "created_at": "2024-07-19T07:45:37-04:00",
        "updated_at": "2024-07-24T14:47:11-04:00",
        "taxable": true,
        "barcode": null,
        "grams": 4536,
        "weight": 10,
        "weight_unit": "lb",
        "inventory_item_id": 43752965079118,
        "inventory_quantity": 7523,
        "old_inventory_quantity": 7523,
        "requires_shipping": true,
        "admin_graphql_api_id": "gid://shopify/ProductVariant/41656922931278",
        "image_id": null,
        "quantitySold": 2485,
        "productTitle": "The Complete Snowboard"
    },
    {
        "id": 41657210339406,
        "product_id": 7412638875726,
        "title": "Small / Green",
        "price": "32.38",
        "sku": "10",
        "position": 2,
        "inventory_policy": "continue",
        "compare_at_price": null,
        "fulfillment_service": "manual",
        "inventory_management": "shopify",
        "option1": "Small",
        "option2": "Green",
        "option3": null,
        "created_at": "2024-07-19T08:01:13-04:00",
        "updated_at": "2024-07-24T14:47:12-04:00",
        "taxable": true,
        "barcode": "ISBN",
        "grams": 2000,
        "weight": 2,
        "weight_unit": "kg",
        "inventory_item_id": 43753252487246,
        "inventory_quantity": 98311,
        "old_inventory_quantity": 98311,
        "requires_shipping": true,
        "admin_graphql_api_id": "gid://shopify/ProductVariant/41657210339406",
        "image_id": 32042680090702,
        "quantitySold": 1688,
        "productTitle": "Green Snowboard"
    }
]

GET request http://localhost:5001/api/most-valuable-customers

[
    {
        "id": 7107497984078,
        "email": "aashish.chaudhary@example.com",
        "created_at": "2024-07-23T13:11:24-04:00",
        "updated_at": "2024-07-24T14:47:07-04:00",
        "first_name": "Aashish",
        "last_name": "Chaudhary",
        "orders_count": 4,
        "state": "disabled",
        "total_spent": "6824227.17",
        "last_order_id": 5300826964046,
        "note": "no",
        "verified_email": true,
        "multipass_identifier": null,
        "tax_exempt": false,
        "tags": "Happy, July 23 2024 at 10:56 PM GMT+5:45, Loyal customer",
        "last_order_name": "#1029",
        "currency": "NPR",
        "phone": null,
        "addresses": [
            {
                "id": 8301973209166,
                "customer_id": 7107497984078,
                "first_name": "Aashish",
                "last_name": "Chaudhary",
                "company": "Chaudhary Corp",
                "address1": "456 Hillside Avenue",
                "address2": "Apt 201",
                "city": "Kathmandu",
                "province": "Karnataka",
                "country": "India",
                "zip": "44600",
                "phone": "+91 9801234567",
                "name": "Aashish Chaudhary",
                "province_code": "KA",
                "country_code": "IN",
                "country_name": "India",
                "default": true
            }
        ],
        "tax_exemptions": [],
        "email_marketing_consent": {
            "state": "subscribed",
            "opt_in_level": "single_opt_in",
            "consent_updated_at": "2024-07-23T13:11:24-04:00"
        },
        "sms_marketing_consent": null,
        "admin_graphql_api_id": "gid://shopify/Customer/7107497984078",
        "default_address": {
            "id": 8301973209166,
            "customer_id": 7107497984078,
            "first_name": "Aashish",
            "last_name": "Chaudhary",
            "company": "Chaudhary Corp",
            "address1": "456 Hillside Avenue",
            "address2": "Apt 201",
            "city": "Kathmandu",
            "province": "Karnataka",
            "country": "India",
            "zip": "44600",
            "phone": "+91 9801234567",
            "name": "Aashish Chaudhary",
            "province_code": "KA",
            "country_code": "IN",
            "country_name": "India",
            "default": true
        },
        "totalPurchaseValue": 6824227.17
    },
    {
        "id": 7107480387662,
        "email": "jane.doe@shopify.com",
        "created_at": "2024-07-23T13:06:02-04:00",
        "updated_at": "2024-07-24T14:44:40-04:00",
        "first_name": "Jane",
        "last_name": "Doe",
        "orders_count": 2,
        "state": "disabled",
        "total_spent": "2040772.41",
        "last_order_id": 5300824670286,
        "note": "Very nice customer",
        "verified_email": true,
        "multipass_identifier": null,
        "tax_exempt": false,
        "tags": "Expensive, July 23 2024 at 10:50 PM GMT+5:45, Loyal, Rich, VIP",
        "last_order_name": "#1027",
        "currency": "NPR",
        "phone": "+16135555555",
        "addresses": [
            {
                "id": 8302081572942,
                "customer_id": 7107480387662,
                "first_name": "Jane",
                "last_name": "Doe",
                "company": null,
                "address1": "",
                "address2": null,
                "city": "",
                "province": null,
                "country": "Nepal",
                "zip": null,
                "phone": null,
                "name": "Jane Doe",
                "province_code": null,
                "country_code": "NP",
                "country_name": "Nepal",
                "default": true
            },
            {
                "id": 8301955153998,
                "customer_id": 7107480387662,
                "first_name": "Jane",
                "last_name": "Doe",
                "company": null,
                "address1": null,
                "address2": null,
                "city": null,
                "province": null,
                "country": null,
                "zip": null,
                "phone": null,
                "name": "Jane Doe",
                "province_code": null,
                "country_code": null,
                "country_name": null,
                "default": false
            }
        ],
        "tax_exemptions": [],
        "email_marketing_consent": {
            "state": "subscribed",
            "opt_in_level": "single_opt_in",
            "consent_updated_at": "2024-07-23T13:06:02-04:00"
        },
        "sms_marketing_consent": {
            "state": "subscribed",
            "opt_in_level": "single_opt_in",
            "consent_updated_at": "2024-07-23T13:06:02-04:00",
            "consent_collected_from": "SHOPIFY"
        },
        "admin_graphql_api_id": "gid://shopify/Customer/7107480387662",
        "default_address": {
            "id": 8302081572942,
            "customer_id": 7107480387662,
            "first_name": "Jane",
            "last_name": "Doe",
            "company": null,
            "address1": "",
            "address2": null,
            "city": "",
            "province": null,
            "country": "Nepal",
            "zip": null,
            "phone": null,
            "name": "Jane Doe",
            "province_code": null,
            "country_code": "NP",
            "country_name": "Nepal",
            "default": true
        },
        "totalPurchaseValue": 2040772.41
    },
    {
        "id": 7107494019150,
        "email": "neeta.chaudhary@example.com",
        "created_at": "2024-07-23T13:10:11-04:00",
        "updated_at": "2024-07-24T14:45:57-04:00",
        "first_name": "Neeta",
        "last_name": "Chaudhary",
        "orders_count": 2,
        "state": "disabled",
        "total_spent": "744409.73",
        "last_order_id": 5300825686094,
        "note": "Returning customer",
        "verified_email": true,
        "multipass_identifier": null,
        "tax_exempt": false,
        "tags": "Expensive, July 23 2024 at 10:54 PM GMT+5:45, Loyal, Regular, Rich, VIP",
        "last_order_name": "#1028",
        "currency": "NPR",
        "phone": null,
        "addresses": [
            {
                "id": 8302072037454,
                "customer_id": 7107494019150,
                "first_name": "Neeta",
                "last_name": "Chaudhary",
                "company": "Chaudhary Ventures",
                "address1": "321 Green Park",
                "address2": "Block C",
                "city": "Apt 10",
                "province": null,
                "country": "Switzerland",
                "zip": "Nepal",
                "phone": "44200",
                "name": "Neeta Chaudhary",
                "province_code": null,
                "country_code": "CH",
                "country_name": "Switzerland",
                "default": true
            },
            {
                "id": 8301969080398,
                "customer_id": 7107494019150,
                "first_name": "Neeta",
                "last_name": "Chaudhary",
                "company": "Chaudhary Ventures",
                "address1": "321 Green Park",
                "address2": "Block C",
                "city": "Apt 10",
                "province": "Bharatpur",
                "country": "Switzerland",
                "zip": "Nepal",
                "phone": "44200",
                "name": "Neeta Chaudhary",
                "province_code": null,
                "country_code": "CH",
                "country_name": "Switzerland",
                "default": false
            }
        ],
        "tax_exemptions": [],
        "email_marketing_consent": {
            "state": "subscribed",
            "opt_in_level": "single_opt_in",
            "consent_updated_at": "2024-07-23T13:10:11-04:00"
        },
        "sms_marketing_consent": null,
        "admin_graphql_api_id": "gid://shopify/Customer/7107494019150",
        "default_address": {
            "id": 8302072037454,
            "customer_id": 7107494019150,
            "first_name": "Neeta",
            "last_name": "Chaudhary",
            "company": "Chaudhary Ventures",
            "address1": "321 Green Park",
            "address2": "Block C",
            "city": "Apt 10",
            "province": null,
            "country": "Switzerland",
            "zip": "Nepal",
            "phone": "44200",
            "name": "Neeta Chaudhary",
            "province_code": null,
            "country_code": "CH",
            "country_name": "Switzerland",
            "default": true
        },
        "totalPurchaseValue": 744409.7300000001
    },
    {
        "id": 7107498082382,
        "email": "hari.kumar@example.com",
        "created_at": "2024-07-23T13:11:24-04:00",
        "updated_at": "2024-07-24T14:40:51-04:00",
        "first_name": "Hari",
        "last_name": "Kumar",
        "orders_count": 3,
        "state": "disabled",
        "total_spent": "578160.04",
        "last_order_id": 5300821819470,
        "note": "no",
        "verified_email": true,
        "multipass_identifier": null,
        "tax_exempt": false,
        "tags": "Frequent buyer, Happy, July 23 2024 at 10:56 PM GMT+5:45",
        "last_order_name": "#1025",
        "currency": "NPR",
        "phone": null,
        "addresses": [
            {
                "id": 8301973307470,
                "customer_id": 7107498082382,
                "first_name": "Hari",
                "last_name": "Kumar",
                "company": "Kumar Solutions",
                "address1": "321 Riverside Avenue",
                "address2": "Suite 101",
                "city": "Pokhara",
                "province": "Uttar Pradesh",
                "country": "India",
                "zip": "33700",
                "phone": "+91 0987654321",
                "name": "Hari Kumar",
                "province_code": "UP",
                "country_code": "IN",
                "country_name": "India",
                "default": true
            }
        ],
        "tax_exemptions": [],
        "email_marketing_consent": {
            "state": "subscribed",
            "opt_in_level": "single_opt_in",
            "consent_updated_at": "2024-07-23T13:11:24-04:00"
        },
        "sms_marketing_consent": null,
        "admin_graphql_api_id": "gid://shopify/Customer/7107498082382",
        "default_address": {
            "id": 8301973307470,
            "customer_id": 7107498082382,
            "first_name": "Hari",
            "last_name": "Kumar",
            "company": "Kumar Solutions",
            "address1": "321 Riverside Avenue",
            "address2": "Suite 101",
            "city": "Pokhara",
            "province": "Uttar Pradesh",
            "country": "India",
            "zip": "33700",
            "phone": "+91 0987654321",
            "name": "Hari Kumar",
            "province_code": "UP",
            "country_code": "IN",
            "country_name": "India",
            "default": true
        },
        "totalPurchaseValue": 578160.04
    },
    {
        "id": 7107498377294,
        "email": "deepak.koirala@example.com",
        "created_at": "2024-07-23T13:11:26-04:00",
        "updated_at": "2024-07-24T14:43:06-04:00",
        "first_name": "Deepak",
        "last_name": "Koirala",
        "orders_count": 5,
        "state": "disabled",
        "total_spent": "363066.07",
        "last_order_id": 5300823720014,
        "note": "no",
        "verified_email": true,
        "multipass_identifier": null,
        "tax_exempt": false,
        "tags": "Happy, Important account, July 23 2024 at 10:56 PM GMT+5:45",
        "last_order_name": "#1026",
        "currency": "NPR",
        "phone": null,
        "addresses": [
            {
                "id": 8301973602382,
                "customer_id": 7107498377294,
                "first_name": "Deepak",
                "last_name": "Koirala",
                "company": "Koirala Pvt. Ltd.",
                "address1": "123 Orchard Lane",
                "address2": "Penthouse 3",
                "city": "Itahari",
                "province": "Haryana",
                "country": "India",
                "zip": "56700",
                "phone": "+91 9934567890",
                "name": "Deepak Koirala",
                "province_code": "HR",
                "country_code": "IN",
                "country_name": "India",
                "default": true
            }
        ],
        "tax_exemptions": [],
        "email_marketing_consent": {
            "state": "subscribed",
            "opt_in_level": "single_opt_in",
            "consent_updated_at": "2024-07-23T13:11:26-04:00"
        },
        "sms_marketing_consent": null,
        "admin_graphql_api_id": "gid://shopify/Customer/7107498377294",
        "default_address": {
            "id": 8301973602382,
            "customer_id": 7107498377294,
            "first_name": "Deepak",
            "last_name": "Koirala",
            "company": "Koirala Pvt. Ltd.",
            "address1": "123 Orchard Lane",
            "address2": "Penthouse 3",
            "city": "Itahari",
            "province": "Haryana",
            "country": "India",
            "zip": "56700",
            "phone": "+91 9934567890",
            "name": "Deepak Koirala",
            "province_code": "HR",
            "country_code": "IN",
            "country_name": "India",
            "default": true
        },
        "totalPurchaseValue": 363066.07
    }
]

Contributing
Feel free to open issues or submit pull requests if you have suggestions or improvements for this project.

License
This project is licensed under the HIT License - see the LICENSE file for details.
