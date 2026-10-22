# Estates Artha - Real Estate Lead Generation Website

Static website (HTML + Tailwind CDN + vanilla JS). No build step, no server.

```
aurum-estates-website/
├── index.html                  Page markup
├── css/style.css               Theme colours, modals, buttons
├── js/config.js                WhatsApp number, phone, webhook URL, video  <- edit first
├── js/projects.js              Project data + amenity list                 <- edit second
├── js/main.js                  Filters, modals, forms, lead saving, brochure PDF
├── assets/
│   ├── favicon.svg
│   ├── images/                 Put project photos here
│   └── brochures/              Put real brochure PDFs here
└── google-apps-script/Code.gs  Saves leads to Google Sheets + sends email
```

## What changed in v2
- New nav (Home, Projects, About Us, Blog, Contact Us + Enquire Now), Godrej DMIC pre-launch hero, search bar (location, developer, budget, unit type), About and Blog sections, sticky Call/WhatsApp bar on mobile.
- Lead form now captures **Preferred Budget** instead of configuration. **Re-paste `Code.gs` into Apps Script and deploy a New version** so the Sheet and emails use the new field.
- Hero photo: save a wide, dark-friendly image as `assets/images/hero.jpg` (about 1920x1080, under 300 KB). Until then a generated skyline shows.
- **Projects 2-6 are SAMPLE listings** with placeholder prices and developer names. Replace them in `js/projects.js` with verified inventory before running ads, and only advertise projects whose RERA registration you can show.

## 1. Preview locally
Open `index.html` in a browser (needs internet for Tailwind and fonts).

## 2. Add your projects
Edit `js/projects.js`. Each project is one object. Optional fields:
- `img:'assets/images/grand-residency.jpg'` real photo (about 1200x800, under 200 KB, use WebP or compressed JPG)
- `brochure:'assets/brochures/grand-residency.pdf'` your real brochure (otherwise a simple PDF is generated)
- `tour:'https://www.youtube.com/embed/VIDEO_ID'` virtual tour video

## 3. Connect WhatsApp

### A. Click-to-chat (works immediately, free)
Open `js/config.js` and set `WA:'919876543210'` (country code + number, no `+`, no spaces) and `PHONE:'+919876543210'`.
This powers the floating WhatsApp button and the "Chat with expert" button on the thank-you screen (the message is prefilled with the lead's name and project).
Tip: install the free **WhatsApp Business** app on that number, set a greeting, away message and quick replies.

### B. Use WhatsApp in your Meta ads
In Ads Manager you can also pick "Messages > WhatsApp" as the destination for some campaigns. Keep this site for Lead/Traffic campaigns so you capture the phone number and email.

### C. Get a WhatsApp alert for every new lead (optional)
Alerts need the WhatsApp Cloud API (or a provider such as WATI, Interakt or AiSensy).
1. Meta Business Suite > WhatsApp > API setup: add a phone number, create a permanent token.
2. Create a message template named `new_lead` (category Utility) with body: `New lead: {{1}}, phone {{2}}, project {{3}}`. Wait for approval.
3. In `Code.gs` set `WHATSAPP_CLOUD` (`ENABLED:true`, `TOKEN`, `PHONE_NUMBER_ID`, `TO`).
Business-initiated WhatsApp messages are charged per conversation by Meta. Keep the token private. Never put it in the website files, only in Apps Script.

## 4. Connect email + Google Sheets (free)
1. Create a new Google Sheet (name it "Estates Artha Leads").
2. **Extensions > Apps Script**. Delete the sample code and paste all of `google-apps-script/Code.gs`.
3. Set `OWNER_EMAIL` (and brand/phone) at the top.
4. Choose `testLead` in the function dropdown and click **Run**. Approve the permissions. A "Leads" tab appears and you receive a test email.
5. **Deploy > New deployment > Web app**. Execute as: **Me**. Who has access: **Anyone**. Click Deploy and copy the **Web app URL**.
6. Paste it into `js/config.js`: `WEBHOOK:'https://script.google.com/macros/s/XXXX/exec'`.
7. Submit the website form once to confirm a row and an email arrive.
If you change `Code.gs` later, use **Deploy > Manage deployments > Edit > New version**, or the old code keeps running.
Gmail sends about 100 emails a day on a free account, which is plenty for most campaigns. Emails from Apps Script can land in spam the first time, so mark one as "Not spam".

Alternative: Zapier, Make or n8n webhooks also work. Paste their webhook URL in `WEBHOOK`. The page sends this JSON: `name, phone, email, project, projectId, budget, source, timestamp, dateTime, page, utm`.

## 5. Meta Pixel and tracking
- Paste the Pixel base code in `index.html` where the comment says so. Every submitted form fires the standard `Lead` event.
- Add UTMs to your ad URL so each lead records its campaign:
  `https://yourdomain.com/?utm_source=facebook&utm_medium=paid&utm_campaign={{campaign.name}}&utm_content={{ad.name}}`
- Test with the Meta Pixel Helper extension and the Events Manager "Test events" tab.

## 6. Deploy (free options)
- **Netlify**: drag the whole folder onto app.netlify.com/drop.
- **Cloudflare Pages / GitHub Pages / Vercel**: upload the folder as a static site.
- Connect your domain and make sure HTTPS is on.

## 7. Before you go live
- Replace sample projects, testimonials, prices, address, map location and the RERA number.
- Use real RERA registration numbers for every project. Indian advertising rules expect them.
- Add a privacy policy page and link it near the form (you are collecting personal data).
- Compress all images, then test on a real phone over mobile data.

## Notes
- Leads are also kept in the visitor's own browser (localStorage). That is a backup only. Run `exportLeads()` in the browser console to download them as CSV.
- The webhook is sent in "no-cors" mode, so the page cannot read the response. Always check your Sheet to confirm delivery.
- Anyone can POST to a public webhook URL. For heavy traffic, add a shared secret field or a spam check in `Code.gs`.
