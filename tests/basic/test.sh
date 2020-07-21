#!bin/bash
clgchain="$clu"
account=jack

################### Testing types ##################
${clgchain} set contract ${account} ./types -p ${account}
${clgchain} push action ${account} testBasicTypeOne '[1, 1, 1, true]' -p ${account}
${clgchain} push action ${account} testBasicTypeZero '[0, 0, 0, false]' -p ${account}
${clgchain} push action ${account} testCarObj '{"name": "gchain", "year": 2019,"car": {"name": "gchain", "year": 2019}}' -p ${account}
${clgchain} push action ${account} testCarArray '{"name": "gchain", "year": 2019,"car": [{"name": "gchain", "year": 2019}, {"name": "gchain", "year": 2019}]}'  -p ${account}
${clgchain} push action ${account} testNumsIncreaseVal '{"nums": [0, 1, 2, 3, 4, 5, 6]}' -p ${account}
${clgchain} push action ${account} testNumsIncreaseVal '{"nums": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}' -p ${account}

${clgchain} push action ${account} testMap '[6]' -p ${account}
${clgchain} push action ${account} testMap '[100]' -p ${account}

################### Testing track ##################
${clgchain} set contract ${account} ./track -p ${account}
${clgchain} push action ${account} testTrack '[]' -p ${account}

################### Testing safemath ##################
${clgchain} set contract ${account} ./safemath -p ${account}
${clgchain} push action ${account} testSafeMath '' -p token

################### Testing returnable ##################
${clgchain} set contract ${account} ./return -p ${account}
${clgchain} push action ${account} testReturnAsset '[]' -p ${account}
${clgchain} push action ${account} testReturnAssetArr '[]' -p ${account}
${clgchain} push action ${account} testClassObj '[]' -p ${account}
${clgchain} push action ${account} testClassObjArr '[]' -p ${account}
${clgchain} push action ${account} teststr '[]' -p ${account}

################### Testing time ##################
${clgchain} set contract ${account} ./time -p ${account}
${clgchain} push action ${account} testTime '[]' -p ${account}

################### Testing Crypto ##################
${clgchain} set contract ${account} ./crypto -p ${account}
${clgchain} push action ${account} testCrypto '' -p ${account}
