---
layout: default
title: "Manuel Núñez's involvement in previous Scientific Events"
permalink: /conferences/manuel-nunezs-involvement-in-previous-scientific-events/
---

<h1>Manuel Núñez's involvement in previous Scientific Events</h1>

{% assign yearly_events = site.data.committees.years | sort: "year" | reverse %}
{% assign current_block = yearly_events | first %}
{% assign current_year = current_block.year %}

{% for block in yearly_events %}
{% if block.year < current_year %}
<h2>{{ block.year }}</h2>
<ul>
{% for event in block.events %}
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
{% endfor %}
