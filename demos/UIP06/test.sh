#! /bin/bash
echo 'Deploy and test the token contract '
echo 'Precondition:'
echo '1. Accounts: token, tom, jack, rose are exist'

clgchain="$1/build/programs/clgchain/clgchain"
echo "using clutrain: ${clgchain}"

if hash usc>/dev/null; then
   usc UIP06.ts -g UIP06.abi -b UIP06.wasm -l --validate
   echo "Compiler the contract ……"
else
   echo "Command usc not exist."
   exist
fi

#${clgchain} set contract token ../UIP06/ -p token
${clgchain} set contract token $HOME/temp/token/ -p token
${clgchain} push action token create '["rose", "100.00 ETA"]' -p token
${clgchain} push action token issue '["jack", "20.00 ETA", "issue"]' -p rose
${clgchain} push action token issue '["jack", "20.00 ETA", "issue"]' -p rose
${clgchain} push action token transfer '["jack", "tom" "10.00 ETA", "transfer"]' -p jack
${clgchain} push action token balanceOf '["jack", "ETA"]' -p token
${clgchain} push action token totalSupply '["ETA"]' -p token

#Get table info
${clgchain} get table token ETA stat
${clgchain} get table token tom accounts
${clgchain} get table token jack accounts

# p=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
# ${clgchain} set contract jack $p/../UIP06/ -p jack
# $clgchain push action jack create '["rose", "100000.0000 BENZ"]' -p jack
# $clgchain push action jack issue '["rose", "9000.0000 BENZ", "xxoo"]' -p rose
# $clgchain push action jack freeze '["tony", "100.0000 BENZ", 1540263045, "a freeze test"]' -p rose
# $clgchain push action jack retrieval '["rose", "100.0000 BENZ"]' -p tony
#
# $clgchain push action jack freeze '["tony", "200.0000 BENZ", 1540283045, "another freeze test"]' -p rose
# $clgchain push action jack retrieval '["rose", "200.0000 BENZ"]' -p tony
#
# files=(UIP06.wast UIP06.wasm UIP06.abi)
# for fileName in ${files[@]}
# do
#     if [ -f $fileName ]; then
#     rm $fileName
#     fi
# done
