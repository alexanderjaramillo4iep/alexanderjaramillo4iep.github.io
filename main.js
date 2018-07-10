console.log("funciona!");
let findImg = image_urls => {
	const target = document.getElementById("imgs");
	for (const image_url of image_urls) {

		var img = new Image();
		img.onload = () => console.log;
		img.onerror = () => console.log;
		img.src = image_url;
		//`data:${type};base64,${data.toString("base64")}`;

		target.parentNode.insertBefore(img, target.nextSibling);
	}
};
findImg([
  "https://lh3.googleusercontent.com/mo0dz0KAial55miWupiK1GcxM4sluUrkjQBe1_0xhbF9gzYVLYorD8AaXTmW2ZkxE68dTVm95eRx-g-OKAqdLxfx4iRm742jmGxCOCOilbpZJbvzR776OEIVf7XjeqvDmcaUNAOCbw=w400",
  "https://lh3.googleusercontent.com/SeXfGnnDLpEUs_LF73B3IcEohbxww8pq4A1Qrq869Cs56CAJXQGuXnWy3gSiC2q6jQNM-c9dftiqixYq9BAq6cBAMsN5LXOk5vYabqDj7l1XprAUanzDXsmreRbYQTye0SwYWSIxJQ=w400",
  "https://lh3.googleusercontent.com/zVI2-WFQsif5-Oqawl5UOVQ9sseLFwYie-ZBVZrSrNTaaWx64CdpueQpHUfK2lEGPKiw68oGcTuepmAkFUhDshiI1dWK6atjBxbvJAoUag-Z-Gc00LVSydlrTGUYiyVBppNQn-nHyQ=w400",
  "https://lh3.googleusercontent.com/Oi9Qbr_EKudkICSSfcKL44TCkCMXiIKIIpHGeNAW5A8s6y1nM5_sy-A6ClFJVqzw2EY9w_TMzvwaRDhevrzyHYTz9sATUlVLAGthINzmxff-f4Z48F7D7Ec8xMYsvADSkTFug8Bf_A=w400",
  /* "",
  "" */
]);
