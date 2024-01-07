# سیمرغ

سیمرغ قرار است یک تم Jekyll برای فارسی نویسی باشد. یک تم مینیمال که با تغییر فایل کانفیگ به راحتی بتوانید آن را برای راه‌اندازی وبلاگ شخصی خودتان استفاده کنید.

می‌توانید نمونه استفاده شده آن را در [وبلاگ من](https://zmim.ir) ببینید. من برای خودم بخش‌های دیگری به سیمرغ اضافه کردم و تم آن را کمی تغییر داده‌ام. چنانچه دوست داشتید می‌توانید از آنها هم استفاه کنید.

برای شروع این پروژه یک فورک از تم [`klise`](https://klise.now.sh) استفاده شده است که [اینجا](https://github.com/piharpi/jekyll-klise) در دسترس است.

برای فارسی کردن تاریخ‌ها از پلاگین [`jekyll-jalali`](https://github.com/mehdisadeghi/jekyll-jalali) استفاده کردم که [مهدی صادقی](https://github.com/mehdisadeghi/) گرامی نوشته و کلی مطلب مفید هم در [وبلاگش](https://mehdix.ir/) دارد که اگر تصمیم دارید از Jekyll استفاده کنید حتما بهش سر بزنید.


در این تم از فونت‌های [`وزیر متن`](https://github.com/rastikerdar/vazirmatn)  استفاده شده است که از کارهای زیبای آقای [راستی‌کردار](https://github.com/rastikerdar) است که از ایشان بسیار ممنونم و [`Comic Mono`](https://dtinth.github.io/comic-mono-font/) برای کدهای درون متن.

## قابلیت‌ها

-  تم تاریک و روشن
-  پشتیبانی از تاریخ فارسی
-  تغییر ظاهر با استفاده از scss
-  هماهنگ با دسکتاپ و گوشی
-  ساختار مناسب برای عکس‌ها ([`jekyll-postfiles`](https://github.com/nhoizey/jekyll-postfiles))
-  نقشه سایت ([`jekyll-sitemap`](https://github.com/jekyll/jekyll-sitemap))
-  خوراک rss ([`jekyll-feed`](https://github.com/jekyll/jekyll-feed))
-  هایلایت کدها ([`Comic Mono`](https://dtinth.github.io/comic-mono-font/))
-  صفحه بندی پست‌ها
-  آنالیز گوگل اگر دوست دارید استفاده کنید. (نکنید 😠)
-  استفاده از W3C **👽**
-  استفاده از فونت Awesome **👽**
-  سبک و سریع **🚄**
- برای افزودن بخش دیدگاه‌ها با استفاده از ماستودون [این پست](https://www.zmim.ir/mastodon-comments/) را بخوانید.


## نصب

راه انداختن سرور local روی سیستم شخصی:

```bash
$ git clone https://github.com/mhdzli/simorq.git
$ cd simorq
$ bundle install
$ bundle exec jekyll serve
```

با آدرس `localhost:4000` می‌توانید نتیجه را در مرورگرتان مشاهده کنید.

[![دیپلوی در Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mhdzli/simorq) [![دیپلوی با Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/mhdzli/simorq)

## نصب با استفاده از داکر

در این روش نیازی به نصب هیچ افزونه و زبان برنامه نویسی ای نیست. صرفا میبایست داکر روی سیستم شما نصب باشد.

```bash
git clone https://github.com/mhdzli/simorq.git
cd simorq
```

پس از آن میباید فایل image ساخته شود. دقت کنید این کار فقط نیاز است یک بار انجام شود و برای بارهای بعد می‌توانید از ایمیج ساخته شده استفاده کنید.

```bash
scripts/docker_build_image.sh
```

‍سپس می‌توانید با دستور زیر سایت را روی سیستم لوکال خود مشاهده کنید.

```bash
scripts/docker_run.sh
```

## محدودیت‌ها

- از آنجا که پلاگین  [`jekyll-postfiles`](https://github.com/nhoizey/jekyll-postfiles#compatibility) و  [`jekyll-jalali`](https://github.com/mehdisadeghi/jekyll-jalali)  در `github pages` پشتیبانی نمی‌شوند امکان استفاده  روی گیتهاب وجود ندارد اما میتوانید از  [`netlify.com`](https://netlify.com)، [`vercel.com`](https://vercel.com) یا [`surge.sh`](https://surge.sh) استفاده کنید.


## مجوز

یک پروژه آزاد با مجوز [MIT](LICENSE).

## هواداری

اگر از این پروژه بهره بردید می‌توانید از آن حمایت کنید:

[![payping](../master/assets/payping.gif)](https://www.payping.ir/@mzeinali)


[![hamibash](../master/assets/hamibash.png)](https://www.hamibash.com/mzeinali)
