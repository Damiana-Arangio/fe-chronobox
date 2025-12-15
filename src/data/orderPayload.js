const orderPayload = {
	method_id: 1, // per ora fisso
	session_id: null, // id di sessione se usa Stripe
	customer_name: `${billing.firstName} ${billing.lastName}`,
	customer_email: billing.email,
	shipping_address: `${shipping.address}, ${shipping.zip} ${shipping.city}, ${shipping.country}`,
	billing_address: `${billing.address}, ${billing.zip} ${billing.city}, ${billing.country}`,
	total_amount: cartTotal,
	status: "pending",
	items: cart.map((item) => ({
		capsule_id: item.id,
		quantity: item.quantity,
		unit_price: item.price,
		shipping_period: shippingDate, // "2026-01-01"
		letter_content: letterContent,
		discount_percentage: null,
	})),
};

export default orderPayload;
