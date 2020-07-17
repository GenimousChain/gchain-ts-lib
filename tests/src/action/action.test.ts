import { NAME } from "../../../src/account";
import { Contract } from "../../../src/contract";
import { Action, ACTION } from "../../../src/action";
import { NEX } from "../../../lib/name_ex";

const account_jack = NAME("autotest1");
const account_tony = NAME("autotest3");

class ActionContract extends Contract {

    @action
    test(): void {
        gchain_assert(Action.sender == account_jack, "Action.sender exception.");
        gchain_assert(Action.receiver == this.receiver, "Action.receiver exception.");

        gchain_assert(Action.hasAuth(Action.sender), "Action.hasAuth must be true for Action.sender.");
        gchain_assert(!Action.hasAuth(account_tony), "Action.hasAuth must be false for account_tony.");

        Action.requireAuth(Action.sender);
        Action.requireAuth2(Action.sender, NAME("active"));
        Action.requireRecipient(account_tony);

        let act = ACTION("test");
        gchain_assert(NEX("test") == act.code, "Action.code exception.");
        gchain_assert(act.name == "test", "Action.name exception.");
        // skip sendInline and sendContextFreeInline methods, test in other demos.
    }
}
