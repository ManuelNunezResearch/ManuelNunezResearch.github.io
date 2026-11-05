---
layout: default
title: Committees, Conferences, Workshops and Summer Schools
permalink: /conferences/
---

<h1>Committees, Conferences, Workshops and Summer Schools</h1>

{% for item in site.data.committees.permanent %}
<p>{{ item.html }}</p>
{% endfor %}

{% assign yearly_events = site.data.committees.years | sort: "year" | reverse %}
{% assign current_block = yearly_events | first %}
{% assign current_year = current_block.year %}

<h2>Current events</h2>

{% if current_block %}
<p>During {{ current_year }} I am involved in the following events:</p>

<ul>
{% for event in current_block.events %}
  <li>
    {% if event.html %}
      {{ event.html }}
    {% else %}
      {% if event.url %}
        <a href="{{ event.url }}">{{ event.name }}</a>
      {% else %}
        {{ event.name }}
      {% endif %}
      {% if event.role %} ({{ event.role }}){% endif %}
    {% endif %}
  </li>
{% endfor %}
</ul>
{% endif %}

<p>
<a href="/conferences/manuel-nunezs-involvement-in-previous-scientific-events/">
Manuel Núñez's involvement in previous Scientific Events
</a>
</p>
