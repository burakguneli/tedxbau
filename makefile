all:
	make "updated: $$(date)"

%:
	git add .
	git commit -am "$@"
	git push

min:
	for i in style.css fonts.css; do \
		curl -X POST -s --data-urlencode "input@$$i" 'http://cssminifier.com/raw' > $$(basename "$$i" '.css').min.css; \
	done

pull:
	git branch
	git pull

# curl -X POST -s --data-urlencode 'input@ready.js' https://javascript-minifier.com/raw > ready.min.js
