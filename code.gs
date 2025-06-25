function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var data = sheet.getDataRange().getValues();
  var redirectUrl = 'https://nexgeno.in/';
  var scriptUrl = "";    // Update if needed
  

  for (var i = 1; i < data.length; i++) {
    try {
      var name = data[i][0];            // Column A - Name
      var email = data[i][1];           // Column B - Email
      var cc1 = data[i][2];             // Column C - CC1
      var cc2 = data[i][3];             // Column D - CC2
      var subject = data[i][4];         // Column E - Subject
      var destinationUrl = data[i][5];  // Column F - Destination URL
      var htmlContent = data[i][10];    // Column K - Custom HTML Body

      if (!email) continue;

      var trackingId = Utilities.getUuid();
      var trackingPixelUrl = scriptUrl + "?id=" + trackingId + "&action=open";
      var clickTrackingUrl = scriptUrl + "?id=" + trackingId + "&action=click&redirect=" + encodeURIComponent(destinationUrl);


      sheet.getRange(i + 1, 7).setValue(trackingId); // Store tracking ID in Column G

      if (!htmlContent || typeof htmlContent !== 'string') {
        throw new Error("Invalid or empty HTML content in column K");
      }

      // Replace placeholders in HTML template
      var body = htmlContent
        .replace(/{{click-tracking-url}}/g, clickTrackingUrl)
        .replace(/{{name}}/g, name)
        .replace(/{{tracking-pixel-url}}/g, trackingPixelUrl);


      var ccEmails = [cc1, cc2].filter(Boolean).join(",");

      MailApp.sendEmail({
        to: email,
        cc: ccEmails || "",
        subject: subject,
        htmlBody: body
      });

      Logger.log("Email sent to: " + name);
    } catch (error) {
      Logger.log("Error sending email to row " + (i + 1) + ": " + error.toString());
    }
  }
}
