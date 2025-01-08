import type { Context } from "@oomol/types/oocana";
import { existQRCode } from "../../src/qrcode";

type BlockContext = Context<Inputs, Outputs>;
type Inputs = Readonly<{ input: string | Buffer }>;
type Outputs = Readonly<{ output: boolean }>;

export default async function(params: Inputs, context: BlockContext): Promise<Outputs> {
  return {
    output: await existQRCode(params.input),
  }
};