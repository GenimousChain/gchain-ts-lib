#! /bin/bash
echo 'Deploy the nft contract and test nft contract'
echo 'Precondition:'
echo '1. Accounts: nft, tom, jerry, rose are exist'

clgchain="$clu"
if [ ! -n '$1' ]; then
    echo "using default clutrain"
else
    clgchain="$1/build/programs/clgchain/clgchain"
    echo "using clutrain: ${clgchain}"
fi

if hash usc>/dev/null; then
   usc UIP09.ts -g UIP09.abi -b UIP09.wasm -l --log
   echo "Compiler the contract ……"
else
   echo "Command usc not exist"
   exit
fi

echo 'Deploy the nft contract'
${clgchain} set contract nft ../UIP09 -p nft

${clgchain} push action nft create '["rose", "1000 XRT"]' -p nft
${clgchain} push action nft issue '["tom", "2 XRT", ["Wu", "Kong"], "2018", "First issue"]' -p rose
${clgchain} push action nft transfer '["tom", "jerry", 1, "transfer"]' -p tom
${clgchain} push action nft transfer '["tom", "jerry", 2, "transfer"]' -p tom
${clgchain} push action nft totalSupply '["XRT"]' -p nft
${clgchain} push action nft totalSupplies '' -p nft
${clgchain} push action nft balanceOf '["jerry", "XRT"]' -p jerry
${clgchain} push action nft tokenByIndex '["jerry", "XRT", 1]' -p jerry
${clgchain} push action nft uriOf '[1]' -p nft
${clgchain} push action nft ownerOf '[1]' -p nft

echo "Get the table info:"
${clgchain} get table nft token token
${clgchain} get table nft stat stat
${clgchain} get table nft jerry accounts

files=(UIP09.wast UIP09.wasm UIP09.abi)
for fileName in ${files[@]}
do
    if [ -f $fileName ]; then
    rm $fileName
    fi
done
