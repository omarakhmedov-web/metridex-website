# Metridex Landing — GitHub Pages Deploy

> Zero‑cost, fast, and safe hosting via GitHub Pages.

## Quick path (10–15 min)

1) **Create a repo** on GitHub (e.g. `metridex-website`).  
2) **Upload all files** from this ZIP into the repo root.  
3) In repo **Settings → Pages**:  
   - Build and deployment: *Deploy from a branch*  
   - Branch: `main` (folder: `/ (root)`) → Save  
   - In the **Custom domain** box, enter: `metridex.com` → Save  
   - After DNS is correct, enable **Enforce HTTPS** (the checkbox).
4) **DNS at your registrar (GoDaddy or wherever you manage metridex.com)**:  
   - **Apex domain** (`metridex.com`) — add four A records pointing to GitHub Pages IPs:  
     - `185.199.108.153`  
     - `185.199.109.153`  
     - `185.199.110.153`  
     - `185.199.111.153`  
   - **WWW** (`www.metridex.com`) — add a CNAME:  
     - `www → <YOUR_GITHUB_USERNAME>.github.io`  
   - Keep your existing MX/TXT records for Zoho Mail intact.
5) Wait a few minutes; then in **Settings → Pages** verify the domain is marked as verified & HTTPS is active.

> Tip: If you prefer, you can add a `CNAME` file with `metridex.com` to the repo root (already included).

## Where to edit content
- `index.html` — page content (texts/links).
- `styles.css` — theme.
- `/assets/` — logo, icons, and images. Replace `og-cover.png` with a real 1200×630 PNG for social previews.

## Optional: redirect www → apex
After HTTPS is active, in Pages “Custom domain” set the domain to `metridex.com` and GitHub will automatically redirect `www.metridex.com` to the apex.

## Troubleshooting
- If the site doesn’t load: double‑check DNS A records and CNAME.
- If HTTPS is not available: wait up to 30–60 minutes after DNS changes.
- If email breaks: you likely changed MX/TXT by mistake — restore Zoho Mail records.

## Next steps
- Replace texts with your final marketing copy.
- Add a short demo video and a sample PDF report.
- Track clicks by adding UTM parameters to Telegram links.
- 
