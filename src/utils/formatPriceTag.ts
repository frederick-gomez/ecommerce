export default function formatPriceTag(num: number) {
	return new Intl.NumberFormat('es-PY', {
		style: 'currency',
		currency: 'PYG',
		currencyDisplay: 'narrowSymbol',
	}).format(num);
}
