#!/bin/bash

unset PREFIX
[[ -f ~/.bashrc ]] && source ~/.bashrc || :
[[ -f ~/.nvm/nvm.sh ]] && source ~/.nvm/nvm.sh || :
type nvm &> /dev/null && nvm use || :

set -e

lint-staged
npm run build
