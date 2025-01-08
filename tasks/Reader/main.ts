import type { Context } from "@oomol/types/oocana";
import { decode} from "../../src/qrcode";

type BlockContext = Context<Inputs, Outputs>;
type Inputs = Readonly<{ input: string | Buffer }>;
type Outputs = Readonly<{ output: string }>;

export default async function(params: Inputs, context: BlockContext): Promise<Outputs> {
  return {
    output: await decode(params.input),
  }
};