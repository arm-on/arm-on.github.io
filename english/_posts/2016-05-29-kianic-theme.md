---
layout: post
title:  "Kianic Jekyll Theme"
date:   2016-05-29
excerpt: "Multi language, dual theme, stylish, two-column Jekyll theme for your blog."
tags:
- Kianic
- Jekyll 
- Theme
---

<a href="{{ site.url }}/images/kianic-home-image.png"><img src="{{ site.url }}/images/kianic-home-image.png" alt="Home Page of Kianic"></a>  

<center><b>Kianic</b> is a multi language, dual theme, stylish, two-column Jekyll theme for your blog.</center><br>

This theme is a fork of excellent [**Halve Jekyll Theme**](https://taylantatli.github.io/Halve){:target="_blank"} which is not being maintained anymore.
  
      
## Installation and Quick Usage
* Fork the [Kianic repo](https://gitlab.com/Azadeh-Afzar/Web-Development/Kianic-Jekyll-Theme)
* Edit `_config.yml` file.
* Edit `_data/languages.yaml`.
* Edit `_data/projects.yaml`
* Add a logo with a small one to `images` folder. (eg. `logo.png`, `logo-small.png`)
* Remove sample posts from `_posts` folder and add yours.
* Remove/Change sample images from `images` folder.

That's all.

## Site Setup
A quick checklist of the files you’ll want to edit to get up and running.

### Site Wide Configuration
`_config.yml` is your friend. Open it up and personalize it. Most variables are self explanatory but here's an explanation of each if needed:

#### title

The title of your site... shocker!

Example `title: My Awesome Site`

#### description

The description to use for meta tags and homepage.

#### url

Used to generate absolute urls in `sitemap.xml`, `feed.xml`, and for generating canonical URLs in `<head>`. When developing locally either comment this out or use something like `http://localhost:4000` so all assets load properly. *Don't include a trailing `/`*.

Examples:

{% highlight yaml %}
url: https://azadeh-afzar.gitlab.io/Web-Development/Kianic-Jekyll-Theme
url: http://localhost:4000
{% endhighlight %}

#### logo
Your site's logo. It will be shown on homepage. Also used for twitter meta tags.
You can also have different logo for different languages.

#### background
Here we will set images for left block. Example:

```
background:
  # this image will be shown on homepage's left block
  homepage: images/img-home-background.jpg
  # this image will be shown on post list page
  post-list: images/img-posts-background.jpg
  # this image will be shown when post's front matter doesn't specify any image
  default-post: images/img-default-post-picture.png
```

<dl>
  <dt>homepage</dt>
  <dd>Is for homepage background image.</dd>
  <dt>post-list</dt>
  <dd>Is for posts list page background image.</dd>
  <dt>default-post</dt>
  <dd>Is for posts' default background image. It will be shown for every posts that don't specify any image from post's YAML front matter.</dd>
</dl>

---

### Add languages

It's now so easy! how? well look below.
first cou need proper configuration in your `_config.yml` file, imagin a case that I want my site to be available in both English and Farsi, now see what congigurations must be done:
{% highlight yaml %}
# first set seperate logo's for site, it's possible to use only one
# but still you need to set this properties seperatly
logo-images:
  en:
    logo-main: images/logo-small-en.png
  fa:
    logo-main: images/logo-small-fa.png


# number of languages to be supported
language-options:
  lang-number: 2
  # this is your language that will show on the front page
  lang-default: en
  # list labguages by their short name
  lang-id:
    - title: en
    - title: fa

# set path and default values for each language
# path must be same as lang-id defined in above
# also you can set the language to LTR or RTL
# notice base-url format
defaults:
  -
    scope:
      # sub-folder
      path: en
    values:
      # language name, sub-domain and direction (ltr, rtl)
      lang: en
      base-url: "/en/"
      direction-format: ltr
      author: Mahdi baghbani
  -
    scope:
      # sub-folder
      path: fa
    values:
      # language name, sub-domain and direction (ltr, rtl)
      lang: fa
      base-url: "/fa/"
      direction-format: rtl
      author: مهدی باغبانی
{% endhighlight %}

now it's time to set `_languages,yml` file:

{% highlight yaml %}
# -- Translations ---
# simply copy this template and translate it into your desired language

en:
  # website region
  locale: en_US
  label:
    # language name in all languages
    # this part must be completed based on your available languages
    en: English
    fa: انگلیسی
  # Emoji icon for country
  icon: 🇺🇸 
  # site parts
  change-language-title-text: Change Language
  change-language-span-text: LANGUAGE
  support-title-text: Support Me
  support-span-text: SUPPORT
  about-title-text: About Me
  about-span-text: ABOUT
  legal-title-text: Legal terms
  legal-span-text: LEGAL
  mode-title-text: Day/Night Mode
  mode-span-text: LIGHT
  posts-title-text: Posts List
  posts-span-text: POSTS
  projects-title-text: My Projects
  projects-span-text: PROJECTS
  section-line-posts: Posts
  back-to-home: Back to Home
  back-to-posts: Back to Posts
  next: next
  previous: previous
  read-in-other-language: "Read this page in a different language:"
  read-in-text: Read in
  facebook: Facebook
  facebook-text: Share on Facebook
  linkedin: LinkedIn
  linkedin-text: Share on LinkedIn
  twitter: Twitter
  twitter-text: Share on Twitter

  copyright-text: "This work is licensed under a GNU General Public License v3.0"

  footer-text: "Made with Love <i class='fa fa-heart heart' aria-hidden='true'></i>"

{% endhighlight %}

### Projects Overlay

To set what image links appear in the overlay menu edit `_data/projects.yaml`. Use the following format to set the URL, title, image and project status for as many links as you'd like. If you set `completed` to `false` like `completed: false`, it won't be clickable until you set it true like `completed: true`

{% highlight yaml %}
- title: Moon Jekyll Theme
  url: http://taylantatli.me/Moon
  image: https://cloud.githubusercontent.com/assets/754514/14509720/61c61058-01d6-11e6-93ab-0918515ecd56.png
  completed: true

- title: Ramme Jekyll Theme
  url: http://taylantatli.me/Ramme
  image: https://raw.githubusercontent.com/TaylanTatli/Ramme/master/assets/img/screenshot-post.png
  completed: true

- title: Daisy Pelican Theme
  url: http://taylantatli.me/Daisy-Pelican-Theme/
  image: https://raw.githubusercontent.com/TaylanTatli/Daisy-Pelican-Theme/master/Preview-1.png
  completed: true

- title: Block Icon Theme
  url: https://github.com/TaylanTatli/Block-Icon-Theme
  image: https://raw.githubusercontent.com/TaylanTatli/Block-Icon-Theme/master/Preview.png
  completed: false

- title: Start Page
  url: http://taylantatli.me/StartPage/
  image: https://raw.githubusercontent.com/TaylanTatli/StartPage/master/preview.png
  completed: false
{% endhighlight %}

---

## Layouts and Content

Kianic Theme use [Jekyll Compress](https://github.com/penibelst/jekyll-compress-html) to compress html output. But it can cause errors if you use "linenos" (line numbers). I suggest don't use line numbers for codes, because it won't look good with this theme, also i didn't give a proper style for them. If you insist to use line numbers, just remove `layout: compress` string from layouts. It will disable compressing.

### Images for Posts

You can set left block image per post. Just add `image: some link` to your post's front matter. If you don't set this, default post image will be used from `_config.yml`.

```
image: /assets/img/some-image.png
or
image: http://example.com/some-image.png
```    

---

### Fonts

Fonts properties can be managed in 4 files `_data/theme-assets.yml`, `assets/_sass/_fonts.scss`, `assets/_sass/_variables.scss`,  `assets/_sass/_theme-language-font-settings.scss`.

<dl>
  <dt>theme-assets.yml</dt>
  <dd>You can add new fonts to Kianic from external sources like google fonts by editing this file.</dd>
  <dt>assets/_sass/_fonts.scss</dt>
  <dd>If you want to add fonts locally you can edit this file and add new font-faces. font's files must be placed at "assets/fonts".</dd>
  <dt>assets/_sass/_variables.scss</dt>
  <dd>You can edit this settings to change theme default fonts.</dd>
  <dt>assets/_sass/_theme-language-font-settings.scss</dt>
  <dd>Advanced font settings are in this file, you can change fonts, font sizes and font weights in this file for each supported language or you can try to add support for a new language by modifying this file but be aware that it need extra changes in other scss files.</dd>
</dl>

## Questions?

Found a bug or aren't quite sure how something works? By all means [file a GitLab Issue](https://gitlab.com/Azadeh-Afzar/Web-Development/Kianic-Jekyll-Theme/issues/new){:target="_blank"}. And if you make something cool with this theme feel free to let me know.
