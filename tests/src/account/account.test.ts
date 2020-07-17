import { Account, NAME, RNAME, ACCOUNT } from "../../../src/account";
import { Contract } from "../../../src/contract";
import { Asset } from "../../../src/asset";
// jack.ma = 0x79910048C0000000
const s_jack_ma: string = "jack.ma";
const i_jack_ma: u64 = 0x79910048C0000000;
const publickey_of_jack = "UTR8573kkPXFNqpzEUjFAjmvZeXLLBanhSj5Rd4g5sBhQDnCDqBaW";
const account_not_exist = NAME("aabbccddee");
const account_jack_name = "autotest1";
const account_jack = NAME("autotest1");
const account_tony = NAME("autotest3");

class AccountContract extends Contract {

    @action
    test(): void {
        gchain_assert(NAME(s_jack_ma) == i_jack_ma, "NAME convert string to u64 exception.");
        gchain_assert(RNAME(i_jack_ma) == s_jack_ma, "RNAME convert u64 to string exception.");

        gchain_assert(Account.isValid(this.receiver), "Account.isValid exception");
        gchain_assert(Account.isValid(account_not_exist) == false, "Account.isValid for not exist exception.");

        gchain_assert(Account.codeStatus(this.receiver) == 1, "Account.codeStatus exception.");
        gchain_assert(Account.codeStatus(account_tony) == 0, "Account.codeStatus for autotest3 exception");
        gchain_assert(Account.codeStatus(account_not_exist) == -1, "Account.codeStatus invalid account name.");

        gchain_assert(Account.publicKeyOf(account_jack) == publickey_of_jack, "Account.publicKeyOf exception for jack.");
        gchain_assert(Account.publicKeyOf(account_not_exist) == "", "Account.publicKeyOf exception for account_not_exist.");

        let instance = ACCOUNT(account_jack_name);
        gchain_assert(instance.code == account_jack, "Account.code exception.");
        gchain_assert(instance.name == account_jack_name, "Account.name exception.");
        let empty_balance = new Asset();
        gchain_assert(!(instance.balance.eq(empty_balance)), "Account.balance exception.");
        // skip transfer method, test it in some demo.
    }
}
