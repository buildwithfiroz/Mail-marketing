<h1 align="left" style="display: flex; align-items: center;">
  <img src="https://img.icons8.com/color/48/gmail--v1.png" width="35" style="border-radius: 50%; margin-right: 10px;" />
  Gmail Marketing Automation with Google Sheets & Apps Script.
</h1>

<br>
 
This open-source (Free Bulk Email Tool) project lets you run **Gmail marketing campaigns directly from Google Sheets** using **Google Apps Script**. No Mailchimp, no paid tools — just **Gmail automation for bulk email sending**.

> [!Tip]
> - Send up to **500–2,000 emails/day** directly from Gmail  
> - Real-time tracking of **opens, clicks, and delivery**  
> - 100% free — powered by **Google Sheets + Apps Script**  
> - No external tools, no paid subscriptions  
> - Lightweight & secure, runs in your **Google account**  

 <br><br>

<p align="left">
  <img width='13%' src="https://img.shields.io/badge/Google-EA4335?logo=google&logoColor=white&style=plastic" alt="Google" /> &nbsp;
  <img width='11%' src="https://img.shields.io/badge/Gmail-D14836?logo=gmail&logoColor=white&style=plastic" alt="Gmail" /> &nbsp;
  <img width='17%' src="https://img.shields.io/badge/Apps%20Script-4285F4?logo=google-apps-script&logoColor=white&style=plastic" alt="Google Apps Script" /> &nbsp;
  <img width='18%' src="https://img.shields.io/badge/Automation-FFCA28?logo=autoprefixer&logoColor=black&style=plastic" alt="Automation" /> &nbsp;
</p>



<br><br>

<p align="center">
  <img src="src/Email-market.png" alt="Desktop View" width="70%" />
</p>
<br><br>


> [!NOTE]
> ## Step-by-Step Setup Guide
> Follow these steps to set up and run the email automation system directly from Google Sheets:

---

### ✅ 1. Create Your Google Sheet

- Open [Google Sheets](https://sheets.google.com).
- Add the following columns:  
  `Name | Email | CC | Subject | Message | Status | Opened | Clicked CTA`
  
  
> [!TIP]
> You can customize the columns to include anything else your email system might need.<br>
>
> ![Excel](src/excel.png)
>
> 
> You can - add the Email Body as well from the google sheet itself
>
> ![Excel](src/image.png)
>

> [!IMPORTANT]
> <p>The {{click-tracking-url}}, {{name}}, and {{tracking-pixel-url}} variables are critically important — <br>they are dynamically replaced at runtime using JavaScript/Apps 
> Script to track email opens and CTA clicks.
> Do not remove or hardcode these — they enable tracking logic in the system.</p> 
> <pre>  "{{click-tracking-url}}" | {{name}} | "{{tracking-pixel-url}}"  </pre>

---

### 🛠 2. Open Script Editor

- Go to **Extensions → Apps Script** inside your Google Sheet.
- You’ll be taken to the Script Editor (`https://script.google.com/...`). <br><br>
<table>
  <tr>
    <td align="center"><strong>Step 1: Click "Extensions"</strong></td>
  </tr>
  <tr>
    <td><img src="src/maildowpdown.png" alt="Step 1" width="100%" /></td>

  </tr>
</table>

---

### 📥 3. Add Script Files

- Create two files:
  - `main.gs` (or `code.gs`) — contains your email logic.
  - `deploy.gs` — used to deploy a Web App that tracks events.
<table width="100%" style="table-layout: fixed;">
  <tr>
    <td style="padding: 0; vertical-align: top; width: 33%;">
      <img src="src/email-marketing.png" alt="Step 2" object-fit: cover;" />
    </td>
    <td style="padding: 0; vertical-align: top; width: 33%;">
      <img src="src/access.png" alt="Step 3" object-fit: cover;" />
    </td>
  </tr>
</table>


> [!INFO]
> You can paste the full code provided in this repository into the two different files.

---

### 🚀 4. Deploy the Web App

- In the script editor, go to **Deploy → Manage deployments**.
- Click **New deployment**.
- Select **Web app** and set:
  - **Access**: Anyone
  - **Execute as**: Me (your email)
- Click **Deploy** and copy the **Web App URL**. <br><br>
![Deploy](src/deployement.png)

---

### 🔗 5. Link the Web App URL in Your Script
- Paste the copied Web App URL inside your `main.gs` where the tracking pixel or click URLs are generated.
<pre lang="markdown"> ``` var scriptUrl = ""; // Paste it over here  ``` </pre>
> [!WARNING]
> ![Deploy](src/mail.png)
> Do **not** share this URL publicly — it's unique to your tracker.
> ## Paste & Authorize the Script  
> Once you've added the code:  
> - Click the **Run ▶️ button** in the Apps Script editor.  
> - Google will prompt you to **authorize** the script to access your Google account.  
> - Make sure to **review permissions** and click **Allow** so that the script can send emails and interact with your spreadsheet.  <br><br>
>![Acess](src/access.png) <br><br>
> 🛑 If you skip this, the script will **not execute** and might throw a `permission denied` or `authorization required` error.



---


<br>


## 🐞 Common Issues & Fixes
- **Authorization Error** → Run the script once manually and click “Allow.”  
- **Emails not sending** → Check Gmail daily quota (500/2000).  
- **Tracking not working** → Ensure you pasted your Web App URL in `main.gs`.  
- **Emails in spam/promotions** → Avoid spammy words, configure SPF/DKIM, personalize content.

<br> <br>

> [!CAUTION]
> ## Use Responsibly to Avoid Account or Domain Issues  
> Do **not exceed your daily email limits**:
> - **500/day** for normal Gmail accounts  
> - **1,500/day** for Google Workspace (professional) accounts  
>
> ⚠️ If you cross these limits or send poorly formatted/spammy emails:
> - Your account may get **temporarily blocked or suspended**
> - Your domain may get flagged by spam filters (causing low **Domain Authority (DA)** and **Page Authority (PA)**)
> - You might face issues like **DKIM/SPF failures** or emails landing in **spam/promotions tab**
>
> ✅ Always double-check:
> - Your **email syntax** is correct  
> - You're sending to **valid, opted-in recipients only**  
> - You follow **email marketing best practices**

<br>



## ❓ FAQ

### Can I send bulk emails with Gmail for free?  
- Yes! This tool allows you to send up to **500 emails/day (Gmail)** or **1,500 emails/day (Google Workspace)**.  

### Does this work like Mailchimp?  
- Similar concept, but 100% free and fully inside **Google Sheets**.  

### Can I track if my emails are opened or clicked?  
- Yes, this script uses a **tracking pixel** for opens and custom **CTA links** for clicks.  




<br>

## 👨‍💻 Author

<br>

This project is built and maintained by [@buildwithfiroz](https://github.com/buildwithfiroz) 

<br>

If you found this useful, consider giving it a ***⭐️ on GitHub*** or contributing to improve it further!

<br>

<p align="left">
  <a href="mailto:buildbyfiroz@icloud.com">
  <img src="https://img.shields.io/badge/Email-buildbyfiroz@icloud.com-blue?logo=gmail&style=for-the-badge" alt="Email" /></a> &nbsp;
    <a href="https://github.com/buildwithfiroz">
    <img width='220' src="https://img.shields.io/badge/GitHub-@buildwithfiroz-181717?logo=github&style=for-the-badge" alt="GitHub" /></a> &nbsp;
</p>



---


<br>

<p align="center"><b>Made with ❤️ by Firoz</b></p>

