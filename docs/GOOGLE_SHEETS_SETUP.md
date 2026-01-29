# Google Sheets Integration Setup

This guide explains how to set up Google Sheets integration for the "Support Us" and "Join Us" forms with email notifications.

## Step 1: Create Google Sheets

1. Go to [Google Sheets](https://sheets.google.com)
2. Create two new spreadsheets:
   - **Team ZENITH - Join Applications**
   - **Team ZENITH - Support Requests**

---

## Step 2: Set Up Join Form Script

1. Open your **Join Applications** spreadsheet
2. Click **Extensions** → **Apps Script**
3. Delete any existing code and paste the following:

```javascript
// ========== CONFIGURATION ==========
// Add email addresses to receive notifications (comma-separated)
var NOTIFICATION_EMAILS = 'your-email@example.com'; // Change this!
var TEAM_NAME = 'Team ZENITH';
// ===================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the data
    var data;
    if (e.parameter && e.parameter.data) {
      data = JSON.parse(e.parameter.data);
    } else if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      throw new Error('No data received');
    }
    
    // Format timestamp
    var timestamp = data.timestamp ? new Date(data.timestamp) : new Date();
    var formattedDate = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm:ss");
    
    // Add row with separate columns for each field
    var row = [
      formattedDate,           // Column A: Timestamp
      data.name || '',         // Column B: Name
      data.email || '',        // Column C: Email
      data.phone || '',        // Column D: Phone
      data.department || '',   // Column E: Department
      data.year || '',         // Column F: Year
      data.preferredTeam || '',// Column G: Preferred Team
      data.skills || '',       // Column H: Skills
      data.motivation || '',   // Column I: Motivation
      data.portfolio || ''     // Column J: Portfolio
    ];
    
    sheet.appendRow(row);
    
    // Send email notification
    sendJoinNotification(data, formattedDate);
    
    // Return success
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Join application submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendJoinNotification(data, timestamp) {
  try {
    var subject = '🚀 New Join Application - ' + TEAM_NAME;
    
    var htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #E34333, #A41C14); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Team Application</h1>
        </div>
        <div style="padding: 20px; background: #f9f9f9;">
          <h2 style="color: #333; border-bottom: 2px solid #E34333; padding-bottom: 10px;">Applicant Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td><td>${data.name || 'N/A'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${data.email}">${data.email || 'N/A'}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${data.phone || 'N/A'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Department:</td><td>${data.department || 'N/A'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Year:</td><td>${data.year || 'N/A'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Preferred Team:</td><td>${data.preferredTeam || 'N/A'}</td></tr>
          </table>
          
          <h3 style="color: #333; margin-top: 20px;">Skills</h3>
          <p style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #E34333;">${data.skills || 'N/A'}</p>
          
          <h3 style="color: #333;">Motivation</h3>
          <p style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #E34333;">${data.motivation || 'N/A'}</p>
          
          ${data.portfolio ? '<h3 style="color: #333;">Portfolio</h3><p><a href="' + data.portfolio + '">' + data.portfolio + '</a></p>' : ''}
          
          <p style="color: #666; font-size: 12px; margin-top: 20px;">Submitted on: ${timestamp}</p>
        </div>
      </div>
    `;
    
    MailApp.sendEmail({
      to: NOTIFICATION_EMAILS,
      subject: subject,
      htmlBody: htmlBody
    });
  } catch (error) {
    console.error('Email notification failed:', error);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'ok',
    message: 'Join Form Service is running'
  })).setMimeType(ContentService.MimeType.JSON);
}

// Run this function ONCE to set up headers
function setupHeaders() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var headers = ['Timestamp', 'Name', 'Email', 'Phone', 'Department', 'Year', 'Preferred Team', 'Skills', 'Motivation', 'Portfolio'];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.setFrozenRows(1);
}
```

4. **Important**: Change `NOTIFICATION_EMAILS` at the top to your email address
5. Click **Save** (Ctrl+S)

---

## Step 3: Set Up Support Form Script

1. Open your **Support Requests** spreadsheet
2. Click **Extensions** → **Apps Script**
3. Delete any existing code and paste the following:

```javascript
// ========== CONFIGURATION ==========
// Add email addresses to receive notifications (comma-separated)
var NOTIFICATION_EMAILS = 'your-email@example.com'; // Change this!
var TEAM_NAME = 'Team ZENITH';
// ===================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the data
    var data;
    if (e.parameter && e.parameter.data) {
      data = JSON.parse(e.parameter.data);
    } else if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      throw new Error('No data received');
    }
    
    // Format timestamp
    var timestamp = data.timestamp ? new Date(data.timestamp) : new Date();
    var formattedDate = Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm:ss");
    
    // Map support type to readable label
    var supportTypeLabels = {
      'financial': 'Financial Sponsorship',
      'inkind': 'In-Kind Contribution',
      'mentorship': 'Technical Mentorship',
      'partnership': 'Corporate Partnership',
      'other': 'Other'
    };
    var supportTypeLabel = supportTypeLabels[data.supportType] || data.supportType || '';
    
    // Add row with separate columns for each field
    var row = [
      formattedDate,           // Column A: Timestamp
      data.name || '',         // Column B: Name
      data.email || '',        // Column C: Email
      data.phone || '',        // Column D: Phone
      data.organization || '', // Column E: Organization
      data.website || '',      // Column F: Website
      supportTypeLabel,        // Column G: Support Type
      data.message || ''       // Column H: Message
    ];
    
    sheet.appendRow(row);
    
    // Send email notification
    sendSupportNotification(data, formattedDate, supportTypeLabel);
    
    // Return success
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Support request submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendSupportNotification(data, timestamp, supportTypeLabel) {
  try {
    var subject = '💖 New Support Request - ' + TEAM_NAME;
    
    var typeEmoji = {
      'Financial Sponsorship': '💰',
      'In-Kind Contribution': '🔧',
      'Technical Mentorship': '🎓',
      'Corporate Partnership': '🤝',
      'Other': '📋'
    };
    var emoji = typeEmoji[supportTypeLabel] || '📋';
    
    var htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #E34333, #A41C14); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">${emoji} New Support Request</h1>
        </div>
        <div style="padding: 20px; background: #f9f9f9;">
          <div style="background: #E34333; color: white; padding: 10px 15px; border-radius: 8px; display: inline-block; margin-bottom: 20px;">
            <strong>Support Type:</strong> ${supportTypeLabel}
          </div>
          
          <h2 style="color: #333; border-bottom: 2px solid #E34333; padding-bottom: 10px;">Contact Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Name:</td><td>${data.name || 'N/A'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td><a href="mailto:${data.email}">${data.email || 'N/A'}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${data.phone || 'N/A'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Organization:</td><td>${data.organization || 'N/A'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Website:</td><td>${data.website ? '<a href="' + data.website + '">' + data.website + '</a>' : 'N/A'}</td></tr>
          </table>
          
          <h3 style="color: #333; margin-top: 20px;">Message</h3>
          <p style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #E34333;">${data.message || 'N/A'}</p>
          
          <p style="color: #666; font-size: 12px; margin-top: 20px;">Submitted on: ${timestamp}</p>
        </div>
      </div>
    `;
    
    MailApp.sendEmail({
      to: NOTIFICATION_EMAILS,
      subject: subject,
      htmlBody: htmlBody
    });
  } catch (error) {
    console.error('Email notification failed:', error);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'ok',
    message: 'Support Form Service is running'
  })).setMimeType(ContentService.MimeType.JSON);
}

// Run this function ONCE to set up headers
function setupHeaders() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var headers = ['Timestamp', 'Name', 'Email', 'Phone', 'Organization', 'Website', 'Support Type', 'Message'];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.setFrozenRows(1);
}
```

4. **Important**: Change `NOTIFICATION_EMAILS` at the top to your email address
5. Click **Save** (Ctrl+S)

---

## Step 4: Deploy the Scripts

For **each** spreadsheet (Join and Support):

1. Select `setupHeaders` from the function dropdown and click ▶️ **Run**
   - Authorize when prompted (first time only)
   
2. Click **Deploy** → **New deployment**

3. Configure:
   - Type: **Web app**
   - Description: "Form Handler with Email"
   - Execute as: **Me**
   - Who has access: **Anyone**

4. Click **Deploy**

5. **Copy the Web App URL** (ends with `/exec`)

---

## Step 5: Configure Environment Variables

Create/update `.env.local` in your project root:

```env
NEXT_PUBLIC_GOOGLE_SHEETS_JOIN_URL=https://script.google.com/macros/s/YOUR_JOIN_SCRIPT_ID/exec
NEXT_PUBLIC_GOOGLE_SHEETS_SUPPORT_URL=https://script.google.com/macros/s/YOUR_SUPPORT_SCRIPT_ID/exec
```

Replace with your actual deployment URLs.

---

## Step 6: Restart Development Server

```bash
npm run dev
```

---

## Troubleshooting

### Emails not sending?
1. Run `setupHeaders` first to trigger authorization
2. Check spam/junk folder
3. Verify `NOTIFICATION_EMAILS` is set correctly in the script
4. Google has a daily email quota (100/day for free accounts)

### Form not submitting?
1. Check browser console for errors
2. Verify the deployment URL is correct
3. Make sure you created a **New deployment** after code changes
4. Test the URL directly: `https://your-script-url/exec` should return `{"status":"ok",...}`

### CORS errors?
1. Create a **New deployment** (not update existing)
2. Ensure "Who has access" is set to "Anyone"

## Step 4: Test the Forms

1. Restart your development server: `npm run dev`
2. Test both forms by submitting sample data
3. Check the Google Sheets to verify data is being recorded

## Troubleshooting

### Form submits but no data in sheet
- Verify the Web App URL is correct
- Check that the sheet column headers match the expected fields
- Ensure the Apps Script is deployed as "Anyone" can access

### CORS Errors
- The forms use `mode: 'no-cors'` which bypasses CORS but means we can't read the response
- The form will show success even if there's an error on the server side
- Check the Google Apps Script execution logs for errors

### Re-deploying Changes
If you modify the Apps Script:
1. Click **Deploy** → **Manage deployments**
2. Edit the existing deployment
3. Change version to **New version**
4. Click **Deploy**

## Security Notes

- The Web App URLs are public - anyone with the URL can submit data
- Consider adding validation in the Apps Script
- Regularly review submissions for spam
- You can add reCAPTCHA integration for additional security
