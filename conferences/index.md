---
layout: default
title: Current committees and conferences
permalink: /conferences/
---

{% assign current_year = site.time | date: "%Y" %}
{% assign year_number = current_year | plus: 0 %}
{% assign events = site.data.committees[year_number] %}

<h1>Current events</h1>

{% if events and events.size > 0 %}
<ul>
{% for event in events %}
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
{% else %}
<p>No events currently listed for {{ current_year }}.</p>
{% endif %}

<h1>Previous events</h1>

<p>
<a href="/conferences/manuel-nunezs-involvement-in-previous-scientific-events/">
Previous scientific events
</a>
</p>