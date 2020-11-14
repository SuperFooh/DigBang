export default (value, locale ="de-AT" ) => {
    const number = !!parseInt(value) ? value : 0
	return new Intl.NumberFormat(locale, {
		style: "currency",
		currency: "USD",
		currencyDisplay: "narrowSymbol",
		maximumFractionDigits: 0,
        minimumFractionDigits: 0,
	}).format(number);
}