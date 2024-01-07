---
layout: page
title: بایگانی برچسب‌ها
subtitle: برچسب‌ها
excerpt: "بایگانی تارنوشت‌های مرتب شده بر اساس برچسب."
type: "Tag Archive"
permalink: /farsi/tags.html
share:
  facebook: false
  twitter: false
  linkedin: false
---

{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign tags_list = site_tags | split:',' | sort %}

<ul class="entry-meta">
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tags_list[item] | strip_newlines }}{% endcapture %}
    {% for post in site.tags[this_word] %}{% if post.lang == page.lang %}
      {% assign flag = true %}
    {% endif %}{% endfor %}
    {% if flag == true %}
      <li><a href="#{{ this_word }}" class="tag {{ page.direction_format }}"><span class="term">{{ this_word }}</span> <span class="count">{{ site.tags[this_word].size }}</span></a></li>
    {% endif %}
    {% assign flag = false %}
  {% endunless %}{% endfor %}
</ul>
{% for item in (0..site.tags.size) %}{% unless forloop.last %}
  {% capture this_word %}{{ tags_list[item] | strip_newlines }}{% endcapture %}
  {% for post in site.tags[this_word] %}{% if post.lang == page.lang %}
    {% assign flag = true %}
  {% endif %}{% endfor %}
  {% if flag == true %}
  <h2 id="{{ this_word }}" class="tag-heading tagged">{{ this_word }}</h2>
  <ul>
  {% for post in site.tags[this_word] %}{% if post.title != null %}
  <li class="entry-title"><a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a></li>
  {% endif %}{% endfor %}
  </ul>
  {% endif %}
  {% assign flag = false %}
{% endunless %}{% endfor %}
