<script>
// detail from sandbox environment transaction;
{
    "create_time": "2021-04-05T18:48:58Z",
    "update_time": "2021-04-05T18:49:46Z",
    "id": "775591339Y060751H",
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
            "description": "Legros, Rosenbaum and Hamill Pants",
            "reference_id": "default",
            "soft_descriptor": "PAYPAL *JOHNDOESTES",
            "amount": {
                "value": "114.99",
                "currency_code": "USD",
                "breakdown": {
                    "item_total": {
                        "value": "114.99",
                        "currency_code": "USD"
                    },
                    "shipping": {
                        "value": "0.00",
                        "currency_code": "USD"
                    },
                    "handling": {
                        "value": "0.00",
                        "currency_code": "USD"
                    },
                    "insurance": {
                        "value": "0.00",
                        "currency_code": "USD"
                    },
                    "shipping_discount": {
                        "value": "0.00",
                        "currency_code": "USD"
                    }
                }
            },
            "payee": {
                "email_address": "sb-qvnsy5816158@business.example.com",
                "merchant_id": "Y6RM39ULEXLUY"
            },
            "items": [
                {
                    "name": "Legros, Rosenbaum and Hamill Pants",
                    "unit_amount": {
                        "value": "114.99",
                        "currency_code": "USD"
                    },
                    "tax": {
                        "value": "0.00",
                        "currency_code": "USD"
                    },
                    "quantity": "1",
                    "sku": "cle4"
                }
            ],
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
                        "id": "8MK468982G5992154",
                        "final_capture": true,
                        "create_time": "2021-04-05T18:49:46Z",
                        "update_time": "2021-04-05T18:49:46Z",
                        "amount": {
                            "value": "114.99",
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
                                "href": "https://api.sandbox.paypal.com/v2/payments/captures/8MK468982G5992154",
                                "rel": "self",
                                "method": "GET",
                                "title": "GET"
                            },
                            {
                                "href": "https://api.sandbox.paypal.com/v2/payments/captures/8MK468982G5992154/refund",
                                "rel": "refund",
                                "method": "POST",
                                "title": "POST"
                            },
                            {
                                "href": "https://api.sandbox.paypal.com/v2/checkout/orders/775591339Y060751H",
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
            "href": "https://api.sandbox.paypal.com/v2/checkout/orders/775591339Y060751H",
            "rel": "self",
            "method": "GET",
            "title": "GET"
        }
    ]
}
</script>
