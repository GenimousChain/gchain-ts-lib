import { Contract } from "../../../src/contract";
import { StringToSymbol, Asset } from "../../../src/asset";

const ugas_symbol: u64 = 0x5341475504;
class AssetContract extends Contract {

    @action
    test(): void {
        gchain_assert(StringToSymbol(4, "UGAS") == ugas_symbol, "StringToSymbol not match.");

        const abcAmount = 10000;
        let abcSymbol = StringToSymbol(4, "ABC");
        let ast = new Asset(abcAmount, abcSymbol);
        let rhs = new Asset(100, abcSymbol);

        gchain_assert(ast.isSymbolValid(), "Asset.isSymbolValid must be true.");
        gchain_assert(ast.amount == abcAmount, "Asset.amount not match");
        gchain_assert(ast.gt(rhs), "Asset.gt must be true.");
        gchain_assert(!ast.lt(rhs), "Asset.lt must be false.");
        gchain_assert(!ast.eq(rhs), "Asset.eq must be false.");

        ast.add(rhs);
        gchain_assert(ast.amount == (abcAmount + 100), "Asset.amount not match after add op.");

        ast.sub(rhs);
        gchain_assert(ast.amount == abcAmount, "Asset.amount not match after sub op.");

        ast.multi(2);
        gchain_assert(ast.amount == (abcAmount * 2), "Asset.amount not match after multi op.");

        ast.divide(2);
        gchain_assert(ast.amount == abcAmount, "Asset.amount not match after divide op.");

        gchain_assert(ast.symbolPrecision() == 4, "Asset.symbolPrecision not match.");
        gchain_assert(ast.symbolName() == (abcSymbol >> 8), "Asset.symbolName not match.");
        gchain_assert(ast.isValid(), "Asset.isValid must be true.");
    }
}
