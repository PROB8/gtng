import React, { Component } from 'react';
import AlertDialog from '../AlertDialog/AlertDialog';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

import styles from './ButtonsComponent.module.css';

class ButtonsComponent extends Component {
    state = {
		qty: 1,
		dialogOpen: false,
		dialogText: 'Please wait while we process your order...',
		isSpinning: true,
		dialogTitle: 'Processing your order!'
    };

    componentDidMount = () => {
        window.onload = this.setUpPayment();
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
	
	createOrder = () => {
		const shippingCost = this.determineShipping();
		const valueNoShipping = this.state.qty * 22;
		const valueWithShipping = valueNoShipping + shippingCost;
		return {
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
		}
	}

	toggleOpen = () => {
		this.setState({ dialogOpen: !this.state.dialogOpen })
	}

    setUpPayment = () => {
		//* do this because we need to recreate the buttons after we update
		//* the quantity. this is because the new quantity needs to be attached
		//* to a new button(s)
        document.getElementById('paypal-button-container').innerHTML = '';
		const me = this; //* you need this to keep the context of this in the event handlers
        window.paypal.Buttons({
			style: {
				shape: "pill",
				color: "blue",
				layout: "vertical",
				label: "buynow",
			},
			createOrder:  (_data, actions) => actions.order.create(this.createOrder()),

			onApprove: (_data, actions) => {
				me.setState({ dialogOpen: true});
				return actions.order.capture().then( details => {
					const itemOrItems = this.state.qty > 1 ? 'books' : 'book';
					const dialogText = `Thank you for your purchase 
						${details.payer.name.given_name}! 
						We will be shipping your ${itemOrItems} 
						within two business days. 
						Your orderId is ${details.id}.
					`;
					const dialogTitle = 'Order Processed!';
					me.setState({ 
						dialogText,
						isSpinning: false,
						dialogTitle,
				    });
					me.changeQuantity();
				});
			},

			onError: err => {
				me.setUpPayment();
				const dialogText = `Hey there! 
					While we are thankful for your effort to 
					support us, we are experiencing an issue 
					processing your payment. Please try again.
				`;
				const dialogTitle = 'Unable to process!'
				me.setState({ 
					dialogText,
					dialogOpen: true,
					isSpinning: false,
					dialogTitle,
				});
				console.error(err);
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
		const { dialogText, isSpinning, dialogOpen, dialogTitle } = this.state;
		
        return (
            <div>
				<AlertDialog 
					open={ dialogOpen }
					dialogText={ dialogText }
					isSpinning={ isSpinning}
					dialogTitle={ dialogTitle }
					toggleOpen={ this.toggleOpen }
				/>
				<div className={styles.amountsSection}>
					<QuantitySelector
						qty={ this.state.qty }
						updateQuantity={ this.changeQuantity }
					/>
					<div className={ styles.total }>
						<p>Total:</p> 
						<p>${ total }</p>
					</div>
				</div>
                <div id='smart-button-container'>
                    <div className={ styles.wrapper }>
                        <div id='paypal-button-container'
                             style={ payPalButtonCtnrStyles }
                        ></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ButtonsComponent;
