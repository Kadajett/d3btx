#!/bin/bash

oldPrice=1;

while true; do
    sleep 2;

currentPrice=$(curl https://coinbase.com/api/v1/currencies/exchange_rates -s | 
sed 's/,/\n/g' | 
grep 'btc_to_usd' | 
sed 's/:/\n/g' | 
grep -v 'btc_to_usd' | 
sed 's/\"//g';)

currentPriceRounded=$(curl https://coinbase.com/api/v1/currencies/exchange_rates -s| 
sed 's/,/\n/g' | 
grep 'btc_to_usd' | 
sed 's/:/\n/g' | 
grep -v 'btc_to_usd' | 
sed 's/\"//g' | 
awk '{printf("%d\n",$1 + 0.5)}';)

if [[  $currentPriceRounded -ne $oldPrice ]] 
then

    oldPrice=$currentPriceRounded;
    for ((c=0; c<=$currentPriceRounded; c+=10));do echo -e -n "\e[00;31m=\e[00m";done
    for((c = 0; c <$currentPriceRounded%10; c++ )); do echo -e -n "\e[00;32m=\e[00m";done;
    printf " $currentPrice \n";
fi



done;
