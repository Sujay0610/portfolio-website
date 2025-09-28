# EmailJS Setup Guide - Updated (Simple Version)

## Quick Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. For Gmail:
   - Service ID: `gmail_service` (you can customize this)
   - Connect your Gmail account
   - Follow the OAuth setup

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Template ID: `contact_form` (you can customize this)
4. Set up your template with these variables:

```
Subject: New Call Booking Request from {{from_name}}

Hi Sujay,

You have a new call booking request:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Project Type: {{project_type}}
Preferred Time: {{preferred_time}}

Message:
{{message}}

---
Sent from your portfolio website
```

## Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Copy your "Public Key"

## Step 5: Update Environment Variables
Update your `.env` file with your actual credentials:

```
VITE_EMAILJS_SERVICE_ID=gmail_service
VITE_EMAILJS_TEMPLATE_ID=contact_form
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

## Step 6: Test the Form
1. Restart your development server: `npm run dev`
2. Open your portfolio
3. Click "Book a Call"
4. Fill out and submit the form
5. Check your email for the message

## Template Variables Available
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{company}}` - Visitor's company
- `{{project_type}}` - Type of project they selected
- `{{preferred_time}}` - Their preferred call time
- `{{message}}` - Their message
- `{{to_email}}` - Your email (sujay0610@gmail.com)
- `{{subject}}` - Email subject line

## Security Notes
- Never commit your actual EmailJS credentials to Git
- The `.env` file is already in `.gitignore`
- EmailJS free plan allows 200 emails/month