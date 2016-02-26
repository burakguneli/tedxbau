all:
	make "updated: $$(date)"

%:
	git add .
	git commit -am "$@"
	git push

min:
	for i in css/team.css css/style.css css/fonts.css; do \
		curl -X POST -s --data-urlencode "input@$$i" 'https://cssminifier.com/raw' > $$(dirname "$$i")/$$(basename "$$i" '.css').min.css; \
	done

push pull:
	git branch
	git $@

pics:
	ls -1 g/*.lite.jpg | cut -b 3-10 | while read x; do echo "\"$$x\","; done

# curl -X POST -s --data-urlencode 'input@ready.js' https://javascript-minifier.com/raw > ready.min.js
