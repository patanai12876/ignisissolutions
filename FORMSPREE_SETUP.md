# Formspree Setup Guide

Your contact form is configured to use **Formspree** for email submissions - no backend code needed!

## Quick Setup (2 minutes)

### Step 1: Create Formspree Account
1. Go to https://formspree.io
2. Sign up with email: **ignisissolutions@gmail.com**
3. Verify your email

### Step 2: Create a New Form
1. Click "Create" or "New Form"
2. Name it: "Website Contact" (or any name)
3. Select email: **ignisissolutions@gmail.com**
4. Click Create

### Step 3: Get Your Form ID
After creating the form, you'll see your **Form ID** (looks like: `f_abc123xyz`)

### Step 4: Update Contact Page
Open `src/app/contact/page.tsx` and find this line (around line 43):

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Replace `YOUR_FORM_ID` with your actual Formspree ID:

```javascript
const response = await fetch('https://formspree.io/f/mnnqkypj', {
```

### Step 5: Done!
Your contact form now sends emails directly to ignisissolutions@gmail.com. No environment variables needed.

## How It Works

When someone submits the form:
1. ✅ Form validation runs on frontend
2. ✅ Data POSTs to Formspree endpoint
3. ✅ Formspree sends email to ignisissolutions@gmail.com
4. ✅ Success message shows to user
5. ✅ Form clears for next submission

## Features Included

- ✅ Name, Email, Phone fields
- ✅ Multi-select Services dropdown
- ✅ Message textarea
- ✅ Form validation
- ✅ Success/Error notifications
- ✅ Email button (mailto link)
- ✅ WhatsApp button

## Email Features

Formspree will send emails with:
- User's name and email
- Phone number
- Selected services (comma-separated)
- Full message
- All formatted nicely

## Optional: Formspree Dashboard

After setup, you can:
- View submissions at https://formspree.io/forms
- Set up auto-replies
- Customize email notifications
- Export submissions

---

**That's it!** Your contact form is now fully functional and sends emails automatically.
