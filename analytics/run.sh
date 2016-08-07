#!/bin/bash

cd $(dirname $0)

sleep 5 && open "http://localhost:8000" &

python -m SimpleHTTPServer 8000 &>/dev/null &

echo "Press any key to exit and stop program"

read;

killall python

exit 0
