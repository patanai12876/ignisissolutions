# Deployment Guide - Vercel

## Quick Deployment Steps

### Step 1: Prepare Your Repository
```bash
# Make sure all changes are committed
git add .
git commit -m "Ready for deployment"
```

### Step 2: Push to GitHub
1. Create a GitHub account (if you don't have one): https://github.com
2. Create a new repository named `ignisis-solutions`
3. Push your code to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/ignisis-solutions.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Visit https://vercel.com
2. Click "Sign up" and choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. Click "New Project"
5. Select your `ignisis-solutions` repository
6. Click "Import"

### Step 4: Configure Environment Variables
On the Vercel import screen, add your environment variables:
- **Name**: `RESEND_API_KEY`
- **Value**: `re_g1tgYSVK_BCbBSvhX18knBhqb2cHdYwxr`

Click "Add" then "Deploy"

### Step 5: Wait for Deployment
Vercel will automatically build and deploy your website. You'll see:
- Build logs in real-time
- When complete, you'll get a URL like: `https://ignisis-solutions.vercel.app`

## After Deployment

### Test Your Website
1. Open the provided URL in your browser
2. Test the contact form to ensure emails work
3. Check that all pages load correctly
4. Verify portfolio images display properly

### Connect Custom Domain (Optional Future Step)
If you get a domain (ignisissolutions.com):
1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Update DNS records with your domain registrar
4. Vercel will provide DNS instructions

## Important Notes

✅ **Automatic Deployments**: Any push to GitHub automatically deploys to Vercel
✅ **Free Tier**: Vercel free tier is perfect for this website
✅ **Email Service**: Resend API key is already set up in `.env.local`
✅ **SSL/HTTPS**: Automatic for all Vercel deployments

## Troubleshooting

If deployment fails:
1. Check build logs on Vercel dashboard
2. Ensure `RESEND_API_KEY` is set correctly
3. Verify `tsconfig.json` is correct
4. Try clearing `.next` folder locally and rebuilding

---

Your website will be live at: **https://ignisis-solutions.vercel.app** (or your custom domain)
