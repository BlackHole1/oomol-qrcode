# -*- coding: utf-8 -*-

import os
from amzqr import amzqr

def generate_qrcode(text: str, save_dir: str, version: int = 1, level: str = 'M', 
                   picture = None, colorized: bool = False, contrast: float = 1.0, brightness: float = 1.0):
    if picture:
        ext = os.path.splitext(picture)[1]
        save_name = f"qrcode{ext}"
    else:
        save_name = "qrcode.png"

    print(picture)

    _, _, qr_name = amzqr.run(
        words=text,
        version=version,
        level=level,
        picture=picture,
        colorized=colorized,
        contrast=contrast,
        brightness=brightness,
        save_name=save_name,
        save_dir=save_dir
    )
    
    return qr_name
