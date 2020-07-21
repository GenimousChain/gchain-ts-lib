#! /bin/bash
clgchain="$clu"
account=jack
${clgchain} set contract ${account} ./saveMap -p ${account}
${clgchain} push action ${account} testDropAll '' -p ${account}
${clgchain} push action ${account} testCreateMap '[["1","2","3","4","5"]]' -p ${account}
${clgchain} push action ${account} testCreateMap '[["aa","bb","cc","dd","ff"]]' -p ${account}
${clgchain} push action ${account} testWriteMapCollector '' -p ${account}
${clgchain} push action ${account} testReadMapCollector '' -p ${account}

