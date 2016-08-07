#!/bin/bash

rm *.m.jpg
for i in *.jpg; do
	echo $i
	convert -resize 67% $i $(basename $i .jpg).m.jpg
done
