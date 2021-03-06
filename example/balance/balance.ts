import { Contract } from "../../src/contract";
import { Asset } from "../../src/asset";
import { Action } from "../../src/action";

class BalanceContract extends Contract {
    /*
     * MUST set active permission of 'from' to gcfio.token, otherwise the send operation will fail.
     * here is an example to set permission, the $PubKeyOfFrom is the public key of account $from:
     *
     * clgchain set account permission $from active
     * '{"threshold": 1,
     * "keys":[{"key": "$PubKeyOfFrom", "weight": 1}],
     * "accounts":[{"permission": {"actor": "$from", "permission": "gcfio.code"}, "weight": 1}]}' owner -p $from
     */
    @action
    transfer(from: account_name, to: account_name, bet: Asset): void {
        Action.requireAuth(from);
        let balance = Asset.balanceOf(from);
        gchain_assert(balance.gte(bet), "your balance is not enough.");
        balance.prints("banalce from: ");
        Asset.transfer(from, to, bet, "this is a transfer test");
    }
}
