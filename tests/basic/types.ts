import { Contract } from "../../src/contract";

class Car implements Serializable {
    name: string;
    year: u32;

    toString(): string {
        return "name: " + this.name + ". year: " + this.year.toString();
    }
}
/**
 * Test contract action receive types
 */
class TestType extends Contract {

    constructor(receiver: account_name){
        super(receiver);
    }

    @action
    testBasicTypeOne(unsigned8: u8, unsigned32: u32, unsigned64: u64, yes: boolean): void {
        gchain_assert(unsigned8 == 1, "testBasicTypeOne: u8 failed.");
        gchain_assert(unsigned32 == 1, "testBasicTypeOne: u32 failed.");
        gchain_assert(unsigned64 == 1, "testBasicTypeOne: u64 failed.");
        gchain_assert(yes == true, "testBasicTypeOne: bool failed.")
    }

    @action
    testBasicTypeZero(unsigned8: u8, unsigned32: u32, unsigned64: u64, yes: boolean): void {
        gchain_assert(unsigned8 == 0, "testBasicTypeZero: u8 failed.");
        gchain_assert(unsigned32 == 0, "testBasicTypeZero: u32 failed.");
        gchain_assert(unsigned64 == 0, "testBasicTypeZero: u64 failed.");
        gchain_assert(yes == false, "testBasicTypeZero: bool failed.")
    }

    @action
    testCarObj(name: string, year: u32, car: Car) : void {
        gchain_assert(car.name == name, "testCarObj car.name failed.");
        gchain_assert(car.year == year, "testCarObj car.name failed.");
    }

    @action
    testCarArray(car: Car[], name: string, year: u32): void {
        for (let index = 0; index < car.length; index++) {
            gchain_assert(car[index].name == name, "testCarArray car.name failed.");
            gchain_assert(car[index].year == year, "testCarArray car.year failed.");
        }
    }

    @action
    testNumsIncreaseVal(nums: Array<u64>): void {
        for (let index = 0; index < nums.length; index ++) {
            gchain_assert(<i32>nums[index] == index, "testNumsIncreaseVal error")
        }
    }

    @action
    testMap(len: i32): void {
        let intStrMap: Map<i32, string> = new Map<i32, string>();
        for (let index = 0; index < len; index ++) {
            intStrMap.set(index, index.toString());
        }

        for (let index = 0; index < len; index ++) {
            gchain_assert(intStrMap.has(index), "testMap failed");
            gchain_assert(intStrMap.get(index) == index.toString(), "testMap failed");
        }
    }
}
