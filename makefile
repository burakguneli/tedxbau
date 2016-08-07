all:
	make "updated: $$(date)"

%:
	make min
	git add .
	git commit -am "$@"
	git push

min:
	@echo "minifying js..."
	@cat js/{landing,img,custom}.js | curl -X POST -s --data-urlencode "input=$$(cat -)" "https://javascript-minifier.com/raw" > js/custom.min.js &
	@echo "minifying css..."
	@for i in css/{team,style,fonts}.css; do \
		echo $$i; \
		curl -X POST -s --data-urlencode "input@$$i" 'https://cssminifier.com/raw' > $$(dirname "$$i")/$$(basename "$$i" '.css').min.css & \
		done; \
		while test -n "$$(jobs -r 2>&1)"; do continue; done;

push pull:
	git branch
	git $@

pics:
	ls -1 g/*.lite.jpg | cut -b 3-10 | while read x; do echo "\"$$x\","; done

server:
	python -m SimpleHTTPServer

# curl -X POST -s --data-urlencode 'input@ready.js' https://javascript-minifier.com/raw > ready.min.js
