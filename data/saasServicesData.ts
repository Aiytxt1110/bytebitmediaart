import { SaaSService } from "../types/index";

export const saasServices: SaaSService[] = [
  {
    title: "SaaS สำหรับร้านค้า",
    description: "ระบบจัดการร้านค้าครบวงจร POS, สต๊อก, รายงานการขาย",
    features: ["Point of Sale", "จัดการสต๊อกสินค้า", "รายงานการขาย", "ระบบสมาชิก", "Multi-Branch"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    link: "#retail-saas",
    color: "from-blue-500 to-cyan-500",
    pricing: {
      free: "ฟรี - สูงสุด 50 รายการต่อเดือน",
      starter: "฿499/เดือน - สูงสุด 500 รายการ",
      pro: "฿999/เดือน - ไม่จำกัด + Add-ons"
    }
  },
  {
    title: "SaaS สำหรับร้านอาหาร",
    description: "ระบบจัดการร้านอาหาร รับออเดอร์, โต๊ะ, ครัว, QR Menu",
    features: ["รับออเดอร์ Online/Offline", "จัดการโต๊ะ", "Kitchen Display", "QR Menu", "Integration Delivery"],
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
    link: "#restaurant-saas",
    color: "from-orange-500 to-red-500",
    pricing: {
      free: "ฟรี - 1 สาขา, 10 โต๊ะ",
      starter: "฿799/เดือน - 3 สาขา, 50 โต๊ะ",
      pro: "฿1,499/เดือน - ไม่จำกัด + Add-ons"
    }
  },
  {
    title: "SaaS สำหรับโกดังสินค้า",
    description: "ระบบ WMS จัดการคลังสินค้า รับ-จ่าย พร้อม Barcode",
    features: ["รับ-จ่ายสินค้า", "ติดตามสต๊อกแบบ Real-time", "Barcode Scanner", "Location Management", "รายงานครบวงจร"],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop",
    link: "#warehouse-saas",
    color: "from-purple-500 to-pink-500",
    pricing: {
      free: "ฟรี - 100 SKU",
      starter: "฿1,299/เดือน - 1,000 SKU",
      pro: "฿2,499/เดือน - ไม่จำกัด + Add-ons"
    }
  },
];