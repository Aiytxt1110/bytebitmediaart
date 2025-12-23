import { ServiceDetail } from "../types/index";
import { designPortfolios, developmentPortfolios, saasPortfolios } from "./portfolios";

export const serviceDetails: Record<string, ServiceDetail> = {
  design: {
    id: "design",
    title: "Design Services",
    description: "UX/UI Design และ Graphics Design ครบวงจร",
    longDescription: "เราให้บริการออกแบบทั้ง UX/UI สำหรับเว็บไซต์และแอปพลิเคชัน รวมถึงงาน Graphics Design ทุกประเภท ไม่ว่าจะเป็นโลโก้ แบรนด์ไอเดนทิตี้ งานตัดต่อภาพและวิดีโอ หรือสื่อการตลาดต่างๆ ด้วยทีมดีไซเนอร์มืออาชีพที่มีประสบการณ์ทำงานกับลูกค้ามากกว่า 100 โครงการ",
    features: [
      "Wireframe และ Mockup ครบถ้วน",
      "Prototype แบบ Interactive",
      "Design System สำหรับทีม",
      "Responsive Design ทุกขนาดหน้าจอ",
      "รีวิชั่นไม่จำกัด (ตามแพ็กเกจ)",
      "ส่งมอบไฟล์ต้นฉบับ (Figma, AI, PSD)",
    ],
    portfolios: designPortfolios,
    pricing: [
      {
        title: "UX/UI Design",
        price: "เริ่มต้น ฿15,000",
        features: ["5-10 หน้า", "2 รอบ Revision", "Prototype Basic"],
      },
      {
        title: "Graphics Design",
        price: "เริ่มต้น ฿3,000",
        features: ["Logo/Banner", "1 รอบ Revision", "ไฟล์ต้นฉบับ"],
      },
    ],
  },
  development: {
    id: "development",
    title: "Development Services",
    description: "พัฒนาเว็บไซต์และระบบธุรกิจครบวงจร",
    longDescription: "บริการพัฒนาเว็บไซต์และระบบงานทุกประเภท ตั้งแต่เว็บไซต์ธรรมดา เว็บไซต์สำเร็จรูป ไปจนถึงแพลตฟอร์มและระบบธุรกิจขนาดใหญ่ ด้วยเทคโนโลยีล่าสุดและทีมนักพัฒนาที่มีประสบการณ์กว่า 10 ปี รับประกันคุณภาพและการทำงานที่มีประสิทธิภาพ",
    features: [
      "เทคโนโลยีทันสมัย (Next.js, React, Node.js)",
      "Responsive Design ทุกอุปกรณ์",
      "SEO Friendly",
      "รองรับ Traffic สูง",
      "ระบบความปลอดภัยระดับสูง",
      "บำรุงรักษา 3-12 เดือน (ตามแพ็กเกจ)",
      "Documentation ครบถ้วน",
    ],
    portfolios: developmentPortfolios,
    pricing: [
      {
        title: "Template Website",
        price: "เริ่มต้น ฿12,000",
        features: ["5-8 หน้า", "ปรับแต่งตามแบรนด์", "รองรับ Mobile"],
      },
      {
        title: "Custom Website",
        price: "เริ่มต้น ฿35,000",
        features: ["ออกแบบใหม่ทั้งหมด", "ฟีเจอร์ตามต้องการ", "CMS"],
      },
      {
        title: "Platform Development",
        price: "เริ่มต้น ฿80,000",
        features: ["Web Application", "ระบบซับซ้อน", "Scalable"],
      },
    ],
  },
  saas: {
    id: "saas",
    title: "SaaS Solutions",
    description: "ระบบสำเร็จรูปพร้อมใช้งานทันที",
    longDescription: "ระบบ SaaS สำหรับธุรกิจต่างๆ ไม่ว่าจะเป็นร้านค้า ร้านอาหาร หรือคลังสินค้า เริ่มต้นใช้งานได้ฟรี ไม่ต้องลงทุนพัฒนาระบบเอง ประหยัดเวลาและค่าใช้จ่าย อัพเดทฟีเจอร์ใหม่อัตโนมัติ รองรับการทำงานแบบ Multi-branch และ Real-time",
    features: [
      "เริ่มต้นใช้งานได้ฟรี",
      "ไม่ต้องติดตั้ง ใช้งานผ่านเว็บ",
      "รองรับ Multi-device",
      "Real-time Updates",
      "Cloud Storage ปลอดภัย",
      "Customer Support 24/7",
      "ยกเลิกได้ทุกเมื่อ ไม่ผูกมัด",
    ],
    portfolios: saasPortfolios,
    pricing: [
      {
        title: "Retail SaaS",
        price: "ฟรี - ฿999/เดือน",
        features: ["POS System", "สต๊อกสินค้า", "รายงานการขาย"],
      },
      {
        title: "Restaurant SaaS",
        price: "ฟรี - ฿1,499/เดือน",
        features: ["รับออเดอร์", "Kitchen Display", "QR Menu"],
      },
      {
        title: "Warehouse SaaS",
        price: "ฟรี - ฿2,499/เดือน",
        features: ["WMS", "Barcode Scanner", "Location Tracking"],
      },
    ],
  },
};