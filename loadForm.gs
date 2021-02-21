function doGet(){
  const htmlServ = HtmlService.createTemplateFromFile("main");
  return html = htmlServ.evaluate().setTitle('Quem é quem? - 2021');
}

function loadMainForm () {
  
  const htmlServ = HtmlService.createTemplateFromFile("main");
  const html = htmlServ.evaluate();
  html.setWidth(1250).setHeight(1000);
  const ui = SpreadsheetApp.getUi();
  ui.showModalDialog(html, "Quem é Quem?");
}

function createMenu_(){

  const ui = SpreadsheetApp.getUi();
  const menu =ui.createMenu("Custom Menu");
  menu.addItem("Open Form","loadMainForm")
  menu.addToUi();
}

function onOpen(){
  createMenu_();
}





// // function loadMainForm () {
  

// // }

// // function createMenu(){

// //   const ui = SpreadsheetApp.getUi();
// //   const menu =ui.createMenu("Custom Menu");
// //   menu.addItem("Open Form","loadMainForm")
// //   menu.addToUi();
// // }

// // function onOpen(){
// //   //const ui = SpreadsheetApp.getUi();
// //   const htmlServ = HtmlService.createTemplateFromFile("main");
// //   const html = htmlServ.evaluate();
// //   html.setWidth(850).setHeight(600);
// //   const ui = SpreadsheetApp.getUi();
// //   ui.showModalDialog(html, "Quem é Quem?");
// // }