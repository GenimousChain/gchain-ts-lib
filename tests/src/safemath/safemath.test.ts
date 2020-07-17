import { Contract } from "../../../src/contract";
import { SafeMath } from "../../../src/safemath";


class SafeMathTest extends Contract {

    @action
    test(): void {

        gchain_assert(SafeMath.add(12, 12) == 24, "SafeMath.add failed.");
        gchain_assert(SafeMath.sub(12, 12) == 0, "SafeMath.sub failed.");
        gchain_assert(SafeMath.div(12, 12) == 1, "SafeMath.div failed.");
        gchain_assert(SafeMath.mul(12, 12) == 144, "SafeMath.mul failed.");
        gchain_assert(SafeMath.sqrt(16) == 4, "SafeMath.sqrt failed.");
        gchain_assert(SafeMath.square(12) == 144, "SafeMath.square failed.");
        gchain_assert(SafeMath.pwr(2, 2) == 4, "SafeMath.pwr failed.");

        let a = u64.MAX_VALUE;
        let b: u64 = 9527;
        SafeMath.div(a, b);
        SafeMath.sub(a, b);

    }
}
