# Google Sheets Integration Setup

This guide explains how to set up Google Sheets integration for the "Support Us" and "Join Us" forms.

## Step 1: Create Google Sheets

1. Go to [Google Sheets](https://sheets.google.com)
2. Create two new spreadsheets:
   - **Team ZENITH - Join Applications**
   - **Team ZENITH - Support Requests**

### For Join Applications Sheet:
Add these column headers in Row 1:
| Timestamp | Name | Email | Phone | Department | Year | Preferred Team | Skills | Motivation | Portfolio |

### For Support Requests Sheet:
Add these column headers in Row 1:
| Timestamp | Name | Email | Phone | Organization | Support Type | Message | Website |

## Step 2: Create Google Apps Script

For each spreadsheet:

1. Click **Extensions** → **Apps Script**
2. Delete any existing code and paste the following:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // For Join Form
    if (data.type === 'join') {
      sheet.appendRow([
        data.timestamp || new Date().toISOString(),
        data.name || '',
        data.email || '',
        data.phone || '',
        data.department || '',
        data.year || '',
        data.preferredTeam || '',
        data.skills || '',
        data.motivation || '',
        data.portfolio || ''
      ]);
    }
    
    // For Support Form
    if (data.type === 'support') {
      sheet.appendRow([
        data.timestamp || new Date().toISOString(),
        data.name || '',
        data.email || '',
        data.phone || '',
        data.organization || '',
        data.supportType || '',
        data.message || '',
        data.website || ''
      ]);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle CORS preflight
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Deploy** → **New deployment**
4. Select **Web app** as the type
5. Set:
   - Description: "Form Handler"
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Click **Deploy**
7. Copy the Web App URL

## Step 3: Configure Environment Variables

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_GOOGLE_SHEETS_JOIN_URL=https://script.google.com/macros/s/YOUR_JOIN_SCRIPT_ID/exec
NEXT_PUBLIC_GOOGLE_SHEETS_SUPPORT_URL=https://script.google.com/macros/s/YOUR_SUPPORT_SCRIPT_ID/exec
```

Replace `YOUR_JOIN_SCRIPT_ID` and `YOUR_SUPPORT_SCRIPT_ID` with the actual URLs from your Google Apps Script deployments.

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
