# QR Code Toolkit

A complete set of tools for working with QR codes in your OOMOL workflows. This toolkit provides everything you need to create, read, and validate QR codes for various applications.

## What is This Project?

The QR Code Toolkit is a collection of smart building blocks that help you work with QR codes without any programming knowledge. Whether you need to create QR codes for your business, decode QR codes from images, or check if an image contains a QR code, this toolkit has you covered.

## Available Blocks

### 🎯 Generator QR Code
**Purpose**: Create custom QR codes with advanced styling options

**What it does**:
- Converts any text into a QR code
- Allows you to customize the appearance with background images
- Provides professional styling options like contrast and brightness control
- Supports colorization for branded QR codes
- Offers different error correction levels for various use cases

**Perfect for**:
- Creating QR codes for business cards, flyers, or websites
- Generating branded QR codes with company logos
- Making QR codes for events, menus, or contact information
- Creating high-quality QR codes for print materials

**Settings you can adjust**:
- **Text**: The content you want to encode (website URL, contact info, etc.)
- **Background Picture**: Optional image to use as background
- **Colorized**: Enable color customization
- **Contrast**: Adjust visual contrast (0.1 to higher values)
- **Brightness**: Control brightness levels (0.1 to higher values)
- **Error Correction Level**: Choose reliability level (L=Low, M=Medium, Q=Quartile, H=High)
- **Version**: Set QR code complexity level

### 📖 Reader QR Code
**Purpose**: Extract text content from QR code images

**What it does**:
- Reads QR codes from various image formats
- Extracts the hidden text or information
- Works with images from files, cameras, or other sources
- Supports multiple input methods for maximum flexibility

**Perfect for**:
- Decoding QR codes from photos or screenshots
- Extracting URLs, contact information, or messages from QR codes
- Processing QR codes received via email or messaging
- Batch processing multiple QR code images

**Input options**:
- **Base64 Text**: Paste image data directly
- **Base64 String**: Use encoded image strings
- **File Path**: Select image files from your computer
- **Binary Data**: Process raw image data

### ✅ Exist QR Code
**Purpose**: Check if an image contains a QR code

**What it does**:
- Analyzes images to detect QR code presence
- Returns a simple yes/no answer
- Works with the same flexible input options as the Reader
- Helps validate images before processing

**Perfect for**:
- Sorting images that contain QR codes
- Validating user uploads before processing
- Quality control in automated workflows
- Pre-filtering images for batch processing

**Input options**:
- Same flexible input methods as the Reader block
- Returns true if QR code is found, false if not

## Common Use Cases

### 🏢 Business Applications
- **Digital Menus**: Create QR codes linking to online menus for restaurants
- **Contact Sharing**: Generate QR codes containing business contact information
- **Event Check-in**: Create QR codes for event registration and attendance tracking
- **Product Information**: Link physical products to digital documentation or websites

### 📱 Marketing & Communication
- **Website Links**: Convert long URLs into scannable QR codes
- **Social Media**: Create QR codes linking to social profiles or campaigns
- **Promotional Materials**: Add QR codes to flyers, posters, and advertisements
- **Customer Feedback**: Link to survey forms or review pages

### 🔄 Data Processing
- **Image Analysis**: Check large collections of images for QR code content
- **Content Extraction**: Pull information from QR codes in documents or photos
- **Workflow Automation**: Automatically process QR codes in business workflows
- **Quality Assurance**: Verify QR code functionality before publication

## Getting Started

1. **To Create a QR Code**: Use the Generator block with your text content
2. **To Read a QR Code**: Use the Reader block with your image file
3. **To Check for QR Codes**: Use the Exist block to validate images first

## Technical Requirements

- No programming knowledge required
- Works with common image formats (PNG, JPG, etc.)
- Supports various input methods for maximum flexibility
- Optimized for both individual use and batch processing

## Support

This is an open-source project. For issues or contributions, visit: https://github.com/BlackHole1/oomol-qrcode

---

*Version 1.0.2 - Latest updates include enhanced layer support for improved QR code generation*