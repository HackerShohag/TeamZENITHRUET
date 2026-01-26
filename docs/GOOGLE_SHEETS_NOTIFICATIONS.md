# Google Sheets Email Notifications Setup

## Option 1: Built-in Notifications (Simplest)

1. Open your Google Sheet
2. Go to **Tools** → **Notification settings**
3. Click **Add notification rule**
4. Choose:
   - **Notify me when:** "Any changes are made"
   - **Notify me with:** "Email - right away"
5. Click **Save**

> ⚠️ This only sends "A change was made" - no details about the submission.

---

## Option 2: Custom Email with Details (Recommended)

### Step 1: Open Apps Script
In your Google Sheet: **Extensions** → **Apps Script**

### Step 2: Add This Code

```javascript
const NOTIFICATION_EMAIL = "your-email@gmail.com"; // Change this

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  if (data.type === 'join') {
    sheet.appendRow([
      new Date().toISOString(), data.name, data.email, data.phone,
      data.department, data.year, data.preferredTeam,
      data.skills, data.motivation, data.portfolio
    ]);
    
    MailApp.sendEmail(
      NOTIFICATION_EMAIL,
      `🚀 New Application: ${data.name}`,
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nDepartment: ${data.department}\nYear: ${data.year}\nTeam: ${data.preferredTeam}\n\nSkills:\n${data.skills}\n\nMotivation:\n${data.motivation}`
    );
  }
  
  if (data.type === 'support') {
    sheet.appendRow([
      new Date().toISOString(), data.name, data.email, data.phone,
      data.organization, data.supportType, data.message, data.website
    ]);
    
    MailApp.sendEmail(
      NOTIFICATION_EMAIL,
      `💖 Support Request: ${data.name}`,
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nOrganization: ${data.organization}\nType: ${data.supportType}\n\nMessage:\n${data.message}`
    );
  }
  
  return ContentService.createTextOutput('OK');
}

function doGet() {
  return ContentService.createTextOutput('OK');
}
```

### Step 3: Deploy
1. Click **Deploy** → **New deployment**
2. Type: **Web app**
3. Execute as: **Me**
4. Access: **Anyone**
5. Click **Deploy** and copy the URL

### Step 4: First Run Authorization
Run the script once manually to grant email permissions.

---

## Multiple Recipients

```javascript
MailApp.sendEmail("email1@gmail.com, email2@gmail.com", subject, body);
```

---

## Daily Quota
Google Apps Script allows **100 emails/day** for free accounts, **1500/day** for Workspace.
