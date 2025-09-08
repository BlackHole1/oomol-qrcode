# QR Code Toolkit for OOMOL Studio

A comprehensive QR Code toolkit for [OOMOL Studio](https://oomol.com/) that provides three essential blocks for QR code operations: generating, reading, and checking QR codes.

## 📱 What is This?

This toolkit contains three easy-to-use blocks that handle all your QR code needs:

- **🔍 QR Code Reader** - Extract text from QR code images
- **⚡ QR Code Generator** - Create customized QR codes
- **✅ QR Code Checker** - Verify if an image contains a QR code

## 🧩 Available Blocks

### 1. QR Code Reader

**What it does:** Reads and decodes QR codes from various input formats.

**Inputs:**
- **Input**: Accepts multiple formats:
  - Base64 encoded text
  - Base64 encoded string  
  - File path to an image
  - Binary image data (ArrayBuffer)

**Outputs:**
- **Text Content**: The decoded text from the QR code

**Use Cases:**
- Extract URLs from QR code images
- Read contact information from QR codes
- Decode any text-based QR code content

---

### 2. QR Code Generator

**What it does:** Creates customizable QR codes with advanced styling options.

**Inputs:**
- **Text**: The content to encode (required)
- **Background Picture**: Optional image to embed in the QR code
- **Colorized**: Enable/disable color mode (default: false)
- **Contrast**: Adjust image contrast (0.1-∞, default: 1.0)
- **Brightness**: Adjust image brightness (0.1-∞, default: 1.0)  
- **Error Correction Level**: Choose reliability level
  - L (Low) - ~7% error correction
  - M (Medium) - ~15% error correction (default)
  - Q (Quartile) - ~25% error correction
  - H (High) - ~30% error correction
- **Version**: QR code size/capacity (1-40, default: 1)

**Outputs:**
- **Generated QR Code**: Path to the created QR code image

**Features:**
- Visual preview of generated QR code
- Customizable styling with background images
- Adjustable error correction for different use cases
- Support for various QR code sizes

**Use Cases:**
- Create QR codes for websites, contact info, or text
- Generate branded QR codes with company logos
- Create artistic QR codes with custom backgrounds

---

### 3. QR Code Checker

**What it does:** Determines whether an image contains a QR code.

**Inputs:**
- **Input**: Same flexible input formats as the Reader:
  - Base64 encoded text
  - Base64 encoded string
  - File path to an image
  - Binary image data (ArrayBuffer)

**Outputs:**
- **Has QR Code**: Boolean result (true/false)

**Use Cases:**
- Pre-validate images before processing
- Filter images containing QR codes from a batch
- Quality control in QR code workflows

## 🚀 How to Use

### In OOMOL Studio:

1. **Drag and Drop**: Add any of the three blocks to your workflow
2. **Connect Inputs**: Link your data sources to the block inputs
3. **Configure Settings**: Adjust parameters as needed (Generator block)
4. **Run Workflow**: Execute to process your QR codes
5. **View Results**: Check outputs and preview (Generator shows visual preview)

### Example Workflows:

**Simple QR Code Reading:**
```
Image File → QR Code Reader → Text Output
```

**QR Code Generation with Preview:**
```
Text Input → QR Code Generator → Image Preview + File Output
```

**Batch QR Code Processing:**
```
Image Files → QR Code Checker → Filter → QR Code Reader → Text Results
```

## 🛠 Technical Details

### Dependencies
- **Reader & Checker**: TypeScript-based using [jimp](https://www.npmjs.com/package/jimp) and [jsQR](https://github.com/cozmo/jsQR)
- **Generator**: Python-based using [amazing-qr](https://github.com/x-hw/amazing-qr)

### Supported Image Formats
- PNG, JPEG, BMP, GIF
- Base64 encoded images
- Binary image data

### Error Correction Levels Guide
- **L (Low)**: Best for large QR codes with minimal damage risk
- **M (Medium)**: Balanced option for most use cases  
- **Q (Quartile)**: Good for environments with potential interference
- **H (High)**: Maximum reliability for critical applications

## 📊 Performance Tips

- Use appropriate error correction levels for your environment
- Higher versions (larger QR codes) can store more data
- Enable colorized mode only when needed (affects readability)
- Test QR codes with the Checker block before mass production

## 🔧 Integration

This toolkit integrates seamlessly with OOMOL Studio workflows. Connect these blocks with:
- File input/output blocks
- Image processing workflows  
- Data validation pipelines
- Batch processing systems

## 📝 License & Credits

- QR Code reading powered by [jsQR](https://github.com/cozmo/jsQR)
- QR Code generation powered by [amazing-qr](https://github.com/x-hw/amazing-qr)
- Repository: https://github.com/BlackHole1/oomol-qrcode

---

*Built for OOMOL Studio - Making QR code operations simple and powerful!*