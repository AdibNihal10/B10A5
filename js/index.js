function getInputValue(
  DonationId,
  finalAmountId,
  donatedAmountID,
  cardTitleId
) {
  const donationAmount = document.getElementById(DonationId).value;
  const parDonation = parseFloat(donationAmount);
  const finalAmount = document.getElementById(finalAmountId).innerText;
  const parFinal = parseFloat(finalAmount);
  if (!isNaN(donationAmount) && parFinal >= parDonation && parDonation > 0) {
    const donatedAmount = document.getElementById(donatedAmountID).innerText;
    const parDonatedAmount = parseFloat(donatedAmount);
    const totalValue = parDonatedAmount + parDonation;
    const finaValue = parFinal - parDonation;
    console.log(totalValue, finaValue);
    document.getElementById(finalAmountId).innerText = finaValue;
    document.getElementById(donatedAmountID).innerText = totalValue;
    document.getElementById(DonationId).value = " ";

    //creating
    const p = document.createElement("div");
    p.classList.add(
      "border",
      "rounded-lg",
      "shadow-xl",
      "border-gray-300",
      "p-8",
      "my-5"
    );
    const title = document.getElementById(cardTitleId).innerText;
    p.innerHTML = `

     <p class='lexend-font'>${parDonation} Taka is Donated for ${title}  </p>

     <p class='mt-5'> Date: ${new Date()} </p>
    
    
    `;
    const pp = document.getElementById("history").appendChild(p);
    console.log(pp);

    return totalValue, finaValue, pp;
  } else {
    return alert(
      "Please Enter Correct Value/Check whether you have sufficient funds to donate"
    );
  }
}
function showSectionbyID(id) {
  document.getElementById("transactions").classList.add("hidden");
  document.getElementById("history").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}

document.getElementById("donationBtn").addEventListener("click", function () {
  document.getElementById("donationBtn").style.backgroundColor = "#B4F461";
  document.getElementById("historyBtn").style.backgroundColor = "lightgray";

  document.getElementById("historyBtn").style.borderRadius = "8px";

  showSectionbyID("transactions");
});

document.getElementById("historyBtn").addEventListener("click", function () {
  document.getElementById("historyBtn").style.backgroundColor = "#B4F461";
  document.getElementById("historyBtn").style.border = "none";
  document.getElementById("donationBtn").style.backgroundColor = "lightgray";
  showSectionbyID("history");
});

//donation section
document.getElementById("donate").addEventListener("click", function (event) {
  event.preventDefault();
  const result = getInputValue(
    "donationamount",
    "totalAmount",
    "donatedAmount",
    "card-title2"
  );
  if (result) {
    document.getElementById("my_modal_5").showModal();
  }
});

document.getElementById("Feni-btn").addEventListener("click", function (event) {
  event.preventDefault();

  const result = getInputValue(
    "Feni-donation",
    "totalAmount",
    "feni-donated",
    "card-title1"
  );

  if (result) {
    document.getElementById("my_modal_5").showModal();
  }
});
document.getElementById("Quota").addEventListener("click", function (event) {
  event.preventDefault();

  const result = getInputValue(
    "quota-Amount",
    "totalAmount",
    "quota-donated",
    "card-title3"
  );
  if (result) {
    document.getElementById("my_modal_5").showModal();
  }
});

document.addEventListener("scroll", function () {
  const inDiv = document.getElementById("divclass");

  if (document.documentElement.scrollTop > 50) {
    inDiv.classList.remove(
      "bg-gradient-to-r",
      "from-cyan-200",
      "to-yellow-200"
    );
    inDiv.classList.add("bg-opacity-0");
  } else {
    inDiv.classList.add("bg-gradient-to-r", "from-cyan-200", "to-yellow-200");
    inDiv.classList.remove("bg-opacity-0");
  }
});
