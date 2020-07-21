#! /bin/bash

clgchain=clgchain
if [! -n '$1']; then
    echo "using default clutrain"
else
    clgchain="$1/build/programs/clgchain/clgchain"
fi

echo "Deploy the contract ${clgchain}"
account=acm2
${clgchain} set contract ${account} ../testm -p ${account}
${clgchain} push action ${account} registerSupplier '["1.0000 UGAS"]' -p ${account}
${clgchain} push action ${account} testSup '[]' -p ${account}
${clgchain} get table ${account} supp.money supp.money
${clgchain} push action ${account} addBail '["1.0000 UGAS"]' -p ${account}
${clgchain} push action ${account} testSup '[]' -p ${account}
${clgchain} get table ${account} supp.money supp.money
