# 💎 پورتفوی هوشمند حامی

اپ وب استاتیک برای مدیریت دارایی و سود طرح حامی — کاملاً رایگان و بدون سرور.

---

## 🚀 اجرا روی GitHub Pages (رایگان و استاتیک)

### روش ۱: آپ با کشیدن و رها کردن (بدون نصب Git)

1. **ساخت ریپو**
   - برو به [github.com/new](https://github.com/new)
   - **Repository name:** مثلاً `hami-portfolio`
   - **Public** → **Create repository**

2. **آپ فایل‌ها**
   - داخل ریپو روی **Add file** → **Upload files** بزن
   - همهٔ فایل‌های داخل پوشهٔ `hami-portfolio` را بکش و اینجا رها کن:
     - `index.html`
     - `manifest.json`
     - `sw.js`
     - `README.md`
   - پایین صفحه **Commit changes** بزن

3. **فعال کردن Pages**
   - برو **Settings** → از سمت چپ **Pages**
   - زیر **Build and deployment** → **Source:** **Deploy from a branch**
   - **Branch:** `main` و **Folder:** `/ (root)` → **Save**

بعد از ۱–۲ دقیقه سایت اینجا بالا می‌آید:

**https://USERNAME.github.io/hami-portfolio/**

(به‌جای `USERNAME` نام کاربری گیت‌هاب خودت را بگذار.)

---

### روش ۲: با Git (اگه نصب داری)

```bash
cd C:\Users\Bozorg\hami-portfolio
git init
git add .
git commit -m "پورتفوی حامی v12"
git branch -M main
git remote add origin https://github.com/USERNAME/hami-portfolio.git
git push -u origin main
```

بعد همون مراحل **فعال کردن Pages** در Settings را انجام بده.

---

همه‌چیز استاتیک و رایگان است؛ داده‌ها فقط در مرورگر (localStorage) ذخیره می‌شوند.
