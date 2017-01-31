angular.module("coresourcePage")
.service("mainServ", function($http){

  this.solutionsinfo = [{
    photo: "./pics/pumpjack-591934_1920.edited.jpg",
    title: "Operational Solutions",
    list1: "Well pressure improved;",
    list2: "Less equipment downtime;",
    list3: "Operations completed utilizing water available from treatment process;",
    list4: "Reduction in truck traffic and water disposal issues;",
    list5: "Less operational capital deployed leaves development capital for lease;",
    list6: "Clean wells result in increased fluid flow efficiency;",
    list7: "Operators spend less time with downhole and operational issues if water management resolved."
  },{
    photo: "./pics/pexels-photo-164592_edited.jpeg",
    title: "Cost Solutions",
    list1: "Forty trucks per week at $4.50 per bbl of produced water...",
    list2: "After CoRe system installation, zero;",
    list3: "Water from CoRe process used in drilling...",
    list4: "Using CoRe system saves $30-40,000 in water costs;",
    list5: "Well economic with ALL IN costs of water management PLUS ALL lease operations at $40 oil;",
    list6: "Water management has increased reserve life index of well;",
    list7: "Capital cost of unit is pennies per bbl over 5 year amortization;",
    list8: "SIGNIFICANT cost savings measured against drilling disposal well;",
    list9: "Landowners see land values increase due to steady supply of water;​",
    list10: "Completion costs reduced utilizing processed water for operations."
  },{
    photo: "./pics/pexels-photo-29818.jpg",
    title: "Environmental Solutions",
    list1: "Wetlands construction saves significant cost over time via surface discharge;",
    list2: "Positive relationship with environment provides a positive relationship with landowners;",
    list3: "Regulatory compliance leads to increased production opportunities and less paperwork;",
    list4: "Positive corporate image;",
    list5: "Wetlands provides access to water for operational reuse;",
    list6: "Water is available for agricultural use, waste is composted;",
    list7: "ZERO WASTE lease has significant a financial impact on the bottom line."

  }];

});
