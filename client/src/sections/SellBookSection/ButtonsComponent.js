import React, { Component, useEffect } from "react";
import styles from "./ButtonsComponent.module.css";
import QuantitySelector from './QuantitySelector';


class ButtonsComponent extends Component {
	state = {
		qty: 1
	}

	componentDidMount() {
		this.initPayPalButton();
	}

	initPayPalButton() {
		window.paypal.Buttons({style: {
			shape: 'pill',
			color: 'blue',
			layout: 'vertical',
			label: 'paypal',
		}}).render('#paypal-button-container');
	}

	setUpPayment() {
		let shippingCost = 6;
		if (this.state.qty > 1 && this.state.qty < 10) {
			shippingCost = 12;
		}

		if (this.state.qty > 10 && this.state.qty < 30) {
			shippingCost = 25;
		}

		if (this.state.qty > 30 ) {
			shippingCost = 45;
		}
		console.log('LOOK A HERE ',shippingCost)
		window.paypal.Buttons({
			createOrder: function (_data, actions) {
			return actions.order.create({
				purchase_units: [
				{
					description:
					'Program Your Life: Lessons of a Software Engineer (paperback)\n\nMemoir of Naeem Gitonga\'s journey from logistics to engineering.',
					amount: {
					currency_code: "USD",
					value: (this.state.qty * 22) + shippingCost,
					breakdown: {
						item_total: { currency_code: "USD", value: this.state.qty * 22 },
						shipping: { currency_code: "USD", value: shippingCost },
						tax_total: { currency_code: "USD", value: 0 },
					},
					},
				},
				],
			});
			},

			onApprove: function (_data, actions) {
				return actions.order.capture().then(function (details) {
					alert(
						"Transaction completed by " + details.payer.name.given_name + "!"
					);
				});
			},

			onError: function (err) {
				console.log(err);
			},
		})
	}

	changeQuantity = (e) => {
		console.log('%cUPdateing', 'color: lime;font-size:50px')
		console.log(this)
		this.setState({qty: e.target.value});
		this.setUpPayment();
	}

	render() {
		const payPalButtonCtnrStyles = {
			minWidth: 'unset',
			maxWidth: '300px',
			margin: 'auto'
		}
		return (
			<div>
				<QuantitySelector qty={this.state.qty} updateQuantity={this.changeQuantity}/>
				<div id='smart-button-container'>
					<div className={styles.wrapper}>
						<div id='paypal-button-container' style={payPalButtonCtnrStyles}></div>
					</div>
				</div>
			</div>
		);
	}
}

export default ButtonsComponent;
