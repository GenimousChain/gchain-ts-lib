import { Contract } from "../../src/contract";
import { RandRecord, Random } from "../../lib/random";

class RandApp extends Contract {
  private random: Random;
  constructor(code: u64) {
    super(code);
    this.random = new Random();
  }

  @action
  queryLatest(): RandRecord {
    return this.random.queryLatest();
  }

  @action
  query(bckNum: u64): RandRecord {
    return this.random.query(bckNum);
  }
}
