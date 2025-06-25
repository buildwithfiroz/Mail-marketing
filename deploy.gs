function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var data = sheet.getDataRange().getValues();

  var trackingId = e.parameter.id;
  var action = e.parameter.action;
  var redirectUrl = e.parameter.redirect;

  Logger.log("Received request: " + JSON.stringify(e.parameters)); // Log incoming request

  if (trackingId && action) {
    Logger.log("Tracking ID: " + trackingId + ", Action: " + action);

    for (var i = 1; i < data.length; i++) {
      if (data[i][6] === trackingId) { // Column G (7th) contains Tracking ID
        Logger.log("Found matching tracking ID in row: " + (i + 1));

        if (action === "open") {
          var opened = sheet.getRange(i + 1, 8).getValue(); // Column H (8th)
          if (opened !== "Yes") {
            sheet.getRange(i + 1, 8).setValue("Yes");
          }
          var openCount = sheet.getRange(i + 1, 9).getValue() || 0; // Column I (9th)
          sheet.getRange(i + 1, 9).setValue(openCount + 1);
          Logger.log("Email opened by: " + trackingId);
        }

        if (action === "click") {
          var clickCount = sheet.getRange(i + 1, 10).getValue() || 0; // Column J (10th)
          sheet.getRange(i + 1, 10).setValue(clickCount + 1);
          Logger.log("Link clicked by: " + trackingId);
        }

        break;
      }
    }
  } else {
    Logger.log("Invalid request: Missing tracking ID or action.");
  }

  if (action === "click" && redirectUrl && redirectUrl.startsWith("http")) {
    return HtmlService.createHtmlOutput(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Redirecting...</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script>
            // Try auto-redirect (most platforms)
            window.onload = function() {
              setTimeout(() => {
                window.location.href = "${redirectUrl}";
              }, 500); // Small delay
            };
          </script>
        </head>
        <body style="font-family: sans-serif; text-align: center; padding-top: 50px;">
          <p>Redirecting you to <strong>${redirectUrl}</strong></p>
          <p>If you are not redirected automatically, <a href="${redirectUrl}">click here</a>.</p>
        </body>
      </html>
    `).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }





  return ContentService.createTextOutput(
    Utilities.base64Decode("R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==")
  ).setMimeType(ContentService.MimeType.GIF);
}
