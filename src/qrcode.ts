import { Jimp } from 'jimp';
import jsqr from 'jsqr';

export async function decode(input: string | Buffer): Promise<string> {
    let i = input;

    if (typeof input === 'string') {
        if (input.startsWith("/")) {
            // skip
        }
        else if (input.startsWith('data:image') && input.includes(';base64,')) {
            i = Buffer.from(input.replace(/^data:image\/[a-z]+;base64,/, ''), 'base64');
        } else {
            i = Buffer.from(input, "base64");
        }
    }

    const image = await Jimp.read(i);
    
    const result = jsqr(
        new Uint8ClampedArray(image.bitmap.data),
        image.bitmap.width,
        image.bitmap.height
    );

    if (!result) {
        return Promise.reject(new Error('QR code not found'));
    }

    return result.data;
}

export async function existQRCode(input: string | Buffer): Promise<boolean> {
    return await decode(input).then(() => true).catch(() => false);
}
