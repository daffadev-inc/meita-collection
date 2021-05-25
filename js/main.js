simpleCart({
	cartColumns: [
{ attr: "thumb", label: false, view: "thumb" },
{ attr: "name", label: false, view: "link" },
{ view: "remove", text: false, label: !1 },
{ attr: "color", label: 'Warna', view: "color" },
{ attr: "model", label: 'Model', view: "model" },
{ view: "decrement", label: false },
{ attr: "quantity", label: 'Jumlah', view: "jumlah" },
{ view: "increment", label: false },
{ attr: "total", label: false, view: "currency" },
{ attr: "link", label: false, view: "link" },
],
	currency: "IDR",
});
