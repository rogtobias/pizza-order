//--------------------------FRONTEND
$(document).ready(function() {
  $("#pizzaOrderForm").submit(function(event) {
    event.preventDefault();
    var inputtedCrust = $("#crust").val();
    var inputtedTopping = $("#topping").val();

    var order = new Pizza(inputtedCrust, inputtedTopping);

    $("#paymentDo").text(order.TotalCost());
  });
});

//--------------------------BACKEND
function Pizza(crust, topping) {
  this.crust = crust;
  this.topping = topping;
};

Pizza.prototype.TotalCost = function() {
  var payment = 0;
  debugger;
  if (this.crust === "regular") {
    payment += 10.99;
  }else if (this.crust === "large") {
    payment += 12.99;
  }else {
    payment += 14.99;
  }

  if (this.topping === "1") {
    payment += 2;
  }else if (this.topping === "2") {
    payment += 3;
  }else if (this.topping === "3") {
    payment += 4;
  }else if (this.topping === "4") {
    payment += 5;
  }else if (this.topping === "5") {
    payment += 4;
  }else if (this.topping === "6") {
    payment += 4;
  }else {
    payment += 5;
  }
  return payment;
};
