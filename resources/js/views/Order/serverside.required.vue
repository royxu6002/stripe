<script>
 // console.log(details);
                        // this.customer.transaction_id =  details.purchase_units[0].payments.captures[0].id;
                        // this.customer.total = details.purchase_units[0].amount;

                        // this.customer.cart = JSON.stringify(this.$store.state.cart);

                        // this.customer.email = details.payer.email_address;
                        // this.cutomer.name = details.purchase_units[0].shipping.name.full_name;
                        // this.cutomer.address = details.purchase_units[0].shipping.address.address_line_1 + details.purchase_units[0].shipping.address.address_line_2;
                        // this.customer.city = details.purchase_units[0].shipping.address.admin_area_2;
                        // this.customer.state = details.purchase_units[0].shipping.address.admin_area_1;
                        // this.cutomer.zip_code = details.purchase_units[0].shipping.address.postal_code;
                        // this.cusotmer.country = details.purchase_units[0].shipping.address.country_code;

                        
</script>

<script>

onApprove: function(data, actions) {
    // Authorize the transaction
    actions.order.authorize().then(function(authorization) {

        // Get the authorization id
        var authorizationID = authorization.purchase_units[0].payments.authorizations[0].id

        // Call your server to validate and capture the transaction
        return fetch('/paypal-transaction-complete', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                orderID: data.orderID,
                authorizationID: authorizationID
            })
        });
    })

    // This function captures the funds from the transaction.
    return actions.order.capture().then(function(details) {
        // This function shows a transaction success message to your buyer.
        alert('Transaction completed by ' + details.payer.name.given_name);
    });
}



</script>

