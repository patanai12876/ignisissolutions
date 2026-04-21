# Resend Email Setup Guide

## Overview
The contact form now uses **Resend** instead of Formspree for sending emails. Resend is a modern email API service that provides reliable email delivery.

## Setup Instructions

### 1. Get Your Resend API Key
- Visit https://resend.com
- Sign up for a free account (no credit card required for free tier)
- Go to API Keys section
- Copy your API key

### 2. Add Environment Variable
- Open `.env.local` file in the project root
- Replace `your_resend_api_key_here` with your actual API key:
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
```

### 3. Update Sender Email (Optional)
In `src/app/api/send-email/route.ts`, update the `from` field:
```typescript
from: 'noreply@yourdomain.com' // Use your custom domain
```

To use a custom domain, you need to verify it in your Resend dashboard first.

### 4. Update Recipient Email (Important)
In `src/app/api/send-email/route.ts`, update the `cc` field with your actual email:
```typescript
cc: 'your-email@ignisissolutions.com' // Replace with your actual email
```

## How It Works

1. **User fills the contact form** with their details
2. **Form submits to `/api/send-email`** endpoint
3. **Resend sends a beautiful HTML email** to the user (confirmation email)
4. **Also sends a copy to your email** (cc'd)
5. **Success message displays** to the user

## Email Template Features

✅ Professional HTML template
✅ Auto-populated user data
✅ Responsive design
✅ Branding with Ignisis Solutions header
✅ Links to website and social media
✅ WhatsApp contact link

## Resend Free Tier Benefits

- 100 emails per day
- Perfect for small to medium businesses
- Easy to scale up
- Pay-as-you-go pricing
- No credit card required initially

## Troubleshooting

If emails aren't sending:

1. **Check API Key**: Make sure your `RESEND_API_KEY` is correct in `.env.local`
2. **Verify Recipients**: Check that email addresses are valid
3. **Check Logs**: Look at server console for error messages
4. **Test the API**: Use Resend dashboard to test API
5. **Restart Dev Server**: `npm run dev`

## Files Modified

- `src/app/api/send-email/route.ts` - New API endpoint
- `src/app/contact/page.tsx` - Updated form submission logic
- `.env.local` - New environment variables

---

For more info: https://resend.com/docs
