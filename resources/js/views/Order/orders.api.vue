<template>
    <div>
        <h1>client side  - a summary for integration of paypal payment into app</h1>
    </div>
</template>
<script>
// 安装 @paypal/paypal-js: npm install @paypal/paypal-js
import { loadScript } from '@paypal/paypal-js';

loadScript({
	'client_id': 'client_id'
}).then(
Paypal => paypal.Buttons({
	createOrder: function(data, actions) {

    // set up order from client side
		return actions.order.create({
			// order Api 创建, 更新, 删除: https://developer.paypal.com/docs/api/orders/v2/#orders_create
      purchase_units: [{
          amount: {
              value: JSON.parse(window.localStorage.getItem('cle_takeout')).reduce((acc, item) => acc+ (item.price* item.quantity)/100, 0),
              currency_code: 'USD',
              // breakdown item_total 要和items 总和一致
              "breakdown": {
                "item_total": {
                    "currency_code": "USD",
                    "value": JSON.parse(window.localStorage.getItem('cle_takeout')).reduce((acc, item) => acc+ (item.price* item.quantity)/100, 0),
                }
            }
          },
          // 创建产品 line_item, 
          items: JSON.parse(window.localStorage.getItem('cle_takeout')).map(item => {
              return {
                "name": item.name,
                  "unit_amount": {
                      "value": item.price/100,
                      "currency_code": "USD",
                  },
                  "tax": {
                    "currency_code": "USD",
                    "value": 0
                },
                  "quantity": item.quantity,
                  "sku": "cle"+item.id
              }
          }),
          
      }]
		})
	},
    // Call your server to set up the transaction
    createOrder: function(data, actions) {
      return fetch('/demo/checkout/api/paypal/order/create/', {
              method: 'post'
          }).then(function(res) {
              return res.json();
          }).then(function(orderData) {
              return orderData.id;
          });
    },

    // execute payment at client side
    onApprove: function(data, actions) {
        /**
         * payment.execute() 是之前 api, 现在已经不起作用
         */
        // return actions.payment.execute().then(function(){
        //     alert('Thank you for payment!');
        // }); 

        /**
         *  client side
         */
        return actions.order.capture().then(function(details) {
            // This function shows a transaction success message to your buyer.
            alert('Transaction completed by ' + details.payer.name.given_name);
            
            console.log(data); 
            // below is data object;
            // {
            //     "orderID": "6XY801410C666811S",
            //     "payerID": "K8J22AYH7G268",
            //     "paymentID": null,
            //     "billingToken": null,
            //     "facilitatorAccessToken": "A21AALqoqE9j-o8rDdNUVKqSIQ_acBr05QXlzuyuvrN9j_wQuc6QozXAPJV_HDVY7_Kt8V8SrQVg_yCq1oO6IrEmrszdTlnAw"
            // }

            console.log(details);
            /** 
             * please refer details object in order.detail.vue
            */  
        });


        // This guide assumes you have completed a basic Smart Payment Buttons integration. These features are all upgrades for that basic integration. After you add a new feature, you can test it on your site then go live.
        /** 
         * server side
         * https://developer.paypal.com/demo/checkout/#/pattern/server
         * 
        */
       // Authorize the transaction
       actions.order.authorize().then(function(authorization){

        // Get the authorization id
         var authorizationID =  authorization.purchase_units[0].payments.authorizations[0].id;

        // Call your server to validate and capture the transaction
         return fetch(url, {
           method: 'post',
           headers: {
             'content-type': 'application/json'
           },
           body: JSON.stringify({
             orderID: data.orderID,
             authorizationID: authorizationID
           })
         });
       });
      



    }

    // Call your server to finalize the transaction
    onApprove: function(data, actions) {
        return fetch('/demo/checkout/api/paypal/order/' + data.orderID + '/capture/', {
            method: 'post'
        }).then(function(res) {
            return res.json();
        }).then(function(orderData) {
            // Three cases to handle:
            //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
            //   (2) Other non-recoverable errors -> Show a failure message
            //   (3) Successful transaction -> Show confirmation or thank you

            // This example reads a v2/checkout/orders capture response, propagated from the server
            // You could use a different API or structure for your 'orderData'
            var errorDetail = Array.isArray(orderData.details) && orderData.details[0];

            if (errorDetail && errorDetail.issue === 'INSTRUMENT_DECLINED') {
                return actions.restart(); // Recoverable state, per:
                // https://developer.paypal.com/docs/checkout/integration-features/funding-failure/
            }

            if (errorDetail) {
                var msg = 'Sorry, your transaction could not be processed.';
                if (errorDetail.description) msg += '\n\n' + errorDetail.description;
                if (orderData.debug_id) msg += ' (' + orderData.debug_id + ')';
                return alert(msg); // Show a failure message
            }

            // Show a success message
            alert('Transaction completed by ' + orderData.payer.name.given_name);
        });
    }
}).render('#paypal-element')
.catch( error => console.error(error))

 

</script>

<script>
</script>


<script>
{
  "statusCode": 200,
  "result": {
    "id": "91K02466UY433503E",
    "intent": "CAPTURE",
    "purchase_units": [
      {
        "reference_id": "PZ755454789",
        "amount": {
          "currency_code": "EUR",
          "value": "48.10",
          "breakdown": {
            "item_total": {
              "currency_code": "EUR",
              "value": "32.06"
            },
            "shipping": {
              "currency_code": "EUR",
              "value": "9.95"
            },
            "handling": {
              "currency_code": "EUR",
              "value": "0.00"
            },
            "tax_total": {
              "currency_code": "EUR",
              "value": "6.09"
            },
            "insurance": {
              "currency_code": "EUR",
              "value": "0.00"
            },
            "shipping_discount": {
              "currency_code": "EUR",
              "value": "0.00"
            },
            "discount": {
              "currency_code": "EUR",
              "value": "0.00"
            }
          }
        },
        "payee": {
          "email_address": "XXXXXXXXXXXXXXX",
          "merchant_id": "HE3H3VSFV3Q5G"
        },
        "description": "PZ755454789",
        "custom_id": "PZ755454789",
        "items": [
          {
            "name": "Calvin Klein Euphoria for Women Eau De Parfum 100 ml (woman)",
            "unit_amount": {
              "currency_code": "EUR",
              "value": "32.06"
            },
            "tax": {
              "currency_code": "EUR",
              "value": "6.09"
            },
            "quantity": "1",
            "sku": "24837"
          }
        ],
        "shipping": {
          "name": {
            "full_name": "XXXXXXXXX"
          },
          "address": {
            "address_line_1": "XXXXXXX",
            "admin_area_2": "XXXXX",
            "postal_code": "XXXXX",
            "country_code": "XX"
          }
        },
        "payments": {

          "captures": [
            {
              "id": "40J088343X584271G",
              "status": "COMPLETED",
              "amount": {
                "currency_code": "EUR",
                "value": "48.10"
              },
              "final_capture": true,
              "seller_protection": {
                "status": "ELIGIBLE",
                "dispute_categories": [
                  "ITEM_NOT_RECEIVED",
                  "UNAUTHORIZED_TRANSACTION"
                ]
              },
              "seller_receivable_breakdown": {
                "gross_amount": {
                  "currency_code": "EUR",
                  "value": "48.10"
                },
                "paypal_fee": {
                  "currency_code": "EUR",
                  "value": "1.26"
                },
                "net_amount": {
                  "currency_code": "EUR",
                  "value": "46.84"
                }
              },
              "custom_id": "PZ755454789",
              "links": [
                {
                  "href": "https:\/\/api.sandbox.paypal.com\/v2\/payments\/captures\/40J088343X584271G",
                  "rel": "self",
                  "method": "GET"
                },
                {
                  "href": "https:\/\/api.sandbox.paypal.com\/v2\/payments\/captures\/40J088343X584271G\/refund",
                  "rel": "refund",
                  "method": "POST"
                },
                {
                  "href": "https:\/\/api.sandbox.paypal.com\/v2\/checkout\/orders\/91K02466UY433503E",
                  "rel": "up",
                  "method": "GET"
                }
              ],
              "create_time": "2019-08-14T12:44:13Z",
              "update_time": "2019-08-14T12:44:13Z"
            }
          ]
        }
      }
    ],
    "payer": {
      "name": {
        "given_name": "XXXXXX",
        "surname": "XXXXXXX"
      },
      "email_address": "XXXXXXXXXXXX",
      "payer_id": "SS5Q2CS6CKX5L",
      "phone": {
        "phone_number": {
          "national_number": "0111111111"
        }
      },
      "address": {
        "country_code": "XX"
      }
    },
    "update_time": "2019-08-14T12:44:13Z",
    "links": [
      {
        "href": "https:\/\/api.sandbox.paypal.com\/v2\/checkout\/orders\/91K02466UY433503E",
        "rel": "self",
        "method": "GET"
      }
    ],
    "status": "COMPLETED"
  },
  "headers": {
    "": "",
    "Date": "Fri, 16 Aug 2019 06",
    "Server": "Apache",
    "paypal-debug-id": "557573ed4e5b2",
    "HTTP_X_PP_AZ_LOCATOR": "sandbox.slc",
    "Paypal-Debug-Id": "557573ed4e5b2",
    "Set-Cookie": "X-PP-SILOVER=; Expires=Thu, 01 Jan 1970 00",
    "Vary": "Authorization",
    "Content-Length": "2339",
    "Connection": "close",
    "Content-Type": "application\/json"
  }
}


</script>

<script>
// return actions.order.capture().then(function(details){
//     console.log(details);
// });

// below is details Obejct;
{
    "create_time": "2021-04-04T13:57:06Z",
    "update_time": "2021-04-04T13:59:19Z",
    "id": "1JP17190M1803114S",
    "intent": "CAPTURE",
    "status": "COMPLETED",
    "payer": {
        "email_address": "sb-iybqo5810866@personal.example.com",
        "payer_id": "K8J22AYH7G268",
        "address": {
            "country_code": "US"
        },
        "name": {
            "given_name": "John",
            "surname": "Doe"
        }
    },
    "purchase_units": [
        {
            "reference_id": "default",
            "amount": {
                "value": "8.00",
                "currency_code": "USD"
            },
            "payee": {
                "email_address": "sb-qvnsy5816158@business.example.com",
                "merchant_id": "Y6RM39ULEXLUY"
            },
            "shipping": {
                "name": {
                    "full_name": "John Doe"
                },
                "address": {
                    "address_line_1": "1 Main St",
                    "admin_area_2": "San Jose",
                    "admin_area_1": "CA",
                    "postal_code": "95131",
                    "country_code": "US"
                }
            },
            "payments": {
                "captures": [
                    {
                        "status": "COMPLETED",
                        "id": "3G332188HD628363C",
                        "final_capture": true,
                        "create_time": "2021-04-04T13:59:19Z",
                        "update_time": "2021-04-04T13:59:19Z",
                        "amount": {
                            "value": "8.00",
                            "currency_code": "USD"
                        },
                        "seller_protection": {
                            "status": "ELIGIBLE",
                            "dispute_categories": [
                                "ITEM_NOT_RECEIVED",
                                "UNAUTHORIZED_TRANSACTION"
                            ]
                        },
                        "links": [
                            {
                                "href": "https://api.sandbox.paypal.com/v2/payments/captures/3G332188HD628363C",
                                "rel": "self",
                                "method": "GET",
                                "title": "GET"
                            },
                            {
                                "href": "https://api.sandbox.paypal.com/v2/payments/captures/3G332188HD628363C/refund",
                                "rel": "refund",
                                "method": "POST",
                                "title": "POST"
                            },
                            {
                                "href": "https://api.sandbox.paypal.com/v2/checkout/orders/1JP17190M1803114S",
                                "rel": "up",
                                "method": "GET",
                                "title": "GET"
                            }
                        ]
                    }
                ]
            }
        }
    ],
    "links": [
        {
            "href": "https://api.sandbox.paypal.com/v2/checkout/orders/1JP17190M1803114S",
            "rel": "self",
            "method": "GET",
            "title": "GET"
        }
    ]
}
</script>

