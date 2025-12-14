# How to Upload Documents to the Website

This guide shows you how to add meeting minutes and governance documents to the Fells Prospect Community website using Google Drive.

## Step 1: Upload PDF to Google Drive

1. Go to [Google Drive](https://drive.google.com)
2. Create a folder called "FPCA Website Documents" (or use an existing folder)
3. Click the **+ New** button
4. Select **File upload**
5. Choose your PDF file (e.g., "2025-01-30 Gen Mtg Minutes.pdf")
6. Wait for the upload to complete

## Step 2: Get the Shareable Link

1. Find your uploaded PDF in Google Drive
2. **Right-click** on the PDF file
3. Select **Share** → **Get link**
4. Under "General access", click **Change to anyone with the link**
5. Make sure it says **Viewer** (not Editor)
6. Click **Copy link**
7. Click **Done**

Your link will look something like this:
```
https://drive.google.com/file/d/1ABC123xyz456/view?usp=sharing
```

## Step 3: Add Document to Website via PagesCMS

1. Go to [PagesCMS](https://app.pagescms.org)
2. Sign in with GitHub
3. Select the **Fells Prospect** repository
4. Click on **Documents** in the left menu
5. Click **New document** button
6. Fill in the form:
   - **Document Title**: e.g., "January 2025 General Meeting Minutes"
   - **Description**: Brief summary of what's in the document
   - **Document Date**: Select the date of the meeting
   - **Category**: Choose "Meeting Minutes" or "Governance Documents"
   - **PDF Link**: **Paste the Google Drive link** you copied in Step 2
   - **File Size** (optional): e.g., "1.2 MB"
   - **Featured Document**: Check this to highlight important documents
7. Click **Save**

## Step 4: Publish

After saving, PagesCMS will automatically commit the change to GitHub, and your website will rebuild in about 2-3 minutes. The document will then appear on the Documents page!

## Tips

- **File naming**: Use clear names like "2025-01-30 Gen Mtg Minutes.pdf"
- **Keep files organized**: Create subfolders in Google Drive for "Meeting Minutes" and "Governance Documents"
- **Test the link**: After saving, visit your website and click on the document to make sure the PDF opens correctly
- **File size**: You can see the file size in Google Drive by right-clicking the file and selecting "Details"

## Troubleshooting

**Q: The PDF link doesn't work**
A: Make sure you set the sharing to "Anyone with the link" in Google Drive

**Q: People get asked to sign in to view the PDF**
A: The file sharing isn't set to public. Go back to Google Drive, right-click the file, click Share, and make sure it says "Anyone with the link can view"

**Q: I need to replace a document**
A: Upload the new version to Google Drive, get the new link, then edit the document in PagesCMS and paste the new link

---

Need help? Contact your website administrator.
