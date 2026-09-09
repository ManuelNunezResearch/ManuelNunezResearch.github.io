\---

layout: default

title: Current committees and conferences

permalink: /conferences/

\---



<h1>Current committees and conferences</h1>



{% assign events = site.data.committees\[2026] %}



{% if events and events.size > 0 %}

<ul>

{% for event in events %}

&#x20; <li>

&#x20;   {% if event.url %}

&#x20;     <a href="{{ event.url }}">{{ event.name }}</a>

&#x20;   {% else %}

&#x20;     {{ event.name }}

&#x20;   {% endif %}

&#x20;   {% if event.role %} ({{ event.role }}){% endif %}

&#x20; </li>

{% endfor %}

</ul>

{% else %}

<p>Information will be added shortly.</p>

{% endif %}



<h2>Previous years</h2>



<p>

<a href="/conferences/2026/">2026</a>

</p>



<p>

<a href="/conferences/manuel-nunezs-involvement-in-previous-scientific-events/">

Previous scientific events

</a>

</p>

