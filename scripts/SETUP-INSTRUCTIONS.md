# FPCA Membership Form - Google Sheets Integration Setup

This guide explains how to set up the Google Sheets integration for the FPCA membership form.

## Overview

The membership form on the website will:
1. Save submissions directly to your Google Sheet
2. Send you an email notification for each new submission
3. Track subscription preferences for future newsletter automation

## Prerequisites

- Access to the existing FPCA Google Sheet
- A Google account with permission to edit the sheet
- The sheet must have these column headers (in order):
  - SubmissionDate
  - FirstName
  - LastName
  - Address
  - Email
  - SubscribeNewsletter
  - SubscribeUpdates
  - SubscribeEvents
  - VolunteerComments
  - FoundFpcaCommentsUsing

---

## Step 1: Open Google Apps Script

1. Open your FPCA Google Sheet
2. Click **Extensions** in the menu bar
3. Click **Apps Script**
4. A new tab will open with the Apps Script editor

## Step 2: Add the Script Code

1. In the Apps Script editor, you'll see a default file called `Code.gs`
2. **Delete all existing code** in the file
3. Open the file `google-apps-script.js` from this folder
4. **Copy the entire contents** of that file
5. **Paste it** into the Apps Script editor

## Step 3: Configure Your Email

1. Near the top of the script, find this line:
   ```javascript
   const NOTIFICATION_EMAIL = 'your-email@example.com';
   ```
2. Replace `your-email@example.com` with your actual email address
3. Save the file (Ctrl+S or Cmd+S)

## Step 4: Deploy the Web App

1. Click **Deploy** in the top right
2. Click **New deployment**
3. Click the gear icon next to "Select type"
4. Choose **Web app**
5. Fill in the deployment settings:
   - **Description**: "FPCA Membership Form Handler" (or any description)
   - **Execute as**: Select **Me** (your email)
   - **Who has access**: Select **Anyone**
6. Click **Deploy**

## Step 5: Authorize the App

1. A popup will appear asking for authorization
2. Click **Authorize access**
3. Select your Google account
4. You may see a warning that says "Google hasn't verified this app"
   - Click **Advanced**
   - Click **Go to [project name] (unsafe)**
5. Click **Allow** to grant the necessary permissions

## Step 6: Copy the Web App URL

1. After deployment, you'll see a dialog with the **Web app URL**
2. It will look like: `https://script.google.com/macros/s/xxxxx.../exec`
3. **Copy this URL** - you'll need to provide it to your developer

## Step 7: Provide URL to Developer

Send the Web App URL to your developer so they can update the website code.

---

## Testing the Integration

### Test from Apps Script

1. In the Apps Script editor, find the function `testSubmission`
2. Click **Run** > **Run function** > **testSubmission**
3. Check your Google Sheet - a test row should appear
4. Check your email - you should receive a test notification

### Test from the Website

1. After the developer updates the website with your URL
2. Go to the membership page
3. Fill out the form with test data
4. Submit the form
5. Verify:
   - A success message appears on the website
   - A new row appears in your Google Sheet
   - You receive an email notification

---

## Troubleshooting

### Form submits but no data in sheet
- Verify the Web App URL is correctly entered in the website code
- Check that the deployment is set to "Anyone" can access
- Try redeploying the web app

### No email notifications
- Check the spam folder
- Verify the NOTIFICATION_EMAIL is correct in the script
- Check Gmail sending limits (500/day for free accounts)

### "Script function not found" error
- Make sure you copied the entire script code
- Save the file and redeploy

### Permission errors
- Re-authorize the app by going to Deploy > Manage deployments
- Delete the current deployment and create a new one

---

## Making Changes

If you need to update the notification email or make other changes:

1. Edit the script in Apps Script
2. Save your changes
3. Go to **Deploy** > **Manage deployments**
4. Click the edit (pencil) icon on your deployment
5. Under "Version", select **New version**
6. Click **Deploy**

---

## Column Reference

| Sheet Column | Description | Example Value |
|--------------|-------------|---------------|
| SubmissionDate | Auto-generated timestamp | 2025-01-15 14:30:00 |
| FirstName | Applicant's first name | John |
| LastName | Applicant's last name | Smith |
| Address | Block and street name | 300 Chester |
| Email | Contact email | john@example.com |
| SubscribeNewsletter | Newsletter opt-in | TRUE / FALSE |
| SubscribeUpdates | City updates opt-in | TRUE / FALSE |
| SubscribeEvents | Events opt-in | TRUE / FALSE |
| VolunteerComments | Volunteer interests | Help with cleanup events |
| FoundFpcaCommentsUsing | How they found FPCA | Neighbor recommendation |

---

## Future Enhancements (Phase 2)

The current setup stores subscription preferences as TRUE/FALSE values, making it easy to:

- Filter the sheet by subscription type
- Export subscriber lists for email campaigns
- Integrate with email marketing tools (Mailchimp, SendGrid, etc.)
- Add automated newsletter functionality

Contact your developer when ready to implement these features.
