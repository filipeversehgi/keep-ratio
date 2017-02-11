# keep-ratio
A jQuery plugin to calculate the ration of Iframe Video embbeds and other stuff

-----
## How to use it
Just call it on the element you wanna keep the ratio. The default ratio is **16/9**, and you can pass any ratio-string you like through the parameters.

## Examples
Call it on Document Ready
```html
<iframe width="100%" class="keepItRatio" height="315" src="https://www.youtube.com/embed/YOUTUBEID" frameborder="0" allowfullscreen></iframe>
```
```javascript
$(document).ready(function() {
	$(".keepItRatio").keepRatio("4:3");
});
```
Call it on Window Resize (Too keep the ratio during resizes)
```javascript
$(window).resize(function() {
	$(".keepItRatio").keepRatio();
});
```
# Important Note
You need to pass first the ratio param in the __width:height__ order.

# ToDO
* Calculate the ratio based on element's height rather than width