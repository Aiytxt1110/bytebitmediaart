import { Code2, Globe2, Layers, Database, Cpu } from "lucide-react";
import { DevService } from "../types/index";

export const devServices: DevService[] = [
  {
    icon: Globe2,
    title: "Custom Website",
    description: "เว็บไซต์ตามบรีฟของลูกค้า ออกแบบใหม่ทั้งหมด",
    price: "เริ่มต้น ฿35,000",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop",
    badge: "Popular"
  },
  {
    icon: Layers,
    title: "Template Website",
    description: "เว็บไซต์สำเร็จรูป พร้อมปรับแต่งตามแบรนด์",
    price: "เริ่มต้น ฿12,000",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    badge: "Fast Delivery"
  },
  {
    icon: Code2,
    title: "Platform Development",
    description: "สร้างแพลตฟอร์มและ Web Application สำหรับธุรกิจ",
    price: "เริ่มต้น ฿80,000",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
  },
  {
    icon: Database,
    title: "Business System",
    description: "ระบบจัดการธุรกิจ CRM, Inventory, ERP และอื่นๆ",
    price: "เริ่มต้น ฿50,000",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
  },
  {
    icon: Cpu,
    title: "System Algorithms",
    description: "ออกแบบ Algorithm และ Logic ระบบเฉพาะทาง",
    price: "เริ่มต้น ฿25,000",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=300&fit=crop",
  },
];