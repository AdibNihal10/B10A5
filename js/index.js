document.getElementById("donate").addEventListener("click", function (event) {
  event.preventDefault();
  const donationAmount = document.getElementById("donationamount").value;
  const parDonation = parseFloat(donationAmount);
  const finalAmount = document.getElementById("totalAmount").innerText;
  const parFinal = parseFloat(finalAmount);
  if (!isNaN(donationAmount) && parFinal > parDonation) {
    const donatedAmount = document.getElementById("donatedAmount").innerText;
    const parDonatedAmount = parseFloat(donatedAmount);
    const totalValue = parDonatedAmount + parDonation;
    const finaValue = parFinal - parDonation;
    console.log(totalValue, finaValue);
    document.getElementById("totalAmount").innerText = finaValue;
    document.getElementById("donatedAmount").innerText = totalValue;
  } else {
    alert("Correct Amount den mia");
  }
});
