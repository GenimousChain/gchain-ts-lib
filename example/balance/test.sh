#! /bin/bash
if hash usc>/dev/null; then
   usc balance.ts -t balance.wast -g balance.abi -b balance.wasm -l --validate
fi

account=acm
clgchain="$clu"
${clgchain} set contract acm ../balance -p acm
${clgchain} push action acm transfer '["acm", "acm1", "10.0000 UGS"]' -p acm

files=(balance.wast balance.wasm balance.abi)
for fileName in ${files[@]};
do
  if [ -f $fileName ]; then
    rm $fileName
  fi
done
