import React, { Component, useEffect } from 'react';
import styles from './ButtonsComponent.module.css';
import QuantitySelector from './QuantitySelector';

class ButtonsComponent extends Component {
    state = {
        qty: 1,
    };

    componentDidMount = () => {
        this.setUpPayment();
    };

    determineShipping = () => {
        if (this.state.qty > 1 && this.state.qty < 10) {
            return 12;
        }

        if (this.state.qty >= 10 && this.state.qty < 30) {
            return 25;
        }

        if (this.state.qty >= 30) {
            return 45;
        }

        return 6;
    };

    setUpPayment = () => {
		//* do this because we need to recreate the buttons after we update
		//* the quantity. this is because the new quantity needs to be attached
		//* to a new button(s)
        document.getElementById('paypal-button-container').innerHTML = '';
        const me = this; //* you need this to keep the context of this in the event handlers
        let shippingCost = this.determineShipping();

        window.paypal.Buttons({
			style: {
				shape: "pill",
				color: "blue",
				layout: "vertical",
				label: "buynow",
			},
			createOrder:  (_data, actions) => {
				const valueNoShipping = this.state.qty * 22;
				const valueWithShipping = valueNoShipping + shippingCost;
				return actions.order.create({
					purchase_units: [
						{
							/**
							 * * we tried to use a template literal versus concatenation
							 * * but the paypal api will throw an error.
							 * * we also tried to use single quotes
							 * * paypal threw an error with single quotes too
							 */
							description: "Program Your Life: Lessons of a Software Engineer " +
								"(paperback)\n\nMemoir of Naeem Gitonga's journey " +
 								"from logistics to engineering.",
							amount: {
								currency_code: "USD",
								value: valueWithShipping,
								breakdown: {
									item_total: {
										currency_code: "USD",
										value: valueNoShipping,
									},
									shipping: {
										currency_code: "USD",
										value: shippingCost,
									},
									tax_total: {
										currency_code: "USD",
										value: 0,
									},
								},
							},
						},
					],
				});
			},

			onApprove: (_data, actions) => {
				return actions.order.capture().then( details => {
					console.log('%cDETAILS: ', 'color:lime; font-size:50px')
 
					console.log(details)
					me.changeQuantity();
					// * add a a snackbar to show this message
					alert(`Transaction completed by ${details.payer.name.given_name}!`);
				});
			},

			onError: err => {
				this.setUpPayment();
				// * add a a snackbar to show error message
				console.log(err);
			},
		}).render('#paypal-button-container');
    };

    changeQuantity = (e = { target: { value: 1 } }/* you need a default value for when this first loads */) => {
		//*	we use this.setUpPayment as a call back because we
		//* were having a race condition where the state wasn't 
		//* updated when we called this.setUpPayment after calling
		//* this.setState. 
        this.setState({ qty: e.target.value }, this.setUpPayment);
    };

    render() {
        const payPalButtonCtnrStyles = {
            minWidth: 'unset',
            maxWidth: '300px',
            margin: 'auto',
		};
		
		const total = (this.state.qty * 22) + this.determineShipping();
        return (
            <div>
				<div className={styles.amountsSection}>
					<QuantitySelector
						qty={this.state.qty}
						updateQuantity={this.changeQuantity}
					/>
					<div className={styles.total}>
						<p>Total:</p> 
						<p>${total}</p>
					</div>
				</div>
                <div id='smart-button-container'>
                    <div className={styles.wrapper}>
                        <div id='paypal-button-container'
                             style={payPalButtonCtnrStyles}
                        ></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ButtonsComponent;
