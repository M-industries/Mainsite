// good old obtrusive JavaScript
function menuOpen() {
	var el = document.querySelector("header");
	if(el.classList.contains("open")) {
		el.classList.remove("open");
	} else {
		el.classList.add("open");
	}
}

window.onload = function() {
	(function(){
		var e = document.querySelector(".loop[data-labels]");
		if (! e) return;
		var char_time = 300;
		var word_time = 4000;
		var counter = 0;
		var labels = e.dataset.labels.split(",");
		if (labels.length < 1) return;

		labels.forEach(function(i){
			// Make sure word_time is long enough to render the longest word,
			// plus a little delay.
			var this_word_time = (i.length + 3) * char_time;
			if (word_time < this_word_time) {
				word_time = this_word_time;
			}
		});

		(function renderWord() {
			e.textContent = "";
			var next_label = labels[counter];
			var parts = next_label.split("");
			var parts_counter = 0;
			if (counter < labels.length - 1) {
				counter += 1;
			} else {
				counter = 0;
			}

			(function renderChar(){
				if (parts_counter < parts.length) {
					parts_counter += 1;
				} else {
					return;
				}
				e.textContent += parts[parts_counter - 1];
				window.setTimeout(renderChar, char_time);
			}());

			window.setTimeout(renderWord, word_time);
		}());
	}());
};
