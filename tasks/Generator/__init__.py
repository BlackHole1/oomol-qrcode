from oocana import Context, ImagePreviewPayload
from src.qrcode import generate_qrcode
import os

def main(params: dict, context: Context):
  dir_path = os.path.join(context.session_dir, "qr_code_output", os.urandom(5).hex())
  os.makedirs(dir_path, exist_ok=True)

  text = params['text']
  level = params['level']
  colorized = params['colorized']
  contrast = float(params.get('contrast', 1.0))
  brightness = float(params.get('brightness', 1.0))
  picture = params.get('picture', None)
  version = params['version']

  qr_path = generate_qrcode(
      text=text,
      save_dir=dir_path,
      version=version,
      level=level,
      brightness=brightness,
      contrast=contrast,
      colorized=colorized,
      picture=picture,
  )

  p : ImagePreviewPayload = {
    "type": "image",
    "data": qr_path
  }

  context.preview(p)

  return { "output": qr_path }
