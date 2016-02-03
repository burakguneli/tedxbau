all:
	git add .
	git commit -am "updated: $$(date)"
	git push

%:
	git add .
	git commit -am "$@"
	git push
