function getDataForSearch() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Contatos");
  return ws.getRange(2,1,ws.getLastRow()-1,7).getValues();
}

function deleteById(id){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Contatos");
  const custIds = ws.getRange(2,1,ws.getLastRow()-1,1).getValues().map(r => r[0].toString().toLowerCase());
  const posIndex = custIds.indexOf(id.toString().toLowerCase());
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  ws.deleteRow(rowNumber)
}

function getCustomerById(id){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Contatos");
  const custIds = ws.getRange(2,1,ws.getLastRow()-1,1).getValues().map(r => r[0].toString().toLowerCase());
  const posIndex = custIds.indexOf(id.toString().toLowerCase());
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  // init
  const customerInfo = ws.getRange(rowNumber,1,1,7).getValues()[0] ;
  return {custId: customerInfo[0], 
  branch:customerInfo[1], 
  workFunction:customerInfo[2], 
  name:customerInfo[3], 
  email:customerInfo[4],
  phone1:customerInfo[5],
  phone2:customerInfo[6]
  }
}


function editCustomerById(id,customerInfo){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Contatos");
  const custIds = ws.getRange(2,1,ws.getLastRow()-1,1).getValues().map(r => r[0].toString().toLowerCase());
  const posIndex = custIds.indexOf(id.toString().toLowerCase());
  const rowNumber = posIndex === -1 ? 0 : posIndex + 2;
  // init
  ws.getRange(rowNumber,2,1,6).setValues([[
  customerInfo.branch,
  customerInfo.workFunction,
  customerInfo.name,
  customerInfo.email,
  customerInfo.phone1,
  customerInfo.phone2
  ]]) ;
  return true;
}
function addCustomer(customerInfo){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ws = ss.getSheetByName("Contatos");
  var uniqueIDs = ws.getRange(2,1,ws.getLastRow()-1,1).getValues();
  var maxNum = 0;
  uniqueIDs.forEach(r =>{
    maxNum = r[0] > maxNum ? r[0] : maxNum
  });
  var newID = maxNum +1;
  ws.appendRow([
    newId,
    customerInfo.branch,
    customerInfo.workFunction,
    customerInfo.name,
    customerInfo.email,
    customerInfo.phone1,
    customerInfo.phone2
    ]) ;
}