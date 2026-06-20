/**
 * GOOGLE APPS SCRIPT FOR CNEST CONTACT FORM
 * 
 * INSTRUCTIONS FOR DEPLOYMENT:
 * 1. Go to https://script.google.com/ and log in with the official Google account: cnest.mss@kletech.ac.in
 * 2. Create a new Google Sheet named "CNEST Website Contact Submissions" inside Google Drive.
 * 3. Inside the sheet, rename the active tab to "Submissions".
 * 4. Add the following header row in row 1:
 *    Timestamp | Name | Email | Phone | Subject | Message
 * 5. Open Apps Script from Extensions > Apps Script in the Google Sheet (or go directly to script.google.com and link it to the Sheet).
 * 6. Replace all existing code in the script editor with the code below.
 * 7. Click on the Deploy button (top right) > New deployment.
 * 8. Select type: "Web app".
 * 9. Set settings:
 *    - Description: CNEST Contact Form Backend
 *    - Execute as: Me (your cnest.mss@kletech.ac.in account)
 *    - Who has access: "Anyone" (crucial, otherwise submissions will fail)
 * 10. Click Deploy. Authorize access if prompted.
 * 11. Copy the "Web app URL" and paste it in `constants.tsx` as `CONTACT_FORM_ENDPOINT`.
 */

function doPost(e) {
  try {
    // Open active spreadsheet or link via ID if not container-bound
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Submissions") || 
                SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    
    var data = JSON.parse(e.postData.contents);
    
    var timestamp = new Date();
    var name = data.name;
    var email = data.email;
    var phone = data.phone || "N/A";
    var subject = data.subject || "General Inquiry";
    var message = data.message;
    
    // Append row: Timestamp, Name, Email, Phone, Subject, Message
    sheet.appendRow([timestamp, name, email, phone, subject, message]);
    
    // Send email notification to incubator team
    try {
      MailApp.sendEmail({
        to: "cnest.mss@kletech.ac.in",
        subject: "New CNEST Contact Submission: " + subject,
        body: "You have a new inquiry from the website.\n\n" +
              "Name: " + name + "\n" +
              "Email: " + email + "\n" +
              "Phone: " + phone + "\n" +
              "Subject: " + subject + "\n\n" +
              "Message:\n" + message
      });
    } catch(err) {
      // Ignore email errors to ensure sheet writing still succeeds
    }
    
    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");
      
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");
  }
}

// Handle CORS Preflight OPTIONS requests
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}
