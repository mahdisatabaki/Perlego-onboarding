# فایل‌های آماده برای push به ریپوی Lovable

## کدام ریپو؟

**نه این ریپو.** `mahdisatabaki/Perlego-onboarding` ریپوی برنامه‌ریزی و مستندات ماست.

وقتی در پروژه‌ی Lovable روی **Connect to GitHub** بزنی، Lovable **یک ریپوی جدید می‌سازد** (معمولاً هم‌نام پروژه، مثلاً `mahdisatabaki/perlego-revision`). **آن** ریپوی مقصد است.

پس ترتیب اجباری است:
1. اول T0 را در Lovable بزن (پروژه ساخته می‌شود)
2. بعد Connect to GitHub → ریپو ساخته می‌شود
3. بعد آن ریپو را clone کن و این فایل‌ها را داخلش بگذار و push کن
4. Lovable خودش sync می‌کند

## چه فایل‌هایی، کجا؟

محتویات پوشه‌ی `src/` این‌جا را عیناً روی `src/` ریپوی Lovable کپی کن:

| فایل | مقصد در ریپوی Lovable |
|---|---|
| `src/styles/tokens.css` | `src/styles/tokens.css` |
| `src/styles/components.css` | `src/styles/components.css` |
| `src/components/PerlegoUI.tsx` | `src/components/PerlegoUI.tsx` |
| `src/data/mockData.ts` | `src/data/mockData.ts` |

سه فایل اول عیناً از استارتر رسمی هکاتون (v2) هستند — README خود استارتر همین کار را دستور داده.
فایل چهارم محتوای دموی ماست (متن، نه کد محصول).

## دستور push

```bash
git clone https://github.com/<your-username>/<lovable-repo-name>.git
cd <lovable-repo-name>
# محتویات src/ این پوشه را داخل src/ اینجا کپی کن
git add src
git commit -m "Add Perlego design system, UI components and demo content"
git push
```

## بعد از push

در Lovable یک‌بار Sync/Pull بزن تا فایل‌ها را ببیند، بعد برو سراغ T1.

⚠️ **مهم:** بعد از push، در Lovable **پیام نده** که «فایل‌ها را اضافه کردم» — آن یک credit است. مستقیم پرامپت T1 را بزن؛ T1 خودش به فایل‌ها ارجاع می‌دهد.
