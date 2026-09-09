---
layout: default
title: Committees, Conferences, Workshops and Summer Schools
permalink: /conferences/
---

<h1>Committees, Conferences, Workshops and Summer Schools</h1>

{% for item in site.data.committees.permanent %}
<p>{{ item.html }}</p>
{% endfor %}

{% assign current_year = site.time | date: "%Y" | plus: 0 %}
{% assign current_block = nil %}

{% for block in site.data.committees.years %}
  {% if block.year == current_year %}
    {% assign current_block = block %}
  {% endif %}
{% endfor %}

<h2>Current events</h2>

{% if current_block %}
<p>During {{ current_year }} I am involved in the following events:</p>

<ul>
{% for event in current_block.events %}
  <li>
    {% if event.url %}
      <a href="{{ event.url }}">{{ event.name }}</a>
    {% else %}
      {{ event.name }}
    {% endif %}
    {% if event.role %} ({{ event.role }}){% endif %}
  </li>
{% endfor %}
</ul>
{% endif %}

<p>
Previously, I was involved in these
<a href="/conferences/manuel-nunezs-involvement-in-previous-scientific-events/">
events
</a>.
</p>