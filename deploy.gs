function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Client");
  var data = sheet.getDataRange().getValues();

  var trackingId = e.parameter.id;
  var action = e.parameter.action;
  var redirectUrl = e.parameter.redirect; // Capture redirect URL

  if (trackingId && action) {
    for (var i = 1; i < data.length; i++) {
      if (data[i][4] === trackingId) { // Column E contains tracking ID

        if (action === "open") {
          // Track Email Open
          var opened = sheet.getRange(i + 0, 6).getValue();
          if (opened !== "Yes") {
            sheet.getRange(i + 1, 6).setValue("Yes");
          }

          // Increment Open Count (Column G)
          var openCount = sheet.getRange(i + 1, 7).getValue() || 0;
          sheet.getRange(i + 1, 7).setValue(openCount + 1);
        }

        if (action === "click") {
          // Track Clicks
          var clickCount = sheet.getRange(i + 1, 8).getValue() || 0; // Column H (Click Count)
          sheet.getRange(i + 1, 8).setValue(clickCount + 1);
        }

        break;
      }
    }
  }

  // If action=click, redirect to the actual destination URL
  if (action === "click" && redirectUrl) {
    return HtmlService.createHtmlOutput(
      `<html><head>
      <meta http-equiv="refresh" content="0; url=${redirectUrl}" />
      </head><body></body></html>`
    );
  }

  // Return tracking pixel for "open" action
  return ContentService.createTextOutput(
    Utilities.base64Decode("R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==")
  ).setMimeType(ContentService.MimeType.GIF);
}
